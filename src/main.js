import './style.css'
import * as THREE from 'three';
import {Renderer} from './Components/Renderer';
import {Camera} from './Components/Camera';
// import {player} from './Components/Player';
import { player } from './Components/Player';
import { initializeMap, map } from './Components/Map';
import { DirectionLight } from './Components/DirectionLight';
import {animateVehicles} from "./animateVehicles";
// import {animatePlayer} from "./animatePlayer";
import "./collectUserInput";
import { animatePlayer } from './animatePlayer';


const scene = new THREE.Scene();
scene.add(player);
scene.add(map);

const ambientLight = new THREE.AmbientLight();
scene.add(ambientLight);

// const dirLight = new THREE.DirectionalLight();
// dirLight.position.set(-100, -100, 200);
// scene.add(dirLight);
// adding ambient light(to make the entire canvas bright)
// adding direction light( to make darkeer the edges, where light is not being received)

const dirLight = DirectionLight();
scene.add(dirLight);

const camera = Camera();
// player.add(camera);
scene.add(camera);

initializeGame();

function initializeGame(){
    initializeMap();
}


const renderer = Renderer();
renderer.setAnimationLoop(animate);
function animate()
{
    animateVehicles();
    animatePlayer();
    renderer.render(scene, camera);
}
