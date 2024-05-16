import * as THREE from 'three';
import { scene } from './main.js';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// import Stats from 'three/addons/libs/stats.module.js';

// use 'export' keyword to make it public
// export default class Ground {
//     // use this.??? idk
    export function generate() {


        // THE GROUND
        let planeGeo = new THREE.PlaneGeometry(10, 10, 100, 100); // width, height, widthSegments, heightSegments

        let dMap = new THREE.TextureLoader().load("/images/heightmap.png"); // displacement map

        dMap.wrapS = dMap.wrapT = THREE.RepeatWrapping;
        dMap.repeat.set(1, 1); // THIS AFFECTS HOW MANY SEGMENTS YOU CAN PUT HEIGHTMAPS INTO

        // the plane material (heightmap)
        let planeMat = new THREE.MeshStandardMaterial( { 
            color: 0x008000, 
            wireframe: true,
            displacementMap: dMap,
            displacementScale: 1 // affects strength of the thing (intensity ig?)
        } );
        // instantiate the ground
        let ground = new THREE.Mesh(planeGeo, planeMat);
        ground.position.y = -1;
        ground.rotateX(Math.PI / 180 * -90); // turns in radians, not degrees
        scene.add(ground);
    }
// }