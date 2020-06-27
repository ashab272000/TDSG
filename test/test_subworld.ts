import {expect} from "chai";
import { World } from '../src/GameEngine/WorldClass/world';
import { GameObject } from "../src/GameEngine/GameObject/game_object";
import { SubWorld } from "../src/GameEngine/WorldClass/sub_world";
import { CollisionObject } from "../src/GameEngine/GameObject/collision";

describe("SubWorld", () => {

    it('AddGameObject', () => {
        const a = new GameObject();
        const b = new GameObject();
        const colA = new CollisionObject(a);
        const colB = new CollisionObject(b);


        const subworld = new SubWorld(0);

        subworld.addCollisionObject(colA);
        subworld.addCollisionObject(colA);

        expect(subworld.getCollisionObjects().length).to.equal(2);
        
    });
    it('removeCollisionObject', () => {
        const a = new GameObject();
        const b = new GameObject();
        const colA = new CollisionObject(a);
        const colB = new CollisionObject(b);

        const subworld = new SubWorld(0);

        subworld.addCollisionObject(colA);
        subworld.addCollisionObject(colB);

        expect(subworld.getCollisionObjects().length).to.equal(2);
        
        let removedA = subworld.removeCollisionObject(colA);
        expect(removedA).to.equal(colA);
        expect(subworld.getCollisionObjects().length).to.equal(1);

        let removedB = subworld.removeCollisionObject(colB);
        expect(removedB).to.equal(colB);
        expect(subworld.getCollisionObjects().length).to.equal(0);
        
        
    });

    it('removeCollisionObject', () => {
        const a = new GameObject();
        const b = new GameObject();
        const c = new GameObject();
        const colA = new CollisionObject(a);
        const colB = new CollisionObject(b);
        const colC = new CollisionObject(c);

        const subworld = new SubWorld(0);
        
        subworld.addCollisionObject(colA);
        subworld.addCollisionObject(colB);
        
        expect(subworld.contains(colA)).to.true;
        expect(subworld.contains(colB)).to.true;
        expect(subworld.contains(colC)).to.false;
        
        subworld.removeCollisionObject(colB);
        subworld.addCollisionObject(colC);

        expect(subworld.contains(colA)).to.true;
        expect(subworld.contains(colB)).to.false;
        expect(subworld.contains(colC)).to.true;
        
        subworld.removeCollisionObject(colA);
        subworld.removeCollisionObject(colC);

        expect(subworld.getCollisionObjects().length).to.equal(0);

    });

}
)

