import { Transform } from "./transform";
import { SubWorld } from "../WorldClass/sub_world";
import { World } from "../WorldClass/world";
import { Vector2 } from "./vector2";
import { Sprite } from "./sprite";

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
    private sprite: Sprite;

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

    public setSprite(sprite : Sprite){
        this.sprite = sprite;
    }

    public getId(){
        return this.id;
    }

    public getSprite(){
        return this.sprite;
    }

    addChild(object: GameObject) {
        this.children.push(object);
    }

    init() {
        this.sprite.setPosition(this.transform.position);
    }

    update() {
    }

}