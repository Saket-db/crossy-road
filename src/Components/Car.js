import * as THREE from "three";
import { tileSize } from "../constants";
import { Wheel } from "./Wheel";


export function Car(initialTileIndex, direction, color)
{
    const car = new THREE.Group();
    car.position.x = initialTileIndex*tileSize;

    if(!direction) car.rotation.z = Math.PI;

    const main = new THREE.Mesh(new THREE.BoxGeometry(50, 30, 15), 
    new THREE.MeshBasicMaterial({color, flatShading: true}));

    main.position.z = 12;
    main.receiveShadow = true;
    main.castShadow = true;
    car.add(main);

    const cabin = new THREE.Mesh(
        new THREE.BoxGeometry(33, 24, 13),
        new THREE.MeshLambertMaterial({
            color: "white", 
            flatShading: true,
        })
    );

    cabin.position.x = -6;
    cabin.castShadow = true;
    cabin.receiveShadow = true;
    cabin.position.z = 25.5;
    car.add(cabin);

    const frontWheel = Wheel(18);
    car.add(frontWheel);

    const backWheel = Wheel(-18);
    car.add(backWheel);

    return car;
}