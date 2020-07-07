import { GameObject } from "../GameEngine/GameObject/game_object";
import { Vector2 } from "../GameEngine/GameObject/vector2";
// @ts-ignore
import MapImage from '../img/map.png';
import { Sprite } from "../GameEngine/GameObject/Sprite/sprite";

export class Map extends GameObject{

    private sprite : Sprite;

    constructor(){
        super();
        //4000/25 = 160
        this.transform.size = new Vector2(160, 160);
        this.transform.position = new Vector2(0,0);
        this.sprite = new Sprite(MapImage, new Vector2(4000, 4000));
        this.sprite.inherit(this.transform);
    }
}