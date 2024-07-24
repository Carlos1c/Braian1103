export default class estudiantes{
    constructor(nombre, edad, sexo){
        this.nombre=nombre;
        this.edad=edad;
        this.sexo=sexo;
    }

    set edad (e){
        this.nombres= +e;
    }

    get edad (){
        return this.nombres;
    }
}