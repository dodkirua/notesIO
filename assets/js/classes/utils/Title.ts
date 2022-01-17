import {DivElement} from "../_element/DivElement";
import {HElement} from "../_element/HElement";
import {Appendable} from "../_element/_abstract/Appendable";


export class Title implements Appendable{
    private div : DivElement;
    private title : HElement;

    /**
     * constructor
     * @param title
     */
    constructor(title : string) {
        this.div = new DivElement();
        this.title = new HElement(title,1,['title']);
        this.div.append(this.title);
    }

    public getElement(): HTMLElement {
        return this.div.getElement();
    }

    /**
     * set the title
     * @param title
     */
    public setTitle (title : string) {
        this.title.setValue(title);
    }
}