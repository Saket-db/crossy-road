import * as THREE from "three";

export function Camera()
{
    const size = 300;
    const viewRatio = window.innerWidth/ window.innerHeight;
    const width = viewRatio < 1 ? size: size* viewRatio;
    const height = viewRatio < 1 ? size/viewRatio : size;

    const camera = new THREE.OrthographicCamera( // Making the game right sit & gives a Parallel box POV
        width / -2, // left
        width / 2, // Right
        height / 2, // Top
        height / -2, // Bottom
        100, //near
        900 // far
    );

    camera.up.set(0, 0 ,1);
    camera.position.set(300, -300, 300);
    camera.lookAt(0, 0, 1);
    return camera;
}

// Incase of an Orthographic camera ->  We define a box and everything in this box is projected on to the screen