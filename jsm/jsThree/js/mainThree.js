import { OrbitControls } from '../three.js-master/examples/jsm/controls/OrbitControls.js';


(() => {
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
    camera.position.z = 3
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
})();



(() => {
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
    
})();


(() => {
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
        width :  330,
        height : 500
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
        camera.position.x= 1
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
    renderer.setSize ( size.width , size.height)
    renderer.state.reset()
    
    
    
    
    
    const clock = new THREE.Clock()
    
    const animate = () =>{
        const time = clock.getElapsedTime()
    
        mesh.position.y= Math.sin(time)*0.3
        mesh.rotation.y= Math.sin(time)*0.3
    
    
        camera.lookAt(camera,scene)
        controls.update()
        renderer.render(scene,camera)
        window.requestAnimationFrame(animate)
        renderer.autoClear = true
    
    }
    
    animate()
    
    renderer.render(scene,camera)
    renderer.clear()
    
})();


(() => {

    const canvas = document.querySelector('.container3__card-webgl2')
    
    const scene = new THREE.Scene()
    
    
    const texture = new THREE.TextureLoader().load( "./img/collections/atlantis/1.webp" );
    
    
    
    const material = new THREE.MeshStandardMaterial({
        map: texture,
        metalness:0.96,
        roughness:2,       
      }) 
      material.roughnessMap = texture        
    const geometry= new THREE.BoxBufferGeometry(8,9,0.5)
        
    const mesh = new THREE.Mesh(geometry,material)
    
    scene.add(mesh)
    
    const ambientLight = new THREE.AmbientLight(0xffffff, 2.6)
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
        width :  350,
        height : 500
    }
    
    window.addEventListener ('resize', () => {
    /*     size.width = window.innerWidth
        size.height = window.innerHeight  */
    
        camera.aspect = size.width / size.height
        camera.updateProjectionMatrix()
    
        renderer.setSize ( size.width , size.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio),2)
    })
    
    
    const camera = new THREE.PerspectiveCamera(65, size.width/size.height, 0.1,100)
    camera.position.z= 10
    camera.position.x= 1
        scene.add(camera)
    
    
    const controls = new OrbitControls(camera,canvas)
    controls.enableDamping = true
    controls.enableZoom = false 
    controls.enablePan= false
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
    renderer.setPixelRatio(Math.min(window.devicePixelRatio),2)
    renderer.setSize ( size.width , size.height)
    renderer.state.reset()
    
    
    const clock = new THREE.Clock()
    
    const animate = () =>{
        const time = clock.getElapsedTime()
    
        camera.lookAt(camera,scene)
        controls.update()
    
    
        mesh.position.y= Math.sin(time)*0.3
        mesh.rotation.y= Math.sin(time)*0.3
    
       /*  mesh.rotation.y -= 0.004 */
        renderer.render(scene,camera)
        window.requestAnimationFrame(animate)
        renderer.autoClear = true
    
    }
    
    animate()
    
    renderer.render(scene,camera)
    renderer.clear()
})();


(() => {

    const canvas = document.querySelector('.container3__card-webgl4')
    
    const scene = new THREE.Scene()
    
    
    const texture = new THREE.TextureLoader().load( "./img/collections/toyStory/1.png" );
    
    
    
    const material = new THREE.MeshStandardMaterial({
        map: texture,
        metalness:0.96,
        roughness:2.5,       
      }) 
      material.roughnessMap = texture        
    const geometry= new THREE.BoxBufferGeometry(8.5,9.5,0.5)
        
    const mesh = new THREE.Mesh(geometry,material)
    
    scene.add(mesh)
    
    
    
    
    const ambientLight = new THREE.AmbientLight(0xffffff, 2.6)
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
        width :  350,
        height : 500
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
    camera.position.x= -1
        scene.add(camera)
    
    
    const controls = new OrbitControls(camera,canvas)
    controls.enableDamping = true
    controls.enableZoom = false 
    controls.enablePan= false
    /*     controls.maxDistance = 11;
        controls.minDistance = 8;  */
        controls.minPolarAngle = 1.4; // radians
        controls.maxPolarAngle = 1.6; 
        controls.minAzimuthAngle = - 0.7; // radians
        controls.maxAzimuthAngle = 0.5;
    
    
    const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha:true  ,
        antialias:true 
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio),2)
    renderer.setSize ( size.width , size.height)
    renderer.state.reset()
    
    
    const clock = new THREE.Clock()
    
    const animate = () =>{
        const time = clock.getElapsedTime()
    
        camera.lookAt(camera,scene)
        controls.update()
    
        mesh.position.y= Math.sin(time)*0.3
        mesh.rotation.y= Math.sin(time)*0.3
    
       /*  mesh.rotation.y -= 0.004 */
        renderer.render(scene,camera)
        window.requestAnimationFrame(animate)
        renderer.autoClear = true
    }
    
    animate()
    
    renderer.render(scene,camera)
    renderer.clear()
})();


(() =>{
    const canvas = document.querySelector('.container3__card-webgl6')

    const scene = new THREE.Scene()
    
    
    const texture = new THREE.TextureLoader().load( "./img/collections/mulan/14.webp" );
    
    
    
    const material = new THREE.MeshStandardMaterial({
        map: texture,
        metalness:0.96,
        roughness:2,       
      }) 
      material.roughnessMap = texture        
    const geometry= new THREE.BoxBufferGeometry(8,9,0.5)
        
    const mesh = new THREE.Mesh(geometry,material)
    
    scene.add(mesh)
    
    const ambientLight = new THREE.AmbientLight(0xffffff, 2.6)
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
        width :  350,
        height : 500
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
    camera.position.x= -1
        scene.add(camera)
    
    
    const controls = new OrbitControls(camera,canvas)
    controls.enableDamping = true
    controls.enableZoom = false 
    controls.enablePan= false
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
    renderer.setPixelRatio(Math.min(window.devicePixelRatio),2)
    renderer.setSize ( size.width , size.height)
    renderer.state.reset()
    
    
    const clock = new THREE.Clock()
    
    const animate = () =>{
        const time = clock.getElapsedTime()
    
        camera.lookAt(camera,scene)
        controls.update()
    
        mesh.position.y= Math.sin(time)*0.3
        mesh.rotation.y= Math.sin(time)*0.3
    
       /*  mesh.rotation.y -= 0.004 */
        renderer.render(scene,camera)
        window.requestAnimationFrame(animate)
        renderer.autoClear = true
    }
    
    animate()
    
    renderer.render(scene,camera)
    renderer.clear()
})();