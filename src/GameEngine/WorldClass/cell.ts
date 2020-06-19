
export class Cell {

    //id of the cell
    private id: number;
    //id of the object that occupied the cell
    private occupiedId = -1;

    constructor(id : number){
        this.id = id;
    }

    public occupy(occupiedId : number){
        this.occupiedId = occupiedId;
    }

    public deOccupy(){
        this.occupiedId = -1;
    }

    public getId(){
        return this.id;
    }

    public getOccupiedId(){
        return this.occupiedId;
    }
}