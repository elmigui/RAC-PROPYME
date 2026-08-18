import { Page, Locator } from '@playwright/test';

export class CPTPages {
    readonly page: Page;
    readonly formCPT: Locator;
    readonly capitalPropioInicial: Locator;
    readonly rentasGeneradas: Locator;
    readonly rentasOtrasEmpresas: Locator;
    readonly movimientosPatrimoniales: Locator;
    readonly btnExpand1: Locator;
    readonly btnExpand2: Locator;
    readonly btnExpand3: Locator;
    readonly btnExpand4: Locator;
    readonly btnExpand5: Locator;
    readonly ajustes: Locator;
    readonly capitalPropioFinal: Locator;
    readonly CPT1H: Locator;
    readonly CPT2H: Locator;
    readonly CPT3H: Locator;
    readonly CPT4H: Locator;
    readonly CPT5H: Locator;
    readonly CPT6H: Locator;
    readonly CPT7H: Locator;
    readonly CPT8H: Locator;
    readonly CPT9H: Locator;
    readonly CPT10H: Locator;
    readonly CPT11H: Locator;
    readonly CPT12H: Locator;
    readonly CPT13H: Locator;
    readonly CPT14H: Locator;
    readonly CPT15H: Locator;
    readonly CPT16H: Locator;
    readonly CPT17H: Locator;
    readonly CPT18H: Locator;
    readonly CPT19H: Locator;
    readonly CPT20H: Locator;
    readonly CPT21H: Locator;

    constructor(page: Page) {
        this.page = page;
        this.formCPT = page.locator('div.tabla_cpt');
        this.capitalPropioInicial = page.locator('.card-header.cabeceracollapse').filter({ hasText: 'Capital Propio Tributario Inicial (Año Anterior)' });
        this.rentasGeneradas = page.locator('.card-header.cabeceracollapse').filter({ hasText: 'Rentas Generadas por la empresa en el Ejercicio y Saldo REX' });
        this.rentasOtrasEmpresas = page.locator('.card-header.cabeceracollapse').filter({ hasText: 'Rentas Obtenidas de Otras Empresas en el Ejercicio' });
        this.movimientosPatrimoniales = page.locator('.card-header.cabeceracollapse').filter({ hasText: 'Movimientos Patrimoniales del Ejercicio' });
        this.ajustes = page.locator('.card-header.cabeceracollapse').filter({ hasText: 'Ajustes' });
        this.capitalPropioFinal = page.locator('.card-header.cabeceracollapse').filter({ hasText: 'Capital Propio Final' });
        this.btnExpand1 = this.capitalPropioInicial.locator('xpath=following-sibling::div[contains(@class, "collapse")]').locator('.div-boton-desplegar img');
        this.btnExpand2 = this.rentasGeneradas.locator('xpath=following-sibling::div[contains(@class, "collapse")]').locator('.div-boton-desplegar img');
        this.btnExpand3 = this.rentasOtrasEmpresas.locator('xpath=following-sibling::div[contains(@class, "collapse")]').locator('.div-boton-desplegar img');
        this.btnExpand4 = this.movimientosPatrimoniales.locator('xpath=following-sibling::div[contains(@class, "collapse")]').locator('.div-boton-desplegar img');
        this.btnExpand5 = this.ajustes.locator('xpath=following-sibling::div[contains(@class, "collapse")]').locator('.div-boton-desplegar img');
        this.CPT1H = page.locator('tr:has(th:text-is("CPT positivo inicial")) td input.form-control');
        this.CPT2H = page.locator('tr:has(th:text-is("CPT negativo inicial")) td input.form-control');
        this.CPT3H = page.locator('tr:has(th:text-is("Capital Aportado")) td input.form-control');
        this.CPT4H = page.locator('tr:has(th:text-is("Base imponible afecta al IDPC del ejercicio.")) td input.form-control-lectura');
        this.CPT5H = page.locator('tr:has(th:text-is("Pérdida tributaria del ejercicio al 31 de diciembre")) td input.form-control-lectura');
        this.CPT6H = page.locator('tr:has(th:text-is("Pérdidas de Ejercicios Anteriores")) td input.form-control-lectura');
        this.CPT7H = page.locator('tr:has(th:text-is("Rentas exentas e ingresos no renta (positivo), generados por la empresa en el ejercicio")) td input.form-control-lectura');
        this.CPT8H = page.locator('tr').filter({ hasText: 'Pérdida por rentas exentas e ingresos no renta del ejercicio' }).locator('td input.form-control-lectura');
        this.CPT9H = page.locator('tr').filter({ hasText: 'Retiros o dividendos percibidos en el ejercicio por participaciones en otras empresas' }).locator('td input.form-control-lectura');
        this.CPT10H = page.locator('tr').filter({ hasText: 'Aumentos (efectivos) de capital del ejercicio' }).locator('td input.form-control');
        this.CPT11H = page.locator('tr').filter({ hasText: 'Disminuciones (efectivas) de capital del ejercicio' }).locator('td input.form-control');
        this.CPT12H = page.locator('tr').filter({ hasText: 'Remesas, retiros o dividendos distribuidos en el ejercicio' }).locator('td input.form-control-lectura');
        this.CPT13H = page.locator('tr').filter({ hasText: 'Partidas del inciso primero no afectas al IU de tasa 40% y del inciso segundo, del art. 21 LIR, históricos' }).locator('td input.form-control-lectura');
        this.CPT14H = page.locator('tr').filter({ hasText: 'Ingreso diferido imputado en el ejercicio, debidamente incrementado cuando corresponda' }).locator('td input.form-control-lectura');
        this.CPT15H = page.locator('tr').filter({ hasText: 'Crédito total disponible imputable contra impuestos finales, generado en el ejercicio' }).locator('td input.form-control');
        this.CPT16H = page.locator('tr').filter({ hasText: 'Incentivo al ahorro según art. 14 letra E) LIR' }).locator('td input.form-control-lectura');
        this.CPT17H = page.locator('tr').filter({ hasText: 'Base del IDPC voluntario según art. 14 letra A) N° 6 de la LIR' }).locator('td input.form-control-lectura');
        this.CPT18H = page.locator('tr').filter({ hasText: 'Otras partidas a agregar' }).locator('td input.form-control');
        this.CPT19H = page.locator('tr').filter({ hasText: 'Otras partidas a deducir' }).locator('td input.form-control');
        this.CPT20H = page.locator('tr').filter({ hasText: 'Capital propio tributario Positivo Final' }).locator('td input.form-control-lectura');
        this.CPT21H = page.locator('tr').filter({ hasText: 'Capital propio tributario Negativo Final' }).locator('td input.form-control-lectura');
    }

