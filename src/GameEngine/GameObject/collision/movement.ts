import { CollisionObject } from "./collision";
import { GameObject } from "../game_object";
import { Vector2 } from "../vector2";
import Rect from "../rect";


/**
 * Allows movement for instances of CollisionObjects
 * To move without using a CollisionObject, please use GameObject.transform  
 */
export class Movement{

    private collisionObject : CollisionObject;
    private gameObject : GameObject;
    
    constructor(collisionObject: CollisionObject)
    {
        this.collisionObject = collisionObject;
        this.gameObject = collisionObject.getGameObject();
    }

    /**
     * Takes a vector2 as a parameter, that is assumed as the next location of the
     * gameobject
     * @param vector2 
     */
    public canMove( vector2 : Vector2){
        //this stores the collisionObjects that are colliding with the currenct collisionObject
        let others = this.collisionObject.isColliding();

        //create a temporary rect for calculation
        //this tempRect is used to identify if the next move is colliding with
        //a collisionObject.
        let tempRect = new Rect(this.collisionObject.getRect().size);
        tempRect.position = vector2;
        tempRect.updateVertices();

        let result = true;
    
        for(let other of others)
        {
            //let isCollided = other.isCollidingWithRect(tempRect);
            let isCollidedInsideRect = other.isCollidingWithRectInsideRect(tempRect);
            console.log(`isCollidedInsideRect: ${isCollidedInsideRect}`);

            if(isCollidedInsideRect == true)
            {
                result = false;
                break;
            }

        }

        return result;

    }
}