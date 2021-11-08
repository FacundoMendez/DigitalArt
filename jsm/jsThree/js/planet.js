import {OrbitControls} from "../three.js-master/examples/jsm/controls/OrbitControls.js"

const canvas = document.querySelector('.planetWebGL')




// scene setup
const scene = new THREE.Scene();


const size = {
    width :  window.innerWidth,
    height : window.innerHeight
}

window.addEventListener ('resize', () => {
    size.width = window.innerWidth
    size.height = window.innerHeight

    camera.aspect = size.width / size.height
    camera.updateProjectionMatrix()

    renderer.setSize ( size.width , size.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio),2)
})


const camera = new THREE.PerspectiveCamera(60, size.width/size.height, 0.1,10000)
camera.position.z = 2.8
scene.add(camera)



// renderer setup
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
});
renderer.setSize ( size.width , size.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio),2)



// orbit control setup
 const controls = new OrbitControls(camera,canvas);
controls.enableDamping = true
controls.enableZoom = false 
controls.enablePan= false
 


const cursor = {
    x:0,
    y:0
}

window.addEventListener('mousemove', (event) =>{
    
    cursor.x = event.clientX / innerWidth -0.5
    cursor.y = -(event.clientY / innerHeight -0.5)
});



// earth geometry
const earthGeometry = new THREE.SphereGeometry(0.6, 32, 32);

// earth material
const earthMaterial = new THREE.MeshPhongMaterial({
    map: THREE.ImageUtils.loadTexture('./jsm/jsThree/img/texturePlaneta/earthmap1k.jpg'),
    bumpMap: THREE.ImageUtils.loadTexture('./jsm/jsThree/img/texturePlaneta/earthbump.jpg'),
    bumpScale: 0.2
});

// earth mesh
const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);

scene.add(earthMesh);

// cloud Geometry
const cloudGeometry = new THREE.SphereGeometry(0.63, 32, 32);

// cloud metarial
const cloudMetarial = new THREE.MeshPhongMaterial({
    map: THREE.ImageUtils.loadTexture('./jsm/jsThree/img/texturePlaneta/earthCloud.png'),
    transparent: true,
});

// cloud mesh
const cloudMesh = new THREE.Mesh(cloudGeometry, cloudMetarial);
scene.add(cloudMesh);

// galaxy geometry
const starGeometry = new THREE.SphereGeometry(80, 64, 64);

// galaxy material
const starMaterial = new THREE.MeshBasicMaterial({
    map : THREE.ImageUtils.loadTexture('./jsm/jsThree/img/texturePlaneta/galaxy.png'),
    side: THREE.BackSide
});

// galaxy mesh
const starMesh = new THREE.Mesh(starGeometry, starMaterial);
scene.add(starMesh);





// ambient light
const ambientlight = new THREE.AmbientLight(0xffffff, 0.2);
scene.add(ambientlight);

// point light
const pointLight = new THREE.PointLight(0xffffff, 1)
pointLight.position.set(5, 3, 5);
scene.add(pointLight);




const clock = new THREE.Clock()

const animate = () =>{

    starMesh.position.x = cursor.x * 5;  
    starMesh.position.y = cursor.y *-5;
    starMesh.position.z = cursor.y *5;
    
    
    starMesh.rotation.y -= 0.0007;
    earthMesh.rotation.y -= 0.0015;
    cloudMesh.rotation.y -= 0.001;


    controls.update()
    renderer.render(scene,camera)
    window.requestAnimationFrame(animate)

}

animate()


renderer.render(scene,camera)