    async expandirCapitalPropioInicial() {
        await this.capitalPropioInicial.waitFor({
            state: 'visible',
            timeout: 5000
        });
        await this.page.waitForTimeout(1000);
        await this.capitalPropioInicial.click();
    }

    async expandirRentasGeneradas() {
        await this.rentasGeneradas.waitFor({
            state: 'visible',
            timeout: 5000
        });
        await this.page.waitForTimeout(1000);
        await this.rentasGeneradas.click();
    }

    async expandirRentasOtrasEmpresas() {
        await this.rentasOtrasEmpresas.waitFor({
            state: 'visible',
            timeout: 5000
        });
        await this.page.waitForTimeout(1000);
        await this.rentasOtrasEmpresas.click();
    }

    async expandirMovimientosPatrimoniales() {
        await this.movimientosPatrimoniales.waitFor({
            state: 'visible',
            timeout: 5000
        });
        await this.page.waitForTimeout(1000);
        await this.movimientosPatrimoniales.click();
    }

    async expandirAjustes() {
        await this.ajustes.waitFor({
            state: 'visible',
            timeout: 5000
        });
        await this.page.waitForTimeout(1000);
        await this.ajustes.click();
    }

    async expandirCapitalPropioFinal() {
        await this.capitalPropioFinal.waitFor({
            state: 'visible',
            timeout: 5000
        });
        await this.page.waitForTimeout(1000);
        await this.capitalPropioFinal.click();
    }

    async capturarTabla(path: string) {
        await this.formCPT.waitFor({
            state: 'visible',
            timeout: 30000
        });

        await this.formCPT.scrollIntoViewIfNeeded();
        await this.formCPT.screenshot({
            path
        });
    }

    async expandirFormulario1() {
        await this.btnExpand1.waitFor({
            state: 'visible',
            timeout: 5000
        });
        await this.page.waitForTimeout(1000);
        await this.btnExpand1.click();
    }

    async expandirFormulario2() {
        await this.btnExpand2.waitFor({
            state: 'visible',
            timeout: 5000
        });
        await this.page.waitForTimeout(1000);
        await this.btnExpand2.click();
    }

    async expandirFormulario3() {
        await this.btnExpand3.waitFor({
            state: 'visible',
            timeout: 5000
        });
        await this.page.waitForTimeout(1000);
        await this.btnExpand3.click();
    }

    async expandirFormulario4() {
        await this.btnExpand4.waitFor({
            state: 'visible',
            timeout: 5000
        });
        await this.page.waitForTimeout(1000);
        await this.btnExpand4.click();
    }

    async expandirFormulario5() {
        await this.btnExpand5.waitFor({
            state: 'visible',
            timeout: 5000
        });
        await this.page.waitForTimeout(1000);
        await this.btnExpand5.click();
    }

