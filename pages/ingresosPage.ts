import { Page, Locator } from '@playwright/test';

export class IngresoPages {
    readonly page: Page;
    readonly btnAceptar: Locator;
    readonly btnExpand: Locator;
    readonly btnDividendo: Locator;
    readonly formIngresos: Locator;
    readonly btnContinuar: Locator;
    readonly ING1H: Locator;
    readonly ING1B: Locator;
    readonly ING1C: Locator;
    readonly ING1E: Locator;
    readonly ING1F: Locator;
    readonly ING2H: Locator;
    readonly ING2B: Locator;
    readonly ING2C: Locator;
    readonly ING2E: Locator;
    readonly ING2F: Locator;
    readonly ING3H: Locator;
    readonly ING3B: Locator;
    readonly ING3C: Locator;
    readonly ING3E: Locator;
    readonly ING3F: Locator;
    readonly ING4H: Locator;
    readonly ING4B: Locator;
    readonly ING4C: Locator;
    readonly ING4E: Locator;
    readonly ING4F: Locator;
    readonly ING5H: Locator;
    readonly ING5B: Locator;
    readonly ING5C: Locator;
    readonly ING5E: Locator;
    readonly ING5F: Locator;
    readonly ING6H: Locator;
    readonly ING6B: Locator;
    readonly ING6C: Locator;
    readonly ING6E: Locator;
    readonly ING6F: Locator;
    readonly ING7H: Locator;
    readonly ING7B: Locator;
    readonly ING7C: Locator;
    readonly ING7E: Locator;
    readonly ING7F: Locator;
    readonly ING8B: Locator;
    readonly ING8E: Locator;
    readonly ING8F: Locator;
    readonly ING9H: Locator;
    readonly ING9B: Locator;
    readonly ING9C: Locator;
    readonly ING9E: Locator;
    readonly ING9F: Locator;
    readonly ING10B: Locator;
    readonly ING10F: Locator;
    readonly ING11B: Locator;
    readonly ING11F: Locator;
    readonly ING12B: Locator;
    readonly ING12C: Locator;
    readonly ING12D: Locator;
    readonly ING12E: Locator;
    readonly ING12F: Locator;
    readonly ING13B: Locator;
    readonly ING13F: Locator;
    readonly ING14H: Locator;
    readonly ING14B: Locator;
    readonly ING14C: Locator;
    readonly ING14D: Locator;
    readonly ING14E: Locator;
    readonly ING14F: Locator;
    readonly ING15H: Locator;
    readonly ING15B: Locator;
    readonly ING15C: Locator;
    readonly ING15D: Locator;
    readonly ING15E: Locator;
    readonly ING15F: Locator;
    readonly ING16B: Locator;
    readonly ING16F: Locator;
    readonly ING17H: Locator;
    readonly ING17B: Locator;
    readonly ING17C: Locator;
    readonly ING17D: Locator;
    readonly ING17E: Locator;
    readonly ING17F: Locator;
    readonly ING18H: Locator;
    readonly ING18B: Locator;
    readonly ING18C: Locator;
    readonly ING18D: Locator;
    readonly ING18E: Locator;
    readonly ING18F: Locator;
    readonly ING19H: Locator;
    readonly ING19B: Locator;
    readonly ING19F: Locator;
    readonly ING20H: Locator;
    readonly ING20B: Locator;
    readonly ING20C: Locator;
    readonly ING20F: Locator;
    readonly ING23B: Locator;
    readonly ING23F: Locator;
    readonly ING24F: Locator;

