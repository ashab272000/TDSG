import { Transform } from "./transform";



export class GameObject {
    id: number;
    transform: Transform;
    children: GameObject[];
    isEnabled: boolean;

    constructor(id: number, xpos: number, ypos: number, rotation: number, isEnabled: boolean) {
        this.id = id;
        this.transform = new Transform();
        this.children = [];
        this.isEnabled = isEnabled;
    }

    addChild(object: GameObject) {
        this.children.push(object);
    }

    init(){

    }

    update(){
        
    }

}