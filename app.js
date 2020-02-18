import './src/styles/index.scss'

document.addEventListener('DOMContentLoaded', () => {
  const navbarLinks = document.getElementById('navbar-links')
  let currentNode = null

  navbarLinks.addEventListener('click', event => {
    const target = event.target
    if (currentNode !== target.closest('a')) {
      removeActiveStyle()
      target.closest('a').classList.add('navbar__link--active')
      currentNode = target.closest('a')
    }
  })

  function removeActiveStyle() {
    Array.prototype.forEach.call(navbarLinks.children, item => {
      item.classList.remove('navbar__link--active')
    })
  }
})