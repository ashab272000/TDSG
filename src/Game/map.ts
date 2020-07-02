import { GameObject } from "../GameEngine/GameObject/game_object";
import { Vector2 } from "../GameEngine/GameObject/vector2";
// @ts-ignore
import MapImage from '../img/map.png';

export class Map extends GameObject{

    constructor(){
        super();

        //4000/25 = 160
        this.transform.size = new Vector2(160, 160);
        this.setImage(MapImage);
        //this.setImage(src)
    }
}