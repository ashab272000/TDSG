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
        let index = this.gameObjects.indexOf(gameObject);
        return this.gameObjects.splice(index,1)[0];
    }

    public contains(gameObject : GameObject){
        return this.gameObjects.includes(gameObject);
    }

    public getGameobjects(){
        return this.gameObjects;
    }

    public getId(){
        return this.id;
    }

}