/* Custom JS */
/* 
1. Mobile Nav Bar - Hamburger Menu Feature
2. Desktop - Scroll Reveal Feature
3. Desktop - Parallax Mouse Feature
*/

// 1. Mobile Nav Bar - Hamburger Menu Feature 

document.addEventListener('DOMContentLoaded', () => {
  const btnBurger = document.getElementById('btnhamburger');
  const navList = document.querySelector('.navlist');
  const navLinks = document.querySelectorAll('.navlist a');


  if (btnBurger && navList) {
    btnBurger.addEventListener('click', () => {
      navList.classList.toggle('active');
    });

    navLinks.forEach(links => {
      links.addEventListener('click', () => {
        navList.classList.remove('active');
      });
    });
  }
});

// 2. Desktop - Scroll Reveal Feature

document.addEventListener('DOMContentLoaded', () => {
  const viewer = new IntersectionObserver((opensite, viewer) => {
    opensite.forEach(opensite => {
      if (opensite.isIntersecting) {
        opensite.target.classList.add('active');
        viewer.unobserve(opensite.target);
      }
    });
  });

  const allelementsreveal = document.querySelectorAll('.reveal');
  allelementsreveal.forEach(element => viewer.observe(element));

});

// 3. Desktop - Parallax Mouse Feature

const headerDisplay = document.querySelector('.header-display');
const front = document.querySelector('.frontlayer');
const mid = document.querySelector('.midlayer');
const back = document.querySelector('.backlayer');

const sFront = 20;
const sMid = 45;
const sBack = 70;

if (headerDisplay && front && mid && back) {
  headerDisplay.addEventListener('mousemove', e => {
    const rect = headerDisplay.getBoundingClientRect();

    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);

    front.style.transform = `translate3d(${x / sFront}px, ${y / sFront}px, 0)`;
    mid.style.transform = `translate3d(${x / sMid}px, ${y / sMid}px, 0)`;
    back.style.transform = `translate3d(${x / sBack}px, ${y / sBack}px, 0)`;
  });

  headerDisplay.addEventListener('mouseleave', () => {
    front.style.transform = `translate3d(0, 0, 0)`;
    mid.style.transform = `translate3d(0, 0, 0)`;
    back.style.transform = `translate3d(0, 0, 0)`;
  });
};