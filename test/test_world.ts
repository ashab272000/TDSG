import {expect} from "chai";
import { World } from '../src/GameEngine/WorldClass/world';

describe("World", () => {
    //new World();
    World.getInstance().clearWorld();
    
    it("test empty world", () => {
        let a = World.getInstance();
        a.generateWorld(0);
        expect(a.getSize()).to.equal(0);
    })

    it("check the length of subworlds for world of 25x25", () => {

        let b = World.getInstance();
        b.clearWorld();
        b.generateWorld(25);
        expect(b.getSubWorlds().length).to.equal(9);
    })
    it("check the ids of some subworlds for world of 25x25", () => {
        //world is a singleton
        //therefore whenever a new world is created
        //it always refers to the main singleton
        World.getInstance().clearWorld();
        let b = World.getInstance();
        b.generateWorld(25);

        expect(b.getSubWorlds()[b.getSubWorlds().length-1].getId()).to.equal(8);
        expect(b.getSubWorlds()[2].getId()).to.equal(2);
    })
});