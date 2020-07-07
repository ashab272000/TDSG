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

    it("Test 1 :  canMove()", () => {
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

    it("Test 2 :  canMove()", () => {
        
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

    it('Test 1: moveTo right', () => {
        world.clearWorld();
        world.clearAllCollisionObjects();
        world.clearAllGameObjects();

        world.generateWorld(25);

        const a = new GameObject();
        const b = new GameObject();
        const colA = new CollisionObject(a);
        const moveA = new Movement(colA);
        const colB = new CollisionObject(b);
        const moveB = new Movement(colB);
        
        world.init();
        moveB.moveTo(new Vector2(3, 0));
        moveA.moveTo(new Vector2(2.1, 0));
        world.init();

        expect(a.transform.position.x).to.equal(2);

    });
    it('Test 2: moveTo left', () => {
        world.clearWorld();
        world.clearAllCollisionObjects();
        world.clearAllGameObjects();

        world.generateWorld(25);

        const a = new GameObject();
        const b = new GameObject();
        const colA = new CollisionObject(a);
        const moveA = new Movement(colA);
        const colB = new CollisionObject(b);
        const moveB = new Movement(colB);
        
        world.init();
        moveB.moveTo(new Vector2(3, 0));
        moveA.moveTo(new Vector2(5, 0));
        world.init();
        moveA.moveTo(new Vector2(3.9, 0));

        expect(a.transform.position.x).to.equal(4);

    });
    it('Test 2: moveTo Up', () => {
        world.clearWorld();
        world.clearAllCollisionObjects();
        world.clearAllGameObjects();

        world.generateWorld(25);

        const a = new GameObject();
        const b = new GameObject();
        const colA = new CollisionObject(a);
        const moveA = new Movement(colA);
        const colB = new CollisionObject(b);
        const moveB = new Movement(colB);
        
        world.init();
        moveB.moveTo(new Vector2(2, 2));
        moveA.moveTo(new Vector2(2, 8));
        world.init();
        moveA.moveTo(new Vector2(2, 2.9))

        expect(a.transform.position.x).to.equal(2);
        expect(a.transform.position.y).to.equal(3);

    });

    it('Test 2: moveTo down', () => {
        world.clearWorld();
        world.clearAllCollisionObjects();
        world.clearAllGameObjects();

        world.generateWorld(25);

        const a = new GameObject();
        const b = new GameObject();
        const colA = new CollisionObject(a);
        const moveA = new Movement(colA);
        const colB = new CollisionObject(b);
        const moveB = new Movement(colB);
        
        world.init();
        moveB.moveTo(new Vector2(2, 2));
        moveA.moveTo(new Vector2(2, 0));
        world.init();
        moveA.moveTo(new Vector2(2, 1.2))

        expect(a.transform.position.x).to.equal(2);
        expect(a.transform.position.y).to.equal(1);

    });

    it('Test 3 moveTo', () => {
        world.clearWorld();
        world.clearAllCollisionObjects();
        world.clearAllGameObjects();

        world.generateWorld(25);

        const a = new GameObject();
        const b = new GameObject();
        a.transform.size = new Vector2(2,2);
        const colA = new CollisionObject(a);
        const moveA = new Movement(colA);
        const colB = new CollisionObject(b);
        const moveB = new Movement(colB);
        
        world.init();
        moveB.moveTo(new Vector2(3, 3));
        moveA.moveTo(new Vector2(1.3, 1.1));
        world.init();

        expect(a.transform.position.x).to.equal(1);
        expect(a.transform.position.y).to.equal(1.1);

    });

})