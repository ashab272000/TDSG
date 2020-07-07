import { GameObject } from "../../GameEngine/GameObject/game_object";
import { CollisionObject } from "../../GameEngine/GameObject/collision/collision";
import { Movement } from "../../GameEngine/GameObject/collision/movement";
// @ts-ignore
import playerImg from '../../img/PlayerImg/shooter_blue.png';
import { AnimationController } from "../../GameEngine/GameObject/Animation/animationController";
import { Animation } from "../../GameEngine/GameObject/Animation/animation";
import { MultiSprite } from "../../GameEngine/GameObject/Sprite/multiSprite";
import { Vector2 } from "../../GameEngine/GameObject/vector2";
import { Sprite } from "../../GameEngine/GameObject/Sprite/sprite";

export class Player extends GameObject{

    private collisionObject : CollisionObject;
    private collsionMovement : Movement;
    private animationController : AnimationController;
    //private sprite : MultiSprite;
    private sprite : MultiSprite;

    private isWalking : boolean = false;

    constructor(){
        super();
        //this.setImage(s)
        this.collisionObject = new CollisionObject(this);
        this.collsionMovement = new Movement(this.collisionObject);
        this.transform.size = new Vector2(2,2);
        this.transform.position = new Vector2(2,2);

        this.initializeAnimation();

        window.addEventListener('keydown', (e : KeyboardEvent) => {
            let k = e.key;
            this.isWalking = true;
            if(k == "w" || k == "ArrowUp")
            {
                console.log("ami up");
            } else if (k == "a" || k == "ArrowLeft"){
                console.log("ami left")
            } else if (k == "s" || k == "ArrowDown"){
                console.log("ami bottom");
            } else if(k == "d" || k == "ArrowRight"){
                console.log("ami right")
            }else{
                this.isWalking = false;
            }
        });

        window.addEventListener('keyup', (e : KeyboardEvent) => {
            this.isWalking = false;
        })
    }

    private initializeAnimation(){

        this.sprite = new MultiSprite(playerImg, new Vector2(300, 100), new Vector2(100,100));
        //this.sprite = new Sprite(playerImg, new Vector2(300,100));
        this.sprite.setSourceSize(new Vector2(100,100));
        this.sprite.inherit(this.transform);
        let a = new Animation(this.sprite, [0,1,2,1], 1000);
        //a.play();
        
        this.animationController = new AnimationController();
        this.animationController.addAnimation(a,this.isWalking);
    }


}