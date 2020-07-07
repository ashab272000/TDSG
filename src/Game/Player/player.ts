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
import { Input } from "../../GameEngine/Input/input";

export class Player extends GameObject{

    private collisionObject : CollisionObject;
    private collsionMovement : Movement;
    private animationController : AnimationController;
    //private sprite : MultiSprite;
    private sprite : MultiSprite;

    private walkAnimation : Animation;
    private isWalking : boolean = false;

    //amount of distance per second
    private speed : number = 5;

    constructor(){
        super();
        //this.setImage(s)
        this.collisionObject = new CollisionObject(this);
        this.collsionMovement = new Movement(this.collisionObject);
        this.transform.size = new Vector2(4,4);
        this.transform.position = new Vector2(2,2);
        this.speed /= 25;
        
        this.initializeAnimation();
        
    }

    update(){
        super.update();
        this.animationController.updateAnimation(this.walkAnimation, this.isWalking);
        this.walk();
        this.look();
        
        
    }

    private initializeAnimation(){

        this.sprite = new MultiSprite(playerImg, new Vector2(300, 100), new Vector2(100,100));
        //this.sprite = new Sprite(playerImg, new Vector2(300,100));
        this.sprite.setSourceSize(new Vector2(100,100));
        this.sprite.inherit(this.transform);
        this.walkAnimation = new Animation(this.sprite, [0,1,2,1], 700);
        //a.play();
        
        this.animationController = new AnimationController();
    }
    
    private walk(){
        this.isWalking = true;
        if(Input.getKeyDown('w')){
            this.collsionMovement.translate(new Vector2(0,-this.speed));
        }else if(Input.getKeyDown('a'))
        {
            this.collsionMovement.translate(new Vector2(-this.speed, 0));
        }else if(Input.getKeyDown('s'))
        {
            this.collsionMovement.translate(new Vector2(0, this.speed));
        }else if(Input.getKeyDown('d'))
        {
            this.collsionMovement.translate(new Vector2(this.speed, 0));
        }else{
            this.isWalking = false;
        }
    }
    
    private look(){
        let pos = this.transform.position;
        let size = this.transform.size;
        let mousePos = Input.mousePosition;
        let angle = this.getAngle( mousePos.x , mousePos.y, pos.x, pos.y) + this.deg_to_rad(90);
        this.transform.rotation = angle;
        console.log(this.transform.rotation);
        this.sprite.rotation = angle;
        
    }
    
    private getAngle(x1 : number, y1 : number, x2 : number, y2 : number){
        let distY = (y2-y1); //opposite
        let distX = (x2-x1); //adjacent
        
        //use atan2 to get the angle
        let radians = Math.atan2(distX,-distY);
        //converting the radians to deg
        let angle = this.rad_to_deg(radians);
    
        //Originally the degree goes to a max 180 and turns to negative 180
        //to solve this problem I have put this if statement to get an angle of full 360 degrees
        if(angle < 0){
            angle = 360 + angle;
        }
        // converting the final angle to radians 
        angle = this.deg_to_rad(angle);
        return angle;
    }

        
    // method to convert radian to deg
    private rad_to_deg(radians : number){
        return radians * (180/Math.PI);
    };

    // method to convert deg to radian
    private deg_to_rad(degrees : number){
        return degrees / (180/Math.PI);
    };


}