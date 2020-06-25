import { GameObject } from "./game_object";
import { World } from "../WorldClass/world";

export class CollisionDetection{

    private gameobject : GameObject;

    constructor(gameobject : GameObject){
        this.gameobject = gameobject;
    }

    /**
     * Returns null if not colliding.
     * 
     * Returns the id of the gameobject if the current gameobject is colliding with it
     */
    public isColliding() : number{
        let cellId = this.gameobject.transform.getCellId();
        let occupiedId = World.getInstance().getCellWithId[cellId].getOccupiedId() ;
        if( occupiedId != this.gameobject.getId())
        {
            return occupiedId;
        }
        return null;
    }
}