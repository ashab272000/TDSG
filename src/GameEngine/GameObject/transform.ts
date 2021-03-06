import { Vector2 } from "./vector2";
import { World } from "../WorldClass/world";

export class Transform {
    public position: Vector2;
    public rotation: number;
    public size : Vector2;

    constructor() {
        this.position = new Vector2();
        this.size = new Vector2(1, 1);
        this.rotation = 0;
    }

    public translate(x: number, y: number) {
        this.position.x += x;
        this.position.y += y;
    }

    public rotate(degree: number) {
        this.rotation += degree;
    }

    public setPosition(vector2 : Vector2){
        this.position.x = vector2.x;
        this.position.y = vector2.y;
    }

    public inherit(parent : Transform){
        this.position = parent.position;
        this.size = parent.size;
    }

}