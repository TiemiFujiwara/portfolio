// 1. Theme toggle

const htmlElement = document.documentElement;
const themeButton = document.querySelector('.theme-button');
const lightIcon = document.querySelector('.light-mode-toggle');
const darkIcon = document.querySelector('.dark-mode-toggle');

const soundOnLight = document.querySelector('.light-sound-on');
const soundOffLight = document.querySelector('.light-sound-off');
const soundOnDark = document.querySelector('.dark-sound-on');
const soundOffDark = document.querySelector('.dark-sound-off');

const allIconsLight = document.querySelectorAll('.light-home-icon');
const allIconsDark = document.querySelectorAll('.dark-home-icon');

const formContact = document.getElementById('contact-form');

function alternarTema() {
    htmlElement.classList.toggle('dark');
    if (htmlElement.classList.contains('dark')) {
        lightIcon.classList.add('hidden');
        darkIcon.classList.remove('hidden');
        
        soundOnLight.classList.add('hidden');
        soundOffLight.classList.add('hidden');
        soundOnDark.classList.remove('hidden');
        soundOffDark.classList.add('hidden');
        
        allIconsLight.forEach(icon => icon.classList.add('hidden'));
        allIconsDark.forEach(icon => icon.classList.remove('hidden'));
        
        formContact.setAttribute('data-bs-theme','dark');
    } else {
        lightIcon.classList.remove('hidden');
        darkIcon.classList.add('hidden');
        
        soundOnLight.classList.remove('hidden');
        soundOffLight.classList.add('hidden');
        soundOnDark.classList.add('hidden');
        soundOffDark.classList.add('hidden');
        
        allIconsLight.forEach(icon => icon.classList.remove('hidden'));
        allIconsDark.forEach(icon => icon.classList.add('hidden'));
    
        formContact.setAttribute('data-bs-theme','');
    }
}

themeButton.addEventListener('click', alternarTema);