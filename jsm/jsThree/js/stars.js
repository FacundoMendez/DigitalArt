
const canvas = document.querySelector('.starsWebGL')




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
camera.position.z = 2
camera.rotation.x = Math.PI/2;
scene.add(camera)



// renderer setup
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
});

renderer.setPixelRatio(Math.min(window.devicePixelRatio),2)
renderer.setSize ( size.width , size.height, false)






/* ---------------------------- */


const textureLoader = new THREE.TextureLoader()

const starTexture = textureLoader.load('./jsm/jsThree/img/star3.webp')

const geometry = new THREE.BufferGeometry()
const count = 1000
const position = new Float32Array(count * 3)
for (let i = 0; i < count * 3; i++) {
    position[i] =(Math.random()- 0.5) * 9
}

geometry.setAttribute("position", new THREE.BufferAttribute(position,3))

const material = new THREE.PointsMaterial({
    size:0.3,
    sizeAttenuation: true,
    color: new THREE.Color("#ff00ff"),
    map:starTexture,
    alphaMap:starTexture,
    transparent: true,
    depthTest:false
})

const particle = new THREE.Points(geometry,material)
scene.add(particle)




const animate = () =>{



    particle.rotation.x += -0.0001 
    particle.rotation.y += 0.001
    particle.rotation.z += 0.0003 

    renderer.render(scene,camera)
    window.requestAnimationFrame(animate)
    renderer.autoClear = true
}

animate()


renderer.render(scene,camera)
