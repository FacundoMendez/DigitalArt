import { OrbitControls } from '../three.js-master/examples/jsm/controls/OrbitControls.js';


const canvas = document.querySelector('.container3__cardMovile2')

const scene = new THREE.Scene()


const texture = new THREE.TextureLoader().load( "./img/collections/atlantis/1.png" );



const material = new THREE.MeshStandardMaterial({
    map: texture,
    metalness:0.96,
    roughness:2,       
  }) 
  material.roughnessMap = texture        
const geometry= new THREE.BoxGeometry(10,8,0.2)
    
const mesh = new THREE.Mesh(geometry,material)

scene.add(mesh)

const ambientLight = new THREE.AmbientLight(0xffffff, 2)
scene.add(ambientLight)

const pointLight1 = new THREE.PointLight(0xffffff, 2)
pointLight1.position.set(3,4,2.5)
scene.add(pointLight1)

const pointLight2 = new THREE.PointLight(0x777777, 2.5)
pointLight2.position.set(3.5,-2,2)
scene.add(pointLight2)

const pointLight3 = new THREE.PointLight(0x777777, 2.5)
pointLight3.position.set(-1.5,-1,2)
scene.add(pointLight3)

const pointLight4 = new THREE.PointLight("0x777777", 2.5)
pointLight4.position.y = -8
pointLight4.position.x = -7
pointLight4.position.z = -2
scene.add(pointLight4)


const size = {
    width : 600,
    height : 600
}

window.addEventListener ('resize', () => {
/*     size.width = window.innerWidth
    size.height = window.innerHeight */

    camera.aspect = size.width / size.height
    camera.updateProjectionMatrix()

    renderer.setSize ( size.width , size.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio),2)
})


const camera = new THREE.PerspectiveCamera(65, size.width/size.height, 0.1,100)
camera.position.z= 10
camera.position.x= 0
    scene.add(camera)


const controls = new OrbitControls(camera,canvas)
    controls.enableDamping = true
   /*  controls.enablePan = false */
   controls.enableZoom = false 
   controls.enabled= false
/*     controls.maxDistance = 11;
    controls.minDistance = 8;  */
    controls.minPolarAngle = 1.4; // radians
    controls.maxPolarAngle = 1.6; 
    controls.minAzimuthAngle = - 0.7; // radians
    controls.maxAzimuthAngle = 0.5;


const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha:true,
    antialias:true
})
renderer.setSize ( size.width , size.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio),2)


const clock = new THREE.Clock()

const animate = () =>{
    const time = clock.getElapsedTime()

    camera.lookAt(camera,scene)
    controls.update()

    mesh.position.y= Math.sin(time)*0.3
    mesh.rotation.y= Math.sin(time)* -0.2
   /*  mesh.rotation.y -= 0.004 */
    renderer.render(scene,camera)
    window.requestAnimationFrame(animate)

}

animate()

renderer.render(scene,camera)