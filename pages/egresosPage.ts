import { Page, Locator } from '@playwright/test';

export class EgresoPages {
    readonly page: Page;
    readonly btnExpand: Locator;
    readonly formEgresos: Locator;
    readonly btnContinuar: Locator;
    readonly EGR1B: Locator;
    readonly EGR1F: Locator;
    readonly EGR2B: Locator;
    readonly EGR2F: Locator;
    readonly EGR3B: Locator;
    readonly EGR3F: Locator;
    readonly EGR4H: Locator;
    readonly EGR4B: Locator;
    readonly EGR4C: Locator;
    readonly EGR4D: Locator;
    readonly EGR4E: Locator;
    readonly EGR4F: Locator;
    readonly EGR5H: Locator;
    readonly EGR5B: Locator;
    readonly EGR5C: Locator;
    readonly EGR5D: Locator;
    readonly EGR5E: Locator;
    readonly EGR5F: Locator;
    readonly EGR6B: Locator;
    readonly EGR6C: Locator;
    readonly EGR6D: Locator;
    readonly EGR6E: Locator;
    readonly EGR6F: Locator;
    readonly EGR7H: Locator;
    readonly EGR7B: Locator;
    readonly EGR7C: Locator;
    readonly EGR7D: Locator;
    readonly EGR7E: Locator;
    readonly EGR7F: Locator;
    readonly EGR8H: Locator;
    readonly EGR8B: Locator;
    readonly EGR8C: Locator;
    readonly EGR8D: Locator;
    readonly EGR8E: Locator;
    readonly EGR8F: Locator;
    readonly EGR9H: Locator;
    readonly EGR9B: Locator;
    readonly EGR9C: Locator;
    readonly EGR9D: Locator;
    readonly EGR9E: Locator;
    readonly EGR9F: Locator;
    readonly EGR10B: Locator;
    readonly EGR10F: Locator;
    readonly EGR11H: Locator;
    readonly EGR11B: Locator;
    readonly EGR11C: Locator;
    readonly EGR11D: Locator;
    readonly EGR11E: Locator;
    readonly EGR11F: Locator;
    readonly EGR12H: Locator;
    readonly EGR12B: Locator;
    readonly EGR12C: Locator;
    readonly EGR12D: Locator;
    readonly EGR12E: Locator;
    readonly EGR12F: Locator;
    readonly EGR13B: Locator;
    readonly EGR13F: Locator;
    readonly EGR14B: Locator;
    readonly EGR14F: Locator;
    readonly EGR15H: Locator;
    readonly EGR15B: Locator;
    readonly EGR15C: Locator;
    readonly EGR15F: Locator;
    readonly EGR16H: Locator;
    readonly EGR16B: Locator;
    readonly EGR16C: Locator;
    readonly EGR16F: Locator;
    readonly EGR17B: Locator;
    readonly EGR17F: Locator;
    readonly EGR18B: Locator;
    readonly EGR18F: Locator;
    readonly EGR19B: Locator;
    readonly EGR19F: Locator;
    readonly EGR20B: Locator;
    readonly EGR20F: Locator;
    readonly EGR21B: Locator;
    readonly EGR21F: Locator;
    readonly EGR22B: Locator;
    readonly EGR22F: Locator;
    readonly EGR23B: Locator;
    readonly EGR23F: Locator;
    readonly EGR24H: Locator;
    readonly EGR24B: Locator;
    readonly EGR24C: Locator;
    readonly EGR24F: Locator;
    readonly EGR25B: Locator;
    readonly EGR25F: Locator;
    readonly EGR26B: Locator;
    readonly EGR26F: Locator;
    readonly EGR27H: Locator;
    readonly EGR27B: Locator;
    readonly EGR27C: Locator;
    readonly EGR27D: Locator;
    readonly EGR27E: Locator;
    readonly EGR27F: Locator;
    readonly EGR28B: Locator;
    readonly EGR28F: Locator;
    readonly EGR29B: Locator;
    readonly EGR29F: Locator;
    readonly EGR30F: Locator;

