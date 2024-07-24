export default class salon{
    constructor(){
        this.acpedad =0;
        this.edadpro=0;
        this.estudmayor=0;
        this.chicamayor=0;
        this.adchicas=0;
        this.edadmayor=0;
        this.num=0;
    }

    procesarestudiantes(e){
        this.edadpro += e.edad;
        this.acpedad++

        if(e.edad >= this.estudmayor){
            this.edadmayor++
            if(e.edad >= this.estudmayor){
                this.estudmayor = e.edad;
            }
        }

        if(e.edad == this.estudmayor){
            this.num = e.nombre;

        }
        

        if((e.edad >= 18) && (e.sexo == "F")){
            this.chicamayor++

        }if(e.sexo == "F"){
            this.adchicas++
        }
 
    }

    promedio(){
        return this.edadpro / this.acpedad;
    }

    mayoredad(){
        return this.num;
    }

    chicasmayor(){
        return (this.chicamayor / this.adchicas) * 100;
    }
}
