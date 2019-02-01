import * as threejs from 'three'
import platformConfig from '../config/platform'

class GamePlatfrom {
  constructor () {
    this.scene = new threejs.Scene()
    this.canvas = null
    this.renderer = null
    this.camera = null

    this.cameraTarget = new threejs.Vector3(0, 0, 0)
  }

  init ({ canvas, onGenerateFrame }) {
    this.canvas = canvas
    this.onGenerateFrame = onGenerateFrame || function () {}

    this.initRenderer()
    // this.initLight()
    this.initCamera()
    this.initHelper()
    this.render()
  }

  initHelper () {
    const axesHelper = new threejs.AxesHelper( 20 )
    this.scene.add( axesHelper )
  }

  initRenderer () {
    const renderer = this.renderer = new threejs.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      preserveDrawingBuffer: true
    })

    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = threejs.PCFShadowMap
  }

  initCamera () {
    const cameraConfig = platformConfig.camera
    const camera = this.camera = new threejs.OrthographicCamera(
      cameraConfig.left, cameraConfig.right,
      cameraConfig.top, cameraConfig.bottom,
      cameraConfig.near, cameraConfig.far
    )

    camera.position.set(-10, 10, 10)
    // camera.position.set(0, 0, 10)
    camera.lookAt(this.cameraTarget)
  }

  render = () => {
    requestAnimationFrame(this.render)

    this.renderer.render(this.scene, this.camera)
    this.onGenerateFrame()
  }
}

export default new GamePlatfrom()
