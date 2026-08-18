import { Page, Locator } from '@playwright/test';

export class RLIPages {
    readonly page: Page;
    readonly formRLI: Locator;
    readonly RLI1H: Locator;
    readonly RLI2H: Locator;
    readonly RLI3H: Locator;
    readonly RLI4H: Locator;
    readonly btnContinuar: Locator;

    constructor(page: Page) {
        this.page = page;
        this.formRLI = page.locator('section.container.pb-3');
        this.RLI1H = page.locator('#tabla3 tr').filter({ hasText: '9.1 - Renta Líquida Imponible' }).locator('input');
        this.RLI3H = page.locator('#tabla3 tr').filter({ hasText: '9.5 - Base del IDPC voluntario según art. 14 letra A) N° 6 LIR' }).locator('input');
        this.RLI4H = page.locator('#tabla3 tr').filter({ hasText: '9.6 - BASE IMPONIBLE' }).locator('input');
        this.btnContinuar = page.getByRole('button', { name: 'Continuar' });
    }

    async capturarTabla(path: string) {
        await this.formRLI.waitFor({
            state: 'visible',
            timeout: 10000
        });

        await this.formRLI.scrollIntoViewIfNeeded();
        await this.formRLI.screenshot({
            path
        });
    }

    async LeerDatos() {
        console.log('========== DATOS WEB ==========');
        console.log('RLI1H:', await this.RLI1H.inputValue());
        console.log('RLI2H:', await this.RLI2H.inputValue());
        console.log('RLI3H:', await this.RLI3H.inputValue());
        console.log('RLI4H:', await this.RLI4H.inputValue())
        console.log('===============================');
    }

    async compararDatos(
        datosEsperadosCombinados: any[]
    ) {
        const esperadoRLI = datosEsperadosCombinados
            .filter(dato => dato.Pagina === 'RLI')
            .map(({ Codigo, Dato, Origen, Tipo }) => ({
                Codigo,
                Dato,
                Origen,
                Tipo
            }));
        console.log('======== COMPARANDO DATOS ESPERADOS - RLI ========');

        for (const dato of esperadoRLI) {
            const campo = (this as any)[dato.Codigo];
            if (!campo) {
                throw new Error(
                    `No existe el locator para el código ${dato.Codigo}. Revisar RLIPage.ts`
                );
            }
            try {
                await campo.waitFor({
                    state: 'visible',
                    timeout: 3000
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

    async continuar() {
        await this.btnContinuar.waitFor({
            state: 'visible',
            timeout: 5000
        });
        await this.btnContinuar.click();
    }
}