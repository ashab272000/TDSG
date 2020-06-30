import { GameObject } from "../GameEngine/GameObject/game_object";
import { Vector2 } from "../GameEngine/GameObject/vector2";
// @ts-ignore
import MapImage from '../img/map.png';

export class Map extends GameObject{

    constructor(){
        super();
        this.transform.size = this.pixelSizeToUnit(new Vector2(4000, 4000));
        this.setImage(MapImage);
        //this.setImage(src)
    }
}