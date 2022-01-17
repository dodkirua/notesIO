import {Elements} from "./_abstract/Elements";
import {Appendable} from "./_abstract/Appendable";


export class IconElement extends Elements implements Appendable{

    constructor(classList : string[] = [], id : string = '') {
        super('i',classList, id);
    }
}