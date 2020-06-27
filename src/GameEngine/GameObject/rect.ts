import { Vector2 } from "./vector2";
import { Transform } from "./transform";

/**
 * Returns four vertices that represents a rectangle
 * 
 * Takes a size(Vector2) as parameter, to create the rectangle
 * 
 * The vertices are placed in the following way
 * 
 * 1st Vertex (0, 0) --------------------------------------  2nd Vertex(x, 0)
 * 
 *      ------------------------------------------------------------
 *      |                                                          |
 *      |                                                          |
 *      |                                                          |
 *      |                                                          |
 *      |                                                          |
 *      |                                                          |
 *      |                                                          |
 *      |                                                          |
 *      |                                                          |
 *      |                                                          |
 *      |                                                          |
 *      ------------------------------------------------------------
 * 4th Vertex (0, y)   --------------------------------     3rd Vertex(x, y)
 *          
 */
export class Rect extends Transform{

    private vertices : Vector2[] = [];
    private positionedVertices : Vector2[];

    constructor(size : Vector2){
        super();
        this.size = size;
        this.vertices.push(new Vector2(0,0));
        this.vertices.push(new Vector2(this.size.x, 0));
        this.vertices.push(new Vector2(this.size.x, this.size.y));
        this.vertices.push(new Vector2(0, this.size.y));

        this.positionedVertices = this.vertices.slice(0);
    }

    public updateVertices(){
        
        for (let i = 0; i < this.vertices.length; i++)
        {
            this.positionedVertices[i].x = this.vertices[i].x + this.position.x;
            this.positionedVertices[i].y = this.vertices[i].y + this.position.y;
        }
    }

    public getVertices() {
        return this.positionedVertices;
    }
}