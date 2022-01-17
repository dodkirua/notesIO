import {Elements} from "./_abstract/Elements";
import {Appendable} from "./_abstract/Appendable";


export class ElementsValue extends Elements implements Appendable{
    private value : string;

    /**
     * constructor
     * @param element
     * @param val
     * @param classList
     * @param id
     */
    constructor(element : string, val : string, classList : string[] = [], id : string = '') {
        super(element, classList, id);
        this.value = val;
        this.getElement().innerHTML = this.value;
    }

    /**
     * get value
     */
    public getValue () : string {
        return this.value;
    }

    /**
     * set value
     * @param val
     */
    public setValue (val : string) : Elements {
        this.value = val;
        this.getElement().innerHTML = this.value;
        return this
    }
}