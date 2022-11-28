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

  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    const toUplink = document.getElementById('to-up-link')
    if (scrollTop > 400) {
      toUplink.style = 'visibility: visible;'
    } else {
      toUplink.style = 'visibility: hidden;'
    }
  })
})
