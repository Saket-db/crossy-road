import * as THREE from "three";
import { player, position, moveQueue, stepCompleted } from "./Components/Player";
import { tileSize } from "./constants";

const moveClock = new THREE.Clock(false);

export function animatePlayer() {
    if (!moveQueue.length) return;
    if (!moveClock.running) moveClock.start();

    const stepTime = 0.2;
    const progress = Math.min(1, moveClock.getElapsedTime() / stepTime);

    setPosition(progress);
    setRotation(progress);

    if (progress >= 1) {
        stepCompleted();
        moveClock.stop();
    }

    function setPosition(progress) {
        const direction = moveQueue[0]; // Peek, don’t shift
        const startX = position.currentTile * tileSize;
        const startY = position.currentRow * tileSize;
        let endX = startX;
        let endY = startY;

        if (direction === "left") endX -= tileSize;
        if (direction === "right") endX += tileSize;
        if (direction === "forward") endY += tileSize;
        if (direction === "backward") endY -= tileSize;

        player.position.x = THREE.MathUtils.lerp(startX, endX, progress);
        player.position.y = THREE.MathUtils.lerp(startY, endY, progress);
        player.position.z = Math.sin(progress * Math.PI) * 8;
    }

    function setRotation(progress) {
        const direction = moveQueue[0]; // Same here
        let endRotation = 0;

        if (direction === "forward") endRotation = 0;
        if (direction === "left") endRotation = Math.PI / 2;
        if (direction === "right") endRotation = -Math.PI / 2;
        if (direction === "backward") endRotation = Math.PI;

        player.rotation.z = THREE.MathUtils.lerp(
            player.rotation.z,
            endRotation,
            progress
        );
    }
}
