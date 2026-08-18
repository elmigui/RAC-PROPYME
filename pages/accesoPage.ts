import { Page, Locator, expect } from '@playwright/test';

export class AccesoPage {
    readonly page: Page;
    readonly loginClaveTributaria: Locator;
    readonly txtRut: Locator;
    readonly txtClave: Locator;
    readonly btnMostrarClave: Locator;
    readonly btnIngresar: Locator;
    readonly btnSiguiente: Locator;
    readonly btnNuevaInformacion: Locator;
    readonly linkIrAsistente: Locator;

    constructor(page: Page) {
        this.page = page;
        this.loginClaveTributaria = page.locator('#loginClaveTributaria');
        this.txtRut = page.getByRole('textbox', {name: 'Ej: 12345678-'});
        this.txtClave = page.getByRole('textbox', {name: 'Ingresa tu Clave Tributaria'});
        this.btnMostrarClave = page.locator('#btn-passwordHidden');
        this.btnIngresar = page.getByRole('button', {name: 'Ingresar'});
        this.btnSiguiente = page.getByRole('button', {name: 'Siguiente'});
        this.btnNuevaInformacion = page.getByRole('button', {name: 'Nueva información'});
        this.linkIrAsistente = page.getByRole('link', {name: 'Ir al Asistente'});
    }

    async goTo() {
        await this.page.goto(
            'https://www2qa.sii.cl/bifurcacion/?originalUrl=https://www2qa.sii.cl/asistente-propyme&type=CT'
        );
        await this.loginClaveTributaria.click();
    }

    async ingresarCredenciales(rut: string, clave: string) {
        await this.txtRut.fill(rut);
        await this.txtClave.fill(clave);
        await this.btnMostrarClave.click();
    }

    async iniciarSesion() {
        await this.btnIngresar.click();
    }

    async irAlAsistente() {
        await this.btnSiguiente.click();
        await this.btnNuevaInformacion.click();
        await this.linkIrAsistente.click();
    }

}