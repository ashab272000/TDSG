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
});