import './src/styles/index.scss'

document.addEventListener('DOMContentLoaded', () => {
  const toUplink = document.getElementById('to-up-link')
  toUplink.style = 'visibility: hidden;'
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
    Array.from(navbarLinks.children).forEach(item => item.classList.remove('navbar__link--active'))
  }

  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    scrollTop > 400
      ? (toUplink.style = 'visibility: visible;')
      : (toUplink.style = 'visibility: hidden;')
  })

  const date = document.getElementById('date')
  date.innerHTML = new Date().getFullYear()
})
