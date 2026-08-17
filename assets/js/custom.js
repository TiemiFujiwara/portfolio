/* Custom JS */
/* 
1. Mobile Nav Bar - Hamburger Menu Feature
2. Scroll Reveal Feature
*/

/* 1. Mobile Nav Bar - Hamburger Menu Feature */

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

/* 2. Scroll Reveal Feature */

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