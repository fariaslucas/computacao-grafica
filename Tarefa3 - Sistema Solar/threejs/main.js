// ThreeJS variables
var camera, scene, renderer;

// OrbitControls (camera)
var controls;

// Optional (showFps)
var stats;

// Objects in Scene
var sun, earth, moon, mercury, venus, mars, jupiter, saturn, uranus, neptune, pluto;

// Pivot - Objects
var pivotEarth, pivotMoon, pivotMercury, pivotVenus, pivotMars, pivotJupiter, pivotSaturn, pivotUranus, pivotNeptune, pivotPluto;

// Light in the scene 
var sunlight;


function init() {

    // Setting up renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    window.addEventListener('resize', onWindowResize, false);
    renderer.setSize(window.innerWidth, window.innerHeight); 

    // Setting up camera
    camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 0.5, 1000 );
    camera.position.z = 3;
    camera.position.y = 20;
    camera.lookAt( 0, 0, -4);
    

    // Setting up scene
    scene = new THREE.Scene();

    //Load background texture
    const loader = new THREE.TextureLoader();
    loader.load('texture/stars.jpg', function(texture){
        scene.background = texture;  
        });
        
    // Sun (Sphere + Light)
    sun = createSphere(10, 64, 'texture/sun.jpg');
    sun.position.z = -3;

    sunlight = new THREE.PointLight( 0xffffff, 1.5, 320, 2 );
    sun.add(sunlight);

    // Earth
    earth = createSphere(1, 20, 'texture/earth.jpg', 'Phong');
    earth.position.z = -25;

    pivotEarth = new THREE.Object3D();

    sun.add(pivotEarth);
    pivotEarth.add(earth);

    // Moon
    moon = createSphere(0.25, 20, 'texture/moon.jpg', 'Phong');
    moon.position.x = -2;
    moon.position.y = 1;

    moonlight = new THREE.PointLight( 0xffffff, 1, 2, 1 );
    moon.add(moonlight);

    pivotMoon = new THREE.Object3D();
    pivotMoon.position.z = -25;

    pivotEarth.add(pivotMoon);
    pivotMoon.add(moon);

    // Mercury
    mercury = createSphere(0.35, 20, 'texture/mercury.jpg', 'Phong');
    mercury.position.z = -15;

    pivotMercury = new THREE.Object3D();

    sun.add(pivotMercury);
    pivotMercury.add(mercury);

    // Venus
    venus = createSphere(0.9, 20, 'texture/venus.jpg', 'Phong');
    venus.position.z = -20;

    pivotVenus = new THREE.Object3D();

    sun.add(pivotVenus);
    pivotVenus.add(venus);

    // Mars
    mars = createSphere(0.55, 20, 'texture/mars.jpg', 'Phong');
    mars.position.z = -30;

    pivotMars = new THREE.Object3D();

    sun.add(pivotMars);
    pivotMars.add(mars);

    // Jupiter
    jupiter = createSphere(5, 20, 'texture/jupiter.jpg', 'Phong');
    jupiter.position.z = -50;

    pivotJupiter = new THREE.Object3D();

    sun.add(pivotJupiter);
    pivotJupiter.add(jupiter);

    // Saturn
    saturn = createSphere(4, 20, 'texture/saturn.jpg', 'Phong');
    saturn.position.z = -80;

    saturnRing = createRing(6, 9, 64, 'texture/saturn_ring.png');
    saturnRing.rotation.x = Math.PI/2;

    pivotSaturn = new THREE.Object3D();

    sun.add(pivotSaturn);
    pivotSaturn.add(saturn);
    saturn.add(saturnRing);

    // Uranus
    uranus = createSphere(2.5, 20, 'texture/uranus.jpg', 'Phong');
    uranus.position.z = -110;

    pivotUranus = new THREE.Object3D();

    sun.add(pivotUranus);
    pivotUranus.add(uranus);

    // Neptune
    neptune = createSphere(2.2, 20, 'texture/neptune.jpg', 'Phong');
    neptune.position.z = -150;

    pivotNeptune = new THREE.Object3D();

    sun.add(pivotNeptune);
    pivotNeptune.add(neptune);

    // Pluto
    pluto = createSphere(0.5, 20, 'texture/pluto.jpg', 'Phong');
    pluto.position.z = -170;

    pivotPluto = new THREE.Object3D();

    sun.add(pivotPluto);
    pivotPluto.add(pluto);

    // Adding sun
    scene.add(sun);
    
    // Adding both renderer and stats to the Web page, also adjusting OrbitControls
    stats = new Stats();
    document.body.appendChild(renderer.domElement);
    document.body.appendChild(stats.dom);
    controls = new THREE.OrbitControls( camera, renderer.domElement );
    controls.zoomSpeed = 2;

    // Adding listener for keydown 
    document.addEventListener("keydown", onDocumentKeyDown, false);

    // Saving initial position 
    scene.traverse( function( node ) {
        if ( node instanceof THREE.Object3D ) {
            node.savePosition();
        }
    
    } ); 
}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    
}

function onDocumentKeyDown(event) {
    console.log(event.which);
}

function animate() {

    requestAnimationFrame( animate );

    // required if controls.enableDamping or controls.autoRotate are set to true
    controls.update();

    stats.update();
    renderer.render( scene, camera );
    
    var dia = 0.3
    var ano = dia/365

    //Primeiro revolução - depois rotação
    // Earth (Rotation + Revolution)
    pivotEarth.rotation.y += ano;
    earth.rotation.y += dia;

    // Moon (Rotation + Revolution)
    pivotMoon.rotation.y += dia/30;
    moon.rotation.y += dia/30;

    // Mercury (Rotation + Revolution)
    pivotMercury.rotation.y += dia/88;
    mercury.rotation.y += dia/59;

    // Venus (Rotation + Revolution)
    pivotVenus.rotation.y += dia/224;
    venus.rotation.y -= dia/243;

    // Mars (Rotation + Revolution)
    pivotMars.rotation.y += ano/1.9;
    mars.rotation.y += dia*1.03;

    // Jupiter (Rotation + Revolution)
    pivotJupiter.rotation.y += ano/12;
    jupiter.rotation.y += dia/0.41;

    // Saturn (Rotation + Revolution)
    pivotSaturn.rotation.y += dia/30;
    saturn.rotation.y += dia/0.45;

    // Uranus (Rotation + Revolution)
    pivotUranus.rotation.y += dia/84;
    uranus.rotation.y -= dia/0.72;

    // Neptune (Rotation + Revolution)
    pivotNeptune.rotation.y += dia/165;
    neptune.rotation.y += dia/0.67;

    // Pluto (Rotation + Revolution)
    pivotPluto.rotation.y += dia/248;
    pluto.rotation.y += dia/6.4;
}

init();
animate();
