const mainSlider = tns({
  container: '.main-slider-list',
  navContainer: '.slider-control',
  controls: false,
  autoplay: true,
  autoplayButtonOutput: false,
  preventScrollOnTouch: true,
  mouseDrag: true,
})


const newBookSlider = tns({
  container: '#new-book',
  items: 2,
  loop: false,
  swipeAngle: false,
  gutter: 8,
  speed: 400,
  controlsText: ['<i class="ic-chevron"></i>', '<i class="ic-chevron"></i>'],
  preventScrollOnTouch: true,
  responsive: {
    768: {
      items: 4,
    },
    1024: {
      items: 5,
      gutter: 16,
      edgePadding: 24,
    },
  },
})

const bestBookSlider = tns({
  container: '#best-book',
  items: 2,
  loop: false,
  swipeAngle: false,
  gutter: 8,
  speed: 400,
  controlsText: ['<i class="ic-chevron"></i>', '<i class="ic-chevron"></i>'],
  preventScrollOnTouch: true,
  responsive: {
    768: {
      items: 4,
    },
    1024: {
      items: 5,
      gutter: 16,
      edgePadding: 24,
    },
  },
})
