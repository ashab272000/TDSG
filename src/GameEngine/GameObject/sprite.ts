import { Transform } from "./transform";
import { Vector2 } from "./vector2";


export class Sprite extends Transform{

    private image: HTMLImageElement;

    private sourcePos : Vector2;
    private sourceSize : Vector2;

    constructor(src : string, pixelSize: Vector2){
        super();
        this.image = new Image(pixelSize.x, pixelSize.y);
        this.image.src = src;
        this.sourcePos = new Vector2(0, 0);
        this.sourceSize = pixelSize;
    }

    public getImage(){
        return this.image;
    }

    public getSourcePos(){
        return this.sourcePos;
    }

    public getSourceSize() {
        return this.sourceSize;
    }

    public setSourcePos(vector2 : Vector2){
        this.sourcePos = vector2;
    
    }
    public setSourceSize(vector2 : Vector2){
        this.sourceSize = vector2;
    }

}