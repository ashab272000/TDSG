import { GameObject } from "./game_object";
import { Rect } from "./rect";
import { World } from "../WorldClass/world";
import { Vector2 } from "./vector2";
import { SubWorld } from "../WorldClass/sub_world";

export class CollisionObject{

    /**
     * gameobject that collisionObject is attached to
     */
    private gameobject : GameObject;
    /**
     * id of the collision object
     * this is equal to the id of the gameobject
     */
    private id : number;
    /**
     * list of all the collisionObject instances
     */
    static collisionObjects : CollisionObject[] = [];
    /**
     * Subworld that this collisionObject is located in
     */
    public subworld : SubWorld = null;
    /**
     * This is the rect for the collision itself
     */
    private rect : Rect;
    /**
     * This rect detects which subworld to consider, for collision detection
     */
    private subworldDetectionRect: Rect;


    constructor(gameobject : GameObject){

        //create a new rect for the subworldDetectionRect
        let dSize = World.getInstance().SUBWORLDSIZE;
        this.subworldDetectionRect = new Rect(new Vector2(dSize/2, dSize/2));        

        //create rect for the collision object
        this.gameobject = gameobject;
        this.id = this.gameobject.getId();
        this.rect = new Rect(gameobject.transform.size);
        //position of rect = position of gameobject
        this.rect.position = gameobject.transform.position;
        this.rect.updateVertices();

        //add the collisionObject to the collisionObjects Array
        CollisionObject.collisionObjects.push(this);
    }

    public getGameObject(){
        return this.gameobject;
    }

    public getRect(){
        return this.rect;
    }

    public getId(){
        return this.id;
    }

    public updateRectPositon(){
        this.rect.updateVertices();
    }

    public update(){
        this.updateRectPositon();
    }


    /**
     * This detects the subworld it should consider when comparing gameobjects
     * then we would take the gameobjects that are in those subworld, and compare for collision
     * detection
     * 
     * @returns a list of subworlds
     */
    public subworldDetection(){
        let posX = this.subworldDetectionRect.size.x/2;
        let posY = this.subworldDetectionRect.size.y/2;

        //update the vertices after setting the position of the rect
        this.subworldDetectionRect.position = Vector2.substract(this.gameobject.transform.position, new Vector2( posX, posY));
        this.subworldDetectionRect.updateVertices();

        //get the vertices of the rect which is positioned 
        let vertices = this.subworldDetectionRect.getVertices();
        //we will save the subworlds to consider in this variable
        let subworldsToDetect : SubWorld[] = [];

        //iterate through all the vertices 
        //each vertex will detect the subworld
        //and save them on th array defined above
        for(let vertex of vertices){
            
            let subworld = World.getInstance().getSubWorldWithUnits(vertex);
            if(subworld != null)
            {
                if(!subworldsToDetect.includes(subworld)){
                    subworldsToDetect.push(subworld);
                }
            }
        }

        return subworldsToDetect;
        
    }

    public isColliding(){
        let subworldsToConsider = this.subworldDetection();
        let collidingObjects = [];

        //iterate through all the subworlds we need to consider for collision detection
        for(let subworld of subworldsToConsider){
            //iterate through all the collisionObjects
            for(let other of subworld.getCollisionObjects()){

                if(other != this)
                {
                    if(this.isCollidingWithObject(other)){
                        collidingObjects.push(other);
                    }
                }
            }
        }

        return collidingObjects;
    }

    /**
     * Checks if a given vertex (not a vertex from the current collisionObject) is inside the collision boundary
     * @param vertex 
     */
    public isCollidingWithObject(other : CollisionObject) {

        for (let element of other.getRect().getVertices()){
            let result = this.isCollidingWithVertex(element);
            if(result == true)
            {
                return true;
            }
        }

        return false;
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