    constructor(page: Page) {
        this.page = page;
        this.formIngresos = page.locator('table.tabla_ingresos');
        this.btnAceptar = page.getByRole('button', { name: 'Aceptar' });
        this.btnExpand = page.locator('.div-boton-desplegar').filter({ hasText: 'Puedes ingresar información de Ingresos por ventas del año desplegando toda la página' }).locator('img');
        this.btnDividendo = page.getByRole('button', { name: 'SI' });
        this.btnContinuar = page.getByRole('button', { name: 'Continuar' });
        this.ING1H = page.locator('tr:has(td:text-is("Exportaciones (Cód. 20 F29)")) td.ingresos input.form-control');
        this.ING1B = page.locator('tr:has(td:text-is("Exportaciones (Cód. 20 F29)")) td.ingresos input.form-control-lectura');
        this.ING1C = page.locator('tr:has(td:text-is("Exportaciones (Cód. 20 F29)")) td.monper input.form-control');
        this.ING1E = page.locator('tr:has(td:text-is("Exportaciones (Cód. 20 F29)")) td.facarent input.form-control');
        this.ING1F = page.locator('tr:has(td:text-is("Exportaciones (Cód. 20 F29)")) input.form-control-monto');
        this.ING2H = page.locator('tr:has(td:text-is("Facturas por ventas y servicios gravados (Cód. 502, 717 y 501 F29)")) td.ingresos input.form-control');
        this.ING2B = page.locator('tr:has(td:text-is("Facturas por ventas y servicios gravados (Cód. 502, 717 y 501 F29)")) td.ingresos input.form-control-lectura');
        this.ING2C = page.locator('tr:has(td:text-is("Facturas por ventas y servicios gravados (Cód. 502, 717 y 501 F29)")) td.monper input.form-control');
        this.ING2E = page.locator('tr:has(td:text-is("Facturas por ventas y servicios gravados (Cód. 502, 717 y 501 F29)")) td.facarent input.form-control');
        this.ING2F = page.locator('tr:has(td:text-is("Facturas por ventas y servicios gravados (Cód. 502, 717 y 501 F29)")) input.form-control-monto');
        this.ING3H = page.locator('tr:has(td:text-is("Ventas y/o Servicios prestados Exentos, o No Gravados (Cód. 142 y 715 F29)")) td.ingresos input.form-control');
        this.ING3B = page.locator('tr:has(td:text-is("Ventas y/o Servicios prestados Exentos, o No Gravados (Cód. 142 y 715 F29)")) td.ingresos input.form-control-lectura');
        this.ING3C = page.locator('tr:has(td:text-is("Ventas y/o Servicios prestados Exentos, o No Gravados (Cód. 142 y 715 F29)")) td.monper input.form-control');
        this.ING3E = page.locator('tr:has(td:text-is("Ventas y/o Servicios prestados Exentos, o No Gravados (Cód. 142 y 715 F29)")) td.facarent input.form-control');
        this.ING3F = page.locator('tr:has(td:text-is("Ventas y/o Servicios prestados Exentos, o No Gravados (Cód. 142 y 715 F29)")) input.form-control-monto');
        this.ING4H = page.locator('tr:has(td:text-is("Ventas con retención sobre el margen de comercialización (Contrib. Retenidos) (Cód. 732 F29)")) td.ingresos input.form-control');
        this.ING4B = page.locator('tr:has(td:text-is("Ventas con retención sobre el margen de comercialización (Contrib. Retenidos) (Cód. 732 F29)")) td.ingresos input.form-control-lectura');
        this.ING4C = page.locator('tr:has(td:text-is("Ventas con retención sobre el margen de comercialización (Contrib. Retenidos) (Cód. 732 F29)")) td.monper input.form-control');
        this.ING4E = page.locator('tr:has(td:text-is("Ventas con retención sobre el margen de comercialización (Contrib. Retenidos) (Cód. 732 F29)")) td.facarent input.form-control');
        this.ING4F = page.locator('tr:has(td:text-is("Ventas con retención sobre el margen de comercialización (Contrib. Retenidos) (Cód. 732 F29)")) input.form-control-monto');
        this.ING5H = page.locator('tr:has(td:text-is("Fact. Compra recibidas Retención total (Cont. retenidos) y fact. de inicio emitida (Cód. 587 F29)")) td.ingresos input.form-control');
        this.ING5B = page.locator('tr:has(td:text-is("Fact. Compra recibidas Retención total (Cont. retenidos) y fact. de inicio emitida (Cód. 587 F29)")) td.ingresos input.form-control-lectura');
        this.ING5C = page.locator('tr:has(td:text-is("Fact. Compra recibidas Retención total (Cont. retenidos) y fact. de inicio emitida (Cód. 587 F29)")) td.monper input.form-control');
        this.ING5E = page.locator('tr:has(td:text-is("Fact. Compra recibidas Retención total (Cont. retenidos) y fact. de inicio emitida (Cód. 587 F29)")) td.facarent input.form-control');
        this.ING5F = page.locator('tr:has(td:text-is("Fact. Compra recibidas Retención total (Cont. retenidos) y fact. de inicio emitida (Cód. 587 F29)")) input.form-control-monto');
        this.ING6H = page.locator('tr:has(td:text-is("Fact. de Compra recibidas con retención parcial (Cód. 720 F29)")) td.ingresos input.form-control');
        this.ING6B = page.locator('tr:has(td:text-is("Fact. de Compra recibidas con retención parcial (Cód. 720 F29)")) td.ingresos input.form-control-lectura');
        this.ING6C = page.locator('tr:has(td:text-is("Fact. de Compra recibidas con retención parcial (Cód. 720 F29)")) td.monper input.form-control');
        this.ING6E = page.locator('tr:has(td:text-is("Fact. de Compra recibidas con retención parcial (Cód. 720 F29)")) td.facarent input.form-control');
        this.ING6F = page.locator('tr:has(td:text-is("Fact. de Compra recibidas con retención parcial (Cód. 720 F29)")) input.form-control-monto');
        this.ING7H = page.locator('tr:has(td:text-is("Boletas y Comprobante o recibo de pago de transacciones transbank (Cód. 111 y 759 F29)")) td.ingresos input.form-control');
        this.ING7B = page.locator('tr:has(td:text-is("Boletas y Comprobante o recibo de pago de transacciones transbank (Cód. 111 y 759 F29)")) td.ingresos input.form-control-lectura');
        this.ING7C = page.locator('tr:has(td:text-is("Boletas y Comprobante o recibo de pago de transacciones transbank (Cód. 111 y 759 F29)")) td.monper input.form-control');
        this.ING7E = page.locator('tr:has(td:text-is("Boletas y Comprobante o recibo de pago de transacciones transbank (Cód. 111 y 759 F29)")) td.facarent input.form-control');
        this.ING7F = page.locator('tr:has(td:text-is("Boletas y Comprobante o recibo de pago de transacciones transbank (Cód. 111 y 759 F29)")) input.form-control-monto');
        this.ING8B = page.locator('tr:has(td:text-is("Notas de Crédito emitidas por ventas y servicios (Cód. 510, 709 y 734 F29)")) td.ingresos input.form-control-lectura');
        this.ING8E = page.locator('tr:has(td:text-is("Notas de Crédito emitidas por ventas y servicios (Cód. 510, 709 y 734 F29)")) td.facarent input.form-control');
        this.ING8F = page.locator('tr:has(td:text-is("Notas de Crédito emitidas por ventas y servicios (Cód. 510, 709 y 734 F29)")) input.form-control-monto');
        this.ING9H = page.locator('tr:has(td:text-is("Notas de débito emitidas (Cód. 513 F29)")) td.ingresos input.form-control');
        this.ING9B = page.locator('tr:has(td:text-is("Notas de débito emitidas (Cód. 513 F29)")) td.ingresos input.form-control-lectura');
        this.ING9C = page.locator('tr:has(td:text-is("Notas de débito emitidas (Cód. 513 F29)")) td.monper input.form-control');
        this.ING9E = page.locator('tr:has(td:text-is("Notas de débito emitidas (Cód. 513 F29)")) td.facarent input.form-control');
        this.ING9F = page.locator('tr:has(td:text-is("Notas de débito emitidas (Cód. 513 F29)")) input.form-control-monto');
        this.ING10B = page.locator('tr:has(td:text-is("Ingresos devengados del giro ejercicios anteriores y percibidos en el ejercicio")) td.ingresos input.form-control-lectura');
        this.ING10F = page.locator('tr:has(td:text-is("Ingresos devengados del giro ejercicios anteriores y percibidos en el ejercicio")) input.form-control-monto');
        this.ING11B = page.locator('tr:has(td:text-is("Ingresos pagados según contratos no facturados")) td.ingresos input.form-control');
        this.ING11F = page.locator('tr:has(td:text-is("Ingresos pagados según contratos no facturados")) input.form-control-monto');

        this.ING12B = this.celdaPorFilaYColumna('TOTAL INGRESOS POR VENTAS O SERVICIOS','Ingresos del año (Neto)');
        this.ING12C = this.celdaPorFilaYColumna('TOTAL INGRESOS POR VENTAS O SERVICIOS','Monto no Percibido del año (Neto)');
        this.ING12D = this.celdaPorFilaYColumna('TOTAL INGRESOS POR VENTAS O SERVICIOS','No Considerar es de Patrimonio Personal');
        this.ING12E = this.celdaPorFilaYColumna('TOTAL INGRESOS POR VENTAS O SERVICIOS','Facturas de Actividad de Renta Presunta');
        this.ING12F = this.celdaPorFilaYColumna('TOTAL INGRESOS POR VENTAS O SERVICIOS','Monto Ingreso Percibido');

        this.ING13B = page.locator('tr:has(td:text-is("Ingresos pagados según contratos con Empresas Relacionadas")) td.ingresos input.form-control');
        this.ING13F = page.locator('tr:has(td:text-is("Ingresos pagados según contratos con Empresas Relacionadas")) input.form-control-monto');
        this.ING14H = page.locator('tr:has-text("Mayor valor por rescate o enajenación de inversiones o bienes no depreciables") td:nth-child(2) input.form-control');
        this.ING14B = page.locator('tr:has-text("Mayor valor por rescate o enajenación de inversiones o bienes no depreciables") td:nth-child(4) input.form-control');
        this.ING14C = page.locator('tr:has-text("Mayor valor por rescate o enajenación de inversiones o bienes no depreciables") td:nth-child(6) input.form-control');
        this.ING14D = page.locator('tr:has-text("Mayor valor por rescate o enajenación de inversiones o bienes no depreciables") td:nth-child(7) input.form-control');
        this.ING14E = page.locator('tr:has-text("Mayor valor por rescate o enajenación de inversiones o bienes no depreciables") td:nth-child(9) input.form-control');
        this.ING14F = page.locator('tr:has-text("Mayor valor por rescate o enajenación de inversiones o bienes no depreciables") td:nth-child(11) input.form-control-monto');
        this.ING15H = page.locator('tr:has-text("Ingresos percibidos provenientes de arriendos de bienes raíces") td:nth-child(2) input.form-control');
        this.ING15B = page.locator('tr:has-text("Ingresos percibidos provenientes de arriendos de bienes raíces") td:nth-child(4) input.form-control-monto');
        this.ING15C = page.locator('tr:has-text("Ingresos percibidos provenientes de arriendos de bienes raíces") td:nth-child(6) input.form-control');
        this.ING15D = page.locator('tr:has-text("Ingresos percibidos provenientes de arriendos de bienes raíces") td:nth-child(7) input.form-control');
        this.ING15E = page.locator('tr:has-text("Ingresos percibidos provenientes de arriendos de bienes raíces") td:nth-child(9) input.form-control');
        this.ING15F = page.locator('tr:has-text("Ingresos percibidos provenientes de arriendos de bienes raíces") td:nth-child(11) input.form-control-monto');
        this.ING16B = page.locator('tr:has-text("Ingresos percibidos o devengados por operaciones con empresas relacionadas del art. 14 letra A) LIR (depurados de notas de débito y crédito)") td:nth-child(4) input.form-control');
        this.ING16F = page.locator('tr:has-text("Ingresos percibidos o devengados por operaciones con empresas relacionadas del art. 14 letra A) LIR (depurados de notas de débito y crédito)") td:nth-child(11) input.form-control-monto');
        this.ING17H = page.locator('tr:has-text("Intereses Directos") td:nth-child(2) input.form-control');
        this.ING17B = page.locator('tr:has-text("Intereses Directos") td:nth-child(4) input.form-control-lectura');
        this.ING17C = page.locator('tr:has-text("Intereses Directos") td:nth-child(6) input.form-control');
        this.ING17D = page.locator('tr:has-text("Intereses Directos") td:nth-child(7) input.form-control');
        this.ING17E = page.locator('tr:has-text("Intereses Directos") td:nth-child(9) input.form-control');
        this.ING17F = page.locator('tr:has-text("Intereses Directos") td:nth-child(11) input.form-control-monto');
        this.ING18H = page.locator('tr:has-text("Intereses Indirectos") td:nth-child(2) input.form-control');
        this.ING18B = page.locator('tr:has-text("Intereses Indirectos") td:nth-child(4) input.form-control-lectura');
        this.ING18C = page.locator('tr:has-text("Intereses Indirectos") td:nth-child(6) input.form-control');
        this.ING18D = page.locator('tr:has-text("Intereses Indirectos") td:nth-child(7) input.form-control');
        this.ING18E = page.locator('tr:has-text("Intereses Indirectos") td:nth-child(9) input.form-control');
        this.ING18F = page.locator('tr:has-text("Intereses Indirectos") td:nth-child(11) input.form-control-monto');
        this.ING19H = page.locator('tr:has-text("Renta de fuente extranjera percibida") td:nth-child(2) input.form-control-lectura');
        this.ING19B = page.locator('tr:has-text("Renta de fuente extranjera percibida") td:nth-child(4) input.form-control-lectura');
        this.ING19F = page.locator('tr:has-text("Renta de fuente extranjera percibida") td:nth-child(11) input.form-control-monto');
        this.ING20H = page.locator('tr:has-text("Otros ingresos percibidos o devengados") td:nth-child(2) input.form-control');
        this.ING20B = page.locator('tr:has-text("Otros ingresos percibidos o devengados") td:nth-child(4) input.form-control');
        this.ING20C = page.locator('tr:has-text("Otros ingresos percibidos o devengados") td:nth-child(6) input.form-control');
        this.ING20F = page.locator('tr:has-text("Otros ingresos percibidos o devengados") td:nth-child(11) input.form-control-monto');
        this.ING23B = page.locator('tr:has-text("Crédito sobre Activos Fijos Adquiridos en el ejercicio") td:nth-child(4) input.form-control');
        this.ING23F = page.locator('tr:has-text("Crédito sobre Activos Fijos Adquiridos en el ejercicio") td:nth-child(11) input.form-control-monto');
        this.ING24F = page.locator('tr:has(td.baseimp strong:text-is("TOTAL INGRESOS")) input.form-control-monto');
    }

