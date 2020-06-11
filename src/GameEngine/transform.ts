export class Transform {
    position: Position;
    rotation: number;

    constructor() {
        this.position = new Position();
        this.rotation = 0;
    }

    translate(x: number, y: number) {
        this.position.xpos += x;
        this.position.ypos += y;
    }

    rotate(degree: number) {
        this.rotation += degree;
    }
}