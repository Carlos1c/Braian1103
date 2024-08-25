export default class dinero {
    constructor() {
         this.ctsobres=0;
         this.total=0;  
         this.Svalor=0; 
    }

    procesarsobres(c){
        this.Svalor = c.valor * c.cantidad;

        this.total = this.Svalor;

        this.ctsobres += this.Svalor;
    }

    totales(){
        return this.total;
    }

    sobres(){
        return this.ctsobres;
    }
}