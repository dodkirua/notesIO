import {ElementsValue} from "./ElementsValue";
import {Appendable} from "./_abstract/Appendable";


export class PElement extends ElementsValue implements Appendable{
    
    constructor(val :string, classList : string[] = [], id : string = '') {
        super('p', val, classList, id);
    }

}