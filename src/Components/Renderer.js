import * as THREE from "three";

export function Renderer()
{
    const canvas = document.querySelector("canvas.game");;
    if(!canvas)
        throw new Error("Canvas not found");
}