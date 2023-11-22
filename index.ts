 class Person {
    name: string;
    redditoannuoordo: number;

    constructor(_name:string, _redditoannuo:number){
        this.name = _name;
        this.redditoannuoordo = _redditoannuo;
    }

    display(): void{
        console.log(this.name + " ha guadagnato (lordo) " + this.redditoannuoordo + "€")
    }
}


class Tax extends Person {
    codredd:number = 78;
    tasseinps:number;
    tasseirpef:number;
    utile:number;

    constructor(_name:string, _redditoannuo:number){
        super(_name, _redditoannuo)
        this.name = _name;
        this.redditoannuoordo = _redditoannuo;
    }

    getUtileTasse():number{
        let utile:number = (this.redditoannuoordo*this.codredd)/100;
        return utile;
    }

    getTasseInps():number{
        let utileTasse:number = this.getUtileTasse();
        let tassainps:number=0;
        if(utileTasse <= 15000){
            tassainps = (utileTasse*23)/100
        }else if(utileTasse > 15000 && utileTasse <= 28000){
            tassainps = (utileTasse*27)/100
        }else if(utileTasse > 28000 && utileTasse <= 55000){
            tassainps = (utileTasse*38)/100
        }else if(utileTasse > 55000){
            tassainps = (utileTasse*41)/100
        }   

        return tassainps;
    }

    getTasseIrpef():number{
        let utileTasse:number = this.getUtileTasse();
        let tassairpef:number = 0;
        if(utileTasse <= 15000){
            tassairpef = (utileTasse*23)/100
        }else if(utileTasse > 15000 && utileTasse <= 28000){
            tassairpef = (utileTasse*25)/100
        }else if(utileTasse > 28000 && utileTasse <= 50000){
            tassairpef = (utileTasse*35)/100
        }else if(utileTasse > 50000){
            tassairpef = (utileTasse*43)/100
        }   

        return tassairpef;
    }


    getRedditoAnnuoNetto():number{
        let utile = this.getUtileTasse()
        let inps = this.getTasseInps()
        let Irpef = this.getTasseIrpef()
        let redditoNetto: number = utile-inps-Irpef;
        return redditoNetto;
    }

}

let rizzo = new Tax("Rizzo", 20000);
rizzo.display()

console.log("Utile tasse:",rizzo.getUtileTasse());
console.log("Tasse Inps:",rizzo.getTasseInps());
console.log("Tasse Irpef:",rizzo.getTasseIrpef());
console.log("Rizzo guadagnerà:",rizzo.getRedditoAnnuoNetto());