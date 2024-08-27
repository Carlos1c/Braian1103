export default class dinero {
    constructor() {
         this.ctsobres=0;
           
         this.Svalor=0; 
    }

    procesarsobres(c){
        this.Svalor = c.valor * c.cantidad;

        

        this.ctsobres += this.Svalor;
    }

    

    sobres(){
        return this.ctsobres;
    }
}