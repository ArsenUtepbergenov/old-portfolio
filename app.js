import './src/styles/index.scss'

document.addEventListener('DOMContentLoaded', () => {
  const toUplink = document.getElementById('to-up-link')
  toUplink.style = 'visibility: hidden;'
  const nav = document.querySelector('.navbar')
  const navbarLinks = document.getElementById('navbar-links')
  const links = document.querySelectorAll('.navbar__link')
  const menuButton = document.querySelector('.menu-button')
  const formMessage = document.getElementById('form-message')
  const sections = document.querySelectorAll('section')
  let currentNode = null
  let currentActive = null
  const offsetNav = nav.offsetTop + nav.clientHeight

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

  function findCurrentActive() {
    for (const section of sections) {
      if (window.pageYOffset + offsetNav < section.offsetTop + section.clientHeight) {
        currentActive = section.getAttribute('id')
        break
      }
    }
  }

  function showToUplink() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    scrollTop > 400
      ? (toUplink.style = 'visibility: visible;')
      : (toUplink.style = 'visibility: hidden;')
  }

  window.addEventListener('scroll', () => {
    showToUplink()
    findCurrentActive()
    removeActiveStyle()

    links.forEach(l => {
      if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2) {
        links[links.length - 1].classList.add('navbar__link--active')
        return
      } else if (l.dataset.to === currentActive) {
        l.classList.add('navbar__link--active')
      }
    })
  })

  menuButton.addEventListener('click', () => {
    navbarLinks.className === 'navbar__links'
      ? (navbarLinks.className += ' navbar__links--mobile')
      : (navbarLinks.className = 'navbar__links')
  })

  formMessage.addEventListener('submit', event => {
    event.preventDefault()
  })

  const date = document.getElementById('date')
  date.innerHTML = new Date().getFullYear()
})
