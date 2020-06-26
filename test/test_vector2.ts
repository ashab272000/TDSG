import {expect} from "chai";
import { Vector2 } from "../src/GameEngine/GameObject/vector2";

describe('Vector2', () => {
    it(`Test Vector2.substract`, () => {
        let a = new Vector2(24, 7);
        let b = new Vector2(5,5);

        let c = Vector2.substract(a,b);

        expect(c.x).to.equal(19);
        expect(c.y).to.equal(2);
    });
})