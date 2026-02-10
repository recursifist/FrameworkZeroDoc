
// Site Menu
const initMenu = () => {
  const menuList = document.getElementById('menu-list').querySelector('ul')
  const navTargets = document.querySelectorAll('.menu-nav-target-title')

  menuList.innerHTML = '' // Clear existing items

  navTargets.forEach(target => {
    const id = target.closest('section').id
    const title = target.textContent

    if (id && title) {
      const li = document.createElement('li')
      const a = document.createElement('a')
      a.href = `#${id}`
      a.textContent = title
      a.className = 'menu-link'
      li.appendChild(a)
      menuList.appendChild(li)
    }
  })
}

const menuButton = document.getElementById('menu-button')
const menuListContainer = document.getElementById('menu-list')

const toggleMenu = () => {
  menuListContainer.classList.toggle('open')
  menuButton.querySelector('svg').classList.toggle('menu-icon-open')
}

menuButton.addEventListener('click', toggleMenu)
menuListContainer.addEventListener('click', (event) => {
  if (event.target.classList.contains('menu-link')) {
    toggleMenu()
  }
})
document.addEventListener('click', (event) => {
  const isClickInside = menuButton.contains(event.target) || menuListContainer.contains(event.target)
  if (!isClickInside && menuListContainer.classList.contains('open')) {
    toggleMenu()
  }
})

const showSpeed = window.location.protocol !== "file:" ? 1000 : 0
const showMain = () => setTimeout(() => document.getElementById('main').classList.add('show'), showSpeed)

showMain()
window.addEventListener('load', initMenu)
