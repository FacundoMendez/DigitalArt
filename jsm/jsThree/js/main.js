import {PointerLockControls} from "../three.js-master/examples/jsm/controls/PointerLockControls.js"


const canvas = document.querySelector('.boxWebgl')


const scene = new THREE.Scene()


const cards = new THREE.Group()
scene.add(cards)



const textureLoader = new THREE.TextureLoader()

/* scene texturas */


/* pared */
/* 
const paredFueraTexture = textureLoader.load( "../src/img/textureDentro/piso.jpg" );

const paredFueraTexture1 = textureLoader.load( "../src/img/textureParedFuera/2.png" );
const paredFueraTexture2 = textureLoader.load( "../src/img/textureParedFuera/3.jpg" ); */

const cubeTextureLoader=new THREE.CubeTextureLoader()

const environmentMapTexture = cubeTextureLoader.load([
  '../jsm/jsThree/img/textureDentro/px.png',
  '../jsm/jsThree/img/textureDentro/nx.png',
  '../jsm/jsThree/img/textureDentro/py.png',
  '../jsm/jsThree/img/textureDentro/ny.png',
  '../jsm/jsThree/img/textureDentro/pz.png',
  '../jsm/jsThree/img/textureDentro/nz.png'
]);




/* piso */
const planeTexture = textureLoader.load( "../jsm/jsThree/img/texturePlane/pasto.jpg" );
  planeTexture.wrapS= THREE.RepeatWrapping;
  planeTexture.wrapT= THREE.RepeatWrapping;
  planeTexture.repeat.set(20,20)


/* cielo */
const cieloTexture = textureLoader.load( "../jsm/jsThree/img/cielo2.jpg" );

/* puerta */
const puertaTexture = textureLoader.load( "../jsm/jsThree/img/door2.jpg" );
puertaTexture.magFilter = THREE.NearestFilter       

/* techo */
const textureVidrio = textureLoader.load( "../jsm/jsThree/img/textureTecho/fondoBlanco.jpg" );
textureVidrio.wrapS= THREE.RepeatWrapping;
textureVidrio.wrapT= THREE.RepeatWrapping;
textureVidrio.repeat.set(40,40)



/* FORMAS */

//space

const materialCielo = new THREE.MeshBasicMaterial({
  map: cieloTexture,
})
materialCielo.side = THREE.DoubleSide            
materialCielo.transparent = true    
materialCielo.alphaMap = cieloTexture       


const geomeCielo = new THREE.SphereBufferGeometry(1900,36,36)           
const cielo = new THREE.Mesh(geomeCielo,materialCielo)
scene.add(cielo)




//space plane

const materialplane = new THREE.MeshStandardMaterial({
  map:planeTexture,
  
})

const geomePlane = new THREE.PlaneBufferGeometry(3750,3750)
const plane = new THREE.Mesh(geomePlane,materialplane)

plane.rotation.x = -Math.PI/2
plane.position.y= -30.1
scene.add(plane)




//box
const materialBox = new THREE.MeshStandardMaterial() 
materialBox.metalness = 1.5
materialBox.roughness = 0.9
materialBox.envMap= environmentMapTexture
materialBox.side = THREE.DoubleSide              


const geometryBox= new THREE.BoxGeometry(1000,100,1000)
const box = new THREE.Mesh(geometryBox,materialBox)
box.position.y = 20


box.geometry.setAttribute(
  "uv2",
  new THREE.Float32BufferAttribute(box.geometry.attributes.uv.array,2)
)

scene.add(box)



//------------------/* TECHO1 */------------------------------------------

const materialTecho1= new THREE.MeshStandardMaterial({
  map:textureVidrio
})

materialTecho1.metalness = 1.1
materialTecho1.roughness = 0.89

const geomeTecho1 = new THREE.ConeBufferGeometry(380,200,4)

const techo1 = new THREE.Mesh(geomeTecho1,materialTecho1)

techo1.position.y=170.2
techo1.rotation.y= Math.PI/4   //MATH.PI da media vuelta, lo divido por 4 para girar un octavo (4cuartos que forman una vuelta)
techo1.position.x= 234
techo1.position.z = 233


scene.add(techo1)
/* TECHO2 */
const materialTecho2= new THREE.MeshStandardMaterial({
  color: 'white',
  map:textureVidrio
  
})
materialTecho2.metalness = 1.1
materialTecho2.roughness = 0.89
const geomeTecho2 = new THREE.ConeBufferGeometry(380,200,4)

