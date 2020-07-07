import {Animation} from './animation';


export class AnimationController {

    private animations : Map<boolean, Animation>;
    static instances : AnimationController[] = []; 

    constructor(){
        this.animations = new Map();
        AnimationController.instances.push(this);
    }

    /**
     * 
     * @param name Name of the animation
     */
    public addAnimation(animation : Animation, condition : boolean){

        this.animations.set(condition,animation);
    }

    private playAnimation(){

        for( let k of this.animations.keys())
        {
            if(k)
            {
                this.animations.get(k).play();
                return;
            }
        }
    }

    public update(){
        this.playAnimation();
    }
}