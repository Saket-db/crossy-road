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