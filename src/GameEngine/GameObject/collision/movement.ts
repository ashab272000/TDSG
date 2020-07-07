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

    /**
     * moves the collision object to certain position
     * @param vector2 
     */
    public moveTo(vector2 : Vector2){

        let pos = this.gameObject.transform.position;
        let prePos = new Vector2(pos.x, pos.y);
        
        if(this.canMove(vector2))
        {
            this.gameObject.transform.setPosition(vector2);
            this.collisionObject.updateRectPositon();

            let others = this.collisionObject.isColliding();
            if(others.length > 0)
            {

                let vertex = this.collisionObject.getFirstVetexCollided(others[0].getRect());
                //check the movement of the object, for example, is it left, right, up or down?
                if(Math.abs(pos.x - prePos.x) > Math.abs(pos.y - prePos.y))
                {
                    if(pos.x > prePos.x)
                    {
                        let diffX = vertex.x - pos.x;
                        let translateX = this.gameObject.transform.size.x - diffX;
                        this.gameObject.transform.translate(-translateX, 0);
                    }else{
                        let translateX = vertex.x - pos.x;
                        this.gameObject.transform.translate(translateX, 0);

                    }
                }else{
                    console.log('Y axis')
                    if(pos.y > prePos.y)
                    {
                        let diffY = vertex.y - pos.y;
                        let translateY = this.gameObject.transform.size.y - diffY;
                        this.gameObject.transform.translate(0, -translateY);
                    }else{
                        let translateY = vertex.y - pos.y;
                        this.gameObject.transform.translate(0, translateY);

                    }
                }

                this.collisionObject.updateRectPositon();
            }
            
        }
    }


    public translate(vector2 : Vector2){

        let translatedPos = Vector2.add(this.gameObject.transform.position, vector2);
        this.moveTo(translatedPos);
        
    }
}