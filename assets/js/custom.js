document.addEventListener('DOMContentLoaded', () => {
  const btnBurger = document.getElementById('btnhamburger');
  const navlist = document.querySelector('.navlist');

  if (btnBurger && navlist) {
    btnBurger.addEventListener('click', () => {
      navlist.classList.toggle('active');
    });
  }
});