const allMenuOpenButtonList = document.querySelectorAll(
  '.all-menu-title'
)

allMenuOpenButtonList.forEach((allMenuButton) => {
  allMenuButton.addEventListener('click', function () {
    const allMenuContent = this.nextElementSibling

    allMenuButton.classList.toggle('is-active')
    allMenuContent.classList.toggle('is-active')
  })
})