    constructor(page: Page) {
        this.page = page;
        this.btnExpand = page.locator('h5:has-text("Puedes ingresar información de Egresos") img');
        this.formEgresos = page.locator('table.tabla_ingresos');
        this.btnContinuar = page.locator('button.btn.btn-primary.btn_right', { hasText: 'Continuar' });
        this.EGR1B = page.locator('tr:has(td:text-is("Gasto por saldo inicial de existencias o insumos del negocio en cambio de régimen")) td input.form-control.n-align');
        this.EGR1F = page.locator('tr:has(td:text-is("Gasto por saldo inicial de existencias o insumos del negocio en cambio de régimen")) input.form-control-monto');
        this.EGR2B = page.locator('tr:has(td:text-is("Gasto por saldo inicial de activo fijo en cambio de régimen")) input.form-control.n-align');
        this.EGR2F = page.locator('tr:has(td:text-is("Gasto por saldo inicial de activo fijo en cambio de régimen")) input.form-control-monto');
        this.EGR3B = page.locator('tr:has(td:text-is("Gasto por pérdida tributaria en cambio de régimen")) input.form-control.n-align');
        this.EGR3F = page.locator('tr:has(td:text-is("Gasto por pérdida tributaria en cambio de régimen")) input.form-control-monto');
        this.EGR4H = page.locator('tr:has(td:text-is("Compras y/o Servicios Internas del Giro o Facturas de Compra Emitidas (no incluir las Facturas recibidas de proveedores Supermercados y comercios similares) (Cód. 520 F29)")) input.form-control[data-original-title]');
        this.EGR4B = page.locator('tr:has(td:text-is("Compras y/o Servicios Internas del Giro o Facturas de Compra Emitidas (no incluir las Facturas recibidas de proveedores Supermercados y comercios similares) (Cód. 520 F29)")) input.form-control-lectura');
        this.EGR4C = page.locator('tr:has(td:text-is("Compras y/o Servicios Internas del Giro o Facturas de Compra Emitidas (no incluir las Facturas recibidas de proveedores Supermercados y comercios similares) (Cód. 520 F29)")) input.form-control.n-align').nth(1);
        this.EGR4D = page.locator('tr:has(td:text-is("Compras y/o Servicios Internas del Giro o Facturas de Compra Emitidas (no incluir las Facturas recibidas de proveedores Supermercados y comercios similares) (Cód. 520 F29)")) td.patpers input.form-control');
        this.EGR4E = page.locator('tr:has(td:text-is("Compras y/o Servicios Internas del Giro o Facturas de Compra Emitidas (no incluir las Facturas recibidas de proveedores Supermercados y comercios similares) (Cód. 520 F29)")) td.monper1 input.form-control');
        this.EGR4F = page.locator('tr:has(td:text-is("Compras y/o Servicios Internas del Giro o Facturas de Compra Emitidas (no incluir las Facturas recibidas de proveedores Supermercados y comercios similares) (Cód. 520 F29)")) input.form-control-monto');
        this.EGR5H = page.locator('tr:has(td:text-is("Importaciones del Giro (Cód. 535 F29)")) input.form-control[data-original-title]');
        this.EGR5B = page.locator('tr:has(td:text-is("Importaciones del Giro (Cód. 535 F29)")) input.form-control-lectura');
        this.EGR5C = page.locator('tr:has(td:text-is("Importaciones del Giro (Cód. 535 F29)")) input.form-control.n-align').nth(1);
        this.EGR5D = page.locator('tr:has(td:text-is("Importaciones del Giro (Cód. 535 F29)")) td.patpers input.form-control');
        this.EGR5E = page.locator('tr:has(td:text-is("Importaciones del Giro (Cód. 535 F29)")) td.monper1 input.form-control');
        this.EGR5F = page.locator('tr:has(td:text-is("Importaciones del Giro (Cód. 535 F29)")) input.form-control-monto');
        this.EGR6B = page.locator('tr:has(td:text-is("Notas de Crédito recibidas (Cód. 528 F29)")) input.form-control-lectura');
        this.EGR6C = page.locator('tr:has(td:text-is("Notas de Crédito recibidas (Cód. 528 F29)")) input.form-control.n-align').first();
        this.EGR6D = page.locator('tr:has(td:text-is("Notas de Crédito recibidas (Cód. 528 F29)")) td.patpers input.form-control');
        this.EGR6E = page.locator('tr:has(td:text-is("Notas de Crédito recibidas (Cód. 528 F29)")) td.monper1 input.form-control');
        this.EGR6F = page.locator('tr:has(td:text-is("Notas de Crédito recibidas (Cód. 528 F29)")) input.form-control-monto');
        this.EGR7H = page.locator('tr:has(td:text-is("Notas de Débito recibidas (Cód. 532 F29)")) td:nth-child(2) input.form-control');
        this.EGR7B = page.locator('tr:has(td:text-is("Notas de Débito recibidas (Cód. 532 F29)")) input.form-control-lectura');
        this.EGR7C = page.locator('tr:has(td:text-is("Notas de Débito recibidas (Cód. 532 F29)")) td:nth-child(6) input.form-control');
        this.EGR7D = page.locator('tr:has(td:text-is("Notas de Débito recibidas (Cód. 532 F29)")) td.patpers input.form-control');
        this.EGR7E = page.locator('tr:has(td:text-is("Notas de Débito recibidas (Cód. 532 F29)")) td.monper1 input.form-control');
        this.EGR7F = page.locator('tr:has(td:text-is("Notas de Débito recibidas (Cód. 532 F29)")) input.form-control-monto');
        this.EGR8H = page.locator('tr:has(td:text-is("Compras y/o Servicios Sin derecho a Crédito Fiscal que digan relación con el giro del negocio (Cód. 521 + 560 + 562 F29)")) td:nth-child(2) input.form-control');
        this.EGR8B = page.locator('tr:has(td:text-is("Compras y/o Servicios Sin derecho a Crédito Fiscal que digan relación con el giro del negocio (Cód. 521 + 560 + 562 F29)")) td:nth-child(4) input.form-control');
        this.EGR8C = page.locator('tr:has(td:text-is("Compras y/o Servicios Sin derecho a Crédito Fiscal que digan relación con el giro del negocio (Cód. 521 + 560 + 562 F29)")) td:nth-child(6) input.form-control');
        this.EGR8D = page.locator('tr:has(td:text-is("Compras y/o Servicios Sin derecho a Crédito Fiscal que digan relación con el giro del negocio (Cód. 521 + 560 + 562 F29)")) td.patpers input.form-control');
        this.EGR8E = page.locator('tr:has(td:text-is("Compras y/o Servicios Sin derecho a Crédito Fiscal que digan relación con el giro del negocio (Cód. 521 + 560 + 562 F29)")) td.monper1 input.form-control');
        this.EGR8F = page.locator('tr:has(td:text-is("Compras y/o Servicios Sin derecho a Crédito Fiscal que digan relación con el giro del negocio (Cód. 521 + 560 + 562 F29)")) input.form-control-monto');
        this.EGR9H = page.locator('tr:has(td:text-is("Facturas recibidas de Proveedores: Supermercados y Comercios similares que sean del giro del negocio (Cód. 762 F29)")) td:nth-child(2) input.form-control-lectura');
        this.EGR9B = page.locator('tr:has(td:text-is("Facturas recibidas de Proveedores: Supermercados y Comercios similares que sean del giro del negocio (Cód. 762 F29)")) td:nth-child(4) input.form-control-lectura');
        this.EGR9C = page.locator('tr:has(td:text-is("Facturas recibidas de Proveedores: Supermercados y Comercios similares que sean del giro del negocio (Cód. 762 F29)")) td:nth-child(6) input.form-control');
        this.EGR9D = page.locator('tr:has(td:text-is("Facturas recibidas de Proveedores: Supermercados y Comercios similares que sean del giro del negocio (Cód. 762 F29)")) td.patpers input.form-control');
        this.EGR9E = page.locator('tr:has(td:text-is("Facturas recibidas de Proveedores: Supermercados y Comercios similares que sean del giro del negocio (Cód. 762 F29)")) td.monper1 input.form-control');
        this.EGR9F = page.locator('tr:has(td:text-is("Facturas recibidas de Proveedores: Supermercados y Comercios similares que sean del giro del negocio (Cód. 762 F29)")) input.form-control-monto');
        this.EGR10B = page.locator('tr:has(td:text-is("Existencias, insumos y servicios del negocio adeudados en el ejercicio anterior y pagados en el ejercicio actual")) input.form-control-lectura');
        this.EGR10F = page.locator('tr:has(td:text-is("Existencias, insumos y servicios del negocio adeudados en el ejercicio anterior y pagados en el ejercicio actual")) input.form-control-monto');
        this.EGR11H = page.locator('tr:has(td:text-is("Compras Internas e Importaciones del Activo Fijo (Cód. 525 y 553 F29)")) td:nth-child(2) input.form-control');
        this.EGR11B = page.locator('tr:has(td:text-is("Compras Internas e Importaciones del Activo Fijo (Cód. 525 y 553 F29)")) input.form-control-lectura');
        this.EGR11C = page.locator('tr:has(td:text-is("Compras Internas e Importaciones del Activo Fijo (Cód. 525 y 553 F29)")) td:nth-child(6) input.form-control');
        this.EGR11D = page.locator('tr:has(td:text-is("Compras Internas e Importaciones del Activo Fijo (Cód. 525 y 553 F29)")) td.patpers input.form-control');
        this.EGR11E = page.locator('tr:has(td:text-is("Compras Internas e Importaciones del Activo Fijo (Cód. 525 y 553 F29)")) td.monper1 input.form-control');
        this.EGR11F = page.locator('tr:has(td:text-is("Compras Internas e Importaciones del Activo Fijo (Cód. 525 y 553 F29)")) input.form-control-monto');
        this.EGR12H = page.locator('tr:has(td:text-is("Facturas recibidas por adquisición o construcción de bienes inmuebles (Cód. 766 F29) (cuotas efectivamente pagadas)")) td:nth-child(2) input.form-control');
        this.EGR12B = page.locator('tr:has(td:text-is("Facturas recibidas por adquisición o construcción de bienes inmuebles (Cód. 766 F29) (cuotas efectivamente pagadas)")) input.form-control-lectura');
        this.EGR12C = page.locator('tr:has(td:text-is("Facturas recibidas por adquisición o construcción de bienes inmuebles (Cód. 766 F29) (cuotas efectivamente pagadas)")) td:nth-child(6) input.form-control');
        this.EGR12D = page.locator('tr:has(td:text-is("Facturas recibidas por adquisición o construcción de bienes inmuebles (Cód. 766 F29) (cuotas efectivamente pagadas)")) td.patpers input.form-control');
        this.EGR12E = page.locator('tr:has(td:text-is("Facturas recibidas por adquisición o construcción de bienes inmuebles (Cód. 766 F29) (cuotas efectivamente pagadas)")) td.monper1 input.form-control');
        this.EGR12F = page.locator('tr:has(td:text-is("Facturas recibidas por adquisición o construcción de bienes inmuebles (Cód. 766 F29) (cuotas efectivamente pagadas)")) input.form-control-monto');
        this.EGR13B = page.locator('tr:has(td:text-is("Pérdidas tributarias de ejercicios anteriores")) td:nth-child(4) input.form-control-monto');
        this.EGR13F = page.locator('tr:has(td:text-is("Pérdidas tributarias de ejercicios anteriores")) td:nth-child(11) input.form-control-monto');
        this.EGR14B = page.locator('tr:has(td:text-is("Gastos de rentas de fuente extranjera")) td input.form-control');
        this.EGR14F = page.locator('tr:has(td:text-is("Gastos de rentas de fuente extranjera")) td input.form-control-monto');
        this.EGR15H = page.locator('tr:has(div:text-is("Remuneraciones pagadas")) input.form-control').first();
        this.EGR15B = page.locator('tr:has(div:text-is("Remuneraciones pagadas")) input.form-control-lectura');
        this.EGR15C = page.locator('tr:has(div:text-is("Remuneraciones pagadas")) input.form-control').nth(1);
        this.EGR15F = page.locator('tr:has(div:text-is("Remuneraciones pagadas")) input.form-control-monto');
        this.EGR16H = page.locator('tr:has(div:text-is("Honorarios pagados")) input.form-control').first();
        this.EGR16B = page.locator('tr:has(div:text-is("Honorarios pagados")) input.form-control-lectura');
        this.EGR16C = page.locator('tr:has(div:text-is("Honorarios pagados")) input.form-control').nth(1);
        this.EGR16F = page.locator('tr:has(div:text-is("Honorarios pagados")) input.form-control-monto');
        this.EGR17B = page.locator('tr:has(div:text-is("Arriendos pagados")) input.form-control').first();
        this.EGR17F = page.locator('tr:has(div:text-is("Arriendos pagados")) input.form-control-monto');
        this.EGR18B = page.locator('tr:has(td:text-is("Gastos por responsabilidad social")) input.form-control');
        this.EGR18F = page.locator('tr:has(td:text-is("Gastos por responsabilidad social")) input.form-control-monto');
        this.EGR19B = page.locator('tr:has(td:text-is("Gastos por inversión en investigación y desarrollo no certificados por CORFO.")) input.form-control');
        this.EGR19F = page.locator('tr:has(td:text-is("Gastos por inversión en investigación y desarrollo no certificados por CORFO.")) input.form-control-monto');
        this.EGR20B = page.locator('tr:has(td:text-is("Gastos por inversión en investigación y desarrollo certificados por CORFO.")) input.form-control');
        this.EGR20F = page.locator('tr:has(td:text-is("Gastos por inversión en investigación y desarrollo certificados por CORFO.")) input.form-control-monto');
        this.EGR21B = page.locator('tr:has(td:text-is("Impuestos Pagados excepto Impuestos a la Renta")) input.form-control.n-align');
        this.EGR21F = page.locator('tr:has(td:text-is("Impuestos Pagados excepto Impuestos a la Renta")) input.form-control-monto');
        this.EGR22B = page.locator('tr:has(td:text-is("Intereses y reajustes pagados por préstamos y otros")) input.form-control.n-align');
        this.EGR22F = page.locator('tr:has(td:text-is("Intereses y reajustes pagados por préstamos y otros")) input.form-control-monto');
        this.EGR23B = page.locator('tr:has(td:text-is("Gastos o egresos pagados o adeudados por operaciones con empresas relacionadas del art. 14 letra A) LIR (depurados de notas de débito y crédito)")) input.form-control.n-align');
        this.EGR23F = page.locator('tr:has(td:text-is("Gastos o egresos pagados o adeudados por operaciones con empresas relacionadas del art. 14 letra A) LIR (depurados de notas de débito y crédito)")) input.form-control-monto');
        this.EGR24H = page.locator('tr:has(td:text-is("Otros gastos deducibles de los ingresos (pagados e incluyendo corrección monetaria)")) td:nth-child(2) input.form-control.n-align');
        this.EGR24B = page.locator('tr:has(td:text-is("Otros gastos deducibles de los ingresos (pagados e incluyendo corrección monetaria)")) td:nth-child(4) input.form-control.n-align');
        this.EGR24C = page.locator('tr:has(td:text-is("Otros gastos deducibles de los ingresos (pagados e incluyendo corrección monetaria)")) td:nth-child(6) input.form-control.n-align');
        this.EGR24F = page.locator('tr:has(td:text-is("Otros gastos deducibles de los ingresos (pagados e incluyendo corrección monetaria)")) input.form-control-monto');
        this.EGR25B = page.locator('tr:has(td:text-is("Ajuste por partidas del inciso 1° y 3° del art. 21 de la LIR pagados")) input.form-control.n-align');
        this.EGR25F = page.locator('tr:has(td:text-is("Ajuste por partidas del inciso 1° y 3° del art. 21 de la LIR pagados")) input.form-control-monto');
        this.EGR26B = page.locator('tr:has(td:text-is("Ajuste por partidas del art. 21 inc. 1° no afectados con IU 40% y del inc. 2° LIR pagados")) input.form-control.n-align');
        this.EGR26F = page.locator('tr:has(td:text-is("Ajuste por partidas del art. 21 inc. 1° no afectados con IU 40% y del inc. 2° LIR pagados")) input.form-control-monto');
        this.EGR27H = page.locator('tr:has(td:has-text("Pérdida en rescate o enajenación de inversiones o bienes no depreciables")) td:nth-child(2) input.form-control.n-align');
        this.EGR27B = page.locator('tr:has(td:has-text("Pérdida en rescate o enajenación de inversiones o bienes no depreciables")) td:nth-child(4) input.form-control.n-align');
        this.EGR27C = page.locator('tr:has(td:has-text("Pérdida en rescate o enajenación de inversiones o bienes no depreciables")) td:nth-child(6) input.form-control.n-align');
        this.EGR27D = page.locator('tr:has(td:has-text("Pérdida en rescate o enajenación de inversiones o bienes no depreciables")) td.patpers input.form-control.n-align');
        this.EGR27E = page.locator('tr:has(td:has-text("Pérdida en rescate o enajenación de inversiones o bienes no depreciables")) td.monper1 input.form-control.n-align');
        this.EGR27F = page.locator('tr:has(td:has-text("Pérdida en rescate o enajenación de inversiones o bienes no depreciables")) input.form-control-monto');
        this.EGR28B = page.locator('tr:has(td:text-is("Créditos incobrables castigados en el ejercicio (reconocidos sobre ingresos devengados)")) td:nth-child(4) input.form-control.n-align');
        this.EGR28F = page.locator('tr:has(td:text-is("Créditos incobrables castigados en el ejercicio (reconocidos sobre ingresos devengados)")) input.form-control-monto');
        this.EGR29B = page.locator('tr:has(td:text-is("Gastos aceptados por donaciones")) td:nth-child(4) input.form-control.n-align');
        this.EGR29F = page.locator('tr:has(td:text-is("Gastos aceptados por donaciones")) input.form-control-monto');
        this.EGR30F = page.locator('tr:has(td.baseimp strong:text-is("TOTAL EGRESOS")) input.form-control-monto');
    }

