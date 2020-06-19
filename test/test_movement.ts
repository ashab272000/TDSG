import {expect} from "chai";
import { GameObject }  from '../src/GameEngine/GameObject/game_object';
import { Movement } from '../src/GameEngine/GameObject/movement';

describe("Movement", () => {
  

    it("Testing initial position", () =>{
        const a = new GameObject();
        const moveA = new Movement(a.transform, 1);
        expect(a.transform.position.x).to.equal(0);
        expect(a.transform.position.y).to.equal(0);
    });
    
    it("Testing moveNorth to moveWest", () => {
        const a = new GameObject();
        const moveA = new Movement(a.transform, 1);
        //magnitude of movement = 1
        moveA.moveNorth();
        expect(a.transform.position.x).to.equal(0);
        expect(a.transform.position.y).to.equal(-1);
        moveA.moveEast();
        expect(a.transform.position.x).to.equal(1);
        expect(a.transform.position.y).to.equal(-1);
        moveA.moveSouth();
        expect(a.transform.position.x).to.equal(1);
        expect(a.transform.position.y).to.equal(0);
        moveA.moveWest();
        expect(a.transform.position.x).to.equal(0);
        expect(a.transform.position.y).to.equal(0);
    })

    it("Testing moveNorth to moveWest", () => {
        const a = new GameObject();
        const moveA = new Movement(a.transform, 1);
        //magnitude of movement = 1
        moveA.moveNorth();
        expect(a.transform.position.x).to.equal(0);
        expect(a.transform.position.y).to.equal(-1);
        moveA.moveEast();
        expect(a.transform.position.x).to.equal(1);
        expect(a.transform.position.y).to.equal(-1);
        moveA.moveSouth();
        expect(a.transform.position.x).to.equal(1);
        expect(a.transform.position.y).to.equal(0);
        moveA.moveWest();
        expect(a.transform.position.x).to.equal(0);
        expect(a.transform.position.y).to.equal(0);
    })
    
    it("Testing moveForward", () => {
        //when rotation is 0, direction of the player is on the east
        //Direction
        //---->
        const a = new GameObject();
        const moveA = new Movement(a.transform, 1);
        moveA.moveForward();
        expect(a.transform.position.x).to.equal(1);
        expect(a.transform.position.y).to.equal(0);

        //changing the direction of the gameobject by 90
        //direction
        // |
        // |
        // |
        // V
        a.transform.rotate(90);
        moveA.moveForward();
        moveA.moveForward();
        expect(a.transform.position.x).to.equal(1);
        expect(a.transform.position.y).to.equal(2);
        
        
        //changing the direction of the gameobject by 90
        //direction
        // <----
        a.transform.rotate(90);
        moveA.moveForward();
        moveA.moveForward();
        moveA.moveForward();
        expect(a.transform.position.x).to.equal(-2);
        expect(a.transform.position.y).to.equal(2);
        
        //changing the direction of the gameobject by 90
        //direction
        // A
        // |
        // |
        // |
        a.transform.rotate(90);
        moveA.moveForward();
        moveA.moveForward();
        moveA.moveForward();
        expect(a.transform.position.x).to.equal(-2);
        expect(a.transform.position.y).to.equal(-1);
        
    })

    it("Testing moveRight", () => {
        //when rotation is 0, direction of the player is on the east
        //Direction
        //---->
        const a = new GameObject();
        const moveA = new Movement(a.transform, 1);
        moveA.moveRight();
        expect(a.transform.position.x).to.equal(0);
        expect(a.transform.position.y).to.equal(1);

        //changing the direction of the gameobject by 90
        //direction
        // |
        // |
        // |
        // V
        a.transform.rotate(90);
        moveA.moveRight();
        moveA.moveRight();
        expect(a.transform.position.x).to.equal(-2);
        expect(a.transform.position.y).to.equal(1);
        
        
        //changing the direction of the gameobject by 90
        //direction
        // <----
        a.transform.rotate(90);
        moveA.moveRight();
        moveA.moveRight();
        moveA.moveRight();
        expect(a.transform.position.x).to.equal(-2);
        expect(a.transform.position.y).to.equal(-2);
        
        //changing the direction of the gameobject by 90
        //direction
        // A
        // |
        // |
        // |
        a.transform.rotate(90);
        moveA.moveRight();
        moveA.moveRight();
        moveA.moveRight();
        expect(a.transform.position.x).to.equal(1);
        expect(a.transform.position.y).to.equal(-2);
        
    })

    it("Testing moveLeft", () => {
        //when rotation is 0, direction of the player is on the east
        //Direction
        //---->
        const a = new GameObject();
        const moveA = new Movement(a.transform, 1);
        moveA.moveLeft();
        expect(a.transform.position.x).to.equal(0);
        expect(a.transform.position.y).to.equal(-1);

        //changing the direction of the gameobject by 90
        //direction
        // |
        // |
        // |
        // V
        a.transform.rotate(90);
        moveA.moveLeft();
        moveA.moveLeft();
        expect(a.transform.position.x).to.equal(2);
        expect(a.transform.position.y).to.equal(-1);
        
        
        //changing the direction of the gameobject by 90
        //direction
        // <----
        a.transform.rotate(90);
        moveA.moveLeft();
        moveA.moveLeft();
        moveA.moveLeft();
        expect(a.transform.position.x).to.equal(2);
        expect(a.transform.position.y).to.equal(2);
        
        //changing the direction of the gameobject by 90
        //direction
        // A
        // |
        // |
        // |
        a.transform.rotate(90);
        moveA.moveLeft();
        moveA.moveLeft();
        moveA.moveLeft();
        expect(a.transform.position.x).to.equal(-1);
        expect(a.transform.position.y).to.equal(2);
        
    })


})