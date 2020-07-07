import  './styles/style.css'
import { GameRunner } from './GameEngine/game_runner';
import { Map } from './Game/map';
import { Player } from './Game/Player/player';
import { Camera } from './GameEngine/canvas/camera';
import { Vector2 } from './GameEngine/GameObject/vector2';
function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = "Ami gada";
    element.classList.add('hello');
    return element;
  }
  
document.body.appendChild(component());

const main = () => {
    const map = new Map();
    const player = new Player();
    const camera = Camera.fullScreenCanvas();
    new GameRunner(map.transform.size.x, 1);
}

main();