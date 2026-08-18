import { Page, Locator } from '@playwright/test';

export class RetirosPages {
    readonly page: Page;
    readonly formRetiros: Locator;
    readonly btnContinuar: Locator;
    readonly btnNuevo: Locator;
    readonly filasRetiros: Locator;
    readonly calendario: Locator;
    readonly btnMes: Locator;
    readonly btnAnio: Locator;
    readonly btnMesAnterior: Locator;
    readonly btnMesSiguiente: Locator;
    readonly btnSeleccionar: Locator;

    constructor(page: Page) {
        this.page = page;
        this.formRetiros = page.locator('table.tabla_retiros14d1');
        this.btnNuevo = page.getByRole('button', { name: 'Nuevo' });
        this.filasRetiros = this.formRetiros.locator('tbody tr:not(:has(button.btn_nuevo))');
        this.btnContinuar = page.locator('button.btn.btn-primary.btn_right').filter({ hasText: /^Continuar$/ });
        this.calendario = page.locator('div.dp__menu');
        this.btnMes = page.locator('button[data-dp-element="overlay-month"]');
        this.btnAnio = page.locator('button[data-dp-element="overlay-year"]');
        this.btnMesAnterior = page.locator('button[data-dp-element="action-prev"]');
        this.btnMesSiguiente = page.locator('button[data-dp-element="action-next"]');
        this.btnSeleccionar = page.locator('button[data-test-id="select-button"]');
    }

    private obtenerCampo(fila: number, codigo: string): Locator {
        const filaLocator = this.filasRetiros.nth(fila - 1);
        const columnas: Record<string, string> = {
            RETA: 'td:nth-child(1) input',
            RETB: 'td:nth-child(2) input[type="checkbox"]',
            RETC: 'td:nth-child(2) select',
            RETD: 'td:nth-child(3) input',
            RETE: 'td:nth-child(4) input[data-test-id="dp-input"]',
            RETF: 'td:nth-child(5) input',
            RETG: 'td:nth-child(6) input',
            RETH: 'td:nth-child(7) input',
            RETI: 'td:nth-child(8) input',
            RETJ: 'td:nth-child(9) input[data-test-id="dp-input"]',
            RETK: 'td:nth-child(10) input',
            RETL: 'td:nth-child(11) input',
            RETM: 'td:nth-child(12) input'
        };

        const selector = columnas[codigo];
        if (!selector) {
            throw new Error(
                `No existe definición HTML para el código ${codigo}`
            );
        }
        return filaLocator.locator(selector);
    }

    async capturarTabla(path: string) {
        await this.formRetiros.waitFor({
            state: 'visible'
        });
        await this.formRetiros.scrollIntoViewIfNeeded();
        await this.formRetiros.screenshot({
            path
        });
    }

    async LeerDatos() {
        console.log('========== DATOS WEB ==========');
        const cantidadFilas = await this.filasRetiros.count();
        for (let i = 1; i <= cantidadFilas; i++) {
            console.log(`--- FILA ${i} ---`);
            console.log('RETA:', await this.obtenerCampo(i, 'RETA').inputValue());
            console.log('RETB:', await this.obtenerCampo(i, 'RETB').isChecked());
            console.log('RETC:', await this.obtenerCampo(i, 'RETC').inputValue());
            console.log('RETD:', await this.obtenerCampo(i, 'RETD').inputValue());
            console.log('RETE:', await this.obtenerCampo(i, 'RETE').inputValue());
            console.log('RETF:', await this.obtenerCampo(i, 'RETF').inputValue());
            console.log('RETG:', await this.obtenerCampo(i, 'RETG').inputValue());
            console.log('RETH:', await this.obtenerCampo(i, 'RETH').inputValue());
            console.log('RETI:', await this.obtenerCampo(i, 'RETI').inputValue());
            console.log('RETJ:', await this.obtenerCampo(i, 'RETJ').inputValue());
            console.log('RETK:', await this.obtenerCampo(i, 'RETK').inputValue());
            console.log('RETL:', await this.obtenerCampo(i, 'RETL').inputValue());
            console.log('RETM:', await this.obtenerCampo(i, 'RETM').inputValue());
        }
        console.log('===============================');
    }

