const interact  = require('interact.js')

const maxNavWidth = 450
const minNavWidth = 120

const main = document.querySelector('main')
const nav  = document.querySelector('nav')

interact(main).resizable({
  axis: 'x',
  edges: {
    left: true
  }
}).on('resizemove', function(evt) {

  let target = evt.target
  let width  = `${evt.clientX}px`

  if (evt.clientX < maxNavWidth && evt.clientX > minNavWidth) {
    target.style.left = width
    nav.style.right = nav.style.width = width
  }
})
