import { OrbitControls } from '../three.js-master/examples/jsm/controls/OrbitControls.js';


const canvas = document.querySelector('.textMuseum')

const scene = new THREE.Scene()





const fontLoader = new THREE.FontLoader()

    fontLoader.load(
        './jsm/jsThree/three.js-master/examples/fonts/helvetiker_bold.typeface.json',        //cargamos la fuente
        (font) =>
        {
            const textGeometry = new THREE.TextBufferGeometry(
                'MUSEUM',
                {
                    font: font,                                      //adquirimos la fuenta ya cargada previamente
                    size: 3,                                      //proporcionamos el tamaño
                    height: 3.1,                                    //proporcinamos el grosor
                    curveSegments: 5,                              //proporcionamos la curvatura (sirve para optimizar mas bajo mas optimizado)
                    bevelEnable: true,                              //proporcionam
                    bevelThickness: 0.03,                           //proporcionamos el grosor
                    bevelSize: 0.02,                                // 
                    bevelOffset: 0,                                 //
                    bevelSegments: 4                                //sirve para optimizar los segmentos ( mas bajo mas optimizado)
                }
            )
             
            textGeometry.center()                                //centramos el texto en el centro

            const textMaterial = new THREE.MeshNormalMaterial()          
                //textMaterial.matcap = textureCube
                //textMaterial.wireframe = true
            const text = new THREE.Mesh(textGeometry, textMaterial)


            text.position.z = 2
            text.position.y=4
            text.position.x=-18
            text.rotation.y = 0.9
            scene.add(text)
        }
    )

    const fontLoader2 = new THREE.FontLoader()

    fontLoader2.load(
        './jsm/jsThree/three.js-master/examples/fonts/helvetiker_bold.typeface.json',       //cargamos la fuente
        (font) =>
        {
            const textGeometry = new THREE.TextBufferGeometry(
                'DigitalArt',
                {
                    font: font,                                      
                    size: 3.5,                                      
                    height: 3.1,                                    
                    curveSegments: 5,                             
                    bevelEnable: true,                              
                    bevelThickness: 0.03,                           
                    bevelSize: 0.02,                                
                    bevelOffset: 0,                                 
                    bevelSegments: 4                               
                }
            )
             

            const textMaterial = new THREE.MeshNormalMaterial()          
                //textMaterial.matcap = textureCube
                //textMaterial.wireframe = true
            const text = new THREE.Mesh(textGeometry, textMaterial)

            text.position.z = 2
            text.position.y=-4
            text.position.x=-30
            text.rotation.y = 0.9
            scene.add(text)
        }
    )    

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
    width : window.innerWidth,
    height : window.innerHeight
}


window.addEventListener ('resize', () => {

    camera.aspect = size.width / size.height
    camera.updateProjectionMatrix()

    renderer.setSize ( size.width , size.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio),2)
})


const camera = new THREE.PerspectiveCamera(65, size.width/size.height, 0.1,100)
    camera.position.z= 30
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
renderer.setSize ( size.width , size.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio),2)


const clock = new THREE.Clock()

const animate = () =>{
    const time = clock.getElapsedTime()


    camera.lookAt(camera,scene)
    controls.update()
    renderer.render(scene,camera)
    window.requestAnimationFrame(animate)

}

animate()

renderer.render(scene,camera)