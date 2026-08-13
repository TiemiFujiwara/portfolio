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