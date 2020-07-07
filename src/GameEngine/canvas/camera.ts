import { Vector2 } from "../GameObject/vector2";
import { GameObject } from "../GameObject/game_object";
import Rect from "../GameObject/rect";
import { World } from "../WorldClass/world";
import { Sprite } from "../GameObject/Sprite/sprite";

export class Camera extends GameObject{

    private canvas :HTMLCanvasElement;
    private ctx : CanvasRenderingContext2D;
    private rect : Rect;

    constructor(pixelSize : Vector2){
        super();
        this.canvas = document.getElementsByTagName('canvas')[0];
        this.canvas.width = pixelSize.x;
        this.canvas.height = pixelSize.y;
        this.ctx = this.canvas.getContext('2d');
        this.rect = new Rect(new Vector2(this.canvas.width, this.canvas.height));
    }

    static fullScreenCanvas(){
        return new Camera(new Vector2(screen.width - 1, screen.height - 1));
    }

    // private unitToPixel(unit){
    //     return unit * World.getInstance().PIXELUNIT;
    // }

    // private posToPixelObj(position : Vector2){
    //     return {
    //         x : this.unitToPixel(position.x),
    //         y : this.unitToPixel(position.y)
    //     }
    // }

    public drawSprite(sprite : Sprite){
        if(sprite != null && sprite.getImage().complete)
        {

            this.ctx.save();

            //screw this
            
            let sx = sprite.getSourcePos().x;
            let sy = sprite.getSourcePos().y;
            let sw = sprite.getSourceSize().x;
            let sh = sprite.getSourceSize().y;
            let dx = sprite.position.x;
            let dy = sprite.position.y;
            let dw = sprite.size.x;
            let dh = sprite.size.y;

            let toPixelSize = World.getInstance().PIXELUNIT;
            this.ctx.drawImage(sprite.getImage(), sx, sy, sw, sh, dx * toPixelSize, dy * toPixelSize, dw * toPixelSize, dh * toPixelSize);
            this.ctx.restore();
        }
    }

    update(){
        
        for(let sprite of Sprite.sprites){
            this.drawSprite(sprite);
        }
    }

}