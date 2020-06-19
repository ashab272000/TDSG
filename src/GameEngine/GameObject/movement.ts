import { Transform } from "./transform";

export class Movement {

    //this holds the transform of the Gameobject that 
    //instance of the class is attached to 
    private transform : Transform;
    //magnitude is how much the object will move
    private magnitude : number;

    constructor(transfrom : Transform, magnitude: number){
        this.transform = transfrom;
        this.magnitude = magnitude;
    }

    //moves the transform with the given x and y
    //probably dont need it 
    public move(x: number, y: number){
        this.transform.translate(x, y);
    }

    private degToRad(degrees: number){
        return degrees * Math.PI / 180;
    }
    private radToDeg(radians: number){
        return radians * 180 / Math.PI;
    }

    private forwardValues(){
        let x = Math.cos(this.degToRad(this.transform.rotation)) * this.magnitude;
        let y = Math.sin(this.degToRad(this.transform.rotation)) * this.magnitude;

        return {
            x: x,
            y: y
        }
    }

    public moveNorth(){
        this.transform.translate(0, -this.magnitude);
    }

    public moveEast(){
        this.transform.translate(this.magnitude, 0);
    }
    public moveSouth(){
        this.transform.translate(0, this.magnitude);
    }
    public moveWest(){
        this.transform.translate(-this.magnitude, 0);
    }

    public moveForward(){
        let values = this.forwardValues();
        this.transform.translate(values.x, values.y);
    }
    public moveRight(){
        let values = this.forwardValues();
        this.transform.translate(-values.y, values.x);
    }
    public moveBackward(){
        let values = this.forwardValues();
        this.transform.translate(-values.x, -values.y);
    }
    public moveLeft(){
        let values = this.forwardValues();
        this.transform.translate(values.y, -values.x);
    }

    
}