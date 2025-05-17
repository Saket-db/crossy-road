import * as THREE from "three";
import { InvalidEnd } from "../utilities/InvalidEnd";
import { addRow } from "./Map";
import { metadata as row } from "./Map";


export const player = Player();

function Player() {
    const player = new THREE.Group();

    const body = new THREE.Mesh(
        new THREE.BoxGeometry(18, 18, 25),
        new THREE.MeshLambertMaterial({
            color: "aqua",
            flatShading: true,
        })
    );
    body.position.z = 12.5;
    body.castShadow = true;
    body.receiveShadow = true;
    player.add(body);

    const cap = new THREE.Mesh(
        new THREE.BoxGeometry(2, 4, 2),
        new THREE.MeshLambertMaterial({
        color: 0xf0619a,
        flatShading: true,
    })
    );
    cap.position.z = 26;
    cap.castShadow = true;
    cap.receiveShadow = true;
    player.add(cap);

    //player.position.z = 12.5;// setting base postion above ground
    return player;
}

// Position on the grid
export const position = {
    currentRow: 0,
    currentTile: 0,
};

// Movement queue
export const moveQueue = [];

export function queueMove(direction) {
const isValidMove = InvalidEnd({
    rowIndex: position.currentRow,
    tileIndex: position.currentTile,
},
[...moveQueue, direction]
);
if(!isValidMove) return;
    moveQueue.push(direction);
}

// Called when a step animation is completed
export function stepCompleted() {
    const direction = moveQueue.shift();

    if (direction === "forward" ) position.currentRow += 1;
    if (direction === "backward") position.currentRow -= 1;
    if (direction === "left" ) position.currentTile -= 1;
    if (direction === "right" ) position.currentTile += 1;

    if (position.currentRow > row.length - 10) addRow();
}