const techo2 = new THREE.Mesh(geomeTecho2,materialTecho2)

techo2.position.y=170.2
techo2.rotation.y= Math.PI/4  
techo2.position.x= -234
techo2.position.z = 232
scene.add(techo2)



/* TECHO3 */
const materialTecho3= new THREE.MeshStandardMaterial({  map:textureVidrio})

const geomeTecho3 = new THREE.ConeBufferGeometry(380,200,4)

const techo3 = new THREE.Mesh(geomeTecho3,materialTecho3)

techo3.position.y=170.2
techo3.rotation.y= Math.PI/4   
techo3.position.x= 0
techo3.position.z= 262
scene.add(techo3)




/* TECHO4 */
const materialTecho4= new THREE.MeshStandardMaterial({  map:textureVidrio})

const geomeTecho4 = new THREE.ConeBufferGeometry(380,200,4)

const techo4= new THREE.Mesh(geomeTecho4,materialTecho4)

techo4.position.y=170.6
techo4.rotation.y= Math.PI/4  
techo4.position.x= 234
techo4.position.z= -250
scene.add(techo4)



/* TECHO5 */
const materialTecho5= new THREE.MeshStandardMaterial({  map:textureVidrio})

const geomeTecho5 = new THREE.ConeBufferGeometry(380,200,4)

const techo5 = new THREE.Mesh(geomeTecho5,materialTecho5)

techo5.position.y=170.4
techo5.rotation.y= Math.PI/4  
techo5.position.x= -234
techo5.position.z= -250
scene.add(techo5)



/* TECHO6 */
const materialTecho6= new THREE.MeshStandardMaterial({  map:textureVidrio})

const geomeTecho6 = new THREE.ConeBufferGeometry(380,200,4)

const techo6 = new THREE.Mesh(geomeTecho6,materialTecho6)

techo6.position.y=170.2
techo6.rotation.y= Math.PI/4   
techo6.position.x= 0
techo6.position.z= -250
scene.add(techo6)

//------------------------------------------------------------------------



/* puerta */

const materialPuerta= new THREE.MeshStandardMaterial({
  map: puertaTexture,
  displacementMap: puertaTexture,
  displacementScale: 0.1,
  roughnessMap:puertaTexture,
  metalnessMap:puertaTexture
})


const geomepuerta = new THREE.PlaneBufferGeometry(100,85,2)
const puerta = new THREE.Mesh(geomepuerta,materialPuerta)

puerta.position.y= 12
puerta.position.z= 500.5
scene.add(puerta)


/* Bush */
const bushGeometry= new THREE.SphereBufferGeometry(18,8,8)
const bushMaterial= new THREE.MeshStandardMaterial({color:'#5CB413'} )


for (let i = 0; i < 600; i++){

  const angulo = Math.random() * Math.PI * 2
  const radio = 1000 + Math.random() * 810
  const x = Math.sin(angulo)*radio
  const z = Math.cos(angulo)*radio

    const bush = new THREE.Mesh(bushGeometry,bushMaterial)
    bush.position.x = (Math.random()- 0.5)*1270                                   //las posiciona de forma aleatoria
    bush.position.z = (Math.random()- 0.5)*1270

    bush.rotation.x = Math.random() * Math.PI                                    //le proporciona rotacion aleatoria
    bush.rotation.y = Math.random() * Math.PI
    bush.rotation.z = Math.random() * Math.PI

    const scale = Math.random()                                                   //le proprociona tamaño aleatorio
    bush.scale.set(scale,scale,scale)
    bush.position.set(x,-25,z)
    scene.add(bush)
    bush.castShadow=true
}

/* tronco  */
const troncoGeometry= new THREE.CylinderGeometry( 30, 17, 260, 102 );
const troncoMaterial= new THREE.MeshStandardMaterial({color:'brown'} )


for (let i = 0; i < 500; i++){

  const angulo = Math.random() * Math.PI * 2
  const radio = 1010 + Math.random() * 810
  const x = Math.sin(angulo)*radio
  const z = Math.cos(angulo)*radio

    const tronco = new THREE.Mesh(troncoGeometry,troncoMaterial)

 

    tronco.position.set(x,90,z)
    scene.add(tronco)
}


