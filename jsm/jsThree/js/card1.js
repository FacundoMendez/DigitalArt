import { OrbitControls } from '../three.js-master/examples/jsm/controls/OrbitControls.js';


const canvas = document.querySelector('.container3__card-webgl')

const scene = new THREE.Scene()


const texture = new THREE.TextureLoader().load( "./jsm/jsThree/img/8.webp" );



const material = new THREE.MeshStandardMaterial({
    map: texture,
    metalness:1,
    roughness:2.5,     
  }) 
  material.roughnessMap = texture        
const geometry= new THREE.BoxBufferGeometry(8,9,0.5)
const mesh = new THREE.Mesh(geometry,material)

scene.add(mesh)

const ambientLight = new THREE.AmbientLight(0xffffff, 2)
scene.add(ambientLight)

const pointLight1 = new THREE.PointLight(0xffffff, 2)
pointLight1.position.set(0,4,1.5)
scene.add(pointLight1)

const pointLight2 = new THREE.PointLight(0x777777, 2.5)
pointLight2.position.set(2.5,0,3)
scene.add(pointLight2)

const pointLight3 = new THREE.PointLight(0x777777, 2.5)
pointLight3.position.set(0.5,-4,2)
scene.add(pointLight3)

const pointLight4 = new THREE.PointLight(0x777777, 2.5)
pointLight4.position.y = 0
pointLight4.position.x = -5
pointLight4.position.z = 2
scene.add(pointLight4)


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


const camera = new THREE.PerspectiveCamera(65, size.width/size.height, 0.1,100)
    camera.position.z= 10
    camera.position.x= -1
    scene.add(camera)


const controls = new OrbitControls(camera,canvas)
controls.enableDamping = true
controls.enableZoom = false 
controls.enablePan= false

    controls.minPolarAngle = 1.4; // radians
    controls.maxPolarAngle = 1.6; 
    controls.minAzimuthAngle = - 0.7; // radians
    controls.maxAzimuthAngle = 0.5;


const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha:true,
    antialias:true
})
renderer.setPixelRatio(Math.min(window.devicePixelRatio),2)
renderer.setSize ( size.width/2 , size.height/2)
renderer.autoClear = false





const clock = new THREE.Clock()

const animate = () =>{
    const time = clock.getElapsedTime()

    mesh.position.y= Math.sin(time)*0.3
    mesh.rotation.y= Math.sin(time)*0.2


    camera.lookAt(camera,scene)
    controls.update()
    renderer.render(scene,camera)
    window.requestAnimationFrame(animate)

}

animate()

renderer.render(scene,camera)
renderer.clear()