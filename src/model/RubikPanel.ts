import IRubikPanel from "../interfaces/IRubikPanel";

class RubikPanel implements IRubikPanel{        
    value: string;
    display: string;

    constructor(value:string, display:string){        
        this.value = value;
        this.display = display        
    }
}

export default RubikPanel;