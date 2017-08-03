import Flickity from 'flickity'

const css = require('flickity/dist/flickity.min.css')

const el = document.querySelector('#tech-slider')

const techSlider = new Flickity(el, {
  cellAlign: 'center',
  wrapAround: true,
  pageDots: false,
  autoPlay: 3000,
  pauseAutoPlayOnHover: true,
})

export default techSlider
