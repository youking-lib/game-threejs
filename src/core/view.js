import platform from './platform'

export default class View {
  constructor (canvas) {
    this.platform = platform
    this.canvas = canvas
  }
  
  init () {
    this.platform.init({
      canvas: this.canvas,
      onGenerateFrame: this.onGenerateFrame
    })
  }

  onGenerateFrame = () => {}
}
