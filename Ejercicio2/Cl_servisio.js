export default class servisio{
    constructor(){
       this.acmayoredad=0;
       this.menoredad=0;
       this.acedad=0;
       this.promedio=0;
       this.usuar=0; 
       this.clienF=0;
    }

    procesarclientes(e){
        this.clienF += e.edad;
        this.usuar++

        if((e.sexo == "F") && (e.edad >= 18)){
            this.acedad++
        } 

       
            this.menoredad = e.edad;
            if(e.edad <= this.menoredad){
                this.menoredad = e.edad;
            }

        
    }

    canticlientes(){
        return this.acedad;
    }

    menoredades(){
        return this.menoredad;
    }

    promedioedad(){
        return this.clienF / this.usuar;
    }
}