/* hojas  */
const hojasGeometry= new THREE.ConeGeometry( 100, 150, 7,  true);
const hojasMaterial= new THREE.MeshStandardMaterial({color:'green'} )


for (let i = 0; i < 500; i++){

  const angulo = Math.random() * Math.PI * 2
  const radio = 1000 + Math.random() * 810
  const x = Math.sin(angulo)*radio
  const z = Math.cos(angulo)*radio

    const hojas = new THREE.Mesh(hojasGeometry,hojasMaterial)

    hojas.position.set(x,230,z)
    scene.add(hojas)
}





const fontLoader = new THREE.FontLoader()

    fontLoader.load(
        '../jsm/jsThree/three.js-master/examples/fonts/helvetiker_bold.typeface.json',        //cargamos la fuente
        (font) =>
        {
            const textGeometry = new THREE.TextBufferGeometry(
                'DigitalArt',
                {
                    font: font,                                      //adquirimos la fuenta ya cargada previamente
                    size: 15.5,                                      //proporcionamos el tamaño
                    height: 5.1,                                    //proporcinamos el grosor
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


            text.position.z = 504.5
            text.position.y = 10
            text.position.x = 130
            scene.add(text)
        }
    )

    const fontLoader2 = new THREE.FontLoader()

    fontLoader2.load(
        '../jsm/jsThree/three.js-master/examples/fonts/helvetiker_bold.typeface.json',       //cargamos la fuente
        (font) =>
        {
            const textGeometry = new THREE.TextBufferGeometry(
                'MUSEUM',
                {
                    font: font,                                      
                    size: 15.5,                                      
                    height: 5.1,                                    
                    curveSegments: 5,                             
                    bevelEnable: true,                              
                    bevelThickness: 0.03,                           
                    bevelSize: 0.02,                                
                    bevelOffset: 0,                                 
                    bevelSegments: 4                               
                }
            )
             
            textGeometry.center()                                //centramos el texto en el centro

            const textMaterial = new THREE.MeshNormalMaterial()          
                //textMaterial.matcap = textureCube
                //textMaterial.wireframe = true
            const text = new THREE.Mesh(textGeometry, textMaterial)

            text.position.z = 504.5
            text.position.y = 10
            text.position.x = -130
            scene.add(text)
        }
    )




//--------------------------------CARDS--------DRAGON BALL----------------------------------
/* cards textures */
const card1Texture = textureLoader.load( "../img/collections/dragonBall/1.png" );
const card2Texture = textureLoader.load("../img/collections/dragonBall/5.png"  );
const card3Texture = textureLoader.load( "../img/collections/dragonBall/9.png"  );
const card4Texture = textureLoader.load( "../img/collections/dragonBall/8.png"  );
const card5Texture = textureLoader.load( "../img/collections/dragonBall/7.png"  );
const card6Texture = textureLoader.load( "../img/collections/dragonBall/6.png"  );
const card7Texture = textureLoader.load( "../img/collections/dragonBall/2.png"  );
const card8Texture = textureLoader.load( "../img/collections/dragonBall/3.png"  );
const card9Texture = textureLoader.load( "../img/collections/dragonBall/4.png"  );
//Card1 goku

const materialCard1 = new THREE.MeshBasicMaterial({
    map: card1Texture,
  }) 
  materialCard1.roughnessMap = card1Texture        
const geometryCard1= new THREE.BoxGeometry(35,45,2)
const card1 = new THREE.Mesh(geometryCard1,materialCard1)

card1.position.y = 45;
card1.position.z = -498

cards.add(card1)


//Card2 brolly

const materialCard2 = new THREE.MeshBasicMaterial({
    map: card2Texture,
  }) 
  materialCard2.roughnessMap = card2Texture        
const geometryCard2= new THREE.BoxGeometry(40,50,2)
const card2 = new THREE.Mesh(geometryCard2,materialCard2)

card2.position.z = -498
card2.position.y = 0;
card2.position.x = 45;
cards.add(card2)

//Card3 pequeño buu

const materialCard3 = new THREE.MeshBasicMaterial({
    map: card3Texture,
  }) 
  materialCard3.roughnessMap = card3Texture        
const geometryCard3= new THREE.BoxGeometry(35,45,2)
const card3 = new THREE.Mesh(geometryCard3,materialCard3)

card3.position.z = -498
card3.position.y = 35;
card3.position.x = -41;
cards.add(card3)



//Card4 vegeta

const materialCard4 = new THREE.MeshBasicMaterial({
    map: card4Texture,
  }) 
  materialCard4.roughnessMap = card4Texture        
const geometryCard4= new THREE.BoxGeometry(35,45,2)
const card4 = new THREE.Mesh(geometryCard4,materialCard4)

card4.position.z =-498
card4.position.y = -2

cards.add(card4)

 
//Card5 gohan

const materialCard5 = new THREE.MeshBasicMaterial({
    map: card5Texture,
  }) 
  materialCard5.roughnessMap = card5Texture        
const geometryCard5= new THREE.BoxGeometry(35,25,2)
const card5 = new THREE.Mesh(geometryCard5,materialCard5)

card5.position.z = -498
card5.position.y = -5
card5.position.x = -41;

cards.add(card5)


//Card6 frizer

const materialCard6 = new THREE.MeshBasicMaterial({
    map: card6Texture,
  }) 
  materialCard6.roughnessMap = card6Texture        
const geometryCard6= new THREE.BoxGeometry(38,28,2)
const card6 = new THREE.Mesh(geometryCard6,materialCard6)

card6.position.z = -498
card6.position.y = 45;
card6.position.x = 45;
cards.add(card6)

/* goku2 */

const materialCard7 = new THREE.MeshBasicMaterial({
  map: card7Texture,
}) 
materialCard7.roughnessMap = card7Texture        
const geometryCard7= new THREE.BoxGeometry(50,75,2)
const card7 = new THREE.Mesh(geometryCard7,materialCard7)

card7.position.z = -498
card7.position.y = 15;
card7.position.x = -90;
cards.add(card7)

/* peq buu2 */

const materialCard8 = new THREE.MeshBasicMaterial({
  map: card8Texture,
}) 
materialCard8.roughnessMap = card8Texture        
const geometryCard8= new THREE.BoxGeometry(38,38,2)
const card8 = new THREE.Mesh(geometryCard8,materialCard8)

card8.position.z = -498
card8.position.y = -8;
card8.position.x = 90;
cards.add(card8)


const materialCard9 = new THREE.MeshBasicMaterial({
  map: card9Texture,
}) 
materialCard9.roughnessMap = card9Texture        
const geometryCard9= new THREE.BoxGeometry(42,50,2)
const card9= new THREE.Mesh(geometryCard9,materialCard9)

card9.position.z = -498
card9.position.y = 42;
card9.position.x = 90;
cards.add(card9)

//------------------------------------------------------------------


//--------------------------------CARDS--------MONSTER INC----------------------------------
/* cards textures */

const cardMonster1Texture = textureLoader.load( "../img/collections/mosterInc/2.png" );
const cardMonster2Texture = textureLoader.load("../img/collections/mosterInc/6.png"  );
const cardMonster3Texture = textureLoader.load( "../img/collections/mosterInc/1.png"  );
const cardMonster4Texture = textureLoader.load( "../img/collections/mosterInc/5.png"  );
const cardMonster5Texture = textureLoader.load( "../img/collections/mosterInc/3.jpg"  );
const cardMonster6Texture = textureLoader.load( "../img/collections/mosterInc/4.png"  );


//azul

const materialCardMonster1 = new THREE.MeshBasicMaterial({
    map: cardMonster1Texture,
  }) 
  materialCardMonster1.roughnessMap = cardMonster1Texture        
const geometryCardMonster1= new THREE.BoxGeometry(40,53,2)
const card1Monster = new THREE.Mesh(geometryCardMonster1,materialCardMonster1)

card1Monster.position.y = 40;
card1Monster.position.z = -498
card1Monster.position.x = -170

cards.add(card1Monster)


//vieja

const materialCardMonster2 = new THREE.MeshBasicMaterial({
    map: cardMonster2Texture,
  }) 
  materialCardMonster2.roughnessMap = cardMonster2Texture        
const geometryCardMonster2= new THREE.BoxGeometry(40,36,2)
const card2Monster = new THREE.Mesh(geometryCardMonster2,materialCardMonster2)

card2Monster.position.z = -498
card2Monster.position.y = -8;
card2Monster.position.x = -170
cards.add(card2Monster)

//maik

const materialCardMonster3 = new THREE.MeshBasicMaterial({
    map: cardMonster3Texture,
  }) 
  materialCardMonster3.roughnessMap = cardMonster3Texture        
const geometryCardMonster3= new THREE.BoxGeometry(56,58,2)
const card3Monster = new THREE.Mesh(geometryCardMonster3,materialCardMonster3)

card3Monster.position.z = -498
card3Monster.position.y = 3;
card3Monster.position.x = -225;
cards.add(card3Monster)



//himalalla
const materialCardMonster4 = new THREE.MeshBasicMaterial({
    map: cardMonster4Texture,
  }) 
  materialCardMonster4.roughnessMap = cardMonster4Texture        
const geometryCardMonster4= new THREE.BoxGeometry(54,30,2)
const card4Monster = new THREE.Mesh(geometryCardMonster4,materialCardMonster4)

card4Monster.position.z =-498
card4Monster.position.y = 50
card4Monster.position.x = -225;
cards.add(card4Monster)

 
//chica

const materialCardMonster5 = new THREE.MeshBasicMaterial({
    map: cardMonster5Texture,
  }) 
  materialCardMonster5.roughnessMap = cardMonster5Texture        
const geometryCardMonster5= new THREE.BoxGeometry(45,45,2)
const card5Monster = new THREE.Mesh(geometryCardMonster5,materialCardMonster5)

card5Monster.position.z = -498
card5Monster.position.y = -2
card5Monster.position.x = -280;

cards.add(card5Monster)


//lagarto

const materialCardMonster6 = new THREE.MeshBasicMaterial({
    map: cardMonster6Texture,
  }) 
  materialCardMonster6.roughnessMap = cardMonster6Texture        
const geometryCardMonster6= new THREE.BoxGeometry(50,40,2)
const card6Monster = new THREE.Mesh(geometryCardMonster6,materialCardMonster6)

card6Monster.position.z = -498
card6Monster.position.y = 45;
card6Monster.position.x = -280;
cards.add(card6Monster)


//------------------------------------------------------------------



//fog(niebla)

const fog = new THREE.Fog("#262837", 1, 800)

scene.fog = fog



/* lights */



 const luzLuna = new THREE.DirectionalLight("#b9d5ff",0.12)
luzLuna.position.set(4,10,2)
scene.add(luzLuna) 

const luzPuerta= new THREE.PointLight("#ff7d46", 2.5,350)
luzPuerta.position.set(1 , 100 , 650)
scene.add(luzPuerta)


const luzBox= new THREE.PointLight("#fffffff", 7, 800)
luzBox.position.set(0,700,170)
scene.add(luzBox) 


//luz q se mueven

const moviLuz1 = new THREE.PointLight("#ff00ff", 3, 300)
moviLuz1.position.set(0 , 0 , 400)
scene.add(moviLuz1)

const moviLuz2 = new THREE.PointLight("#00ffff", 3, 300)
moviLuz2.position.set(0 , 23.2 , 400)
scene.add(moviLuz2)

const moviLuz3 = new THREE.PointLight("#ffff00", 3, 300)
moviLuz3.position.set(0 ,0 , 400)
scene.add(moviLuz3)



const moviLuz4 = new THREE.PointLight("#ff00ff", 1, 500)
moviLuz4.position.set(0 , 0 , 400)
scene.add(moviLuz4)

const moviLuz5 = new THREE.PointLight("#00ffff", 1, 500)
moviLuz5.position.set(0 , 23.2 , 400)
scene.add(moviLuz5)

const moviLuz6 = new THREE.PointLight("#ffffff", 0.5,1500)
moviLuz6.position.set(0 ,0 , 400)
scene.add(moviLuz6)



const size = {
    width : window.innerWidth,
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


const camera = new THREE.PerspectiveCamera(60, size.width/size.height, 0.1,1600)
  camera.position.z= 800
  camera.position.x=-0
  camera.position.y= 12

  cards.add(camera)


const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true
})
renderer.setSize ( size.width , size.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio),2)
renderer.setClearColor("#262837")
renderer.shadowMap.enabled = true


