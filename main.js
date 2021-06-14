import * as three from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.js'


var video = document.querySelector("#videoElement");

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
      video.srcObject = stream;
    })
    .catch(function (err0r) {
      console.log("Something went wrong!");
    });
}
// const video_element = document.getElementById( 'videoElement' );
// const vidtexture = new three.VideoTexture( video_element );

const scene = new three.Scene()

const camera = new three.PerspectiveCamera(75, innerWidth/innerHeight, 0.1, 10000 )

const renderer = new three.WebGLRenderer({ alpha: true })
renderer.setClearAlpha(0.0);
renderer.setPixelRatio(devicePixelRatio)

renderer.setSize(innerWidth, innerHeight)
document.body.appendChild(renderer.domElement)

const boxgeometry = new three.BoxGeometry(1,1,1)
const material = new three.MeshBasicMaterial({color: 0x00ff00})
const mesh = new three.Mesh(boxgeometry, material)

scene.add(mesh)
// scene.add(vidtexture)

camera.position.z = 5
function animate() {
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
  mesh.rotation.x +=0.05
  mesh.rotation.y +=0.06
  mesh.rotation.z +=0.02
}

animate()

