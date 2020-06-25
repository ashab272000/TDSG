import {expect} from "chai";
import { World } from '../src/GameEngine/WorldClass/world';
import { GameObject } from "../src/GameEngine/GameObject/game_object";
import { SubWorld } from "../src/GameEngine/WorldClass/sub_world";

describe("SubWorld", () => {

    it('AddGameObject', () => {
        const a = new GameObject();
        const b = new GameObject();

        const subworld = new SubWorld(0);

        subworld.addGameObject(a);
        subworld.addGameObject(b);

        expect(subworld.getGameobjects().length).to.equal(2);
        
    });
    it('removeGameObject', () => {
        const a = new GameObject();
        const b = new GameObject();

        const subworld = new SubWorld(0);

        subworld.addGameObject(a);
        subworld.addGameObject(b);

        expect(subworld.getGameobjects().length).to.equal(2);
        
        let removedA = subworld.removeGameObject(a);
        expect(removedA).to.equal(a);
        expect(subworld.getGameobjects().length).to.equal(1);

        let removedB = subworld.removeGameObject(b);
        expect(removedB).to.equal(b);
        expect(subworld.getGameobjects().length).to.equal(0);
        
        
    });

    it('removeGameObject', () => {
        const a = new GameObject();
        const b = new GameObject();
        const c = new GameObject();
        
        const subworld = new SubWorld(0);
        
        subworld.addGameObject(a);
        subworld.addGameObject(b);
        
        expect(subworld.contains(a)).to.true;
        expect(subworld.contains(b)).to.true;
        expect(subworld.contains(c)).to.false;
        
        subworld.removeGameObject(b);
        
        subworld.addGameObject(c);
        expect(subworld.contains(a)).to.true;
        expect(subworld.contains(b)).to.false;
        expect(subworld.contains(c)).to.true;
        
        subworld.removeGameObject(a);
        subworld.removeGameObject(c);

        expect(subworld.getGameobjects().length).to.equal(0);
        


    });


}
)