//SOMBRAS

/* luzLuna.castShadow = true
luzPuerta.castShadow = true
moviLuz1.castShadow = true
moviLuz2.castShadow = true
moviLuz3.castShadow = true

box.castShadow = true */
/* plane.receiveShadow = true */




const clock = new THREE.Clock()


//movimiento flechas y mouse
const pointer = new PointerLockControls(camera,renderer.domElement)

const start = document.querySelector("#start");
const visible = document.querySelector(".boxWebgl");
const esc = document.querySelector(".box__esc");

document.getElementById("button").onclick = ()=>{
  start.style.setProperty("display","none")
  visible.style.setProperty("display","block")
  esc.style.setProperty("display","block")


  pointer.lock()

}

let xdir = 0, zdir = 0, salto = false
let tiempoI, tiempoF, vel, delta
let vi, yi, t, ti

document.addEventListener('keydown', (e)=>{
  switch (e.keyCode) {
      case 37:   //flecha-izquierda
          xdir = -1
          break;
      case 38: //flecha-frente
          zdir = 1
          break;
      case 39:   //flecha-derecha
          xdir = 1
          break;
      case 40: //flecha-abajo
          zdir = -1
          break;
      case 32:   //salto
        ti = Date.now()
         salto = true
          break;
      case 65:  //D - izquierda
          xdir = -1
            break;
      case 87: //W - adelante
          zdir = 1
            break;
      case 68: //A - derecha
          xdir = 1
            break;
      case 83:  //s - abajo
          zdir = -1
            break;
  }
})
document.addEventListener('keyup', (e)=>{
  switch (e.keyCode) {
      case 37:
          xdir = 0
          break;
      case 38:
          zdir = 0
          break;
      case 39:
          xdir = 0
          break;
      case 40:
          zdir = 0
          break;
      case 65:
          xdir = 0
          break;
      case 87:
        zdir = 0
          break;
      case 68:
        xdir = 0
          break;
      case 83:
          zdir = 0
          break;
      case 27:
        
  }
})