    async expandirFormulario() {
        await this.btnExpand.click();
    }

    async capturarTabla(path: string) {
        await this.formEgresos.waitFor({
            state: 'visible'
        });

        await this.formEgresos.scrollIntoViewIfNeeded();
        await this.formEgresos.screenshot({
            path
        });
    }

    async LeerDatos() {
        console.log('========== DATOS WEB ==========');
        console.log('EGR1B:', await this.EGR1B.inputValue());
        console.log('EGR1F:', await this.EGR1F.inputValue());
        console.log('EGR2B:', await this.EGR2B.inputValue());
        console.log('EGR2F:', await this.EGR2F.inputValue());
        console.log('EGR3B:', await this.EGR3B.inputValue());
        console.log('EGR3F:', await this.EGR3F.inputValue());
        console.log('EGR4H:', await this.EGR4H.inputValue());
        console.log('EGR4B:', await this.EGR4B.inputValue());
        console.log('EGR4C:', await this.EGR4C.inputValue());
        console.log('EGR4D:', await this.EGR4D.inputValue());
        console.log('EGR4E:', await this.EGR4E.inputValue());
        console.log('EGR4F:', await this.EGR4F.inputValue());
        console.log('EGR5H:', await this.EGR5H.inputValue());
        console.log('EGR5B:', await this.EGR5B.inputValue());
        console.log('EGR5C:', await this.EGR5C.inputValue());
        console.log('EGR5D:', await this.EGR5D.inputValue());
        console.log('EGR5E:', await this.EGR5E.inputValue());
        console.log('EGR5F:', await this.EGR5F.inputValue());
        console.log('EGR6B:', await this.EGR6B.inputValue());
        console.log('EGR6C:', await this.EGR6C.inputValue());
        console.log('EGR6D:', await this.EGR6D.inputValue());
        console.log('EGR6E:', await this.EGR6E.inputValue());
        console.log('EGR6F:', await this.EGR6F.inputValue());
        console.log('EGR7H:', await this.EGR7H.inputValue());
        console.log('EGR7B:', await this.EGR7B.inputValue());
        console.log('EGR7C:', await this.EGR7C.inputValue());
        console.log('EGR7D:', await this.EGR7D.inputValue());
        console.log('EGR7E:', await this.EGR7E.inputValue());
        console.log('EGR7F:', await this.EGR7F.inputValue());
        console.log('EGR8H:', await this.EGR8H.inputValue());
        console.log('EGR8B:', await this.EGR8B.inputValue());
        console.log('EGR8C:', await this.EGR8C.inputValue());
        console.log('EGR8D:', await this.EGR8D.inputValue());
        console.log('EGR8E:', await this.EGR8E.inputValue());
        console.log('EGR8F:', await this.EGR8F.inputValue());
        console.log('EGR9H:', await this.EGR9H.inputValue());
        console.log('EGR9B:', await this.EGR9B.inputValue());
        console.log('EGR9C:', await this.EGR9C.inputValue());
        console.log('EGR9D:', await this.EGR9D.inputValue());
        console.log('EGR9E:', await this.EGR9E.inputValue());
        console.log('EGR9F:', await this.EGR9F.inputValue());
        console.log('EGR10B:', await this.EGR10B.inputValue());
        console.log('EGR10F:', await this.EGR10F.inputValue());
        console.log('EGR11H:', await this.EGR11H.inputValue());
        console.log('EGR11B:', await this.EGR11B.inputValue());
        console.log('EGR11C:', await this.EGR11C.inputValue());
        console.log('EGR11D:', await this.EGR11D.inputValue());
        console.log('EGR11E:', await this.EGR11E.inputValue());
        console.log('EGR11F:', await this.EGR11F.inputValue());
        console.log('EGR12H:', await this.EGR12H.inputValue());
        console.log('EGR12B:', await this.EGR12B.inputValue());
        console.log('EGR12C:', await this.EGR12C.inputValue());
        console.log('EGR12D:', await this.EGR12D.inputValue());
        console.log('EGR12E:', await this.EGR12E.inputValue());
        console.log('EGR12F:', await this.EGR12F.inputValue());
        console.log('EGR13B:', await this.EGR13B.inputValue());
        console.log('EGR13F:', await this.EGR13F.inputValue());
        console.log('EGR14B:', await this.EGR14B.inputValue());
        console.log('EGR14F:', await this.EGR14F.inputValue());
        console.log('EGR15H:', await this.EGR15H.inputValue());
        console.log('EGR15B:', await this.EGR15B.inputValue());
        console.log('EGR15C:', await this.EGR15C.inputValue());
        console.log('EGR15F:', await this.EGR15F.inputValue());
        console.log('EGR16H:', await this.EGR16H.inputValue());
        console.log('EGR16B:', await this.EGR16B.inputValue());
        console.log('EGR16C:', await this.EGR16C.inputValue());
        console.log('EGR16F:', await this.EGR16F.inputValue());
        console.log('EGR17B:', await this.EGR17B.inputValue());
        console.log('EGR17F:', await this.EGR17F.inputValue());
        console.log('EGR18B:', await this.EGR18B.inputValue());
        console.log('EGR18F:', await this.EGR18F.inputValue());
        console.log('EGR19B:', await this.EGR19B.inputValue());
        console.log('EGR19F:', await this.EGR19F.inputValue());
        console.log('EGR20B:', await this.EGR20B.inputValue());
        console.log('EGR20F:', await this.EGR20F.inputValue());
        console.log('EGR21B:', await this.EGR21B.inputValue());
        console.log('EGR21F:', await this.EGR21F.inputValue());
        console.log('EGR22B:', await this.EGR22B.inputValue());
        console.log('EGR22F:', await this.EGR22F.inputValue());
        console.log('EGR23B:', await this.EGR23B.inputValue());
        console.log('EGR23F:', await this.EGR23F.inputValue());
        console.log('EGR24H:', await this.EGR24H.inputValue());
        console.log('EGR24B:', await this.EGR24B.inputValue());
        console.log('EGR24C:', await this.EGR24C.inputValue());
        console.log('EGR24F:', await this.EGR24F.inputValue());
        console.log('EGR25B:', await this.EGR25B.inputValue());
        console.log('EGR25F:', await this.EGR25F.inputValue());
        console.log('EGR26B:', await this.EGR26B.inputValue());
        console.log('EGR26F:', await this.EGR26F.inputValue());
        console.log('EGR27H:', await this.EGR27H.inputValue());
        console.log('EGR27B:', await this.EGR27B.inputValue());
        console.log('EGR27C:', await this.EGR27C.inputValue());
        console.log('EGR27D:', await this.EGR27D.inputValue());
        console.log('EGR27E:', await this.EGR27E.inputValue());
        console.log('EGR27F:', await this.EGR27F.inputValue());
        console.log('EGR28B:', await this.EGR28B.inputValue());
        console.log('EGR28F:', await this.EGR28F.inputValue());
        console.log('EGR29B:', await this.EGR29B.inputValue());
        console.log('EGR29F:', await this.EGR29F.inputValue());
        console.log('EGR30F:', await this.EGR30F.inputValue());
        console.log('===============================');
    }

