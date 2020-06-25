
import { GameObject } from './GameObject/game_object';
import { World} from './WorldClass/world';

export class GameRunner {

    //gameobject is an array of all the gameobject instances in the world
    private gameObjects : GameObject[];
    private world : World;
    private fps : number;


    constructor( worldSize = 25, fps = 25){
        //gets all the gameObject instances
        this.gameObjects = GameObject.gameObjects != null ? GameObject.gameObjects : [];
        //Creates a world
        this.world = World.getInstance();
        this.world.generateWorld(worldSize);
        //set the frame per second
        this.fps = fps;
        this.init();
        this.update();

    }

    private init(){
        //inititalizes all the gameobjects
        this.world.init();
    }

    private update(){

        this.world.update();

    }

}
