import { GameObject } from "../../GameEngine/GameObject/game_object";
import { CollisionObject } from "../../GameEngine/GameObject/collision/collision";
import { Movement } from "../../GameEngine/GameObject/collision/movement";
// @ts-ignore
import playerImg from '../../img/PlayerImg/shooter_blue.png';

export class Player extends GameObject{

    private collisionObject : CollisionObject;
    private collsionMovement : Movement;

    constructor(){
        super();
        //this.setImage(s)
        this.collisionObject = new CollisionObject(this);
        this.collsionMovement = new Movement(this.collisionObject);

        window.addEventListener('keydown', (e : KeyboardEvent) => {
            let k = e.key;
            if(k == "w" || k == "ArrowUp")
            {
                console.log("ami up");
            } else if (k == "a" || k == "ArrowLeft"){
                console.log("ami left")
            } else if (k == "s" || k == "ArrowDown"){
                console.log("ami bottom");
            } else if(k == "d" || k == "ArrowRight"){
                console.log("ami right")
            }
        });
    }


}