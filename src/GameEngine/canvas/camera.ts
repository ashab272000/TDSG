import { Vector2 } from "../GameObject/vector2";
import { GameObject } from "../GameObject/game_object";
import Rect from "../GameObject/rect";
import { World } from "../WorldClass/world";

export class Camera {

    private canvas :HTMLCanvasElement;
    private ctx : CanvasRenderingContext2D;
    private rect : Rect;

    constructor(size : Vector2){
        this.canvas = document.getElementsByTagName('canvas')[0];
        this.canvas.width = size.x;
        this.canvas.height = size.y;
        this.ctx = this.canvas.getContext('2d');
        this.rect = new Rect(new Vector2(this.canvas.width, this.canvas.height));
    }

    static fullScreenCanvas(){
        return new Camera(new Vector2(screen.width - 1, screen.height - 1));
    }

    private unitToPixel(unit){
        return unit * World.getInstance().PIXELUNIT;
    }

    private posToPixelObj(position : Vector2){
        return {
            x : this.unitToPixel(position.x),
            y : this.unitToPixel(position.y)
        }
    }

    public drawGameObject(gameObject : GameObject){
        if(gameObject.getImage() != null && gameObject.getImage().complete)
        {
            let pos = Vector2.substract(gameObject.transform.position, this.rect.position);
            let relPos = this.posToPixelObj(pos);
            this.ctx.save();
            this.ctx.drawImage(gameObject.getImage(), relPos.x, relPos.y);
            this.ctx.restore();
        }
    }

}