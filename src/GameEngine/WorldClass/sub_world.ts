import { GameObject } from "../GameObject/game_object";
import { CollisionObject } from "../GameObject/collision";


export class SubWorld {

    //stores the CollisionObjects that are in the sub world
    private collisionObjects: CollisionObject[] = [];

    private size: number  = 10;

    private id: number;

    constructor(id : number){
        this.id = id;
    }

    public addCollisionObject(collisionObjects : CollisionObject){ 
        this.collisionObjects.push(collisionObjects);
    }

    public removeCollisionObject(collisionObjects : CollisionObject){
        let index = this.collisionObjects.indexOf(collisionObjects);
        return this.collisionObjects.splice(index,1)[0];
    }

    public contains(collisionObjects : CollisionObject){
        return this.collisionObjects.includes(collisionObjects);
    }

    public getCollisionObjects(){
        return this.collisionObjects;
    }

    public getId(){
        return this.id;
    }

}