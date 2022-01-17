import {ElementsValue} from "./ElementsValue";
import {Appendable} from "./_abstract/Appendable";

export class HElement extends ElementsValue implements Appendable{
    
    /**
     * constructor
     * @param val
     * @param level
     * @param classList
     * @param id
     */
    constructor(val : string, level : number = 1, classList : string[] = [], id : string = '') {
        if (level > 6){
            level = 6;
        }
        super('h' + level.toString() ,val, classList, id);        
    }

   
}