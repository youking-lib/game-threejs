const WINDOW_INNER_W = window.innerWidth
const WINDOW_INNER_H = window.innerHeight
const aspect = WINDOW_INNER_W / WINDOW_INNER_H
const frustumSize = 30

export default {
  camera: {
    left: -frustumSize,
    right: frustumSize,
    top: frustumSize * aspect,
    bottom: -frustumSize * aspect,
    near: -100,
    far: 85
  },
  backgroundColor: '#000000'
}
