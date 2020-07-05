import { Sprite } from "./sprite";
import { Vector2 } from "../vector2";


export class MultiSprite extends Sprite{

    private numberOfSprites : number = 1;

    private row : number;
    private column : number;

    private singleSpriteSize : Vector2; 

    constructor(src : string, pixelSize : Vector2, singleSpriteSize : Vector2){
        super(src, pixelSize);

        this.row = pixelSize.x/ singleSpriteSize.x;
        this.column = pixelSize.y/ singleSpriteSize.y;

        this.singleSpriteSize = singleSpriteSize;

        this.numberOfSprites = this.row * this.column;
    }

    public getNumberOfSprites() {
        return this.numberOfSprites;
    }

    public getSpriteSrcPos(index : number){
        let columnNum =  Math.floor(index / this.row);
        let rowNum =  (index % this.row);

        return new Vector2(this.singleSpriteSize.x * rowNum, this.singleSpriteSize.y * columnNum);
    }

}