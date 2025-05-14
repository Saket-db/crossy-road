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

    if (direction === "forward" || direction === "w") position.currentRow += 1;
    if (direction === "backward" || direction === "s") position.currentRow -= 1;
    if (direction === "left" || direction === "a") position.currentTile -= 1;
    if (direction === "right" || direction === "d") position.currentTile += 1;
}
