import {Animation} from './animation';


export class AnimationController {

    private animations : Map<Animation, boolean>;
    static instances : AnimationController[] = []; 

    constructor(){
        this.animations = new Map();
        AnimationController.instances.push(this);
    }

    public updateAnimation(animation : Animation, condition : boolean)
    {
        this.animations.set(animation, condition);
    }

    private playAnimation(){

        let animation : Animation;

        for( let k of this.animations.keys())
        {
            k.pause();
            if(this.animations.get(k) == true && animation == undefined)
            {
                animation = k;
            }
        }
        if(animation)
        {
            animation.play();
        }
    }

    public update(){
        this.playAnimation();
    }
}