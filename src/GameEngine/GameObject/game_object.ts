import { Transform } from "./transform";

export class GameObject {
    private _id: number;
    public transform: Transform;
    public children: GameObject[];
    public isEnabled: boolean;

    constructor() {
        this._id = 0;
        this.transform = new Transform();
        this.children = [];
        this.isEnabled = true;
    }

    addChild(object: GameObject) {
        this.children.push(object);
    }

    init() {

    }

    update() {

    }

}