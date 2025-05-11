import './style.css'
import * as THREE from 'three';
import {Renderer} from './Components/Renderer';
import {Camera} from './Components/Camera';
import {Player} from './Components/Player';

const scene = new THREE.Scene();
scene.add(player);

const ambientLight = new THREE.AmbientLight();
scene.add(ambientLight);

const dirLight = new THREE.DirectionalLight();
dirLight.position.set(-100, -100, 200);
scene.add(dirLight);
// adding ambient light(to make the entire canvas bright)
// adding direction light( to make darkeer the edges, where light is not being received)

const camera = Camera();
scene.add(camera);

const renderer = Renderer();
renderer.render(scene, camera);
