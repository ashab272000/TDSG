
import {SubWorld} from './sub_world';
import { GameObject } from '../GameObject/game_object';
import { Vector2 } from '../GameObject/vector2';
import { CollisionObject } from '../GameObject/collision/collision';
import { Camera } from '../canvas/camera';

export class World{

    //unitToPixelConversionRate
    public PIXELUNIT = 25;

    //creating singleton
    private static instance : World;

    //size of the world
    private size: number = 25;

    //this will store all the cells created
    private subworlds : SubWorld[] = [];

    /**
     * Size of each subworld
     * defined by a constant
     */
    public SUBWORLDSIZE = 10;

    /**
     * Number of subworlds in rows
     * Note: Number of rows = Number of Columns
     * Therfore, subworldRows^2 = total number of subworlds
     */
    private subworldRows = 0;

    private mainCamera : Camera;

    constructor(){
        this.mainCamera = Camera.fullScreenCanvas();
    }

    public static getInstance(){
        
        if(!World.instance){
            World.instance = new World();
        }

        return World.instance;
    }

    public generateWorld(size: number){
        this.size = size;
        //adds cell to cells array 
        //two forloops allows us to create 
        //an array of size = this.size ^ 2
        this.subworldRows = Math.ceil(size / this.SUBWORLDSIZE);
        let totalSubWorlds =  Math.pow( this.subworldRows , 2);

        for(let i = 0; i< totalSubWorlds; i++)
        {
            this.subworlds.push(new SubWorld(i));   
        }
    }

    
    public init(){
        //inititalizes all the gameobjects

        GameObject.gameObjects.forEach(element => {
            element.init()   
        });

        CollisionObject.collisionObjects.forEach(el => {
            this.assignSubworld(el);
            el.update();
        })
    }

    public update(fps : number = 25){
        //40ms = 25fps
        //This function runs an interval throughout the game
        //it updates all the gameobjects with their update functions
        //get the time interval for the update loop
        const intervalTime = 1000/fps;
        setInterval( () => {
            GameObject.gameObjects.forEach(element => {
                element.update();  
                this.mainCamera.drawGameObject(element);
            });
            CollisionObject.collisionObjects.forEach(el => {
                this.assignSubworld(el);
                el.update();
            });
        }, intervalTime)
    }

    /**
     * Get the subworld with the parameter being a vector2
     * @param vector2 
     * @returns null if does not exist or the subworld if exist
     */
    public getSubWorldWithUnits(vector2 : Vector2){

        const ynum = Math.floor(vector2.y / this.SUBWORLDSIZE);
        const xnum = Math.floor(vector2.x / this.SUBWORLDSIZE);
        const subworldId = (ynum * this.subworldRows) + xnum;
        if(subworldId < 0 && subworldId >= this.subworlds.length)
        {
            return null;
        }else{
            return this.subworlds[subworldId];
        }

    }

    //returns the size of the world
    public getSize(){
        return this.size;
    }

    public getSubWorlds(){
        return this.subworlds;
    }

    public clearWorld(){
        for(let i = 0; i < this.subworlds.length; i++)
        {
            delete this.subworlds[i];
        }
        this.subworlds = [];
    }

    public clearAllGameObjects(){
        
        for(let i = 0; i <  GameObject.gameObjects.length; i++)
        {
            delete GameObject.gameObjects[i];
        }
        GameObject.gameObjects = [];
        GameObject.nextId = 0;
    } 

    public clearAllCollisionObjects(){
        
        for(let i = 0; i <  CollisionObject.collisionObjects.length; i++)
        {
            delete CollisionObject.collisionObjects[i];
        }
        CollisionObject.collisionObjects = [];
    } 

    public test_assignSubworld(collisionObject : CollisionObject){
        this.assignSubworld(collisionObject);
    }

    private assignSubworld(collisionObject : CollisionObject){

        //gameobject of the collisionObject
        let gameObject = collisionObject.getGameObject();
        //position of the gameobject
        let pos = gameObject.transform.position;
        //subworld of the gameobject
        let subworld = this.getSubWorldWithUnits(pos);
        //if subworld exists
        //  check if their subworld == the new calcualted subworld
        //  if not same : change subworld to the new calculated subworld
        //else
        //calculate and assign subworld to collisionObject

        if(collisionObject.subworld != null || collisionObject.subworld != undefined)
        {
            if(subworld != collisionObject.subworld){
                collisionObject.subworld.removeCollisionObject(collisionObject);
                subworld.addCollisionObject(collisionObject);
                collisionObject.subworld = subworld;
            }
            
        }else{
            subworld.addCollisionObject(collisionObject);
            collisionObject.subworld = subworld;
        }
    }

}