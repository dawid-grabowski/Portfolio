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
        descriptionHero: "Jestem 19-letnim uczniem z Poznania. Na ten moment, miną niedługo już 2 lata odkąd rozpocząłem naukę Front-End Developmentu. Uczę się HTML'a, CSS'a (SASS), JavaScript'u i ReactJS. Moim celem jest rozwijać się jak najbardziej to możliwe oraz regularnie doświadczać nowych rzeczy w środowisku programisty.",
        buttonHero: "czytaj więcej",
        titleInfoOne: "Gdzie możesz mnie znaleźć?",
        titleInfoTwo: "Moje Projekty",
        descriptionInfoOne: "Strona Kociego Hotelu",
        descriptionInfoTwo: "gra w produkcji",
        titleContact: "Jeżeli chcesz się ze mną skontaktować, zjedź niżej",
        buttonContactOne: "zadzwoń",
        buttonContactTwo: "wyślij mail'a",
        betweenForm: "lub wypełnij formularz kontaktowy",
        titleForm: "Formularz Kontaktowy",
        descriptionForm: "Jeżeli masz jakieś pytania, napisz do mnie - postaram się odpowiedzieć jak najszybciej",
        buttonForm: "wyślij wiadomość"
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
