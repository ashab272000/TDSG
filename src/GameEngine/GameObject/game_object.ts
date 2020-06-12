import { Transform } from "./transform";

export class GameObject {
    //saves all the GameObject instances
    public static gameObjects : GameObject[];
    //static number, which will provide id
    //for every gameobject starting from 0
    public static nextId : number;
    //id of the gameobject
    private id: number;
    //transform of the gameobject
    //deals with the position and rotation of gameobject
    public transform: Transform;
    //children of the gameobject
    public children: GameObject[];
    //isEnabled will allow us to have a gameobject in the world
    //but not active
    public isEnabled: boolean;

    constructor() {
        this.id = GameObject.nextId;
        this.transform = new Transform();
        this.children = [];
        this.isEnabled = true;

        //add the instance of a GameObject
        //to the static gameobject
        GameObject.gameObjects.push(this);
        //increment the nextId
        GameObject.nextId++;
    }

    addChild(object: GameObject) {
        this.children.push(object);
    }

    init() {

    }

    update() {

    }

}