import * as THREE from "three";
// import { color } from "three/tsl";

export const player = Player();

function Player()
    {
        const body = new THREE.Mesh(
            new THREE.BoxGeometry(18,18,25),
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
    
    // Collect User Input movements and put them in a queue and execute the commands 1 by 1.
export const position = {
        currentRow : 0,
        currentTile : 0,
    };

    export const moveQueue = [];

    export function queueMove(direction)
    {
        moveQueue.push(direction);
    }

    export function steps()
    {
        const direction = moveQueue.shift();

        if(direction === "forward" || direction === "w") position.currentRow  +=1;
        if(direction === "backward" || direction === "s") position.currentRow  -=1;
        if(direction === "left" || direction === "a") position.currentTile  +=1;
        if(direction === "right" || direction === "d") position.currentRow  +=1;
    };