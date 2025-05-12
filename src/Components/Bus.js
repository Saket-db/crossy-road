import * as THREE from "three";
import { tileSize } from "../constants";
import { Wheel } from "./Wheel";


export function Bus(initialTileIndex, direction, color)
{
    const bus = new THREE.Group();
    bus.position.x = initialTileIndex*tileSize;

    if(!direction) bus.rotation.z = Math.PI;

    const main = new THREE.Mesh(new THREE.BoxGeometry(60, 30, 45), 
    new THREE.MeshLambertMaterial({color, flatShading: true}));

    main.position.z = 7;
    main.receiveShadow = true;
    main.castShadow = true;
    bus.add(main);

    // const cabin = new THREE.Mesh(
    //     new THREE.BoxGeometry(33, 24, 13),
    //     new THREE.MeshLambertMaterial({
    //         color: "white", 
    //         flatShading: true,
    //     })
    // );

    // cabin.position.x = -6;
    // cabin.castShadow = true;
    // cabin.receiveShadow = true;
    // cabin.position.z = 25.5;
    // car.add(cabin);

    const frontWheel = Wheel(19);
    bus.add(frontWheel);

    const backWheel = Wheel(-19);
    bus.add(backWheel);

    return bus;
}