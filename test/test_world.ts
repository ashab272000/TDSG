import {expect} from "chai";
import { World } from '../src/GameEngine/WorldClass/world';
import { GameObject } from "../src/GameEngine/GameObject/game_object";
import { CollisionObject } from "../src/GameEngine/GameObject/collision";

describe("World", () => {
    //new World();
    World.getInstance().clearWorld();
    
    it("test empty world", () => {
        World.getInstance().clearAllGameObjects();
        let a = World.getInstance();
        a.generateWorld(0);
        expect(a.getSize()).to.equal(0);
    })
    
    it("check the length of subworlds for world of 25x25", () => {
        
        World.getInstance().clearAllGameObjects();
        let b = World.getInstance();
        b.clearWorld();
        b.generateWorld(25);
        expect(b.getSubWorlds().length).to.equal(9);
    })
    it("check the ids of some subworlds for world of 25x25", () => {
        //world is a singleton
        //therefore whenever a new world is created
        //it always refers to the main singleton
        World.getInstance().clearAllGameObjects();
        World.getInstance().clearWorld();
        let b = World.getInstance();
        b.generateWorld(25);

        expect(b.getSubWorlds()[b.getSubWorlds().length-1].getId()).to.equal(8);
        expect(b.getSubWorlds()[2].getId()).to.equal(2);
    })
    
    it('Test gameobjects subworld initially',() => {
        World.getInstance().clearWorld();
        World.getInstance().clearAllGameObjects();
        let world = World.getInstance();
        world.generateWorld(25);
        
        let a = new GameObject();
        let posA = a.transform.position;
        let index = world.getSubWorldWithUnits(posA).getId();
        expect(index).to.equal(0);
    })
    
    it('assignSubworld1 (Gameobject is instantiated)', () => {
        let world = World.getInstance();
        World.getInstance().clearAllGameObjects();
        world.clearWorld();
        world.generateWorld(25);

        const a = new GameObject();
        const colA = new CollisionObject(a);
        const b = new GameObject();

        world.test_assignSubworld(colA);
        expect(world.getSubWorlds()[0].contains(colA)).to.true;
        expect(colA.subworld).to.equal(world.getSubWorlds()[0]);
    })

    it('assignSubworld2 (Gameobject is translated)', () => {
        World.getInstance().clearAllGameObjects();
        let world = World.getInstance();
        world.clearWorld();
        world.generateWorld(25);

        const a = new GameObject();
        const colA = new CollisionObject(a);
        a.transform.translate(17,19)
        const b = new GameObject();

        world.test_assignSubworld(colA);
        expect(world.getSubWorlds()[4].contains(colA)).to.true;
        expect(colA.subworld).to.equal(world.getSubWorlds()[4]);
    })
    
    
    it('Test gameobjects subworld after translating Number 1',() => {
        World.getInstance().clearWorld();
        World.getInstance().clearAllGameObjects();
        let world = World.getInstance();
        world.generateWorld(25);

        let a = new GameObject();
        const colA = new CollisionObject(a);
        a.transform.translate(17, 21);

        console.log(a.transform.position.x);
        console.log(a.transform.position.y);

        world.init();
        expect(colA.subworld.getId()).to.equal(7);
    })

    it('Test gameobjects subworld after translating Number 2',() => {
        
        World.getInstance().clearWorld();
        World.getInstance().clearAllGameObjects();
        let world = World.getInstance();
        world.generateWorld(25);

        let a = new GameObject();
        let b = new GameObject()
        const colA = new CollisionObject(a);
        const colB = new CollisionObject(b); 

        let posA = a.transform.position;
        let posB = b.transform.position;

        a.transform.translate(17, 19);
        b.transform.translate(2, 2);
        
        world.init();

        expect(colA.subworld.getId()).to.equal(4);
        expect(colB.subworld.getId()).to.equal(0);
        //expect(a.subworld)
    })

    it('GameObjects subworld after translating for 3 frames, (checks how update works with assigning subworld)', () => {
        World.getInstance().clearWorld();
        World.getInstance().clearAllGameObjects();
        World.getInstance().clearAllCollisionObjects();
        let world = World.getInstance();
        world.generateWorld(25);
        

        expect(world.getSubWorlds()[0].getCollisionObjects().length).to.equal(0);
        
        let a = new GameObject();
        let b = new GameObject() 
        const colA = new CollisionObject(a);
        const colB = new CollisionObject(b);
        let posA = a.transform.position;
        let posB = b.transform.position;
        a.transform.translate(17, 19);
        b.transform.translate(2, 2);
        
        world.init(); // run one frame

        expect(world.getSubWorlds()[0].getCollisionObjects().length).to.equal(1);
        
        expect(colA.subworld.getId()).to.equal(4);
        expect(colB.subworld.getId()).to.equal(0);
        
        a.transform.translate(-17, -19); //current postion(0,0)
        b.transform.translate(20, 20); //current position(22,22)
        
        world.init(); // run one frame

        expect(world.getSubWorlds()[0].getCollisionObjects().length).to.equal(1);
        
        expect(colA.subworld.getId()).to.equal(0);
        expect(colB.subworld.getId()).to.equal(8);

        a.transform.translate(20, 0); //current postion(20,0)
        b.transform.translate(0, -10); //current position(22,12)

        world.init(); // run one frame
        
        expect(colA.subworld.getId()).to.equal(2);
        expect(colB.subworld.getId()).to.equal(5);

        expect(world.getSubWorlds()[0].getCollisionObjects().length).to.equal(0);
        expect(world.getSubWorlds()[1].getCollisionObjects().length).to.equal(0);
        expect(world.getSubWorlds()[2].getCollisionObjects().length).to.equal(1);
        expect(world.getSubWorlds()[3].getCollisionObjects().length).to.equal(0);
        expect(world.getSubWorlds()[4].getCollisionObjects().length).to.equal(0);
        expect(world.getSubWorlds()[5].getCollisionObjects().length).to.equal(1);
        expect(world.getSubWorlds()[6].getCollisionObjects().length).to.equal(0);
        expect(world.getSubWorlds()[7].getCollisionObjects().length).to.equal(0);
        expect(world.getSubWorlds()[8].getCollisionObjects().length).to.equal(0);

    })
});