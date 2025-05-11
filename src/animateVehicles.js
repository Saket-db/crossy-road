import * as THREE from "three";
import { metadata as rows } from "./Components/Map";
import { minTileIndex, maxTileIndex, tileSize} from "./constants";

const clock = new THREE.Clock();

export function animateVehicles()
{
    const delta = clock.getDelta();

rows.forEach((rowData) => {
    if (rowData.type === "car" || rowData.type === "truck") {
    const beginningOfRow = (minTileIndex - 2) *tileSize;
    const endOfRow = (maxTileIndex + 2) * tileSize;
    }
});

}