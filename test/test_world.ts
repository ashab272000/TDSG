import {expect} from "chai";
import { World } from '../src/GameEngine/WorldClass/world';
import { GameObject } from "../src/GameEngine/GameObject/game_object";

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
        let index = world.getSubWorldWithUnits(posA.x, posA.y).getId();
        expect(index).to.equal(0);
    })
    
    it('assignSubworld1 (Gameobject is instantiated)', () => {
        let world = World.getInstance();
        World.getInstance().clearAllGameObjects();
        world.clearWorld();
        world.generateWorld(25);

        const a = new GameObject();
        const b = new GameObject();

        world.test_assignSubworld(a);
        expect(world.getSubWorlds()[0].contains(a)).to.true;
        expect(a.subworld).to.equal(world.getSubWorlds()[0]);
    })

    it('assignSubworld2 (Gameobject is translated)', () => {
        World.getInstance().clearAllGameObjects();
        let world = World.getInstance();
        world.clearWorld();
        world.generateWorld(25);

        const a = new GameObject();
        a.transform.translate(17,19)
        const b = new GameObject();

        world.test_assignSubworld(a);
        expect(world.getSubWorlds()[4].contains(a)).to.true;
        expect(a.subworld).to.equal(world.getSubWorlds()[4]);
    })
    
    
    it('Test gameobjects subworld after translating Number 1',() => {
        World.getInstance().clearWorld();
        World.getInstance().clearAllGameObjects();
        World.getInstance().clearAllGameObjects();
        let world = World.getInstance();
        world.generateWorld(25);

        let a = new GameObject();
        let posA = a.transform.position;
        a.transform.translate(17, 20)
        world.init();

        expect(a.subworld.getId()).to.equal(7);
    })

    it('Test gameobjects subworld after translating Number 2',() => {
        
        World.getInstance().clearWorld();
        World.getInstance().clearAllGameObjects();
        let world = World.getInstance();
        world.generateWorld(25);

        let a = new GameObject();
        let b = new GameObject() 
        let posA = a.transform.position;
        let posB = b.transform.position;
        a.transform.translate(17, 19);
        b.transform.translate(2, 2);
        
        world.init();

        expect(a.subworld.getId()).to.equal(4);
        expect(b.subworld.getId()).to.equal(0);
        //expect(a.subworld)
    })

    it('GameObjects subworld after translating for 3 frames, (checks how update works with assigning subworld)', () => {
        World.getInstance().clearWorld();
        World.getInstance().clearAllGameObjects();
        let world = World.getInstance();
        world.generateWorld(25);
        

        expect(world.getSubWorlds()[0].getGameobjects().length).to.equal(0);
        
        let a = new GameObject();
        let b = new GameObject() 
        let posA = a.transform.position;
        let posB = b.transform.position;
        a.transform.translate(17, 19);
        b.transform.translate(2, 2);
        
        world.init(); // run one frame

        expect(world.getSubWorlds()[0].getGameobjects().length).to.equal(1);
        
        expect(a.subworld.getId()).to.equal(4);
        expect(b.subworld.getId()).to.equal(0);
        
        a.transform.translate(-17, -19); //current postion(0,0)
        b.transform.translate(20, 20); //current position(22,22)
        
        world.init(); // run one frame

        expect(world.getSubWorlds()[0].getGameobjects().length).to.equal(1);
        
        expect(a.subworld.getId()).to.equal(0);
        expect(b.subworld.getId()).to.equal(8);

        a.transform.translate(20, 0); //current postion(20,0)
        b.transform.translate(0, -10); //current position(22,12)

        world.init(); // run one frame
        
        expect(a.subworld.getId()).to.equal(2);
        expect(b.subworld.getId()).to.equal(5);

        expect(world.getSubWorlds()[0].getGameobjects().length).to.equal(0);
        expect(world.getSubWorlds()[1].getGameobjects().length).to.equal(0);
        expect(world.getSubWorlds()[2].getGameobjects().length).to.equal(1);
        expect(world.getSubWorlds()[3].getGameobjects().length).to.equal(0);
        expect(world.getSubWorlds()[4].getGameobjects().length).to.equal(0);
        expect(world.getSubWorlds()[5].getGameobjects().length).to.equal(1);
        expect(world.getSubWorlds()[6].getGameobjects().length).to.equal(0);
        expect(world.getSubWorlds()[7].getGameobjects().length).to.equal(0);
        expect(world.getSubWorlds()[8].getGameobjects().length).to.equal(0);

    })
});