// import * as THREE from 'https://cdn.skypack.dev/three@0.129.0/build/three.module.js';
import * as THREE from 'https://cdn.skypack.dev/pin/three@v0.129.0-XYKMzgCzb23GRdwfqj2I/mode=imports/optimized/three.js';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js';

let scene, camera, renderer;
let geometry, material, cube;

init();
animate();

function init() {
    // initializing, scene, camera, WebGL Renderer & mouse controls
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    renderer = new THREE.WebGLRenderer();
    const controls = new OrbitControls( camera, renderer.domElement );

    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    // init the CUBE
    geometry = new THREE.BoxGeometry(1, 1, 1);
    material = new THREE.MeshLambertMaterial( { color: "#00FF00	" } );
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    controls.update(); // update orbit controls

}

function animate() {
	requestAnimationFrame(animate);

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

    controls.update(); // update orbit controls

	renderer.render(scene, camera);
}