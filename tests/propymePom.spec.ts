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

        await page.screenshot({ path: 'screenshots/1-Login.png' });
        await testInfo.attach('1-Login', {
            path: 'screenshots/1-Login.png',
            contentType: 'image/png'
        });

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
        await ingresos.expandirFormulario();
        await page.waitForTimeout(1000);

        await ingresos.capturarTabla('screenshots/2-Ingresos_antes.png');
        await testInfo.attach('2-Ingresos_antes', {
            path: 'screenshots/2-Ingresos_antes.png',
            contentType: 'image/png'
        });

        await ingresos.LeerDatos();
        await ingresos.escribirDatos(datosDigitarCombinados);
        await ingresos.compararDatos(datosEsperadosCombinados);

        await ingresos.capturarTabla('screenshots/3-Ingresos_despues.png');
        await testInfo.attach('3-Ingresos_despues', {
            path: 'screenshots/3-Ingresos_despues.png',
            contentType: 'image/png'
        });

        await ingresos.continuar();
    });

    await test.step('Página Egresos', async () => {
        const egresos = new EgresoPages(page);
        await page.waitForTimeout(1000);
        await egresos.expandirFormulario();
        await page.waitForTimeout(1000);

        await egresos.capturarTabla('screenshots/4-Egresos_antes.png');
        await testInfo.attach('4-Egresos_antes', {
            path: 'screenshots/4-Egresos_antes.png',
            contentType: 'image/png'
        });

        await egresos.escribirDatos(datosDigitarCombinados);
        await egresos.compararDatos(datosEsperadosCombinados);

        await egresos.capturarTabla('screenshots/5-Egresos_despues.png');
        await testInfo.attach('5-Egresos_despues', {
            path: 'screenshots/5-Egresos_despues.png',
            contentType: 'image/png'
        });

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
        await rliPage.compararDatos(datosEsperadosCombinados);

        await rliPage.capturarTabla('screenshots/8-RLI.png');
        await testInfo.attach('8-RLI', {
            path: 'screenshots/8-RLI.png',
            contentType: 'image/png'
        });

        await rliPage.continuar();
    });

    await test.step('Base Imponible', async () => {
        const biPages = new BIPages(page);
        await page.waitForTimeout(1000);
        await biPages.expandirFormulario();
        await biPages.compararDatos(datosEsperadosCombinados);

        await biPages.capturarTabla('screenshots/9-BI.png');
        await testInfo.attach('9-BI', {
            path: 'screenshots/9-BI.png',
            contentType: 'image/png'
        });

        await biPages.aceptarSiVisible();
        await biPages.continuar();
    });

    await test.step('Capital Propio Tributario', async () => {
        const cptPages = new CPTPages(page);
        await page.waitForTimeout(1000);
        await cptPages.expandirCapitalPropioInicial();
        await cptPages.expandirFormulario1();
        await cptPages.expandirRentasGeneradas();
        await cptPages.expandirFormulario2();
        await cptPages.expandirRentasOtrasEmpresas();
        await cptPages.expandirFormulario3();
        await cptPages.expandirMovimientosPatrimoniales();
        await cptPages.expandirFormulario4();
        await cptPages.expandirAjustes();
        await cptPages.expandirFormulario5();
        await cptPages.expandirCapitalPropioFinal();

        await cptPages.capturarTabla('screenshots/10-CPT_ANTES.png');
        await testInfo.attach('10-CPT_ANTES', {
            path: 'screenshots/10-CPT_ANTES.png',
            contentType: 'image/png'
        });

        await cptPages.escribirDatos(datosDigitarCombinados);
        await cptPages.compararDatos(datosEsperadosCombinados);

        await cptPages.capturarTabla('screenshots/11-CPT_DESPUES.png');
        await testInfo.attach('11-CPT_DESPUES', {
            path: 'screenshots/11-CPT_DESPUES.png',
            contentType: 'image/png'
        });

    });

    // await test.step('Registro Renta Empresarial', async () => {

    // });

});
