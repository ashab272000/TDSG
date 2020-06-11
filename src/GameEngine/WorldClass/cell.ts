
class Cell {

    private _id: number;
    private _occupiedId = -1;

    constructor(id: number){
        this._id = id;
    }

    public occupy(){
        
    }

    public deOccupy(){
        this._occupiedId = -1;
    }
}