import Flickity from 'flickity'

const css = require('flickity/dist/flickity.min.css')

const el = document.querySelector('#codex-slider')

const codexSlider = new Flickity(el, {
  cellAlign: 'center',
  wrapAround: true,
  pageDots: false,
  autoPlay: 3000,
  pauseAutoPlayOnHover: true,
})

codexSlider.on('select', () => {



})

export default codexSlider
