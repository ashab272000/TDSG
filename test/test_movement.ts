import {expect} from "chai";
import { GameObject }  from '../src/GameEngine/GameObject/game_object';
import { World } from "../src/GameEngine/WorldClass/world";

describe("Movement", () => {
    
    let world = World.getInstance();

    it("Testing initial position", () =>{
        world.clearWorld();
        world.generateWorld(25);
        const a = new GameObject();
        expect(a.transform.position.x).to.equal(0);
        expect(a.transform.position.y).to.equal(0);
    });

})