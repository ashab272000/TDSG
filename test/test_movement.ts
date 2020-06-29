import {expect} from "chai";
import { GameObject }  from '../src/GameEngine/GameObject/game_object';
import { World } from "../src/GameEngine/WorldClass/world";
import { CollisionObject } from "../src/GameEngine/GameObject/collision/collision";
import { Movement } from "../src/GameEngine/GameObject/collision/movement";
import { Vector2 } from "../src/GameEngine/GameObject/vector2";

describe("Movement", () => {
    
    let world = World.getInstance();

    it("Testing initial position", () =>{
        world.clearWorld();
        world.generateWorld(25);
        const a = new GameObject();
        expect(a.transform.position.x).to.equal(0);
        expect(a.transform.position.y).to.equal(0);
    });

    it.only("Test 1 :  canMove()", () => {
        world.clearWorld();
        world.clearAllCollisionObjects();
        world.clearAllGameObjects();

        world.generateWorld(25);

        const a = new GameObject();
        const b = new GameObject();
        const colA = new CollisionObject(a);
        const moveA = new Movement(colA);
        const colB = new CollisionObject(b);

        b.transform.translate(2,2);

        world.init();

        expect(moveA.canMove(new Vector2(1,1))).to.true;

    });

    it.only("Test 2 :  canMove()", () => {
        
        world.clearWorld();
        world.clearAllCollisionObjects();
        world.clearAllGameObjects();

        world.generateWorld(25);

        const a = new GameObject();
        const b = new GameObject();
        const colA = new CollisionObject(a);
        const moveA = new Movement(colA);
        const colB = new CollisionObject(b);

        b.transform.translate(2,2);
        
        world.init()
        a.transform.translate(1,1);
        world.init()
        
        expect(colA.isCollidingWithObject(colB)).to.true;

        expect(moveA.canMove(new Vector2(1.5,1))).to.true;
        expect(moveA.canMove(new Vector2(1.1,1.1))).to.false;
        expect(moveA.canMove(new Vector2(1,1.5))).to.true;
        expect(moveA.canMove(new Vector2(1.5,1.5))).to.false;

    });

})