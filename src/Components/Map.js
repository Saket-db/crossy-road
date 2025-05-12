import * as THREE from "three";
import { Grass } from "./Grass";
import { Tree } from "./Tree";
import { Car } from "./Car";
import { Road } from "./Road"; 
import { Truck } from "./Truck";
import { Bus } from "./Bus";

export const metadata = [
  {
    type: "truck",
    direction: true,
    speed: 0.8,
    vehicles: [
      {
        initialTileIndex: -4,
        color: 0x000ff0
      }
    ]
  },
  {
    type: "forest",
    trees: [
      { tileIndex: -3, height: 40 },
      { tileIndex: 1, height: 60 },
      { tileIndex: 4, height: 50 }
    ]
  },
  {
    type: "car",
    direction: false,
    speed: 2,
    vehicles: [
      {
        initialTileIndex: 2,
        color: 0xf0f000
      }
    ]
  },

  {
    type: "bus",
    direction: false,
    speed: 1,
    vehicles: [
      {
        initialTileIndex: -2,
        color: 0xFF0000
      }
    ]
  },
];


export const map = new THREE.Group();

export function initializeMap() {
    // Add a single base grass row (player usually stands here)
    const baseGrass = Grass(0);
    map.add(baseGrass);

    addRow();  // Add all metadata rows starting from row 1
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

        if (rowData.type === "car") {
            const row = Road(rowIndex);
            rowData.vehicles.forEach((vehicle) => {
                const car = Car(
                    vehicle.initialTileIndex,
                    rowData.direction,
                    vehicle.color
                );
                vehicle.ref = car
                row.add(car);
            });
            map.add(row);
        }

        if (rowData.type === "truck") {
            const row = Road(rowIndex);
            rowData.vehicles.forEach((vehicle) => {
                const truck = Truck(
                    vehicle.initialTileIndex,
                    rowData.direction,
                    vehicle.color
                );
                vehicle.ref = truck;
                row.add(truck);
            });
            map.add(row);
        }
        if (rowData.type === "bus") {
            const row = Road(rowIndex);
            rowData.vehicles.forEach((vehicle) => {
                const bus = Bus(
                    vehicle.initialTileIndex,
                    rowData.direction,
                    vehicle.color
                );
                vehicle.ref = bus;
                row.add(bus);
            });
            map.add(row);
        }



    });
}
