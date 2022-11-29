import './src/styles/index.scss'
const emailPublicId = '4z931Zjecp4KkjF4H'
const serviceId = 'service_l4qry2b'
const templateId = 'template_230rnqb'
const EMAIL_REGEXP =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu

function isEmailValid(value) {
  return EMAIL_REGEXP.test(value)
}

document.addEventListener('DOMContentLoaded', () => {
  emailjs.init(emailPublicId)

  const toUplink = document.getElementById('to-up-link')
  toUplink.style = 'visibility: hidden;'
  const nav = document.querySelector('.navbar')
  const navbarLinks = document.getElementById('navbar-links')
  const links = document.querySelectorAll('.navbar__link')
  const menuButton = document.querySelector('.menu-button')
  const formMessage = document.getElementById('form-message')
  const sections = document.querySelectorAll('section')
  const emailErrorText = document.getElementById('email-error-text')
  const formErrorText = document.getElementById('form-error-text')
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

  formMessage.email?.addEventListener('input', event => {
    const value = event.target.value
    const isEmail = value && isEmailValid(value)

    if (!isEmail) {
      event.target.classList.add('error')
      emailErrorText.innerHTML = 'This format is invalid!'
    } else {
      event.target.classList.remove('error')
      emailErrorText.innerHTML = '&nbsp;'
      formErrorText.innerHTML = '&nbsp;'
    }
  })

  formMessage.addEventListener('submit', event => {
    event.preventDefault()
    const name = formMessage.name?.value
    const message = formMessage.message?.value
    const email = formMessage.email?.value
    const isEmail = email && isEmailValid(email)
    const allowSend = name && isEmail && message

    if (!allowSend) {
      formErrorText.innerHTML = 'The form is incorrectly filled. Sending messages is not allowed.'
      return
    }
    if (sessionStorage.getItem('sessionUser')) {
      formErrorText.innerHTML = 'You cannot send another message.'
      return
    }

    emailjs.sendForm(serviceId, templateId, formMessage).then(
      response => {
        console.log(
          'Successfully sent a message. Status: %d, Text: %s',
          response.status,
          response.text,
        )
        sessionStorage.setItem('sessionUser', formMessage.user_email.value)
      },
      error => console.error('Sending a message failed: ', error),
    )
  })

  const date = document.getElementById('date')
  date.innerHTML = new Date().getFullYear()
})
