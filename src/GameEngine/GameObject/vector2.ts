export class Vector2 {

    public x: number;
    public y: number;

    constructor(x : number = 0, y : number = 0) {
        this.x = x;
        this.y = y;
    }

    static substract (vector1 : Vector2, vector2 : Vector2)
    {
        return new Vector2 (vector1.x - vector2.x, vector1.y - vector2.y);
    }

    static add(vector1 : Vector2, vector2 : Vector2){
        return new Vector2(vector1.x + vector2.x, vector1.y + vector2.y);
    }

    public toString(){
        
        let str = `\n(x : ${this.x}, y: ${this.y})`;
        return str;
    }



}