import './style.css'
import * as THREE from 'three';
import {Renderer} from './Components/Renderer';
import {Camera} from './Components/Camera';
import {player} from './Components/Player';
import { initializeMap, map } from './Components/Map';


const scene = new THREE.Scene();
scene.add(player);
scene.add(map);

const ambientLight = new THREE.AmbientLight();
scene.add(ambientLight);

const dirLight = new THREE.DirectionalLight();
dirLight.position.set(-100, -100, 200);
scene.add(dirLight);
// adding ambient light(to make the entire canvas bright)
// adding direction light( to make darkeer the edges, where light is not being received)

const camera = Camera();
scene.add(camera);

intializeGame();

function intializeGame(){
    initializeMap();
}


const renderer = Renderer();
renderer.render(scene, camera);