    async escribirDatos(
        datosDigitarCombinados: any[]
    ) {

        const digitarRetiro = datosDigitarCombinados
            .filter(dato => dato.Pagina === 'Retiro');

        console.log('======== ESCRIBIENDO DATOS DIGITAR - RETIRO ========');

        // ==========================================
        // VERIFICAR Y CREAR FILAS NECESARIAS
        // ==========================================

        const filasNecesarias = Math.max(
            ...digitarRetiro.map(dato => Number(dato.Fila))
        );

        let filasWeb = await this.filasRetiros.count();

        console.log(`Filas necesarias: ${filasNecesarias}`);
        console.log(`Filas actuales WEB: ${filasWeb}`);

        while (filasWeb < filasNecesarias) {

            console.log(`→ Creando fila ${filasWeb + 1}`);

            await this.btnNuevo.click();

            await this.page.waitForFunction(
                (cantidadEsperada) => {
                    return document.querySelectorAll(
                        'table.tabla_retiros14d1 tbody tr:not(:has(button.btn_nuevo))'
                    ).length >= cantidadEsperada;
                },
                filasWeb + 1
            );

            filasWeb = await this.filasRetiros.count();
        }

        console.log(`✓ Filas WEB disponibles: ${filasWeb}`);

        // ==========================================
        // ESCRIBIR DATOS
        // ==========================================

        for (const dato of digitarRetiro) {

            const campo = this.obtenerCampo(
                dato.Fila,
                dato.Codigo
            );

            if (!campo) {
                throw new Error(
                    `No existe el locator para ${dato.Codigo} en la fila ${dato.Fila}.`
                );
            }

            try {

                await campo.waitFor({
                    state: 'visible',
                    timeout: 3000
                });

                // ==========================================
                // MANEJO ESPECIAL PARA FECHAS
                // ==========================================

                if (['RETE', 'RETJ'].includes(dato.Codigo)) {

                    const fecha = dato.Dato.toString();

                    const dia = fecha.substring(0, 2);
                    const mes = fecha.substring(2, 4);
                    const anio = fecha.substring(4, 8);

                    const meses: Record<string, string> = {
                        '01': 'Jan',
                        '02': 'Feb',
                        '03': 'Mar',
                        '04': 'Apr',
                        '05': 'May',
                        '06': 'Jun',
                        '07': 'Jul',
                        '08': 'Aug',
                        '09': 'Sep',
                        '10': 'Oct',
                        '11': 'Nov',
                        '12': 'Dec'
                    };

                    const ordenMeses = [
                        'Jan', 'Feb', 'Mar', 'Apr',
                        'May', 'Jun', 'Jul', 'Aug',
                        'Sep', 'Oct', 'Nov', 'Dec'
                    ];

                    const mesCalendario = meses[mes];

                    await campo.click();

                    await this.calendario.waitFor({
                        state: 'visible',
                        timeout: 3000
                    });

                    let mesActual =
                        (await this.btnMes.textContent())?.trim() ?? '';

                    let anioActual =
                        (await this.btnAnio.textContent())?.trim() ?? '';

                    while (Number(anioActual) !== Number(anio)) {

                        if (Number(anio) > Number(anioActual)) {
                            await this.btnMesSiguiente.click({
                                timeout: 60000
                            });
                        } else {
                            await this.btnMesAnterior.click({
                                timeout: 60000
                            });
                        }

                        mesActual =
                            (await this.btnMes.textContent())?.trim() ?? '';

                        anioActual =
                            (await this.btnAnio.textContent())?.trim() ?? '';
                    }

                    while (mesActual !== mesCalendario) {

                        const indiceActual =
                            ordenMeses.indexOf(mesActual);

                        const indiceDestino =
                            ordenMeses.indexOf(mesCalendario);

                        if (indiceDestino > indiceActual) {
                            await this.btnMesSiguiente.click({
                                timeout: 60000
                            });
                        } else {
                            await this.btnMesAnterior.click({
                                timeout: 60000
                            });
                        }

                        mesActual =
                            (await this.btnMes.textContent())?.trim() ?? '';
                    }

                    const selectorDia =
                        `[data-test-id="dp-${anio}-${mes}-${dia}"]`;

                    const btnDia =
                        this.page.locator(selectorDia);

                    await btnDia.waitFor({
                        state: 'visible',
                        timeout: 3000
                    });

                    await btnDia.click();

                    await this.btnSeleccionar.click();

                } else {

                    await campo.fill(dato.Dato.toString(), {
                        timeout: 3000
                    });

                    await campo.press('Tab', {
                        timeout: 3000
                    });
                }

                // ==========================================
                // RESULTADO DE LA ESCRITURA
                // ==========================================

                if (dato.Origen === 'Resultado') {

                    console.log(
                        `OK Fila ${dato.Fila} | ${dato.Codigo} | Origen = Resultado | La web permitió escribir`
                    );

                } else {

                    console.log(
                        `OK Fila ${dato.Fila} | ${dato.Codigo} = ${dato.Dato}`
                    );
                }

            } catch {

                // ==========================================
                // SI LA WEB NO PERMITE ESCRIBIR
                // ==========================================

                console.log(
                    `NK Fila ${dato.Fila} | ${dato.Codigo} | Origen = ${dato.Origen} | La web no permitió escribir`
                );

                // IMPORTANTE:
                // No hacemos throw.
                // Continúa con el siguiente dato.
            }
        }

        console.log('===============================================');
    }

