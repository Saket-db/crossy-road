import * as THREE from "three";
import { moveQueue,stepCompleted } from "./components/Player";

const moveClock = new THREE.Clock(false);

export function animatePlayer()
{
    if(!moveQueue.length) return;
    if(!moveClock.running) moveClock.start();

    const stepTime = 0.2;
    const progress = Math.min(1, moveClock.getElapsedTime() / stepTime);
    setPosition(progress);
    setRotation(progress);

    if(progress >= 1)
    {
        stepCompleted();
        moveClock.stop();
    }
}