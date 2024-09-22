import * as THREE from 'three';

// 1. create the Scene
const scene = new THREE.Scene(); //creates scene
scene.background = new THREE.Color('#F0F0F0')

// 2. Add the camera
const camera = new THREE.PerspectiveCamera(75 , window.innerWidth / window.innerHeight , 0.1  ,100);
camera.position.z = 5;

// 3. Create and add a cube object
const greometry = new THREE.BoxGeometry()
const material  = new THREE.MeshLambertMaterial({color : '#ffffff' , emissive : '#468585'})

const cude = new THREE.Mesh(greometry , material)
scene.add(cude);

// 4. Add lighting 
const light = new THREE.DirectionalLight(0x9cdba6 , 10);
light.position.set(1 , 1 , 1);
scene.add(light)

// 5. Set up the renderer 
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth , window.innerHeight);
document.body.appendChild(renderer.domElement);

// 6. Animate the scene 
function animate () { 
    requestAnimationFrame(animate)
    cude.rotation.x += 0.03;
    cude.rotation.y += 0.09;
    renderer.render(scene , camera);
}

animate()