    async compararDatos(
        datosEsperadosCombinados: any[]
    ) {

        const esperadoRetiro = datosEsperadosCombinados
            .filter(dato => dato.Pagina === 'Retiro');

        console.log('======== COMPARANDO DATOS ESPERADOS - RETIRO ========');

        for (const dato of esperadoRetiro) {

            const campo = this.obtenerCampo(
                dato.Fila,
                dato.Codigo
            );

            try {
                await campo.waitFor({
                    state: 'visible',
                    timeout: 3000
                });
            } catch {
                throw new Error(
                    `No se encontró la celda WEB para ${dato.Codigo} en la fila ${dato.Fila}.`
                );
            }

            const valorWeb = await campo.inputValue();

            let obtenido = valorWeb
                .replace(/\./g, '')
                .trim();

            if (['RETE', 'RETJ'].includes(dato.Codigo)) {
                obtenido = obtenido.replace(/\//g, '');
            }

            const esperado = dato.Dato
                .toString()
                .replace(/\./g, '')
                .trim();

            if (esperado !== obtenido) {

                console.warn(
                    `✗ Fila ${dato.Fila} | ` +
                    `${dato.Codigo} | ` +
                    `Esperado = ${esperado} | ` +
                    `Web = ${obtenido}`
                );

            } else {

                console.log(
                    `✓ Fila ${dato.Fila} | ` +
                    `${dato.Codigo} = ${obtenido}`
                );
            }
        }
        console.log('===============================================');
    }

    async continuar() {

        await this.btnContinuar.waitFor({
            state: 'visible',
            timeout: 10000
        });

        const cantidadBotones = await this.btnContinuar.count();
        if (cantidadBotones !== 1) {
            throw new Error(
                `Error: se encontraron ${cantidadBotones} botones Continuar. Se esperaba exactamente 1.`
            );
        }
        await this.btnContinuar.click();
        await this.page.waitForTimeout(1000);
    }

    async rescatarDatosCombinados(
        datosCombinados: any[],
        nombreDatos: string
    ) {
        const datosRetiro = datosCombinados
            .filter(dato => dato.Pagina === 'Retiro');

        console.log(`======== ${nombreDatos} - RETIRO ========`);

        for (const dato of datosRetiro) {
            console.log(
                `${dato.Codigo} | ` +
                `${dato.Dato} | ` +
                `${dato.Celda} | ` +
                `Fila: ${dato.Fila} | ` +
                `${dato.Origen}`
            );
        }

        console.log('==========================================');
    }

    async capturarPantalla(path: string) {
        await this.page.screenshot({
            path,
            fullPage: true
        });
    }

}