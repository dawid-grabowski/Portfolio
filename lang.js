const buttonLang = document.querySelector('.change-lang')
const titleHero = document.querySelector('.title-hero')
const descriptionHero = document.querySelector('.description-hero')
const buttonHero = document.querySelector('.button-hero')
const titleInfoOne = document.querySelector('.title-info-one')
const titleInfoTwo = document.querySelector('.title-info-two')
const descriptionInfoOne = document.querySelector('.description-info-one')
const descriptionInfoTwo = document.querySelector('.description-info-two')
const titleContact = document.querySelector('.title-contact')
const buttonContactOne = document.querySelector('.button-contact-one')
const buttonContactTwo = document.querySelector('.button-contact-two')
const betweenForm = document.querySelector('.between-form')
const titleForm = document.querySelector('.title-form')
const descriptionForm = document.querySelector('.description-form')
const buttonForm = document.querySelector('.button-form')

const lang = {
    english: {
        buttonLang: "EN",
        titleHero: "Hi, i'm Dawid",
        descriptionHero: "I'm 19 years old student from Poland, living in Poznan. For now - it has been 2 years since I started learning Front-End Development. Languages that I'm learning are HTML, CSS (SASS), JavaScript and ReactJS. My goal is to develop myself as much as possible and to regularly expierience new things.",
        buttonHero: "read more",
        titleInfoOne: "Where can you find me?",
        titleInfoTwo: "My projects",
        descriptionInfoOne: "Cat's Hotel Website",
        descriptionInfoTwo: "game in progress",
        titleContact: "If you want to contact me, look down below",
        buttonContactOne: "call me",
        buttonContactTwo: "send mail",
        betweenForm: "or complete a form",
        titleForm: "Contact Form",
        descriptionForm: "feel free to send me message if you have any questions - I'll try to respond as soon as possible",
        buttonForm: "send message"
    },
    polish: {
        buttonLang: "PL",
        titleHero: "Witaj, jestem Dawid",
        descriptionHero: "Jestem 19-letnim uczniem z Poznania. Na ten moment, min?? nied??ugo ju?? 2 lata odk??d rozpocz????em nauk?? Front-End Developmentu. Ucz?? si?? HTML'a, CSS'a (SASS), JavaScript'u i ReactJS. Moim celem jest rozwija?? si?? jak najbardziej to mo??liwe oraz regularnie do??wiadcza?? nowych rzeczy w ??rodowisku programisty.",
        buttonHero: "czytaj wi??cej",
        titleInfoOne: "Gdzie mo??esz mnie znale?????",
        titleInfoTwo: "Moje Projekty",
        descriptionInfoOne: "Strona Kociego Hotelu",
        descriptionInfoTwo: "gra w produkcji",
        titleContact: "Je??eli chcesz si?? ze mn?? skontaktowa??, zjed?? ni??ej",
        buttonContactOne: "zadzwo??",
        buttonContactTwo: "wy??lij mail'a",
        betweenForm: "lub wype??nij formularz kontaktowy",
        titleForm: "Formularz Kontaktowy",
        descriptionForm: "Je??eli masz jakie?? pytania, napisz do mnie - postaram si?? odpowiedzie?? jak najszybciej",
        buttonForm: "wy??lij wiadomo????"
    }
}

const languageContent = language => {
    buttonLang.textContent = language.buttonLang
    titleHero.textContent = language.titleHero
    descriptionHero.textContent = language.descriptionHero
    buttonHero.textContent = language.buttonHero
    titleInfoOne.textContent = language.titleInfoOne
    titleInfoTwo.textContent = language.titleInfoTwo
    descriptionInfoOne.textContent = language.descriptionInfoOne
    descriptionInfoTwo.textContent = language.descriptionInfoTwo
    titleContact.textContent = language.titleContact
    buttonContactOne.textContent = language.buttonContactOne
    buttonContactTwo.textContent = language.buttonContactTwo
    betweenForm.textContent = language.betweenForm
    titleForm.textContent = language.titleForm
    descriptionForm.textContent = language.descriptionForm
    buttonForm.textContent = language.buttonForm
}


const languages = [lang.polish, lang.english]
const languageStorageCheck = localStorage.getItem('Lang')

const languageChangeWindow = () => {
     languageStorageCheck ? languageContent(languages[0]) : languageContent(languages[1])
}

const languageChangeButton = () => {
        if (!localStorage.getItem('Lang')) {
            localStorage.setItem('Lang', 'PL')
            languageContent(languages[0])
        }
        else {
            localStorage.removeItem('Lang')
            languageContent(languages[1])
        }
}

window.addEventListener('load', languageChangeWindow)
buttonLang.addEventListener('click', languageChangeButton)
