const newBookSlider = tns({
  container: '#new-book',
  items: 2,
  rewind: true,
  swipeAngle: false,
  speed: 400,
  controlsText: ['<i class="ic-chevron"></i>', '<i class="ic-chevron"></i>'],
  responsive: {
    768: {
      items: 4,
    },
    1024: {
      items: 5,
    },
  },
})

const bestBookSlider = tns({
  container: '#best-book',
  items: 2,
  rewind: true,
  swipeAngle: false,
  speed: 400,
  controlsText: ['<i class="ic-chevron"></i>', '<i class="ic-chevron"></i>'],
  responsive: {
    768: {
      items: 4,
    },
    1024: {
      items: 5,
    },
  },
})
