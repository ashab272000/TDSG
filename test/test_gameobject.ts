import {expect} from "chai";
import { GameObject }  from '../src/GameEngine/GameObject/game_object';

describe("GameObject", () => {
    it('Empty Test on GameObject.gameobjects', () => {
        
        expect(GameObject.gameObjects.length).to.equal(0);
    });
    it('Test on GameObject.gameobjects.length after instantiating few gameobjects', () => {
        new GameObject();
        new GameObject();
        new GameObject();
        expect(GameObject.gameObjects.length).to.equal(3);
    });
    it('Check "nextId"', () => {
        new GameObject();
        new GameObject();
        new GameObject();
        new GameObject();
        new GameObject();
        expect(GameObject.nextId).to.equal(8);
    });
    it('Checking the id of the new gameobject ', () => {
        const a  = new GameObject();
        expect(a.getId()).to.equal(8);
    });

    it('check initial-position', () => {
        const a = new GameObject();
        const posA = a.transform.position;
        expect(posA.x).to.equal(0);
        expect(posA.y).to.equal(0);
    })
    it('check position after translating once', () => {
        const a = new GameObject();
        const posA = a.transform.position;
        a.transform.translate(1,5);
        expect(posA.x).to.equal(1);
        expect(posA.y).to.equal(5);
    })
    it('check position after translating twice', () => {
        const a = new GameObject();
        const posA = a.transform.position;
        a.transform.translate(1,5);
        a.transform.translate(3,2);
        expect(posA.x).to.equal(4);
        expect(posA.y).to.equal(7);
    })
});