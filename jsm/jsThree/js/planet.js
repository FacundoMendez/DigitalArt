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


const camera = new THREE.PerspectiveCamera(60, size.width/size.height, 0.1,1000)
camera.position.z = 2.9
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







/* 
// galaxy geometry
const starGeometry = new THREE.SphereGeometry(80, 64, 64);

// galaxy material
const starMaterial = new THREE.MeshBasicMaterial({
    map : THREE.ImageUtils.loadTexture('./jsm/jsThree/img/texturePlaneta/galaxy.png'),
    side: THREE.BackSide
});

// galaxy mesh
const starMesh = new THREE.Mesh(starGeometry, starMaterial);
scene.add(starMesh); */





// ambient light
const ambientlight = new THREE.AmbientLight(0xffffff, 0.2);
scene.add(ambientlight);

// point light
const pointLight = new THREE.PointLight(0xffffff, 1)
pointLight.position.set(5, 3, 5);
scene.add(pointLight);



// earth geometry
const earthGeometry = new THREE.SphereBufferGeometry(0.6, 32, 32);

// earth material
const earthMaterial = new THREE.MeshPhongMaterial({
    map: THREE.ImageUtils.loadTexture('./jsm/jsThree/img/texturePlaneta/earthmap1k.jpg'),
    bumpMap: THREE.ImageUtils.loadTexture('./jsm/jsThree/img/texturePlaneta/earthbump.jpg'),
    bumpScale: 0.2,
    transparent: true,
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



const textureLoader = new THREE.TextureLoader()

const starTexture = textureLoader.load('./jsm/jsThree/img/star3.webp')

const geometry = new THREE.BufferGeometry()
const count = 700
const position = new Float32Array(count * 3)
for (let i = 0; i < count *3; i++) {
 
    position[i] =(Math.random()- 0.5) * 9
}

geometry.setAttribute("position", new THREE.BufferAttribute(position,3))

const material = new THREE.PointsMaterial({
    size:0.3,
    sizeAttenuation: true,
    color: new THREE.Color("#4DaaFF"),
    map:starTexture,
    alphaMap:starTexture,
    transparent: true,
    depthTest:false,
})

const particle = new THREE.Points(geometry,material)
particle.position.z= -1
scene.add(particle)






const clock = new THREE.Clock()

const animate = () =>{


    
    
/*     starMesh.rotation.y -= 0.0007; */
    earthMesh.rotation.y += -0.00009 
    particle.rotation.y += -0.0009
    particle.rotation.z += 0.0009

    earthMesh.rotation.y -= 0.0015;
    cloudMesh.rotation.y -= 0.0019;


    controls.update()
    renderer.render(scene,camera)
    window.requestAnimationFrame(animate)

}

animate()


renderer.render(scene,camera)