tiempoI = Date.now()
vel = 100
yi = 12
vi = 20


const animate = () =>{


  const time = clock.getElapsedTime()

    //luces q se mueven
    const ghost1Angle = time *1.1
      moviLuz1.position.x = Math.cos(ghost1Angle) *650
      moviLuz1.position.z = Math.sin(ghost1Angle) *650
      moviLuz1.position.y = Math.sin(time *3)

    const ghost2Angle = -time * 1.2
      moviLuz2.position.x = Math.cos(ghost2Angle) *850
      moviLuz2.position.z = Math.sin(ghost2Angle) *650
      moviLuz2.position.y = Math.sin(time *4) + Math.sin(time *2.5)

    const ghost3Angle = -time * 1
      moviLuz3.position.x = Math.cos(ghost3Angle) *650
      moviLuz3.position.z = Math.sin(ghost3Angle) *650
      moviLuz3.position.y = Math.sin(time *3)

    const ghost4Angle = time *0.8
      moviLuz4.position.x = Math.cos(ghost4Angle) *250
      moviLuz4.position.z = Math.sin(ghost4Angle) *250
      moviLuz4.position.y = Math.sin(time *3)

    const ghost5Angle = -time * 0.5
      moviLuz5.position.x = Math.cos(ghost5Angle) *250
      moviLuz5.position.z = Math.sin(ghost5Angle) *250
      moviLuz5.position.y = Math.sin(time *4) + Math.sin(time *2.5)

    const ghost6Angle = -time * 0.2
      moviLuz6.position.x = Math.cos(ghost6Angle) *250
      moviLuz6.position.z = Math.sin(ghost6Angle) *250
      moviLuz6.position.y = Math.sin(time *3)
      
 


    cielo.rotation.y+= 0.0005;

    renderer.render(scene,camera)


    if(pointer.isLocked === true){
      tiempoF = Date.now()

      delta = (tiempoF - tiempoI)/1000

      let xDis = xdir * vel * delta
      let zDis = zdir * vel * delta
      
      
      if(salto){
        t = ((Date.now()- ti) /1000) *5
        let yDis = yi + (vi * t) - (0.5 * 9.8 * Math.pow(t,2))
        if (yDis <= yi) salto = false
        camera.position.y = yDis
      }


      pointer.moveRight(xDis)
      pointer.moveForward(zDis)
      tiempoI = tiempoF
  }



    window.requestAnimationFrame(animate)

    

}

animate()

renderer.render(scene,camera)