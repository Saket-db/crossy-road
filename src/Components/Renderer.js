import * as THREE from "three";

export function Renderer()
{
    const canvas = document.querySelector("#game"); // Searching game from index.html
    if(!canvas)
        throw new Error("Canvas not found");

    const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        canvas: canvas,
    });

    renderer.setPixelRatio(window.devicePixelRatio); //window is a special JavaScript object for the browser tab. devicePixelRatio is a property inside window.
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    return renderer;
}

// 2 Main camera options -> Perspective camera(sit in the left)[Default camera in 3js] and Orthographic Camera(sit in the right)


// GPT AND UNDERSTAND LINE BY LINE