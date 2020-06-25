
import {SubWorld} from './sub_world';
import { GameObject } from '../GameObject/game_object';

export class World{

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
    private SUBWORLDSIZE = 10;

    /**
     * Number of subworlds in rows
     * Note: Number of rows = Number of Columns
     * Therfore, subworldRows^2 = total number of subworlds
     */
    private subworldRows = 0;

    constructor(){

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
    }

    public update(fps : number = 25){
        //40ms = 25fps
        //This function runs an interval throughout the game
        //it updates all the gameobjects with their update functions
        //get the time interval for the update loop
        const intervalTime = 1000/fps;
        setInterval( () => {
            GameObject.gameObjects.forEach(element => {
                element.update()   
            });
        }, intervalTime)
    }


    public getSubWorldWithUnits(x : number, y : number){

        const ynum = Math.floor(y / this.SUBWORLDSIZE);
        const xnum = Math.floor(x / this.SUBWORLDSIZE);
        const subworldId = (ynum * this.subworldRows) + xnum;
        return this.subworlds[subworldId];

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
    } 

}