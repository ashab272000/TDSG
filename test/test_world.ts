import {expect} from "chai";
import { World } from '../src/GameEngine/WorldClass/world';

describe("World", () => {
    it("test empty world", () => {
        let a = new World(0);
        expect(a.getCells().length).to.equal(0);
    })

    let b = new World(25);
    it("check the length of cells for world of 25x25", () => {
        expect(b.getCells().length).to.equal(625);
    })
    it("check the ids of some cells for world of 25x25", () => {
        expect(b.getCells()[b.getCells().length-1].getId()).to.equal(624);
        expect(b.getCells()[29].getId()).to.equal(29);
    })
});