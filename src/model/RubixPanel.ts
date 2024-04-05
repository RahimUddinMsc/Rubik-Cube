import IRubixPanel from "../interfaces/IRubixPanel";

class RubixPanel implements IRubixPanel{    
    readonly id: symbol;
    value: string;
    display: string;

    constructor(value:string, display:string){
        this.id = Symbol();
        this.value = value;
        this.display = display
    }
}

export default RubixPanel;