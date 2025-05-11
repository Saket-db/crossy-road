import * as THREE from "three";
import { Grass } from "./Grass";
import { Tree } from "./Tree";
import { Car } from "./Car";
import { Road } from "./Road"; 

export const metadata = [
    {
        type: "car",               // This is a road with cars
        direction: false,
        speed: 1,
        vehicles: [
            {
                initialTileIndex: 2,
                color: 0xff0000     // Red car
            }
        ],
    },
    // ✅ You can add more rows here (e.g., forest or more car lanes)
    // {
    //     type: "forest",
    //     trees: [
    //         { tileIndex: -3, height: 50 },
    //         { tileIndex: 2, height: 30 },
    //         { tileIndex: 5, height: 50 },
    //     ],
    // }
];

export const map = new THREE.Group();

export function initializeMap() {
    const grass = Grass(0);    // Base grass row at index 0
    map.add(grass);

    addRow();                  // Add more rows using metadata
}

export function addRow() {
    metadata.forEach((rowData, index) => {
        const rowIndex = index + 1;

        if (rowData.type === "forest") {
            const row = Grass(rowIndex);
            rowData.trees.forEach(({ tileIndex, height }) => {
                const tree = Tree(tileIndex, height);
                row.add(tree);
            });
            map.add(row);
        }

        // Car (road) row
        if (rowData.type === "car") {
            const row = Road(rowIndex);
            rowData.vehicles.forEach((vehicle) => {
                const car = Car(
                    vehicle.initialTileIndex,
                    rowData.direction,
                    vehicle.color
                );
                row.add(car);
            });
            map.add(row);
        }
    });
}