    async seleccionarDividendos() {
        if (await this.btnDividendo.isVisible()) {
            await this.btnDividendo.click();
        }
    }

    async expandirFormulario() {
        await this.btnExpand.click();
    }

    async capturarTabla(path: string) {
        await this.formIngresos.scrollIntoViewIfNeeded();
        await this.formIngresos.screenshot({ path });
    }

    private celdaPorFilaYColumna(
        nombreFila: string,
        nombreColumna: string
    ): Locator {

        return this.formIngresos.locator(
            `xpath=.//tr[td[normalize-space(.)="${nombreFila}"]]/td[
            position() =
            count(
                ancestor::table//thead//th[
                    normalize-space(.)="${nombreColumna}"
                ]/preceding-sibling::th
            )
            +
            sum(
                ancestor::table//thead//th[
                    normalize-space(.)="${nombreColumna}"
                ]/preceding-sibling::th/@colspan
            )
            -
            count(
                ancestor::table//thead//th[
                    normalize-space(.)="${nombreColumna}"
                ]/preceding-sibling::th[@colspan]
            )
            + 1
        ]`
        ).locator('input.form-control-monto');
    }

    private async leerCampo(codigo: string, campo: Locator) {
        try {
            const valor = await campo.inputValue({
                timeout: 3000
            });

            console.log(`${codigo}: ${valor}`);
        } catch {
            console.log(`${codigo}: NO ENCONTRADO`);
        }
    }

