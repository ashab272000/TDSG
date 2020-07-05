import { AnimationController } from "./animationController";
import { update } from "lodash";
import { setInterval } from "timers";
import { Sprite } from "../Sprite/sprite";
import { MultiSprite } from "../Sprite/multiSprite";
import { Interval } from "./Interval";


export class Animation{

    private sprite : MultiSprite;
    private frames : number[];
    private animationTime : number;
    private timePerFrame : number;
    private currentFrame : number = 0;
    private animationPlay : Interval;
    
    
    constructor(sprite : MultiSprite, frames : number[], animationTime : number = 1000){
        this.frames = frames;
        this.animationTime = animationTime;
        this.updateTimePerFrame();
    }

    public start(){
        this.animationPlay = new Interval(() => {
            this.currentFrame++;
            this.currentFrame %= this.frames.length;
            let sourcePos = this.sprite.getSpriteSrcPos(this.currentFrame);
            this.sprite.setSourcePos(sourcePos);
        }, this.timePerFrame);
    }

    public pause(){
        this.animationPlay.pause();
    }

    public resume(){
        this.animationPlay.resume();
    }

    public updateTimePerFrame(){
        this.timePerFrame = Math.floor(this.animationTime / this.frames.length);
    }


}