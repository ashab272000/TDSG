import {expect} from "chai";
import { GameObject }  from '../src/GameEngine/GameObject/game_object';
import { CollisionObject }  from '../src/GameEngine/GameObject/collision';
import { Vector2 } from "../src/GameEngine/GameObject/vector2";

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
        const a = new GameObject();
        const b = new GameObject();
        const colA = new CollisionObject(a);
        const colB = new CollisionObject(b);

        b.transform.size = new Vector2(2,2);

        a.transform.translate(8,8);
        b.transform.translate(7,7);

        colA.updateRectPositon();
        colB.updateRectPositon();

        expect(colB.isCollidingWithObject(colA)).to.true;

    })

    it('testw isCollidingWithGameObject', () => {
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
})