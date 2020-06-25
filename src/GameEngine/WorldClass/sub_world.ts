import { GameObject } from "../GameObject/game_object";


export class SubWorld {

    //stores the gameobjects that are in the sub world
    private gameObjects: GameObject[] = [];

    private size: number  = 10;

    private id: number;

    constructor(id : number){
        this.id = id;
    }

    public addGameObject(gameObject : GameObject){ 
        this.gameObjects.push(gameObject);
    }

    public removeGameObject(gameObject : GameObject){
        delete this.gameObjects[this.gameObjects.indexOf(gameObject)];
    }

    public getId(){
        return this.id;
    }

}