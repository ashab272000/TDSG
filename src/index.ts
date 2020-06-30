import  './styles/style.css'
import { GameRunner } from './GameEngine/game_runner';
function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = "Ami gada";
    element.classList.add('hello');
    return element;
  }
  
document.body.appendChild(component());

const main = () => {
    new GameRunner(25, 25);
}

main();