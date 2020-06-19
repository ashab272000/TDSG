import { Position } from "./position";
import { World } from "../WorldClass/world";

export class Transform {
    public position: Position;
    public rotation: number;
    private cellId: number;

    constructor() {
        this.position = new Position();
        this.rotation = 0;
    }

    public translate(x: number, y: number) {
        this.position.x += x;
        this.position.y += y;
        this.cellId = this.calculateCellId();
    }

    public rotate(degree: number) {
        this.rotation += degree;
    }

    public getCellId(){
        return this.cellId;
    }

    private calculateCellId(){
        //calculate the cell where the transform is
        //by using the x and y values
        
        let worldSize = World.getInstance().getSize();
        let y = Math.floor(this.position.y)  * worldSize;
        let cellId = y + Math.floor(this.position.x);

        return cellId;
    }



}