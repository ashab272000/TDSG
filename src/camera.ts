class camera {
    id: number;
    transform: transformObject;
    canvasSize: number[];
    children: gameObject[];

    constructor(id: number, xpos: number, ypos: number, degree: number) {
        this.id = id;
        this.transform = new transformObject(xpos, ypos, degree);
        this.canvasSize = [xpos, ypos];
        this.children = [];
    }

    addChild(object: gameObject) {
        this.children.push(object);
    }
    // my idea isthat player is assigned an camera object, there is a field called "cells" or something which is and
    // int that basically says "yo these are the cells that the camera can see right now" then when the player
    // moves or whatever we change the cells its looking at. We render only the things in the range of dem cells.s
}