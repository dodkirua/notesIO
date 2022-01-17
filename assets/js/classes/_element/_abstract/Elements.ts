import {Appendable} from "./Appendable";

//type Appendable = Elements | HElement | IconElement | AddTask | BottomText | Task;

export abstract class Elements implements Appendable{
    private element : HTMLElement;
    private classes : string[];
    private id : string;


    /**
     * constructor
     * @param elt
     * @param classeList
     * @param ID
     */
    protected constructor(elt: string, classeList : string[] = [], ID: string = '') {
        this.element = document.createElement(elt);
        this.modClasses(classeList);
        this.classes = [...classeList];
        this.id = ID;
    }

    /**
     * get the element
     */
    public getElement() : HTMLElement {
        return this.element;
    }

    /**
     * set the element
     * @param elem
     */
    public setElement(elem : HTMLElement) : Elements{
        this.element = elem;
        return this;
    }

    /**
     * get the classList
     */
    public getClasses() : string[] {
        return this.classes;
    }

    /**
     * set the classes list
     * @param classesList
     */
    public setClasses(classesList : string[]) : Elements {
        this.modClasses(classesList);
        return this;
    }

    /**
     * get id
     */
    public getId() : string {
        return this.id;
    }

    /**
     * set the id
     * @param ID
     */
    public setId(ID : string) : Elements {
        this.id = ID;
        return this;
    }

    /**
     * append a html element
     * @param elt
     */
    public append(elt : Appendable) {
        this.element.append(elt.getElement());
    }

    /**
     * append a list of html element
     * @param elt
     */
    public appends(elt : Appendable[]) {
        for (let i = 0 ; i < elt.length ; i++) {
            this.element.append(elt[i].getElement());
        }

    }

    /**
     * remove class from element and change with the new
     * @param classList
     * @private
     */
    protected modClasses(classList : string[]) {
        this.element.classList.remove(...this.classes);
        this.classes = [...classList];
        this.element.classList.add(...this.classes);
    }


}