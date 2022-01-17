import {DivElement} from "../_element/DivElement";
import {Appendable} from "../_element/_abstract/Appendable";
import {HElement} from "../_element/HElement";

export class Display implements Appendable{
    private div : DivElement;
    private title : HElement;
    /**
     * constructor
     */
    constructor() {
        this.div = new DivElement();
        this.title = new HElement('Vos notes');

    }


    public getElement(): HTMLElement {
        return this.div.getElement();
    }
}