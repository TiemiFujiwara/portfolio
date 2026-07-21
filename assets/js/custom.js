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

function changeTheme() {
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

themeButton.addEventListener('click', changeTheme);

// 2. Open Pop-up Windows

const buttonsMenu = document.querySelectorAll('.main-icon-button');
const windowsList = [
    document.querySelector('.about-window'), document.querySelector('.links-window'), document.querySelector('.portfolio-window'), document.querySelector('.contact-window')
];

buttonsMenu.forEach((button, index) => {
    button.addEventListener('click', () => {
        const windowTarget = windowsList[index];
        if (windowTarget) {
            windowTarget.classList.remove('hidden');
            bringingWindowFront(windowTarget);
        }
    });
});

//3. Window Priority Feature

let maxIndex = 10;

function bringingWindowFront(windowElement) {
    maxIndex++;
    windowElement.style.zIndex = maxIndex;
}

const windowsAll = document.querySelectorAll('.about-window, .links-window, .portfolio-window, .contact-window');
windowsAll.forEach(get => {
    get.addEventListener('mousedown', () => bringingWindowFront(get));
});

// 4. Close Pop-up Windows

const closeButtons = document.querySelectorAll('.close-window-button');

closeButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const windowForClosing = event.target.closest('.about-window, .links-window, .portfolio-window, .contact-window');
        if (windowForClosing) {
            windowForClosing.classList.add('hidden');
        }
    });
});

// 5. Make the Windows Draggable

const barsWindow = document.querySelectorAll('.about-window-bar, .links-window-bar, .portfolio-window-bar, .contact-window-bar');
barsWindow.forEach(bars => {
    bars.addEventListener('mousedown', startMoving);
});

function startMoving(event) {
    if (event.target.classList.contains('close-window-button')) return;
    const windowElement = event.currentTarget.parentElement;

    function moving(event) {
        let positionX = windowElement.offsetLeft;
        let positionY = windowElement.offsetTop;
        windowElement.style.left = (positionX + event.movementX) + 'px';
        windowElement.style.top = (positionY + event.movementY) + 'px';
        windowElement.style.margin = '0px';
    }

    function lettingGo() {
        document.removeEventListener('mousemove', moving);
        document.removeEventListener('mouseup', lettingGo);
    }

    document.addEventListener('mousemove', moving);
    document.addEventListener('mouseup', lettingGo);
}
