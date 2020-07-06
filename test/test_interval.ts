import {expect} from "chai";
import {Interval} from '../src/GameEngine/GameObject/Animation/Interval'
import sinon = require('sinon');
import { clock } from "sinon";

describe('Testing Interval', () => {

    afterEach(() => {
        // Restore the default sandbox here
        sinon.restore();
    });

    it('Interval test : 1', async () => {
        const startSpy = sinon.spy(Interval.prototype, 'run');
        const pauseSpy = sinon.spy(Interval.prototype, 'pause');
        const clock = sinon.useFakeTimers();

        let b = 0;
        let a = new Interval(() => {
            b++;
        }, 500);
        a.run();
        expect(startSpy.calledOnce).to.true;
        
        clock.tick(1300);
        a.pause();
        expect(pauseSpy.calledOnce).to.true;
        expect(b).to.equal(2);

        clock.tick(2000);
        expect(b).to.equal(2);
        a.stop();
        
    });

    it('Interval test : 2', async () => {
        let b = 0;
        let clock = sinon.useFakeTimers();
        let a = new Interval(() => {
            b++;
        }, 500);

        a.run();
        
        clock.tick(1300);
        a.pause();
        
        clock.tick(3000);
        a.resume();
        
        clock.tick(1800);
        expect(b).to.equal(6);

        a.stop();
    });
});