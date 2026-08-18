import { Page, Locator } from '@playwright/test';

export class BIPages {
    readonly page: Page;
    readonly formBI: Locator;
    readonly btnContinuar: Locator;
    readonly btnExpand: Locator;
    readonly btnAceptar: Locator;
    readonly BI1H: Locator;
    readonly BI2H: Locator;
    readonly BI3H: Locator;
    readonly BI4H: Locator;
    readonly BI5H: Locator;
    readonly BI6H: Locator;
    readonly BI7H: Locator;
    readonly BI8H: Locator;
    readonly BI9H: Locator;
    readonly BI10H: Locator;
    readonly BI11H: Locator;
    readonly BI12H: Locator;
    readonly BI13H: Locator;
    readonly BI14H: Locator;
    readonly BI15H: Locator;
    readonly BI16H: Locator;
    readonly BI17H: Locator;
    readonly BI18H: Locator;
    readonly BI19H: Locator;
    readonly BI20H: Locator;
    readonly BI21H: Locator;
    readonly BI22H: Locator;
    readonly BI23H: Locator;
    readonly BI24H: Locator;
    readonly BI25H: Locator;
    readonly BI26H: Locator;
    readonly BI27H: Locator;
    readonly BI28H: Locator;
    readonly BI29H: Locator;
    readonly BI30H: Locator;
    readonly BI31H: Locator;
    readonly BI32H: Locator;
    readonly BI33H: Locator;
    readonly BI34H: Locator;
    readonly BI35H: Locator;
    readonly BI36H: Locator;
    readonly BI37H: Locator;
    readonly BI38H: Locator;

    constructor(page: Page) {
        this.page = page;
        this.formBI = page.locator('table.tabla_base_imponible');
        this.btnContinuar = page.getByRole('button', { name: 'Continuar' });
        this.btnExpand = page.locator('img[src*="flechaAbajo"]');
        this.btnAceptar = page.getByRole('button', { name: 'Aceptar' });
        this.BI1H = this.formBI.locator('tr:has(td.cod_number:has-text("1400")) input.input_tabla');
        this.BI2H = this.formBI.locator('tr:has(td.cod_number:has-text("1817")) input.input_tabla');
        this.BI3H = this.formBI.locator('tr:has(td.cod_number:has-text("1401")) input.input_tabla');
        this.BI4H = this.formBI.locator('tr:has(td.cod_number:has-text("1402")) input.input_tabla');
        this.BI5H = this.formBI.locator('tr:has(td.cod_number:has-text("1403")) input.input_tabla');
        this.BI6H = this.formBI.locator('tr:has(td.cod_number:has-text("1587")) input.input_tabla');
        this.BI7H = this.formBI.locator('tr:has(td.cod_number:has-text("1588")) input.input_tabla');
        this.BI8H = this.formBI.locator('tr:has(td.cod_number:has-text("1404")) input.input_tabla');
        this.BI9H = this.formBI.locator('tr:has(td.cod_number:has-text("1405")) input.input_tabla');
        this.BI10H = this.formBI.locator('tr:has(td.cod_number:has-text("1410")) input.input_tabla');
        this.BI11H = this.formBI.locator('tr:has(td.cod_number:has-text("1406")) input.input_tabla');
        this.BI12H = this.formBI.locator('tr:has(td.cod_number:has-text("1407")) input.input_tabla');
        this.BI13H = this.formBI.locator('tr:has(td.cod_number:has-text("1408")) input.input_tabla');
        this.BI14H = this.formBI.locator('tr:has(td.cod_number:has-text("1409")) input.input_tabla');
        this.BI15H = this.formBI.locator('tr:has(td.cod_number:has-text("1818")) input.input_tabla');
        this.BI16H = this.formBI.locator('tr:has(td.cod_number:has-text("1429")) input.input_tabla');
        this.BI17H = this.formBI.locator('tr:has(td.cod_number:has-text("1411")) input.input_tabla');
        this.BI18H = this.formBI.locator('tr:has(td.cod_number:has-text("1412")) input.input_tabla');
        this.BI19H = this.formBI.locator('tr:has(td.cod_number:has-text("1413")) input.input_tabla');
        this.BI20H = this.formBI.locator('tr:has(td.cod_number:has-text("1415")) input.input_tabla');
        this.BI21H = this.formBI.locator('tr:has(td.cod_number:has-text("1416")) input.input_tabla');
        this.BI22H = this.formBI.locator('tr:has(td.cod_number:has-text("1417")) input.input_tabla');
        this.BI23H = this.formBI.locator('tr:has(td.cod_number:has-text("1418")) input.input_tabla');
        this.BI24H = this.formBI.locator('tr:has(td.cod_number:has-text("1419")) input.input_tabla');
        this.BI25H = this.formBI.locator('tr:has(td.cod_number:has-text("1421")) input.input_tabla');
        this.BI26H = this.formBI.locator('tr:has(td.cod_number:has-text("1422")) input.input_tabla');
        this.BI27H = this.formBI.locator('tr:has(td.cod_number:has-text("1423")) input.input_tabla');
        this.BI28H = this.formBI.locator('tr:has(td.cod_number:has-text("1424")) input.input_tabla');
        this.BI29H = this.formBI.locator('tr:has(td.cod_number:has-text("1425")) input.input_tabla');
        this.BI30H = this.formBI.locator('tr:has(td.cod_number:has-text("1426")) input.input_tabla');
        this.BI31H = this.formBI.locator('tr:has(td.cod_number:has-text("1427")) input.input_tabla');
        this.BI32H = this.formBI.locator('tr:has(td.cod_number:has-text("1428")) input.input_tabla');
        this.BI33H = this.formBI.locator('tr:has(td.cod_number:has-text("1430")) input.input_tabla');
        this.BI34H = this.formBI.locator('tr:has(td.cod_number:has-text("1431")) input.input_tabla');
        this.BI35H = this.formBI.locator('tr:has(td.cod_number:has-text("1729")) input.input_tabla');
        this.BI36H = this.formBI.locator('tr:has(td.cod_number:has-text("1432")) input.input_tabla');
        this.BI37H = this.formBI.locator('tr:has(td.cod_number:has-text("1433")) input.input_tabla');
        this.BI38H = this.formBI.locator('tr:has(td.cod_number:has-text("1440")) input.input_tabla');
    }

