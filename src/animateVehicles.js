import * as THREE from "three";
import { metadata as rows } from "./Components/Map";
import { minTileIndex, maxTileIndex, tileSize} from "./constants";

const clock = new THREE.Clock();
const speedFactor = 80;
export function animateVehicles()
{
    const delta = clock.getDelta();

rows.forEach((rowData) => {
    if (rowData.type === "car" || rowData.type === "truck" || rowData.type === "bus") {
    const beginningOfRow = (minTileIndex - 2) *tileSize;
    const endOfRow = (maxTileIndex + 2) * tileSize;

    rowData.vehicles.forEach(({ref}) => {
        if(!ref) throw Error("Vehicle refernce is missing");

        if(rowData.direction)
        {
            ref.position.x = ref.position.x > endOfRow ? beginningOfRow : ref.position.x + rowData.speed * speedFactor * delta;
        }
        else{
            ref.position.x = ref.position.x < beginningOfRow ? endOfRow : ref.position.x - rowData.speed * speedFactor * delta;
        }
    });
    }
});

}