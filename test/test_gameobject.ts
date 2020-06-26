import {expect} from "chai";
import { GameObject }  from '../src/GameEngine/GameObject/game_object';
import { World } from "../src/GameEngine/WorldClass/world";

describe("GameObject", () => {
    it('Empty Test on GameObject.gameobjects', () => {
        World.getInstance().clearAllGameObjects();
        
        expect(GameObject.gameObjects.length).to.equal(0);
    });
    it('Test on GameObject.gameobjects.length after instantiating few gameobjects', () => {
        World.getInstance().clearAllGameObjects();
        new GameObject();
        new GameObject();
        new GameObject();
        expect(GameObject.gameObjects.length).to.equal(3);
    });
    it('Check "nextId"', () => {
        World.getInstance().clearAllGameObjects();
        new GameObject();
        new GameObject();
        new GameObject();
        new GameObject();
        new GameObject();
        expect(GameObject.nextId).to.equal(5);
    });
    it('Checking the id of the new gameobject ', () => {
        const a  = new GameObject();
        expect(a.getId()).to.equal(5);
    });
    
    it('check initial-position', () => {
        World.getInstance().clearAllGameObjects();
        const a = new GameObject();
        const posA = a.transform.position;
        expect(posA.x).to.equal(0);
        expect(posA.y).to.equal(0);
    })
    it('check position after translating once', () => {
        World.getInstance().clearAllGameObjects();
        const a = new GameObject();
        const posA = a.transform.position;
        a.transform.translate(1,5);
        expect(posA.x).to.equal(1);
        expect(posA.y).to.equal(5);
    })
    it('check position after translating twice', () => {
        World.getInstance().clearAllGameObjects();
        const a = new GameObject();
        const posA = a.transform.position;
        a.transform.translate(1,5);
        a.transform.translate(3,2);
        expect(posA.x).to.equal(4);
        expect(posA.y).to.equal(7);
    })
});