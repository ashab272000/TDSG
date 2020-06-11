
import { GameObject } from './GameObject/game_object';

export class GameRunner {

    private gameObjects : GameObject[];

    init(){
        this.gameObjects.forEach(element => {
            element.init()   
        });
    }

    update(){
        this.gameObjects.forEach(element => {
            element.update()   
        });
    }

}
