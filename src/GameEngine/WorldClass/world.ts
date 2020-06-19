import {Cell} from './cell';

export class World{

    //creating singleton
    private static instance : World;

    //this will store all the cells created
    private cells : Cell[] = [];

    constructor(){

    }

    public static getInstance(){
        
        if(!World.instance){
            World.instance = new World();
        }

        return World.instance;
    }

    public generateWorld(size: number){
        //adds cell to cells array 
        //two forloops allows us to create 
        //an array of size = this.size ^ 2
        for(let i = 0; i< size; i++)
        {
            for(let j = 0; j< size; j++)
            {
                this.addCell();
            }
        }
    }

    //returns the cells of the world
    public getCells(){
        return this.cells;
    }
    //Creates a cell
    //and saves it
    //currently saves it to an array
    //an sqlite database will be implemented later
    private addCell(){
        let cell = new Cell();
        this.cells.push(cell);
    }
}