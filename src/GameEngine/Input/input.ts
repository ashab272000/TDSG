import { Vector2 } from "../GameObject/vector2";
import { World } from "../WorldClass/world";


export class Input{

    static keycodeInput : Map<String, boolean> = new Map<String, boolean>();
    static mousePosition : Vector2 = new Vector2(0,0);
    constructor(){

    }

    /**
     * Initialize Input Class
     */
    static init(){
        window.addEventListener("keydown", (e : KeyboardEvent) => {
            Input.keycodeInput.set(e.key, true);
        });
        window.addEventListener("keyup", (e : KeyboardEvent) => {
            Input.keycodeInput.set(e.key, false);
        });

        let canvas = document.getElementsByTagName('canvas')[0];
        let mouseX : number, mouseY : number;
        let rect = canvas.getBoundingClientRect();
        canvas.addEventListener('mousemove', (e) => {
            mouseX = e.clientX - rect.left;
            mouseY = e.clientY - rect.top;
            Input.mousePosition = new Vector2(mouseX/ World.getInstance().PIXELUNIT, mouseY / World.getInstance().PIXELUNIT);
        });
    }


    static getKeyDown(key : String)
    {
        if(Input.keycodeInput.has(key))
        {
            return Input.keycodeInput.get(key);
        }
    }

}