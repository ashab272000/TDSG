import {expect} from "chai";
import { Animation } from "../src/GameEngine/GameObject/Animation/animation"
import { MultiSprite } from "../src/GameEngine/GameObject/Sprite/multiSprite";
import { Vector2 } from "../src/GameEngine/GameObject/vector2";
import { clock } from "sinon";
import sinon = require('sinon');


describe('Animation', function(){

    afterEach(() => {
        // Restore the default sandbox here
        sinon.restore();
    });
    

    it('Check Play', () => {

        const clock = sinon.useFakeTimers();
        let sprite = new MultiSprite('./shooter_blue_test.png', new Vector2(300,100), new Vector2(100,100));
        let a = new Animation(sprite, [0,1,2], 750);
        

        expect(a.getCurrentFrame()).to.equal(0);

        a.play();
        clock.tick(300);

        expect(a.getCurrentFrame()).to.equal(1);

        clock.tick(300);
        expect(a.getCurrentFrame()).to.equal(2)

    });

    it('Check Pause', () => {

        const clock = sinon.useFakeTimers();
        let sprite = new MultiSprite('./shooter_blue_test.png', new Vector2(300,100), new Vector2(100,100));
        let a = new Animation(sprite, [0,1,2], 240);

        expect(a.getTimePerFrame()).to.equal(80);
        
        expect(a.getCurrentFrame()).to.equal(0);
        a.play();

        clock.tick(80);
        expect(a.getCurrentFrame()).to.equal(1);

        clock.tick(80);
        expect(a.getCurrentFrame()).to.equal(2);
        a.pause();
        
        clock.tick(160);
        expect(a.getCurrentFrame()).to.equal(2);
        a.play();

        clock.tick(80);
        expect(a.getCurrentFrame()).to.equal(0);
          

    });

});