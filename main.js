import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import Stats from 'three/addons/libs/stats.module.js';
// note to self: GLTFLoader loads images like.png

// IMPORT CLASSES FROM OTHER FILES?
import { generate } from '/Ground.js/';
// let g = new Ground();

// get everything in place yea
export let scene, camera, renderer,
    controls, geometry, material,
    cube, light, stats;
    // export tag is needed to be accessed from other classes
    // maybe use accessor methods? idk then how will they use it????
    // it's not hard to add i just gotta remove the export keyword and make
    // the methods and then find a way to use them in other files

const clock = new THREE.Clock(); // make a clock for time n allat

init();
animate();
// initializing, scene, camera, WebGL Renderer & mouse controls
function init() {
    
    // camera params: fov, aspect ratio, near, far (clipping values)
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5; // yo make sure you get a good angle of this

    scene = new THREE.Scene();

    // create a light
    light = new THREE.AmbientLight(0xffff00, 0.9, 100); // takes 4 params: color, intensity, distance, decay
    light.position.set( 5, 5, 5 );
    light.castShadow = true;
    scene.add(light);

    // the actual good stuff (rather than initializing the scene)
    //geometry = new THREE.BoxGeometry(1, 1, 1); // cube shape
    //material = new THREE.MeshToonMaterial( { color: 0xdddddd } ); // cube color/other looks
    //cube = new THREE.Mesh( geometry, material ); // create the cube with the geometry & material
   // scene.add(cube); // add it 2 the scene!!!!!!!!!!

    const hlp = new THREE.AxesHelper(1); // red axis = x, green axis = y, blue axis = z
    hlp.position.x = -2;
    scene.add(hlp);
  
    // generate ground
    // let g = require('./Ground.js');
    generate();
    // new generate();
    // let g = new THREE.TorusKnotGeometry( 0.7, 0.2);
    // let r = new THREE.MeshToonMaterial();
    // let m = new THREE.Mesh( g, r );
    // m.position.x = 2;
    // scene.add( m );

    // end of the good stuff :(

    renderer = new THREE.WebGLRenderer( { antialias: true } );
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );
				document.body.appendChild( renderer.domElement );

    
    // makes OrbitControls
    controls = new OrbitControls( camera, renderer.domElement);

    // give the the statistics on this one :nerd:
    stats = new Stats();
    document.body.appendChild( stats.dom );
	window.addEventListener( 'resize', onWindowResize );

    
    

    controls.update(); // update orbit controls
}


function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}

function animate() {
	requestAnimationFrame( animate );

	// cube.rotation.x += 0.01;
	// cube.rotation.y += 0.01;

    controls.update(); // update orbit controls
	render();
    stats.update();
}

function render() {
    // might use for later
    const time = Date.now() * 0.0005; // time things
    const delta = clock.getDelta();

    renderer.render( scene, camera );

}
