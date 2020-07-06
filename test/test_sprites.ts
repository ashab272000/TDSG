import {expect} from "chai";
import { Sprite } from "../src/GameEngine/GameObject/Sprite/sprite";
import { MultiSprite } from "../src/GameEngine/GameObject/Sprite/multiSprite";
import { Vector2 } from "../src/GameEngine/GameObject/vector2";
import { AnimationController } from "../src/GameEngine/GameObject/Animation/animationController";

describe('Sprites', () => {

    it("testing GetNumberOfSprites", () => {
        let sprite = new MultiSprite('./shooter_blue_test.png', new Vector2(300,100), new Vector2(100,100))
        expect(sprite.getNumberOfSprites()).to.equal(3);
    })
})