export default class clientes{
    constructor(nombre, edad, sexo, tiposer,){
        this.nombre =nombre;
        this.edad =edad;
        this.sexo =sexo;
        this.tiposer =tiposer;
    }

    set edad (e){
        this.edades = +e
    }

    get edad (){
        return this.edades;
    }
}