    async LeerDatos() {
        console.log('========== DATOS WEB ==========');
        await this.leerCampo('Ing1H', this.ING1H);
        await this.leerCampo('Ing1B', this.ING1B);
        await this.leerCampo('Ing1C', this.ING1C);
        await this.leerCampo('Ing1E', this.ING1E);
        await this.leerCampo('Ing1F', this.ING1F);
        await this.leerCampo('Ing2H', this.ING2H);
        await this.leerCampo('Ing2B', this.ING2B);
        await this.leerCampo('Ing2C', this.ING2C);
        await this.leerCampo('Ing2E', this.ING2E);
        await this.leerCampo('Ing2F', this.ING2F);
        await this.leerCampo('Ing3H', this.ING3H);
        await this.leerCampo('Ing3B', this.ING3B);
        await this.leerCampo('Ing3C', this.ING3C);
        await this.leerCampo('Ing3E', this.ING3E);
        await this.leerCampo('Ing3F', this.ING3F);
        await this.leerCampo('Ing4H', this.ING4H);
        await this.leerCampo('Ing4B', this.ING4B);
        await this.leerCampo('Ing4C', this.ING4C);
        await this.leerCampo('Ing4E', this.ING4E);
        await this.leerCampo('Ing4F', this.ING4F);
        await this.leerCampo('Ing5H', this.ING5H);
        await this.leerCampo('Ing5B', this.ING5B);
        await this.leerCampo('Ing5C', this.ING5C);
        await this.leerCampo('Ing5E', this.ING5E);
        await this.leerCampo('Ing5F', this.ING5F);
        await this.leerCampo('Ing6H', this.ING6H);
        await this.leerCampo('Ing6B', this.ING6B);
        await this.leerCampo('Ing6C', this.ING6C);
        await this.leerCampo('Ing6E', this.ING6E);
        await this.leerCampo('Ing6F', this.ING6F);
        await this.leerCampo('Ing7H', this.ING7H);
        await this.leerCampo('Ing7B', this.ING7B);
        await this.leerCampo('Ing7C', this.ING7C);
        await this.leerCampo('Ing7E', this.ING7E);
        await this.leerCampo('Ing7F', this.ING7F);
        await this.leerCampo('Ing8B', this.ING8B);
        await this.leerCampo('Ing8E', this.ING8E);
        await this.leerCampo('Ing8F', this.ING8F);
        await this.leerCampo('Ing9H', this.ING9H);
        await this.leerCampo('Ing9B', this.ING9B);
        await this.leerCampo('Ing9C', this.ING9C);
        await this.leerCampo('Ing9E', this.ING9E);
        await this.leerCampo('Ing9F', this.ING9F);
        await this.leerCampo('Ing10B', this.ING10B);
        await this.leerCampo('Ing10F', this.ING10F);
        await this.leerCampo('Ing11B', this.ING11B);
        await this.leerCampo('Ing11F', this.ING11F);
        await this.leerCampo('Ing12B', this.ING12B);
        await this.leerCampo('Ing12C', this.ING12C);
        await this.leerCampo('Ing12D', this.ING12D);
        await this.leerCampo('Ing12E', this.ING12E);
        await this.leerCampo('Ing12F', this.ING12F);
        await this.leerCampo('Ing13B', this.ING13B);
        await this.leerCampo('Ing13F', this.ING13F);
        await this.leerCampo('Ing14H', this.ING14H);
        await this.leerCampo('Ing14B', this.ING14B);
        await this.leerCampo('Ing14C', this.ING14C);
        await this.leerCampo('Ing14D', this.ING14D);
        await this.leerCampo('Ing14E', this.ING14E);
        await this.leerCampo('Ing14F', this.ING14F);
        await this.leerCampo('Ing15H', this.ING15H);
        await this.leerCampo('Ing15B', this.ING15B);
        await this.leerCampo('Ing15C', this.ING15C);
        await this.leerCampo('Ing15D', this.ING15D);
        await this.leerCampo('Ing15E', this.ING15E);
        await this.leerCampo('Ing15F', this.ING15F);
        await this.leerCampo('Ing16B', this.ING16B);
        await this.leerCampo('Ing16F', this.ING16F);
        await this.leerCampo('Ing17H', this.ING17H);
        await this.leerCampo('Ing17B', this.ING17B);
        await this.leerCampo('Ing17C', this.ING17C);
        await this.leerCampo('Ing17D', this.ING17D);
        await this.leerCampo('Ing17E', this.ING17E);
        await this.leerCampo('Ing17F', this.ING17F);
        await this.leerCampo('Ing18H', this.ING18H);
        await this.leerCampo('Ing18B', this.ING18B);
        await this.leerCampo('Ing18C', this.ING18C);
        await this.leerCampo('Ing18D', this.ING18D);
        await this.leerCampo('Ing18E', this.ING18E);
        await this.leerCampo('Ing18F', this.ING18F);
        await this.leerCampo('Ing19H', this.ING19H);
        await this.leerCampo('Ing19B', this.ING19B);
        await this.leerCampo('Ing19F', this.ING19F);
        await this.leerCampo('Ing20H', this.ING20H);
        await this.leerCampo('Ing20B', this.ING20B);
        await this.leerCampo('Ing20C', this.ING20C);
        await this.leerCampo('Ing20F', this.ING20F);
        await this.leerCampo('Ing23B', this.ING23B);
        await this.leerCampo('Ing23F', this.ING23F);
        await this.leerCampo('Ing24F', this.ING24F);
        console.log('===============================');
    }

