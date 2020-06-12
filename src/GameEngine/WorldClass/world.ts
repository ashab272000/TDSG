import {Cell} from './cell';

export class World{

    //size of the world
    //if size = 25
    //world will generate 25x25 unit area for the world
    private size = 0;
    //this will store all the cells created
    private cells : Cell[];

    constructor(size : number){
        this.size = size;
        this.generateWorld();
    }

    private generateWorld(){
        //adds cell to cells array 
        //two forloops allows us to create 
        //an array of size = this.size ^ 2
        for(let i = 0; i< this.size; i++)
        {
            for(let j = 0; j< this.size; j++)
            {
                this.addCell();
            }
        }
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