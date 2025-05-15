import * as THREE from "three";

export const player = Player();

function Player() {
    const body = new THREE.Mesh(
        new THREE.BoxGeometry(18, 18, 25),
        new THREE.MeshLambertMaterial({
            color: "aqua",
            flatShading: true,
        })
    );
    body.position.z = 13;
    body.castShadow = true;
    body.receiveShadow = true;
    return body;
}

// Position on the grid
export const position = {
    currentRow: 0,
    currentTile: 0,
};

// Movement queue
export const moveQueue = [];

export function queueMove(direction) {
    moveQueue.push(direction);
}

// Called when a step animation is completed
export function stepCompleted() {
    const direction = moveQueue.shift();

    if (direction === "forward" ) position.currentRow += 1;
    if (direction === "backward") position.currentRow -= 1;
    if (direction === "left" ) position.currentTile -= 1;
    if (direction === "right" ) position.currentTile += 1;
}