    async escribirDatos(
        datosDigitarCombinados: any[]
    ) {

        const digitarIngreso = datosDigitarCombinados
            .filter(dato => dato.Pagina === 'Ingreso')
            .map(({ Codigo, Dato, Origen, Tipo }) => ({
                Codigo,
                Dato,
                Origen,
                Tipo
            }));

        console.log('======== ESCRIBIENDO DATOS DIGITAR - INGRESO ========');

        for (const dato of digitarIngreso) {
            const campo = (this as any)[dato.Codigo];
            if (!campo) {
                throw new Error(
                    `No existe el locator para el código ${dato.Codigo}. Revisar IngresoPages.ts`
                );
            }
            try {
                await campo.waitFor({
                    state: 'visible',
                    timeout: 3000
                });
                await campo.fill(dato.Dato.toString(), {
                    timeout: 3000
                });
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

                if (dato.Origen === 'Resultado') {
                    console.log(
                        `NK ${dato.Codigo} | Origen = Resultado | La web no permitió escribir`
                    );
                } else {
                    throw new Error(
                        `No se pudo escribir el código ${dato.Codigo}. Revisar Rut o estructura de la página.`
                    );
                }
            }
        }
        console.log('===============================================');
    }

    async compararDatos(
        datosEsperadosCombinados: any[]
    ) {

        const esperadoIngreso = datosEsperadosCombinados
            .filter(dato => dato.Pagina === 'Ingreso')
            .map(({ Codigo, Dato, Origen, Tipo }) => ({
                Codigo,
                Dato,
                Origen,
                Tipo
            }));

        console.log('======== COMPARANDO DATOS ESPERADOS - INGRESO ========');

        for (const dato of esperadoIngreso) {

            const campo = (this as any)[dato.Codigo];

            if (!campo) {
                throw new Error(
                    `No existe el locator para el código ${dato.Codigo}. Revisar IngresoPages.ts`
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
                    `NK ${dato.Codigo} | Esperado = ${esperado} | Encontrado = ${obtenido}`
                );
            } else {
                console.log(
                    `OK ${dato.Codigo} = ${obtenido}`
                );
            }
        }

        console.log('===============================================');
        console.log('');
    }

    async continuar() {
        await this.btnContinuar.click();
    }

    async aceptar() {
        if (await this.btnAceptar.isVisible()) {
            await this.btnAceptar.click();
        }
    }


}
