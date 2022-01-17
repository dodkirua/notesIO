import {Elements} from "./_abstract/Elements";
import {Appendable} from "./_abstract/Appendable";

export class DivElement extends Elements implements Appendable{
    public constructor(classeList : string[] = [], id : string = '') {
        super('div', classeList, id);
    }
}