    async capturarTabla(path: string) {
        await this.formBI.waitFor({
            state: 'visible',
            timeout: 10000,
        });
        await this.page.waitForLoadState('networkidle');
        await this.formBI.scrollIntoViewIfNeeded();
        await this.page.waitForTimeout(300);
        await this.formBI.screenshot({
            path,
        });
    }

    async LeerDatos() {
        console.log('========== BASE IMPONIBLE DATOS WEB ==========');
        console.log('BI1H:', await this.BI1H.inputValue());
        console.log('BI2H:', await this.BI2H.inputValue());
        console.log('BI3H:', await this.BI3H.inputValue());
        console.log('BI4H:', await this.BI4H.inputValue());
        console.log('BI5H:', await this.BI5H.inputValue());
        console.log('BI6H:', await this.BI6H.inputValue());
        console.log('BI7H:', await this.BI7H.inputValue());
        console.log('BI8H:', await this.BI8H.inputValue());
        console.log('BI9H:', await this.BI9H.inputValue());
        console.log('BI10H:', await this.BI10H.inputValue());
        console.log('BI11H:', await this.BI11H.inputValue());
        console.log('BI12H:', await this.BI12H.inputValue());
        console.log('BI13H:', await this.BI13H.inputValue());
        console.log('BI14H:', await this.BI14H.inputValue());
        console.log('BI15H:', await this.BI15H.inputValue());
        console.log('BI16H:', await this.BI16H.inputValue());
        console.log('BI17H:', await this.BI17H.inputValue());
        console.log('BI18H:', await this.BI18H.inputValue());
        console.log('BI19H:', await this.BI19H.inputValue());
        console.log('BI20H:', await this.BI20H.inputValue());
        console.log('BI21H:', await this.BI21H.inputValue());
        console.log('BI22H:', await this.BI22H.inputValue());
        console.log('BI23H:', await this.BI23H.inputValue());
        console.log('BI24H:', await this.BI24H.inputValue());
        console.log('BI25H:', await this.BI25H.inputValue());
        console.log('BI26H:', await this.BI26H.inputValue());
        console.log('BI27H:', await this.BI27H.inputValue());
        console.log('BI28H:', await this.BI28H.inputValue());
        console.log('BI29H:', await this.BI29H.inputValue());
        console.log('BI30H:', await this.BI30H.inputValue());
        console.log('BI31H:', await this.BI31H.inputValue());
        console.log('BI32H:', await this.BI32H.inputValue());
        console.log('BI33H:', await this.BI33H.inputValue());
        console.log('BI34H:', await this.BI34H.inputValue());
        console.log('BI35H:', await this.BI35H.inputValue());
        console.log('BI36H:', await this.BI36H.inputValue());
        console.log('BI37H:', await this.BI37H.inputValue());
        console.log('BI38H:', await this.BI38H.inputValue());
        console.log('===============================');
    }

    async compararDatos(
        datosEsperadosCombinados: any[]
    ) {
        const esperadoBI = datosEsperadosCombinados
            .filter(dato => dato.Pagina === 'BImponible')
            .map(({ Codigo, Dato, Origen, Tipo }) => ({
                Codigo,
                Dato,
                Origen,
                Tipo
            }));
        console.log('======== COMPARANDO DATOS ESPERADOS - BI ========');

        for (const dato of esperadoBI) {
            const campo = (this as any)[dato.Codigo];
            if (!campo) {
                throw new Error(
                    `No existe el locator para el código ${dato.Codigo}. Revisar BIPages.ts`
                );
            }
            try {
                await campo.waitFor({
                    state: 'visible',
                    timeout: 5000
                });
            } catch {
                throw new Error(
                    `No se encontró la celda WEB para el código ${dato.Codigo}.`
                );
            }

            const valorWeb = await campo.inputValue();
            const esperado = dato.Dato.toString().replace(/\./g, '').trim();
            const obtenido = valorWeb.replace(/\./g, '').trim();
            if (esperado !== obtenido) {
                console.warn(
                    `NK ${dato.Codigo} | Esperado = ${esperado} | Encontrado = ${obtenido}`
                );
            } else {
                console.log(
                    `OK ${dato.Codigo} = ${obtenido}`
                );
            }
        }
        console.log('===============================================');
        console.log(' ');
    }

    async expandirFormulario() {
        await this.btnExpand.waitFor({
            state: 'visible',
            timeout: 5000
        });

        await this.btnExpand.click();
    }

    async continuar() {
        await this.btnContinuar.waitFor({
            state: 'visible',
            timeout: 5000
        });

        await this.btnContinuar.click();
    }

    async aceptarSiVisible() {
        if (await this.btnAceptar.isVisible().catch(() => false)) {
            await this.btnAceptar.click();
        }
    }

}