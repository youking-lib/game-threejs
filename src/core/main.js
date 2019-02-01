import View from './view'
import engine from './engine'

export default class Main {
  constructor (canvas) {
    this.canvas = canvas
    
    this.view = new View(canvas)
    this.engine = engine
  }

  init () {
    this.view.init(this.canvas)
    this.engine.init()
  }
}