    async escribirDatos(
        datosDigitarCombinados: any[]
    ) {

        const digitarEgreso = datosDigitarCombinados
            .filter(dato => dato.Pagina === 'Egreso')
            .map(({ Codigo, Dato, Origen, Tipo }) => ({
                Codigo,
                Dato,
                Origen,
                Tipo
            }));

        console.log('======== ESCRIBIENDO DATOS DIGITAR - EGRESO ========');

        for (const dato of digitarEgreso) {

            const campo = (this as any)[dato.Codigo];

            if (!campo) {
                throw new Error(
                    `No existe el locator para el código ${dato.Codigo}. Revisar EgresoPages.ts`
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

        const esperadoEgreso = datosEsperadosCombinados
            .filter(dato => dato.Pagina === 'Egreso')
            .map(({ Codigo, Dato, Origen, Tipo }) => ({
                Codigo,
                Dato,
                Origen,
                Tipo
            }));

        console.log('======== COMPARANDO DATOS ESPERADOS - EGRESO ========');

        for (const dato of esperadoEgreso) {

            const campo = (this as any)[dato.Codigo];

            if (!campo) {
                throw new Error(
                    `No existe el locator para el código ${dato.Codigo}. Revisar EgresoPages.ts`
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
                    `NK ${dato.Codigo} | Esperado = ${esperado} | Web = ${obtenido}`
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
        await this.btnContinuar.waitFor({
            state: 'visible',
            timeout: 5000
        });
        await this.btnContinuar.click();
    }
}