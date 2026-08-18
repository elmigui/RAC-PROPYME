import { test, expect } from '@playwright/test';
import { leerCatalogo, leerDatosDigitar, leerDatosEsperados, combinarConCatalogo, obtenerArchivoDatos, obtenerRutArchivoDatos } from '../utils/excel';
import { AccesoPage } from '../pages/accesoPage';
import { IngresoPages } from '../pages/ingresosPage';
import { EgresoPages } from '../pages/egresosPage';
import { RetirosPages } from '../pages/retirosPage';
import { RLIPages } from '../pages/RLIPage';
import { BIPages } from '../pages/baseimponPage';
import { CPTPages } from '../pages/CPTPage';

interface DatoExcel {
    Codigo: string;
    Dato: any;
}

interface CatalogoExcel {
    Codigo: string;
    Pagina: string;
    Celda: string;
    Origen: string;
    Tipo: string;
}

const catalogoExcel = leerCatalogo('./data/CATALOGO.xlsx') as CatalogoExcel[];
const indiceCatalogo: Record<string, CatalogoExcel> = Object.fromEntries(catalogoExcel.map(item => [item.Codigo, item]));
const archivoExcel = obtenerArchivoDatos();
const rutArchivoExcel = obtenerRutArchivoDatos(archivoExcel);
const datosDigitar = leerDatosDigitar(archivoExcel) as DatoExcel[];
const datosEsperados = leerDatosEsperados(archivoExcel) as DatoExcel[];
const datosDigitarCombinados = combinarConCatalogo(datosDigitar, indiceCatalogo, 'Digitar');
const datosEsperadosCombinados = combinarConCatalogo(datosEsperados, indiceCatalogo, 'Esperado');

console.log('======== DATOS DIGITAR ========');
for (const dato of datosDigitarCombinados) {
    console.log(`${dato.Codigo} | ${dato.Dato} | ${dato.Pagina} | ${dato.Celda} | ${dato.Origen} | ${dato.Tipo}`);
}
console.log('===============================================');
console.log('');

console.log('======== DATOS ESPERADOS ========');
for (const dato of datosEsperadosCombinados) {
    console.log(`${dato.Codigo} | ${dato.Dato} | ${dato.Pagina} | ${dato.Celda} | ${dato.Origen} | ${dato.Tipo}`);
}
console.log('');

test('PropymePom', async ({ page }, testInfo) => {

    await test.step('Acceso y navegación', async () => {
        const acceso = new AccesoPage(page);
        await acceso.goTo();
        await acceso.ingresarCredenciales(rutArchivoExcel, 'aa11');
        await page.waitForTimeout(1000);
        await acceso.iniciarSesion();
        await acceso.irAlAsistente();
    });

    await test.step('Página Ingresos', async () => {
        const ingresos = new IngresoPages(page);
        await page.waitForTimeout(1000);
        await ingresos.aceptar();
        await page.waitForTimeout(1000);
        await ingresos.seleccionarDividendos();
        await page.waitForTimeout(1000);
        await page.waitForTimeout(1000);
        await ingresos.continuar();
    });

    await test.step('Página Egresos', async () => {
        const egresos = new EgresoPages(page);
        await page.waitForTimeout(1000);
        await egresos.continuar();
    });

    await test.step('Página Retiros', async () => {
        const retiros = new RetirosPages(page);
        await page.waitForTimeout(1000);

        await retiros.capturarTabla('screenshots/6-Retiros_antes.png');
        await testInfo.attach('6-Retiros_antes', {
            path: 'screenshots/6-Retiros_antes.png',
            contentType: 'image/png'
        });

        await retiros.escribirDatos(datosDigitarCombinados);
        await retiros.compararDatos(datosEsperadosCombinados);

        //console.log('');
        //await retiros.LeerDatos();
        //await retiros.rescatarDatosCombinados(datosDigitarCombinados, 'DATOS DIGITAR');
        //await retiros.rescatarDatosCombinados(datosEsperadosCombinados, 'DATOS ESPERADOS');

        await page.waitForTimeout(800);
        await retiros.capturarPantalla('screenshots/7-Retiros_despues.png');
        await testInfo.attach('7-Retiros_despues', {
            path: 'screenshots/7-Retiros_despues.png',
            contentType: 'image/png'
        });

        await retiros.continuar();
    });

    await test.step('Página RLI', async () => {
        const rliPage = new RLIPages(page);
        await page.waitForTimeout(1000);
        await rliPage.continuar();
    });


});
