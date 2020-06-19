import { Position } from "./position";

export class Transform {
    public position: Position;
    public rotation: number;

    constructor() {
        this.position = new Position();
        this.rotation = 0;
    }

    translate(x: number, y: number) {
        this.position.x += x;
        this.position.y += y;
    }

    rotate(degree: number) {
        this.rotation += degree;
    }
}