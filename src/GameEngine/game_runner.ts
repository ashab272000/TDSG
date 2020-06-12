
import { GameObject } from './GameObject/game_object';
import { World} from './WorldClass/world';

export class GameRunner {

    //gameobject is an array of all the gameobject instances in the world
    private gameObjects : GameObject[];
    private world : World;


    constructor( worldSize = 25){
        //gets all the gameObject instances
        this.gameObjects = GameObject.gameObjects;
        //Creates a world
        this.world = new World(worldSize);
        this.init();
        this.update();

    }

    private init(){
        //inititalizes all the gameobjects
        this.gameObjects.forEach(element => {
            element.init()   
        });
    }

    private update(){
        //40ms = 25fps
        //This function runs an interval throughout the game
        //it updates all the gameobjects with their update functions
        setInterval( () => {
            this.gameObjects.forEach(element => {
                element.update()   
            });
        }, 40)
    }

}
