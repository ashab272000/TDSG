import { GameObject } from "./game_object";
import { Rect } from "./rect";
import { World } from "../WorldClass/world";
import { Vector2 } from "./vector2";

export class CollisionObject{

    private gameobject : GameObject;
    private rect : Rect;

    constructor(gameobject : GameObject){
        
        this.gameobject = gameobject;
        this.rect = new Rect(gameobject.transform.size);
        this.rect.position = gameobject.transform.position;
        this.rect.updateVertices();
    }

    public getGameObject(){
        return this.gameobject;
    }

    public getRect(){
        return this.rect;
    }

    /**
     * Returns the area of the collision object
     * 
     * This area represents the collision detection boundary of the object
     */
    public getCollisionRect(){
        return []
    }

    public updateRectPositon(){
        this.rect.updateVertices();
    }


    /**
     * This detects the subworld it should consider when comparing gameobjects
     * then we would take the gameobjects that are in those subworld, and compare for collision
     * detection
     */
    public subworldDetection(){
        let detectionSize = World.getInstance().SUBWORLDSIZE/2;
        //let detection
        
        
    }

    /**
     * Checks if a given vertex (not a vertex from the current collisionObject) is inside the collision boundary
     * @param vertex 
     */
    public isCollidingWithObject(other : CollisionObject) {

        for (let element of other.getRect().getVertices()){
            let result = this.isCollidingWithVertex(element);
            console.log(result);
            if(result == true)
            {
                return true;
            }
        }
    }

    public isCollidingWithVertex(otherVertex : Vector2)
    {
        let left = this.getRect().getVertices()[0].x;
        let right = this.getRect().getVertices()[1].x;
        let top = this.getRect().getVertices()[1].y;
        let bottom = this.getRect().getVertices()[2].y;
        if(left <= otherVertex.x && otherVertex.x <= right && top <= otherVertex.y && otherVertex.y <= bottom){
            return true;
        }
        return false;
    }

}