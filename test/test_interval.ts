import {expect} from "chai";
import {Interval} from '../src/GameEngine/GameObject/Animation/Interval'


describe('Testing Interval', () => {

    it('Interval test : 1', async () => {
        let b = 0;
        let a = new Interval(() => {
            b++;
        }, 500);
        setTimeout( () => {
            a.pause();
        }, 1300);

        setTimeout( () => {
            expect(b).to.equal(2);
        },3000);
        
        setTimeout(
            () => {
                a.stop();
            },
            4300
        );
    });

    it('Interval test : 2', async () => {
        let b = 0;
        let a = new Interval(() => {
            b++;
        }, 500);
        setTimeout( () => {
            a.pause();
        }, 1300);

        setTimeout( () => {
            a.resume();
        },3000);

        setTimeout( () => {
            expect(b).to.equal(5);
        }, 4800);

        setTimeout(
            () => {
                a.stop();
            },
            6000
        );
    });
});