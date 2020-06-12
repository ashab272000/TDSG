
export class Cell {

    //id of the cell
    private id: number;
    //id of the object that occupied the cell
    private occupiedId = -1;
    //static number
    //this keeps count of all the cells created
    //when a cell is created, cellsCount is incremented
    static cellsCount : number = 0;

    constructor(){
        //this two lines of code will allow us to have 
        //incremented id for each of the cells created
        //first cell will be 0,
        //second cell will be 1,
        //nth cell will be n-1,
        this.id = Cell.cellsCount;
        Cell.cellsCount++;
    }

    public occupy(occupiedId : number){
        this.occupiedId = occupiedId;
    }

    public deOccupy(){
        this.occupiedId = -1;
    }
}