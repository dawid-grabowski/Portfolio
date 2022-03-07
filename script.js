import './theme.js'
import './lang.js'

const burgerBox = document.querySelector('.navbar__mobile')
const burgerBoxItems = document.querySelectorAll('.navbar__mobile--item')
const burgerMenu = document.querySelector('.navbar__burger')
const cartoonMan = document.querySelector('.hero__bro')
const footerYear = document.querySelector('.footer-year')
const today = new Date()
const year = today.getFullYear()
const scroll = new SmoothScroll('a[href*="#"]', {
	speed: 600,
})

const updateDate = () => {
	footerYear.textContent = `${year}`
}

const characterAppear = () => {
	cartoonMan.classList.add('jump_in')
}

const openBurgerMenu = () => {
	if (burgerBox.style.top === '0px') {
		burgerBox.style.top = '-200px'
	} else {
		burgerBox.style.top = '0px'
	}
}

burgerBoxItems.forEach(item => {
	item.addEventListener('click', () => {
		burgerBox.style.top = '-200px'
	})
})

burgerMenu.addEventListener('click', openBurgerMenu)
window.addEventListener('load', characterAppear)
window.addEventListener('load', updateDate)
