import { Transform } from "./transform";
import { SubWorld } from "../WorldClass/sub_world";
import { World } from "../WorldClass/world";
import { Vector2 } from "./vector2";

export class GameObject {
    //saves all the GameObject instances
    public static gameObjects : GameObject[] = [];
    //static number, which will provide id
    //for every gameobject starting from 0
    public static nextId : number = 0;
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

    //this is the image or sprite of the gameobject
    private image: HTMLImageElement;

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

    public setImage(src : string){
        const pixelSize = World.getInstance().PIXELUNIT;
        this.image = new Image(this.transform.size.x * pixelSize, this.transform.size.y * pixelSize);
        this.image.src = src;
    }

    public pixelSizeToUnit(vector2 : Vector2){
        let newVector = new Vector2(vector2.x/ World.getInstance().PIXELUNIT, vector2.y/World.getInstance().PIXELUNIT);
        return newVector;
    }

    public getId(){
        return this.id;
    }

    getImage(){
        return this.image;
    }

    addChild(object: GameObject) {
        this.children.push(object);
    }

    init() {

    }

    update() {

    }

}