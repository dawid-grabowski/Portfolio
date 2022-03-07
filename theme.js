const html = document.querySelector('html')
const body = document.querySelector('body')
const cartoonMan = document.querySelector('.hero__bro--img')
const sunIcon = document.querySelector('.sun')
const moonIcon = document.querySelector('.moon')
const buttonBurger = document.querySelector('.navbar__burger')
const navbarBackground = document.querySelector('.navbar-wrapper')
const buttonTheme = document.querySelector('.dark-switch')

const themeChangeLight = () => {
    body.classList.add('light')
    localStorage.setItem('light', 'yes')
    sunIcon.style.display = 'block'
    moonIcon.style.display = 'none'
    buttonBurger.style.borderTop = '1px solid #171717'
    buttonBurger.style.borderBottom = '1px solid #171717'
    navbarBackground.style.background = '#FAF8FF'
    cartoonMan.removeAttribute('src')
    cartoonMan.setAttribute('src', './img/bro_light.svg')
    html.style.removeProperty('--scrollbar-background');
    html.style.removeProperty('--scrollbar-background-thumb');
    html.style.setProperty('--scrollbar-background', '#dbdbdc');
    html.style.setProperty('--scrollbar-background-thumb', '#333');
}

const themeChangeDark = () => {
    body.classList.remove('light')
    localStorage.removeItem('light')
    sunIcon.style.display = 'none'
    moonIcon.style.display = 'block'
    buttonBurger.style.borderTop = '1px solid #FAF8FF'
    buttonBurger.style.borderBottom = '1px solid #FAF8FF'
    navbarBackground.style.background = '#171717'
    cartoonMan.removeAttribute('src')
    cartoonMan.setAttribute('src', './img/bro.svg')
    html.style.removeProperty('--scrollbar-background');
    html.style.removeProperty('--scrollbar-background-thumb');
    html.style.setProperty('--scrollbar-background', '#333');
    html.style.setProperty('--scrollbar-background-thumb', '#dbdbdc');
}

const checkForThemeButton = () => {
    const themeCheck = localStorage.getItem('light')
    themeCheck ? themeChangeDark() : themeChangeLight()
}

const checkForThemeWindow = () => {
    const themeCheck = localStorage.getItem('light')
    themeCheck ? themeChangeLight() : themeChangeDark()
}

buttonTheme.addEventListener('click', checkForThemeButton)
window.addEventListener('load', checkForThemeWindow)
