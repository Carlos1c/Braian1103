export default class sobres {
    constructor(cantidad,valor) {
        this.cantidad=cantidad;
        this.valor=valor;

    }

    set cantidad(c) {
        this._cantidad = c;
    }

    get cantidad() {
        return this._cantidad;
    }

    totalDinero() {
        return this.cantidad * this.valor;
    }
}