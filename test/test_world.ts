import {expect} from "chai";
import { World } from '../src/GameEngine/WorldClass/world';

describe("World", () => {
    //new World();
    it("test empty world", () => {
        let a = World.getInstance();
        a.generateWorld(0);
        expect(a.getCells().length).to.equal(0);
    })

    it("check the length of cells for world of 25x25", () => {
        let b = World.getInstance();
        b.generateWorld(25);
        expect(b.getCells().length).to.equal(625);
    })
    it("check the ids of some cells for world of 25x25", () => {
        //world is a singleton
        //therefore whenever a new world is created
        //it always refers to the main singleton
        let b = World.getInstance();
        expect(b.getCells()[b.getCells().length-1].getId()).to.equal(624);
        expect(b.getCells()[29].getId()).to.equal(29);
    })
});