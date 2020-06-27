import {expect} from "chai";
import { GameObject }  from '../src/GameEngine/GameObject/game_object';
import { CollisionObject }  from '../src/GameEngine/GameObject/collision';
import { Vector2 } from "../src/GameEngine/GameObject/vector2";
import { World } from "../src/GameEngine/WorldClass/world";

describe('CollisionObject', () => {

    it('test updateRelativeRect', () => {
        const a = new GameObject();
        const colA = new CollisionObject(a);

        a.transform.translate(8, 14);
        colA.updateRectPositon();

        expect(colA.getRect().getVertices()[0].x).to.equal(8);
        expect(colA.getRect().getVertices()[1].x).to.equal(9);
        expect(colA.getRect().getVertices()[2].x).to.equal(9);
        expect(colA.getRect().getVertices()[3].x).to.equal(8);

        expect(colA.getRect().getVertices()[0].y).to.equal(14);
        expect(colA.getRect().getVertices()[1].y).to.equal(14);
        expect(colA.getRect().getVertices()[2].y).to.equal(15);
        expect(colA.getRect().getVertices()[3].y).to.equal(15);

    })

    it('test isColliding with vertex', () => {
        const a = new GameObject();
        const colA = new CollisionObject(a);

        let vertex1 = new Vector2(0, 0);
        let vertex2 = new Vector2(1, 0);
        let vertex3 = new Vector2(1, 1);
        let vertex4 = new Vector2(0, 1);
        let vertex5 = new Vector2(0.5, 0.5);
        let vertex6 = new Vector2(1.1, 0);
        let vertex7 = new Vector2(1.1, 1.1);
        expect(colA.isCollidingWithVertex(vertex1)).to.true;
        expect(colA.isCollidingWithVertex(vertex2)).to.true;
        expect(colA.isCollidingWithVertex(vertex3)).to.true;
        expect(colA.isCollidingWithVertex(vertex4)).to.true;
        expect(colA.isCollidingWithVertex(vertex5)).to.true;
        expect(colA.isCollidingWithVertex(vertex6)).to.false;
        expect(colA.isCollidingWithVertex(vertex7)).to.false;
    })

    it('test1 isCollidingWithGameObject', () => {
        let world = World.getInstance();

        world.clearWorld();
        world.clearAllGameObjects();
        world.clearAllCollisionObjects();

        world.generateWorld(25);

        const a = new GameObject();
        const b = new GameObject();
        const colA = new CollisionObject(a);
        const colB = new CollisionObject(b);

        b.transform.size = new Vector2(2,2);

        a.transform.translate(8,8);
        b.transform.translate(7,7);

        world.init();

        expect(colB.isCollidingWithObject(colA)).to.true;

    })

    
    it('test2 isCollidingWithGameObject', () => {
        let world = World.getInstance();

        world.clearWorld();
        world.clearAllGameObjects();
        world.clearAllCollisionObjects();

        world.generateWorld(25);

        const a = new GameObject();
        const b = new GameObject();
        const colA = new CollisionObject(a);
        const colB = new CollisionObject(b);
        
        a.transform.translate(8,8);
        b.transform.translate(7,7);

        colA.updateRectPositon();
        colB.updateRectPositon();

        expect(colB.isCollidingWithObject(colA)).to.true;

    })

    it('test3 isCollidingWithGameObject', () => {
        let world = World.getInstance();

        world.clearWorld();
        world.clearAllGameObjects();
        world.clearAllCollisionObjects();

        world.generateWorld(25);

        const a = new GameObject();
        const b = new GameObject();
        const colA = new CollisionObject(a);
        const colB = new CollisionObject(b);
        
        a.transform.translate(4,4);
        b.transform.translate(7,7);

        world.init();

        expect(colB.isCollidingWithObject(colA)).to.false;

    })

    it('TEST 1 : detect subworld', () => {
        let world = World.getInstance();

        world.clearWorld();
        world.clearAllGameObjects();
        world.clearAllCollisionObjects();

        world.generateWorld(25);

        const a = new GameObject();
        const colA = new CollisionObject(a);

        world.init();

       let subworlds =  colA.subworldDetection();

       expect(subworlds.length).to.equal(1);
       expect(subworlds[0].getId()).to.equal(0);

    });

    it('TEST 3 : detect subworld', () => {
        let world = World.getInstance();

        world.clearWorld();
        world.clearAllGameObjects();
        world.clearAllCollisionObjects();

        world.generateWorld(25);

        const a = new GameObject();
        const colA = new CollisionObject(a);

        a.transform.translate(11,11);
        world.init();

       let subworlds =  colA.subworldDetection();

       expect(subworlds.length).to.equal(4);
       expect(subworlds[0].getId()).to.equal(0);
       expect(subworlds[1].getId()).to.equal(1);
       expect(subworlds[2].getId()).to.equal(4);
       expect(subworlds[3].getId()).to.equal(3);
       //expect(subworlds[1].getId()).to.equal(0);

    });

    it('TEST 2 : detect subworld', () => {
        let world = World.getInstance();

        world.clearWorld();
        world.clearAllGameObjects();
        world.clearAllCollisionObjects();

        world.generateWorld(25);

        const a = new GameObject();
        const colA = new CollisionObject(a);

        a.transform.translate(9,0);
        world.init();

       let subworlds =  colA.subworldDetection();

       expect(subworlds.length).to.equal(2);
       expect(subworlds[0].getId()).to.equal(1);
       expect(subworlds[1].getId()).to.equal(0);
       //expect(subworlds[1].getId()).to.equal(0);

    });

    it(`TEST 1: isColliding (false)`, () => {
        let world = World.getInstance();

        world.clearWorld();
        world.clearAllGameObjects();
        world.clearAllCollisionObjects();

        world.generateWorld(25);

        const a = new GameObject();
        const colA = new CollisionObject(a);

        world.init();

        

        expect(colA.isColliding().length).to.equal(0);
    });

    it(`TEST 2: isColliding (false)`, () => {
        let world = World.getInstance();

        world.clearWorld();
        world.clearAllGameObjects();
        world.clearAllCollisionObjects();

        world.generateWorld(25);

        const a = new GameObject();
        const colA = new CollisionObject(a);
        const b = new GameObject();
        const colB = new CollisionObject(b);
        const c = new GameObject();
        const colC = new CollisionObject(c);
        const d = new GameObject();
        const colD = new CollisionObject(d);

        a.transform.translate(15,15)
        b.transform.translate(20,20);
        c.transform.translate(10,10);

        world.init();



        expect(colD.isColliding().length).to.equal(0);
    });

    it(`TEST 3: isColliding (false)`, () => {
        let world = World.getInstance();

        world.clearWorld();
        world.clearAllGameObjects();
        world.clearAllCollisionObjects();

        world.generateWorld(25);

        const a = new GameObject();
        const colA = new CollisionObject(a);
        const b = new GameObject();
        const colB = new CollisionObject(b);
        const c = new GameObject();
        const colC = new CollisionObject(c);
        const d = new GameObject();
        const colD = new CollisionObject(d);

        a.transform.translate(15,15)
        b.transform.translate(17,17);
        c.transform.translate(19,20);
        d.transform.translate(12,13);

        world.init();

        expect(colD.isColliding().length).to.equal(0);
        expect(colA.isColliding().length).to.equal(0);
        expect(colB.isColliding().length).to.equal(0);
    });

    
    it(`TEST 3: isColliding (false)`, () => {
        let world = World.getInstance();

        world.clearWorld();
        world.clearAllGameObjects();
        world.clearAllCollisionObjects();

        world.generateWorld(25);

        const a = new GameObject();
        const colA = new CollisionObject(a);
        const b = new GameObject();
        const colB = new CollisionObject(b);
        const c = new GameObject();
        const colC = new CollisionObject(c);
        const d = new GameObject();
        const colD = new CollisionObject(d);

        a.transform.translate(16,17)
        b.transform.translate(17,17);
        c.transform.translate(19,18);
        d.transform.translate(15,16);

        world.init();

        expect(colD.isColliding().length).to.equal(1);
        expect(colA.isColliding().length).to.equal(2);
        expect(colB.isColliding().length).to.equal(1);
        expect(colC.isColliding().length).to.equal(0);
    });

    it(`TEST 4: isColliding (false)`, () => {
        let world = World.getInstance();

        world.clearWorld();
        world.clearAllGameObjects();
        world.clearAllCollisionObjects();

        world.generateWorld(25);

        const a = new GameObject();
        const colA = new CollisionObject(a);
        const b = new GameObject();
        const colB = new CollisionObject(b);
        const c = new GameObject();
        const colC = new CollisionObject(c);
        const d = new GameObject();
        const colD = new CollisionObject(d);

        a.transform.translate(19,19)
        b.transform.translate(20,19);
        c.transform.translate(20,20);
        d.transform.translate(15,0);

        world.init();

        expect(colA.isColliding().length).to.equal(2);
        expect(colB.isColliding().length).to.equal(2);
        expect(colC.isColliding().length).to.equal(2);
        expect(colD.isColliding().length).to.equal(0);
    });

})