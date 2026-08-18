import * as XLSX from 'xlsx';
import * as fs from 'fs';
import * as path from 'path';

export function obtenerArchivoDatos(): string {
    const carpeta = './data';
    const archivos = fs.readdirSync(carpeta);
    const archivoDatos = archivos.find(
        (archivo: string) =>
            archivo.endsWith('.xlsx') &&
            archivo.toUpperCase() !== 'CATALOGO.XLSX'
    );

    if (!archivoDatos) {
        throw new Error('No se encontró el archivo de datos.');
    }
    return path.join(carpeta, archivoDatos);
}

export function obtenerNombreArchivoDatos(
    rutaArchivo: string
): string {
    return path.basename(rutaArchivo);
}

export function obtenerRutArchivoDatos(
    rutaArchivo: string
): string {
    const nombreArchivo = obtenerNombreArchivoDatos(rutaArchivo);
    const nombreSinExtension = path.parse(nombreArchivo).name;
    const partes = nombreSinExtension.split('_');

    if (partes.length < 2) {
        throw new Error(
            `El nombre del archivo "${nombreArchivo}" no cumple el formato esperado.`
        );
    }
    return partes[1];
}

function limpiarDatos(datos: any[]) {
    return datos.map((fila: any) => {
        const nuevaFila: any = {};

        Object.keys(fila).forEach((columna) => {
            if (!columna.startsWith('__EMPTY')) {
                nuevaFila[columna] = fila[columna];
            }
        });
        return nuevaFila;
    });
}

function validarDatoExcel(
    dato: any,
    tipo: string,
    codigo: string
) {
    const valor = dato?.toString().trim();
    tipo = tipo.trim();

    switch (tipo) {

        case 'Número':
            if (!/^\d+$/.test(valor)) {
                throw new Error(
                    `Código ${codigo}: El valor "${dato}" no es válido. Tipo esperado: Número`
                );
            }
            break;

        case 'Fecha':
            if (!/^\d{8}$/.test(valor)) {
                throw new Error(
                    `Código ${codigo}: La fecha "${dato}" debe tener formato DDMMYYYY`
                );
            }

            const dia = Number(valor.substring(0, 2));
            const mes = Number(valor.substring(2, 4));
            const año = Number(valor.substring(4, 8));
            const fecha = new Date(año, mes - 1, dia);

            if (
                fecha.getFullYear() !== año ||
                fecha.getMonth() !== mes - 1 ||
                fecha.getDate() !== dia
            ) {
                throw new Error(
                    `Código ${codigo}: La fecha "${dato}" no es válida`
                );
            }
            break;

        case 'Texto':
            if (valor.length === 0) {
                throw new Error(
                    `Código ${codigo}: El valor no puede estar vacío`
                );
            }
            break;

        default:
            throw new Error(
                `Código ${codigo}: Tipo "${tipo}" no tiene validación configurada`
            );
    }
}

function leerHoja(
    rutaArchivo: string,
    nombreHoja: string
) {
    const workbook = XLSX.readFile(rutaArchivo);
    const hoja = workbook.Sheets[nombreHoja];
    if (!hoja) {
        throw new Error(
            `No existe la hoja "${nombreHoja}" en el archivo ${rutaArchivo}`
        );
    }

    const datos = XLSX.utils.sheet_to_json(hoja, {
        defval: ""
    });
    return limpiarDatos(datos);
}

export function leerCatalogo(
    rutaArchivo: string
) {
    const workbook = XLSX.readFile(rutaArchivo);
    const nombreHoja = workbook.SheetNames[0];
    return leerHoja(
        rutaArchivo,
        nombreHoja
    );
}

export function leerDatosEsperados(
    rutaArchivo: string
) {
    return leerHoja(
        rutaArchivo,
        'Esperado'
    );
}

export function leerDatosDigitar(
    rutaArchivo: string
) {
    return leerHoja(
        rutaArchivo,
        'Digitar'
    );
}

export function combinarConCatalogo(
    datos: any[],
    indiceCatalogo: Record<string, any>,
    nombreHoja: string
) {
    return datos.map((dato) => {

        let codigoCatalogo = dato.Codigo;
        let fila: number | null = null;

        // ==========================================
        // TRATAMIENTO ESPECIAL PARA RETIRO
        // ==========================================
        const matchRetiro = dato.Codigo.match(/^([A-Z]{4})(\d+)$/);

        if (matchRetiro) {

            const codigoBase = matchRetiro[1];
            const numeroFila = Number(matchRetiro[2]);

            // Buscar código base en catálogo
            const catalogoRetiro = indiceCatalogo[codigoBase];

            // Aplicar lógica especial solamente para Retiro
            if (catalogoRetiro?.Pagina === 'Retiro') {

                codigoCatalogo = codigoBase;
                fila = numeroFila;

                console.log(
                    `RETIRO | ${dato.Codigo} → ${codigoCatalogo} | Fila: ${fila} `
                );
            }
        }

        // ==========================================
        // BUSCAR EN CATÁLOGO
        // ==========================================
        const catalogo = indiceCatalogo[codigoCatalogo];

        if (!catalogo) {
            throw new Error(
                `Código: ${dato.Codigo} | Hoja: ${nombreHoja} | Dato: ${dato.Dato} `
            );
        }

        // ==========================================
        // VALIDAR DATO
        // ==========================================
        validarDatoExcel(
            dato.Dato,
            catalogo.Tipo,
            dato.Codigo
        );

        // ==========================================
        // DATOS COMBINADOS
        // ==========================================
        return {
            Codigo: codigoCatalogo,
            Dato: dato.Dato,
            Pagina: catalogo.Pagina ?? '',
            Celda: catalogo.Celda ?? '',
            Origen: catalogo.Origen ?? '',
            Tipo: catalogo.Tipo ?? '',
            Fila: fila
        };
    });
}
