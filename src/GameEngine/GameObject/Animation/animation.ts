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
        this.sprite = sprite;
        this.frames = frames;
        this.animationTime = animationTime;
        this.updateTimePerFrame();
        this.animationPlay = new Interval(() => {
            this.currentFrame++;
            this.currentFrame %= this.frames.length;
            let sourcePos = this.sprite.getSpriteSrcPos(this.frames[this.currentFrame]);
            this.sprite.setSourcePos(sourcePos);
        }, this.timePerFrame);
    }

    public play(){
        this.animationPlay.run();
    }

    public pause(){
        this.animationPlay.pause();
    }

    public stop(){
        this.animationPlay.pause();
    }

    public updateTimePerFrame(){
        this.timePerFrame = Math.floor(this.animationTime / this.frames.length);
    }

    public getCurrentFrame(){
        return this.frames[this.currentFrame];
    }

    public getTimePerFrame(){
        return this.timePerFrame;
    }


}