    async LeerDatos() {
        console.log('========== CAPITAL PROPIO TRIBUTARIO DATOS WEB ==========');
        console.log('CPT1H:', await this.CPT1H.inputValue());
        console.log('CPT2H:', await this.CPT2H.inputValue());
        console.log('CPT3H:', await this.CPT3H.inputValue());
        console.log('CPT4H:', await this.CPT4H.inputValue());
        console.log('CPT5H:', await this.CPT5H.inputValue());
        console.log('CPT6H:', await this.CPT6H.inputValue());
        console.log('CPT7H:', await this.CPT7H.inputValue());
        console.log('CPT8H:', await this.CPT8H.inputValue());
        console.log('CPT9H:', await this.CPT9H.inputValue());
        console.log('CPT10H:', await this.CPT10H.inputValue());
        console.log('CPT11H:', await this.CPT11H.inputValue());
        console.log('CPT12H:', await this.CPT12H.inputValue());
        console.log('CPT13H:', await this.CPT13H.inputValue());
        console.log('CPT14H:', await this.CPT14H.inputValue());
        console.log('CPT15H:', await this.CPT15H.inputValue());
        console.log('CPT16H:', await this.CPT16H.inputValue());
        console.log('CPT17H:', await this.CPT17H.inputValue());
        console.log('CPT18H:', await this.CPT18H.inputValue());
        console.log('CPT19H:', await this.CPT19H.inputValue());
        console.log('CPT20H:', await this.CPT20H.inputValue());
        console.log('CPT21H:', await this.CPT21H.inputValue());
        console.log('===============================');
    }

    async escribirDatos(
        datosDigitarCombinados: any[]
    ) {

        const digitarCPT = datosDigitarCombinados
            .filter(dato => dato.Pagina === 'CapitalPT')
            .map(({ Codigo, Dato, Origen, Tipo }) => ({
                Codigo,
                Dato,
                Origen,
                Tipo
            }));

        console.log(
            '======== ESCRIBIENDO DATOS DIGITAR - CAPITAL PROPIO TRIBUTARIO ========'
        );

        for (const dato of digitarCPT) {

            const campo = (this as any)[dato.Codigo];

            // Validación: el locator debe existir
            if (!campo) {
                throw new Error(
                    `No existe el locator para el código ${dato.Codigo}. Revisar CPTPage.ts`
                );
            }

            try {

                await campo.waitFor({
                    state: 'visible',
                    timeout: 3000
                });

                await campo.fill(
                    dato.Dato.toString(),
                    {
                        timeout: 3000
                    }
                );

                await campo.press('Tab', {
                    timeout: 3000
                });

                if (dato.Origen === 'Resultado') {

                    console.log(
                        `OK ${dato.Codigo} | Origen = Resultado | La web permitió escribir`
                    );

                } else {

                    console.log(
                        `OK ${dato.Codigo} = ${dato.Dato}`
                    );
                }

            } catch {

                // Si la web no permite escribir:
                // se informa y se continúa con el siguiente dato.

                if (dato.Origen === 'Resultado') {

                    console.log(
                        `NK ${dato.Codigo} | Origen = Resultado | La web no permitió escribir`
                    );

                } else {

                    console.log(
                        `NK ${dato.Codigo} | Origen = ${dato.Origen} | La web no permitió escribir`
                    );
                }
            }
        }

        console.log('===============================================');
    }

    async compararDatos(
        datosEsperadosCombinados: any[]
    ) {

        const esperadoCPT = datosEsperadosCombinados
            .filter(dato => dato.Pagina === 'CapitalPT')
            .map(({ Codigo, Dato, Origen, Tipo }) => ({
                Codigo,
                Dato,
                Origen,
                Tipo
            }));

        console.log('======== COMPARANDO DATOS ESPERADOS - CAPITAL PROPIO TRIBUTARIO ========');

        for (const dato of esperadoCPT) {
            const campo = (this as any)[dato.Codigo];
            if (!campo) {
                throw new Error(
                    `No existe el locator para el código ${dato.Codigo}. Revisar CPTPage.ts`
                );
            }
            try {
                await campo.waitFor({
                    state: 'visible',
                    timeout: 3000
                });
            } catch {
                throw new Error(
                    `No se encontró la celda WEB para el código ${dato.Codigo}. Revisar Rut o estructura de la página.`
                );
            }
            const valorWeb = await campo.inputValue();
            const esperado = dato.Dato.toString().replace(/\./g, '').trim();
            const obtenido = valorWeb.replace(/\./g, '').trim();

            if (esperado !== obtenido) {
                console.warn(
                    `NK ${dato.Codigo} | Esperado = ${esperado} | Encontrado = ${obtenido} `
                );
            } else {
                console.log(
                    `OK ${dato.Codigo} = ${obtenido} `
                );
            }
        }

        console.log('===============================================');
        console.log('');
    }

}