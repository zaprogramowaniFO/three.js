console.log(THREE);

//CANVAS
const canvas = document.querySelector('.webgl');
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

//SCENE
const scene = new THREE.Scene();

//MESH
const boxGeometry = new THREE.BoxGeometry(1,1,1);
const boxMaterial = new THREE.MeshPhongMaterial({
    color: 0xff0000,
    shininess: 80
});

const mesh = new THREE.Mesh(boxGeometry, boxMaterial); 

mesh.rotation.z = 1;
mesh.rotation.y = 2;

scene.add(mesh);

const geometry = new THREE.TorusKnotGeometry( 10, 3, 100, 16 );
const material = new THREE.MeshPhongMaterial( { color: 0xffff00 } );
const torusKnot = new THREE.Mesh( geometry, material );
scene.add( torusKnot );



//LIGHT
const light  = new THREE.PointLight(0x9dff00, 2);
light.position.z = 20;
light.position.y = -20;
light.position.x = -40;
scene.add(light);
const light2  = new THREE.PointLight(0xffffff, 1);
// light2.position.z = -20;
// light2.position.y = 20;
// light2.position.x = 40;
light2.position.set(-20,20,40);
scene.add(light2);



//CAMERA
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
    camera.position.z = 40;

    scene.add(camera);

//RENDERER


const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true
})


renderer.setSize(sizes.width, sizes.height);

//WINDOW
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;

    camera.updateProjectionMatrix();
});

//ANIMATE
const animate = () => {
    requestAnimationFrame(animate);
    mesh.rotation.x += 0.02;
    mesh.rotation.y += 0.01;
    torusKnot.rotation.y += 0.01;
    renderer.render(scene, camera);
}

animate();