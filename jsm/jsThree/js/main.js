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
const troncoGeometry= new THREE.CylinderBufferGeometry( 30, 17, 260, 102 );
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
const hojasGeometry= new THREE.ConeBufferGeometry( 100, 150, 7,  true);
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
        '../jsm/jsThree/three.js-master/examples/fonts/helvetiker_bold.typeface.json',       
        (font) =>
        {
            const textGeometry = new THREE.TextBufferGeometry(
                'DigitalArt',
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
             
            textGeometry.center()                                

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
        '../jsm/jsThree/three.js-master/examples/fonts/helvetiker_bold.typeface.json',       
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
             
            textGeometry.center()                            

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
const card9Texture = textureLoader.load( "../img/collections/dragonBall/10.png"  );
//Card1 goku

const materialCard1 = new THREE.MeshBasicMaterial({
    map: card1Texture,
  }) 
  materialCard1.roughnessMap = card1Texture        
const geometryCard1= new THREE.BoxBufferGeometry(35,45,2)
const card1 = new THREE.Mesh(geometryCard1,materialCard1)

card1.position.y = 45;
card1.position.z = -498

cards.add(card1)


//Card2 brolly

const materialCard2 = new THREE.MeshBasicMaterial({
    map: card2Texture,
  }) 
  materialCard2.roughnessMap = card2Texture        
const geometryCard2= new THREE.BoxBufferGeometry(40,50,2)
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
const geometryCard3= new THREE.BoxBufferGeometry(35,45,2)
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
const geometryCard4= new THREE.BoxBufferGeometry(35,45,2)
const card4 = new THREE.Mesh(geometryCard4,materialCard4)

card4.position.z =-498
card4.position.y = -2

cards.add(card4)

 
//Card5 gohan

const materialCard5 = new THREE.MeshBasicMaterial({
    map: card5Texture,
  }) 
  materialCard5.roughnessMap = card5Texture        
const geometryCard5= new THREE.BoxBufferGeometry(35,25,2)
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
const geometryCard6= new THREE.BoxBufferGeometry(38,28,2)
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
const geometryCard7= new THREE.BoxBufferGeometry(50,75,2)
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
const geometryCard8= new THREE.BoxBufferGeometry(38,38,2)
const card8 = new THREE.Mesh(geometryCard8,materialCard8)

card8.position.z = -498
card8.position.y = -8;
card8.position.x = 90;
cards.add(card8)


const materialCard9 = new THREE.MeshBasicMaterial({
  map: card9Texture,
}) 
materialCard9.roughnessMap = card9Texture        
const geometryCard9= new THREE.BoxBufferGeometry(42,50,2)
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
const geometryCardMonster1= new THREE.BoxBufferGeometry(40,53,2)
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
const geometryCardMonster2= new THREE.BoxBufferGeometry(40,36,2)
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
const geometryCardMonster3= new THREE.BoxBufferGeometry(56,58,2)
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
const geometryCardMonster4= new THREE.BoxBufferGeometry(54,30,2)
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
const geometryCardMonster5= new THREE.BoxBufferGeometry(45,45,2)
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
const geometryCardMonster6= new THREE.BoxBufferGeometry(50,40,2)
const card6Monster = new THREE.Mesh(geometryCardMonster6,materialCardMonster6)

card6Monster.position.z = -498
card6Monster.position.y = 45;
card6Monster.position.x = -280;
cards.add(card6Monster)


//------------------------------------------------------------------



//--------------------------------CARDS--------ATLANTIS----------------------------------
/* cards textures */

const cardAtlantis1Texture = textureLoader.load( "../img/collections/atlantis/2.png" );
const cardAtlantis2Texture = textureLoader.load("../img/collections/atlantis/3.png"  );
const cardAtlantis3Texture = textureLoader.load( "../img/collections/atlantis/4.png"  );
const cardAtlantis5Texture = textureLoader.load( "../img/collections/atlantis/6.png"  );
const cardAtlantis6Texture = textureLoader.load( "../img/collections/atlantis/7.png"  );
const cardAtlantis7Texture = textureLoader.load( "../img/collections/atlantis/8.png"  );
const cardAtlantis8Texture = textureLoader.load( "../img/collections/atlantis/9.png"  );
const cardAtlantis9Texture = textureLoader.load( "../img/collections/atlantis/10.png"  );
const cardAtlantis10Texture = textureLoader.load( "../img/collections/atlantis/11.png"  );
const cardAtlantis11Texture = textureLoader.load( "../img/collections/atlantis/12.png"  );


const materialCardAtlantis1 = new THREE.MeshBasicMaterial({
    map: cardAtlantis1Texture,
  }) 
  materialCardAtlantis1.roughnessMap = cardAtlantis1Texture        
const geometryCardAtlantis1= new THREE.BoxBufferGeometry(40,40,2)
const card1Atlantis = new THREE.Mesh(geometryCardAtlantis1,materialCardAtlantis1)

card1Atlantis.position.y = 48;
card1Atlantis.position.z = -498
card1Atlantis.position.x = +170

cards.add(card1Atlantis)


//vieja

const materialCardAtlantis2 = new THREE.MeshBasicMaterial({
  map: cardAtlantis2Texture,
}) 
materialCardAtlantis2.roughnessMap = cardAtlantis2Texture        
const geometryCardAtlantis2= new THREE.BoxBufferGeometry(45,53,2)
const card2Atlantis = new THREE.Mesh(geometryCardAtlantis2,materialCardAtlantis2)


card2Atlantis.position.z = -498
card2Atlantis.position.y = -0;
card2Atlantis.position.x = +170;
cards.add(card2Atlantis)




const materialCardAtlantis3 = new THREE.MeshBasicMaterial({
  map: cardAtlantis3Texture,
}) 
materialCardAtlantis3.roughnessMap = cardAtlantis3Texture        
const geometryCardAtlantis3= new THREE.BoxBufferGeometry(40,53,2)
const card3Atlantis = new THREE.Mesh(geometryCardAtlantis3,materialCardAtlantis3)


card3Atlantis.position.z = -498
card3Atlantis.position.y = 3;
card3Atlantis.position.x = 215
cards.add(card3Atlantis)




const materialCardAtlantis4 = new THREE.MeshBasicMaterial({
  map: cardAtlantis5Texture,
}) 
materialCardAtlantis4.roughnessMap = cardAtlantis5Texture        
const geometryCardAtlantis4= new THREE.BoxBufferGeometry(37,33,2)
const card4Atlantis = new THREE.Mesh(geometryCardAtlantis4,materialCardAtlantis4)


card4Atlantis.position.z = -498
card4Atlantis.position.y = 50;
card4Atlantis.position.x = 215
cards.add(card4Atlantis)


const materialCardAtlantis5 = new THREE.MeshBasicMaterial({
  map: cardAtlantis6Texture,
}) 
materialCardAtlantis5.roughnessMap = cardAtlantis6Texture        
const geometryCardAtlantis5= new THREE.BoxBufferGeometry(45,47,2)
const card5Atlantis = new THREE.Mesh(geometryCardAtlantis5,materialCardAtlantis5)


card5Atlantis.position.z = -498
card5Atlantis.position.y = 44;
card5Atlantis.position.x = 260
cards.add(card5Atlantis)


const materialCardAtlantis6 = new THREE.MeshBasicMaterial({
  map: cardAtlantis7Texture,
}) 
materialCardAtlantis6.roughnessMap = cardAtlantis7Texture        
const geometryCardAtlantis6= new THREE.BoxBufferGeometry(45,40,2)
const card6Atlantis = new THREE.Mesh(geometryCardAtlantis6,materialCardAtlantis6)


card6Atlantis.position.z = -498
card6Atlantis.position.y = -3;
card6Atlantis.position.x = 262
cards.add(card6Atlantis)


const materialCardAtlantis7 = new THREE.MeshBasicMaterial({
  map: cardAtlantis8Texture,
}) 
materialCardAtlantis7.roughnessMap = cardAtlantis8Texture        
const geometryCardAtlantis7= new THREE.BoxBufferGeometry(40,37,2)
const card7Atlantis = new THREE.Mesh(geometryCardAtlantis7,materialCardAtlantis7)


card7Atlantis.position.z = -498
card7Atlantis.position.y = 44;
card7Atlantis.position.x = 308
cards.add(card7Atlantis)



const materialCardAtlantis8 = new THREE.MeshBasicMaterial({
  map: cardAtlantis9Texture,
}) 
materialCardAtlantis8.roughnessMap = cardAtlantis9Texture        
const geometryCardAtlantis8= new THREE.BoxBufferGeometry(35,40,2)
const card8Atlantis = new THREE.Mesh(geometryCardAtlantis8,materialCardAtlantis8)


card8Atlantis.position.z = -498
card8Atlantis.position.y = -3;
card8Atlantis.position.x = 308
cards.add(card8Atlantis)



const materialCardAtlantis9 = new THREE.MeshBasicMaterial({
  map: cardAtlantis10Texture,
}) 
materialCardAtlantis9.roughnessMap = cardAtlantis10Texture        
const geometryCardAtlantis9= new THREE.BoxBufferGeometry(45,47,2)
const card9Atlantis = new THREE.Mesh(geometryCardAtlantis9,materialCardAtlantis9)


card9Atlantis.position.z = -498
card9Atlantis.position.y = 44;
card9Atlantis.position.x = 356
cards.add(card9Atlantis)




const materialCardAtlantis10 = new THREE.MeshBasicMaterial({
  map: cardAtlantis11Texture,
}) 
materialCardAtlantis10.roughnessMap = cardAtlantis11Texture        
const geometryCardAtlantis10= new THREE.BoxBufferGeometry(45,38,2)
const card10Atlantis = new THREE.Mesh(geometryCardAtlantis10,materialCardAtlantis10)


card10Atlantis.position.z = -498
card10Atlantis.position.y = -3;
card10Atlantis.position.x = 354
cards.add(card10Atlantis)


//------------------------------------------------------------------


//--------------------------------CARDS--------PETER PAN----------------------------------
/* cards textures */

const cardPeterpan1Texture = textureLoader.load( "../img/collections/peterPan/1.png" );
const cardPeterpan2Texture = textureLoader.load("../img/collections/peterPan/2.png"  );
const cardPeterpan3Texture = textureLoader.load( "../img/collections/peterPan/3.png"  );
const cardPeterpan4Texture = textureLoader.load( "../img/collections/peterPan/4.png"  );
const cardPeterpan5Texture = textureLoader.load( "../img/collections/peterPan/5.png"  );
const cardPeterpan6Texture = textureLoader.load( "../img/collections/peterPan/6.png"  );


const materialCardPeterpan1 = new THREE.MeshBasicMaterial({
    map: cardPeterpan1Texture,
  }) 
  materialCardPeterpan1.roughnessMap = cardPeterpan1Texture        
const geometryCardPeterpan1= new THREE.BoxBufferGeometry(45,55,2)
const cardPeterpan1 = new THREE.Mesh(geometryCardPeterpan1,materialCardPeterpan1)

cardPeterpan1.position.y = 3;
cardPeterpan1.position.z = -498
cardPeterpan1.position.x = 430

cards.add(cardPeterpan1)

const materialCardPeterpan2 = new THREE.MeshBasicMaterial({
  map: cardPeterpan3Texture,
}) 
materialCardPeterpan2.roughnessMap = cardPeterpan3Texture        
const geometryCardPeterpan2= new THREE.BoxBufferGeometry(38,35,2)
const cardPeterpan2 = new THREE.Mesh(geometryCardPeterpan2,materialCardPeterpan2)

cardPeterpan2.position.y = 50;
cardPeterpan2.position.z = -498
cardPeterpan2.position.x = 430

cards.add(cardPeterpan2)

const materialCardPeterpan3 = new THREE.MeshBasicMaterial({
  map: cardPeterpan5Texture,
}) 
materialCardPeterpan3.roughnessMap = cardPeterpan5Texture        
const geometryCardPeterpan3= new THREE.BoxBufferGeometry(35,40,2)
const cardPeterpan3 = new THREE.Mesh(geometryCardPeterpan3,materialCardPeterpan3)

cardPeterpan3.position.y = 48;
cardPeterpan3.position.z = -498
cardPeterpan3.position.x = 475

cards.add(cardPeterpan3)

const materialCardPeterpan4 = new THREE.MeshBasicMaterial({
  map: cardPeterpan4Texture,
}) 
materialCardPeterpan4.roughnessMap = cardPeterpan4Texture        
const geometryCardPeterpan4= new THREE.BoxBufferGeometry(40,45,2)
const cardPeterpan4 = new THREE.Mesh(geometryCardPeterpan4,materialCardPeterpan4)

cardPeterpan4.position.y = 3;
cardPeterpan4.position.z = -498
cardPeterpan4.position.x = 475

cards.add(cardPeterpan4)

const materialCardPeterpan5 = new THREE.MeshBasicMaterial({
  map: cardPeterpan2Texture,
}) 
materialCardPeterpan5.roughnessMap = cardPeterpan2Texture        
const geometryCardPeterpan5= new THREE.BoxBufferGeometry(40,52,2)
const cardPeterpan5 = new THREE.Mesh(geometryCardPeterpan5,materialCardPeterpan5)

cardPeterpan5.position.y = -1;
cardPeterpan5.position.z = -468
cardPeterpan5.position.x = 498.5
cardPeterpan5.rotation.y = Math.PI /2

cards.add(cardPeterpan5)


const materialCardPeterpan6 = new THREE.MeshBasicMaterial({
  map: cardPeterpan6Texture,
}) 
materialCardPeterpan6.roughnessMap = cardPeterpan6Texture        
const geometryCardPeterpan6= new THREE.BoxBufferGeometry(40,35,2)
const cardPeterpan6 = new THREE.Mesh(geometryCardPeterpan6,materialCardPeterpan6)

cardPeterpan6.position.y = 45;
cardPeterpan6.position.z = -468

cardPeterpan6.position.x = 498.5
cardPeterpan6.rotation.y = Math.PI /2

cards.add(cardPeterpan6)



//--------------------------------CARDS--------DUMBO----------------------------------

const cardDumbo1Texture = textureLoader.load( "../img/collections/dumbo/1.png" );
const cardDumbo2Texture = textureLoader.load("../img/collections/dumbo/2.png"  );
const cardDumbo3Texture = textureLoader.load( "../img/collections/dumbo/3.png"  );
const cardDumbo4Texture = textureLoader.load( "../img/collections/dumbo/4.png"  );
const cardDumbo5Texture = textureLoader.load( "../img/collections/dumbo/5.png"  );
const cardDumbo6Texture = textureLoader.load( "../img/collections/dumbo/6.png"  );


const materialCardDumbo1 = new THREE.MeshBasicMaterial({
  map: cardDumbo1Texture,
}) 
materialCardDumbo1.roughnessMap = cardDumbo1Texture        
const geometryCardDumbo1= new THREE.BoxBufferGeometry(50,55,2)
const cardDumbo1 = new THREE.Mesh(geometryCardDumbo1,materialCardDumbo1)

cardDumbo1.position.y = 3;
cardDumbo1.position.z = -498
cardDumbo1.position.x = -427

cards.add(cardDumbo1)

const materialCardDumbo2 = new THREE.MeshBasicMaterial({
map: cardDumbo2Texture,
}) 
materialCardDumbo2.roughnessMap = cardDumbo2Texture        
const geometryCardDumbo2= new THREE.BoxBufferGeometry(43,35,2)
const cardDumbo2 = new THREE.Mesh(geometryCardDumbo2,materialCardDumbo2)

cardDumbo2.position.y = 50;
cardDumbo2.position.z = -498
cardDumbo2.position.x = -427

cards.add(cardDumbo2)

const materialCardDumbo3 = new THREE.MeshBasicMaterial({
map: cardDumbo3Texture,
}) 
materialCardDumbo3.roughnessMap = cardDumbo3Texture        
const geometryCardDumbo3= new THREE.BoxBufferGeometry(35,40,2)
const cardDumbo3 = new THREE.Mesh(geometryCardDumbo3,materialCardDumbo3)

cardDumbo3.position.y = 48;
cardDumbo3.position.z = -498
cardDumbo3.position.x = -475

cards.add(cardDumbo3)

const materialCardDumbo4 = new THREE.MeshBasicMaterial({
map: cardDumbo5Texture,
}) 
materialCardDumbo4.roughnessMap = cardDumbo5Texture        
const geometryCardDumbo4= new THREE.BoxBufferGeometry(40,45,2)
const cardDumbo4 = new THREE.Mesh(geometryCardDumbo4,materialCardDumbo4)

cardDumbo4.position.y = 3;
cardDumbo4.position.z = -498
cardDumbo4.position.x = -475

cards.add(cardDumbo4)

const materialCardDumbo5 = new THREE.MeshBasicMaterial({
map: cardDumbo6Texture,
}) 
materialCardDumbo5.roughnessMap = cardDumbo6Texture        
const geometryCardDumbo5= new THREE.BoxBufferGeometry(65,52,2)
const cardDumbo5= new THREE.Mesh(geometryCardDumbo5,materialCardDumbo5)

cardDumbo5.position.y = 2;
cardDumbo5.position.z = -498
cardDumbo5.position.x = -366

cards.add(cardDumbo5)


const materialCardDumbo6 = new THREE.MeshBasicMaterial({
map: cardDumbo4Texture,
}) 
materialCardDumbo6.roughnessMap = cardDumbo4Texture        
const geometryCardDumbo6= new THREE.BoxBufferGeometry(55,35,2)
const cardDumbo6 = new THREE.Mesh(geometryCardDumbo6,materialCardDumbo6)

cardDumbo6.position.y = 47;
cardDumbo6.position.z = -498

cardDumbo6.position.x = -368

cards.add(cardDumbo6)


//--------------------------------CARDS--------bob esponja----------------------------------
/* cards textures */

const cardBobesponja1Texture = textureLoader.load( "../img/collections/bobEsponja/1.png" );
const cardBobesponja2Texture = textureLoader.load("../img/collections/bobEsponja/3.png"  );
const cardBobesponja3Texture = textureLoader.load( "../img/collections/bobEsponja/4.png"  );
const cardBobesponja4Texture = textureLoader.load( "../img/collections/bobEsponja/5.png"  );
const cardBobesponja5Texture = textureLoader.load( "../img/collections/bobEsponja/6.png"  );
const cardBobesponja6Texture = textureLoader.load( "../img/collections/bobEsponja/7.png"  );
const cardBobesponja7Texture = textureLoader.load( "../img/collections/bobEsponja/8.png"  );
const cardBobesponja8Texture = textureLoader.load( "../img/collections/bobEsponja/9.png"  );


const materialCardBobesponja1 = new THREE.MeshBasicMaterial({
  map: cardBobesponja1Texture,
}) 
materialCardBobesponja1.roughnessMap = cardBobesponja1Texture        
const geometryCardBobesponja1= new THREE.BoxBufferGeometry(40,42,2)
const cardBobesponja1 = new THREE.Mesh(geometryCardBobesponja1,materialCardBobesponja1)

cardBobesponja1.position.y = -1;
cardBobesponja1.position.z = -470
cardBobesponja1.position.x = -498.5
cardBobesponja1.rotation.y = -Math.PI /2

cards.add(cardBobesponja1)

const materialCardBobesponja2 = new THREE.MeshBasicMaterial({
  map: cardBobesponja2Texture,
}) 
materialCardBobesponja2.roughnessMap = cardBobesponja2Texture        
const geometryCardBobesponja2= new THREE.BoxBufferGeometry(40,43,2)
const cardBobesponja2 = new THREE.Mesh(geometryCardBobesponja2,materialCardBobesponja2)

cardBobesponja2.position.y = 44;
cardBobesponja2.position.z = -470
cardBobesponja2.position.x = -498.5
cardBobesponja2.rotation.y = -Math.PI /2

cards.add(cardBobesponja2)

const materialCardBobesponja3 = new THREE.MeshBasicMaterial({
  map: cardBobesponja3Texture,
}) 
materialCardBobesponja3.roughnessMap = cardBobesponja3Texture        
const geometryCardBobesponja3= new THREE.BoxBufferGeometry(40,48,2)
const cardBobesponja3 = new THREE.Mesh(geometryCardBobesponja3,materialCardBobesponja3)

cardBobesponja3.position.y = -3;
cardBobesponja3.position.z = -428
cardBobesponja3.position.x = -498.5
cardBobesponja3.rotation.y = -Math.PI /2

cards.add(cardBobesponja3)

const materialCardBobesponja4 = new THREE.MeshBasicMaterial({
  map: cardBobesponja4Texture,
}) 
materialCardBobesponja4.roughnessMap = cardBobesponja4Texture        
const geometryCardBobesponja4= new THREE.BoxBufferGeometry(40,40,2)
const cardBobesponja4 = new THREE.Mesh(geometryCardBobesponja4,materialCardBobesponja4)

cardBobesponja4.position.y = 45;
cardBobesponja4.position.z = -428
cardBobesponja4.position.x = -498.5
cardBobesponja4.rotation.y = -Math.PI /2

cards.add(cardBobesponja4)

const materialCardBobesponja5 = new THREE.MeshBasicMaterial({
  map: cardBobesponja5Texture,
}) 
materialCardBobesponja5.roughnessMap = cardBobesponja5Texture        
const geometryCardBobesponja5= new THREE.BoxBufferGeometry(40,52,2)
const cardBobesponja5 = new THREE.Mesh(geometryCardBobesponja5,materialCardBobesponja5)

cardBobesponja5.position.y = -1;
cardBobesponja5.position.z = -384
cardBobesponja5.position.x = -498.5
cardBobesponja5.rotation.y = -Math.PI /2

cards.add(cardBobesponja5)

const materialCardBobesponja6 = new THREE.MeshBasicMaterial({
  map: cardBobesponja6Texture,
}) 
materialCardBobesponja6.roughnessMap = cardBobesponja6Texture        
const geometryCardBobesponja6= new THREE.BoxBufferGeometry(45,40,2)
const cardBobesponja6 = new THREE.Mesh(geometryCardBobesponja6,materialCardBobesponja6)

cardBobesponja6.position.y = 48;
cardBobesponja6.position.z = -382
cardBobesponja6.position.x = -498.5
cardBobesponja6.rotation.y = -Math.PI /2

cards.add(cardBobesponja6)

const materialCardBobesponja7 = new THREE.MeshBasicMaterial({
  map: cardBobesponja7Texture,
}) 
materialCardBobesponja7.roughnessMap = cardBobesponja7Texture        
const geometryCardBobesponja7= new THREE.BoxBufferGeometry(44,44,2)
const cardBobesponja7 = new THREE.Mesh(geometryCardBobesponja7,materialCardBobesponja7)

cardBobesponja7.position.y = -3;
cardBobesponja7.position.z = -337
cardBobesponja7.position.x = -498.5
cardBobesponja7.rotation.y = Math.PI /2

cards.add(cardBobesponja7)

const materialCardBobesponja8 = new THREE.MeshBasicMaterial({
  map: cardBobesponja8Texture,
}) 
materialCardBobesponja8.roughnessMap = cardBobesponja8Texture        
const geometryCardBobesponja8= new THREE.BoxBufferGeometry(40,44,2)
const cardBobesponja8 = new THREE.Mesh(geometryCardBobesponja8,materialCardBobesponja8)

cardBobesponja8.position.y = 45;
cardBobesponja8.position.z = -336
cardBobesponja8.position.x = -498.5
cardBobesponja8.rotation.y = -Math.PI /2

cards.add(cardBobesponja8)



//--------------------------------CARDS--------EL DORADO----------------------------------
/* cards textures */

const cardEldorado1Texture = textureLoader.load( "../img/collections/elDorado/2.png" );
const cardEldorado2Texture = textureLoader.load("../img/collections/elDorado/4.png"  );
const cardEldorado3Texture = textureLoader.load( "../img/collections/elDorado/5.png"  );
const cardEldorado4Texture = textureLoader.load( "../img/collections/elDorado/6.png"  );
const cardEldorado5Texture = textureLoader.load( "../img/collections/elDorado/7.png"  );
const cardEldorado6Texture = textureLoader.load( "../img/collections/elDorado/8.png"  );
const cardEldorado7Texture = textureLoader.load( "../img/collections/elDorado/9.png"  );
const cardEldorado8Texture = textureLoader.load( "../img/collections/elDorado/10.png"  );


const materialCardelDorado1 = new THREE.MeshBasicMaterial({
  map: cardEldorado1Texture,
}) 
materialCardelDorado1.roughnessMap = cardEldorado1Texture        
const geometryCardelDorado1= new THREE.BoxBufferGeometry(40,42,2)
const cardelDorado1 = new THREE.Mesh(geometryCardelDorado1,materialCardelDorado1)

cardelDorado1.position.y = -1;
cardelDorado1.position.z = -270
cardelDorado1.position.x = -498.5
cardelDorado1.rotation.y = -Math.PI /2

cards.add(cardelDorado1)

const materialCardelDorado2 = new THREE.MeshBasicMaterial({
  map: cardEldorado2Texture,
}) 
materialCardelDorado2 .roughnessMap = cardEldorado2Texture        
const geometryCardelDorado2 = new THREE.BoxBufferGeometry(40,43,2)
const cardelDorado2  = new THREE.Mesh(geometryCardelDorado2 ,materialCardelDorado2 )

cardelDorado2.position.y = 44;
cardelDorado2.position.z = -270
cardelDorado2.position.x = -498.5
cardelDorado2.rotation.y = -Math.PI /2

cards.add(cardelDorado2 )

const materialCardelDorado3= new THREE.MeshBasicMaterial({
  map: cardEldorado3Texture,
}) 
materialCardelDorado3.roughnessMap = cardEldorado3Texture        
const geometryCardelDorado3= new THREE.BoxBufferGeometry(40,48,2)
const cardelDorado3 = new THREE.Mesh(geometryCardelDorado3,materialCardelDorado3)

cardelDorado3.position.y = -3;
cardelDorado3.position.z = -225
cardelDorado3.position.x = -498.5
cardelDorado3.rotation.y = -Math.PI /2

cards.add(cardelDorado3)

const materialCardelDorado4 = new THREE.MeshBasicMaterial({
  map: cardEldorado4Texture,
}) 
materialCardelDorado4.roughnessMap = cardEldorado4Texture        
const geometryCardelDorado4= new THREE.BoxBufferGeometry(40,40,2)
const cardelDorado4 = new THREE.Mesh(geometryCardelDorado4,materialCardelDorado4)

cardelDorado4.position.y = 45;
cardelDorado4.position.z = -225
cardelDorado4.position.x = -498.5
cardelDorado4.rotation.y = -Math.PI /2

cards.add(cardelDorado4)

const materialCardelDorado5 = new THREE.MeshBasicMaterial({
  map: cardEldorado5Texture,
}) 
materialCardelDorado5.roughnessMap = cardEldorado5Texture        
const geometryCardelDorado5= new THREE.BoxBufferGeometry(59,45,2)
const cardelDorado5 = new THREE.Mesh(geometryCardelDorado5,materialCardelDorado5)

cardelDorado5.position.y = -1;
cardelDorado5.position.z = -170
cardelDorado5.position.x = -498.5
cardelDorado5.rotation.y = -Math.PI /2

cards.add(cardelDorado5)

const materialCardelDorado6 = new THREE.MeshBasicMaterial({
  map: cardEldorado6Texture,
}) 
materialCardelDorado6.roughnessMap = cardEldorado6Texture        
const geometryCardelDorado6= new THREE.BoxBufferGeometry(50,42,2)
const cardelDorado6 = new THREE.Mesh(geometryCardelDorado6,materialCardelDorado6)

cardelDorado6.position.y = 45;
cardelDorado6.position.z = -170
cardelDorado6.position.x = -498.5
cardelDorado6.rotation.y = -Math.PI /2

cards.add(cardelDorado6)

const materialCardelDorado7 = new THREE.MeshBasicMaterial({
  map: cardEldorado7Texture,
}) 
materialCardelDorado7.roughnessMap = cardEldorado7Texture        
const geometryCardelDorado7= new THREE.BoxBufferGeometry(40,40,2)
const cardelDorado7 = new THREE.Mesh(geometryCardelDorado7,materialCardelDorado7)

cardelDorado7.position.y = -3;
cardelDorado7.position.z = -115
cardelDorado7.position.x = -498.5
cardelDorado7.rotation.y = Math.PI /2

cards.add(cardelDorado7)

const materialCardelDorado8 = new THREE.MeshBasicMaterial({
  map: cardEldorado8Texture,
}) 
materialCardelDorado8.roughnessMap = cardEldorado8Texture        
const geometryCardelDorado8= new THREE.BoxBufferGeometry(40,44,2)
const cardelDorado8 = new THREE.Mesh(geometryCardelDorado8,materialCardelDorado8)

cardelDorado8.position.y = 45;
cardelDorado8.position.z = -118
cardelDorado8.position.x = -498.5
cardelDorado8.rotation.y = -Math.PI /2

cards.add(cardelDorado8)


//--------------------------------CARDS--------EL DORADO----------------------------------
/* cards textures */

const cardMivillano1Texture = textureLoader.load( "../img/collections/MiVillanoFavorito/1.png" );
const cardMivillano2Texture = textureLoader.load("../img/collections/MiVillanoFavorito/2.png"  );
const cardMivillano3Texture = textureLoader.load( "../img/collections/MiVillanoFavorito/3.png"  );
const cardMivillano4Texture = textureLoader.load( "../img/collections/MiVillanoFavorito/5.png"  );
const cardMivillano5Texture = textureLoader.load( "../img/collections/MiVillanoFavorito/6.png"  );
const cardMivillano6Texture = textureLoader.load( "../img/collections/MiVillanoFavorito/9.png"  );
const cardMivillano7Texture = textureLoader.load( "../img/collections/MiVillanoFavorito/11.png"  );


const materialCardMivillano1 = new THREE.MeshBasicMaterial({
  map: cardMivillano1Texture,
}) 
materialCardMivillano1.roughnessMap = cardMivillano1Texture        
const geometryCardMivillano1= new THREE.BoxBufferGeometry(40,50,2)
const cardMivillano1 = new THREE.Mesh(geometryCardMivillano1,materialCardMivillano1)

cardMivillano1.position.y = -2;
cardMivillano1.position.z = -50
cardMivillano1.position.x = -498.5
cardMivillano1.rotation.y = -Math.PI /2

cards.add(cardMivillano1)

const materialCardMivillano2 = new THREE.MeshBasicMaterial({
  map: cardMivillano2Texture,
}) 
materialCardMivillano2 .roughnessMap = cardMivillano2Texture        
const geometryCardMivillano2 = new THREE.BoxBufferGeometry(40,43,2)
const cardMivillano2  = new THREE.Mesh(geometryCardMivillano2 ,materialCardMivillano2 )

cardMivillano2.position.y = 47;
cardMivillano2.position.z = -50
cardMivillano2.position.x = -498.5
cardMivillano2.rotation.y = -Math.PI /2

cards.add(cardMivillano2 )

const materialCardMivillano3= new THREE.MeshBasicMaterial({
  map: cardMivillano3Texture,
}) 
materialCardMivillano3.roughnessMap = cardMivillano3Texture        
const geometryCardMivillano3= new THREE.BoxBufferGeometry(40,48,2)
const cardMivillano3 = new THREE.Mesh(geometryCardMivillano3,materialCardMivillano3)

cardMivillano3.position.y = -3;
cardMivillano3.position.z = -7
cardMivillano3.position.x = -498.5
cardMivillano3.rotation.y = -Math.PI /2

cards.add(cardMivillano3)

const materialCardMivillano4 = new THREE.MeshBasicMaterial({
  map: cardMivillano4Texture,
}) 
materialCardMivillano4.roughnessMap = cardMivillano4Texture        
const geometryCardMivillano4= new THREE.BoxBufferGeometry(40,40,2)
const cardMivillano4 = new THREE.Mesh(geometryCardMivillano4,materialCardMivillano4)

cardMivillano4.position.y = 45;
cardMivillano4.position.z = -7
cardMivillano4.position.x = -498.5
cardMivillano4.rotation.y = -Math.PI /2

cards.add(cardMivillano4)


const materialCardMivillano6 = new THREE.MeshBasicMaterial({
  map: cardMivillano6Texture,
}) 
materialCardMivillano6.roughnessMap = cardMivillano6Texture        
const geometryCardMivillano6= new THREE.BoxBufferGeometry(45,40,2)
const cardMivillano6 = new THREE.Mesh(geometryCardMivillano6,materialCardMivillano6)

cardMivillano6.position.y = 45;
cardMivillano6.position.z = 40
cardMivillano6.position.x = -498.5
cardMivillano6.rotation.y = -Math.PI /2

cards.add(cardMivillano6)

const materialCardMivillano7 = new THREE.MeshBasicMaterial({
  map: cardMivillano7Texture,
}) 
materialCardMivillano7.roughnessMap = cardMivillano7Texture        
const geometryCardMivillano7= new THREE.BoxBufferGeometry(45,50,2)
const cardMivillano7 = new THREE.Mesh(geometryCardMivillano7,materialCardMivillano7)

cardMivillano7.position.y = -3;
cardMivillano7.position.z = 40
cardMivillano7.position.x = -498.5
cardMivillano7.rotation.y = Math.PI /2

cards.add(cardMivillano7)



//--------------------------------CARDS--------EL rey leon----------------------------------
/* cards textures */

const cardReyleon1Texture = textureLoader.load( "../img/collections/elReyLeon/1.png" );
const cardReyleon2Texture = textureLoader.load("../img/collections/elReyLeon/2.png"  );
const cardReyleon3Texture = textureLoader.load( "../img/collections/elReyLeon/3.png"  );
const cardReyleon4Texture = textureLoader.load( "../img/collections/elReyLeon/4.png"  );
const cardReyleon5Texture = textureLoader.load( "../img/collections/elReyLeon/5.png"  );
const cardReyleon6Texture = textureLoader.load( "../img/collections/elReyLeon/6.png"  );
const cardReyleon7Texture = textureLoader.load( "../img/collections/elReyLeon/7.png"  );
const cardReyleon8Texture = textureLoader.load( "../img/collections/elReyLeon/8.png"  );
const cardReyleon11Texture = textureLoader.load( "../img/collections/elReyLeon/9.png"  );
const cardReyleon10Texture = textureLoader.load( "../img/collections/elReyLeon/10.png"  );

const materialCardReyleon1 = new THREE.MeshBasicMaterial({
  map: cardReyleon1Texture,
}) 
materialCardReyleon1.roughnessMap = cardReyleon1Texture        
const geometryCardReyleon1= new THREE.BoxBufferGeometry(49,45,2)
const cardReyleon1= new THREE.Mesh(geometryCardReyleon1,materialCardReyleon1)

cardReyleon1.position.y = -2;
cardReyleon1.position.z = 107
cardReyleon1.position.x = -498.5
cardReyleon1.rotation.y = -Math.PI /2

cards.add(cardReyleon1)

const materialCardReyleon2 = new THREE.MeshBasicMaterial({
  map: cardReyleon2Texture,
}) 
materialCardReyleon2 .roughnessMap = cardReyleon2Texture        
const geometryCardReyleon2 = new THREE.BoxBufferGeometry(45,43,2)
const cardReyleon2  = new THREE.Mesh(geometryCardReyleon2 ,materialCardReyleon2 )

cardReyleon2.position.y = 47;
cardReyleon2.position.z = 107
cardReyleon2.position.x = -498.5
cardReyleon2.rotation.y = -Math.PI /2

cards.add(cardReyleon2 )

const materialCardReyleon3= new THREE.MeshBasicMaterial({
  map: cardReyleon3Texture,
}) 
materialCardReyleon3.roughnessMap = cardReyleon3Texture        
const geometryCardReyleon3= new THREE.BoxBufferGeometry(40,48,2)
const cardReyleon3 = new THREE.Mesh(geometryCardReyleon3,materialCardReyleon3)

cardReyleon3.position.y = -3;
cardReyleon3.position.z = 155
cardReyleon3.position.x = -498.5
cardReyleon3.rotation.y = -Math.PI /2

cards.add(cardReyleon3)

const materialCardReyleon4 = new THREE.MeshBasicMaterial({
  map: cardReyleon4Texture,
}) 
materialCardReyleon4.roughnessMap = cardReyleon4Texture        
const geometryCardReyleon4= new THREE.BoxBufferGeometry(40,40,2)
const cardReyleon4 = new THREE.Mesh(geometryCardReyleon4,materialCardReyleon4)

cardReyleon4.position.y = 45;
cardReyleon4.position.z = 155
cardReyleon4.position.x = -498.5
cardReyleon4.rotation.y = -Math.PI /2

cards.add(cardReyleon4)


const materialCardReyleon6 = new THREE.MeshBasicMaterial({
  map: cardReyleon6Texture,
}) 
materialCardReyleon6.roughnessMap = cardReyleon6Texture        
const geometryCardReyleon6= new THREE.BoxBufferGeometry(40,40,2)
const cardReyleon6 = new THREE.Mesh(geometryCardReyleon6,materialCardReyleon6)

cardReyleon6.position.y = 45;
cardReyleon6.position.z = 202
cardReyleon6.position.x = -498.5
cardReyleon6.rotation.y = -Math.PI /2

cards.add(cardReyleon6)

const materialCardReyleon7 = new THREE.MeshBasicMaterial({
  map: cardReyleon7Texture,
}) 
materialCardReyleon7.roughnessMap = cardReyleon7Texture        
const geometryCardReyleon7= new THREE.BoxBufferGeometry(45,45,2)
const cardReyleon7 = new THREE.Mesh(geometryCardReyleon7,materialCardReyleon7)

cardReyleon7.position.y = -3;
cardReyleon7.position.z = 202
cardReyleon7.position.x = -498.5
cardReyleon7.rotation.y = Math.PI /2

cards.add(cardReyleon7)

const materialCardReyleon5= new THREE.MeshBasicMaterial({
  map: cardReyleon5Texture,
}) 
materialCardReyleon5.roughnessMap = cardReyleon5Texture        
const geometryCardReyleon5= new THREE.BoxBufferGeometry(50,48,2)
const cardReyleon5 = new THREE.Mesh(geometryCardReyleon5,materialCardReyleon5)

cardReyleon5.position.y = -3;
cardReyleon5.position.z = 300
cardReyleon5.position.x = -498.5
cardReyleon5.rotation.y = -Math.PI /2

cards.add(cardReyleon5)

const materialCardReyleon8 = new THREE.MeshBasicMaterial({
  map: cardReyleon8Texture,
}) 
materialCardReyleon8.roughnessMap = cardReyleon8Texture        
const geometryCardReyleon8= new THREE.BoxBufferGeometry(40,40,2)
const cardReyleon8 = new THREE.Mesh(geometryCardReyleon8,materialCardReyleon8)

cardReyleon8.position.y = 45;
cardReyleon8.position.z = 250
cardReyleon8.position.x = -498.5
cardReyleon8.rotation.y = -Math.PI /2

cards.add(cardReyleon8)


const materialCardReyleon10= new THREE.MeshBasicMaterial({
  map: cardReyleon10Texture,
}) 
materialCardReyleon10.roughnessMap = cardReyleon10Texture        
const geometryCardReyleon10= new THREE.BoxBufferGeometry(40,48,2)
const cardReyleon10 = new THREE.Mesh(geometryCardReyleon10,materialCardReyleon10)

cardReyleon10.position.y = -3;
cardReyleon10.position.z = 250
cardReyleon10.position.x = -498.5
cardReyleon10.rotation.y = -Math.PI /2

cards.add(cardReyleon10)

const materialCardReyleon11 = new THREE.MeshBasicMaterial({
  map: cardReyleon11Texture,
}) 
materialCardReyleon11.roughnessMap = cardReyleon11Texture        
const geometryCardReyleon11= new THREE.BoxBufferGeometry(40,40,2)
const cardReyleon11 = new THREE.Mesh(geometryCardReyleon11,materialCardReyleon11)

cardReyleon11.position.y = 45;
cardReyleon11.position.z = 300
cardReyleon11.position.x = -498.5
cardReyleon11.rotation.y = -Math.PI /2

cards.add(cardReyleon11)



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
/*   camera.position.z= 800 */
  camera.position.z= 800
  camera.position.x= 0 /* 0 */
  camera.position.y= 12

  cards.add(camera)


const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true
})
renderer.setSize ( size.width , size.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio),2)
renderer.setClearColor("#262837")



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
vel = 120
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
        let yDis = yi + (vi * t) - (0.5 * 5.8 * Math.pow(t,2))
        if (yDis <= yi) salto = false
        camera.position.y = yDis
      }


      pointer.moveRight(xDis)
      pointer.moveForward(zDis)
      tiempoI = tiempoF
  }



    window.requestAnimationFrame(animate)

    renderer.autoClear = true

}

animate()

renderer.render(scene,camera)
renderer.clear()
