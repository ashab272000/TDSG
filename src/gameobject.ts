class transformObject {
    position: number[];
    rotation: number;

    constructor(xpos: number, ypos: number, rotation: number) {
        this.position = [xpos, ypos];
        this.rotation = rotation;
    }

    translate(x: number, y: number) {
        this.position[0] += x;
        this.position[1] += y;
    }

    rotate(degree: number) {
        this.rotation += degree;
    }
}

class gameObject {
    id: number;
    transform: transformObject;
    children: gameObject[];
    isEnabled: boolean;

    constructor(gid: number, xpos: number, ypos: number, rotation: number, isEnabled: boolean) {
        this.id = gid;
        this.transform = new transformObject(xpos, ypos, rotation);
        this.children = [];
        this.isEnabled = isEnabled;
    }

    addChild(object: gameObject) {
        this.children.push(object);
    }

}