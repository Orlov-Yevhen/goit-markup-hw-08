(() => {
  const refs = {
    openMenulBtn: document.querySelector('.js-mob-open'),
    closeMenuBtn: document.querySelector('.js-mob-close'),
    menu: document.querySelector('[data-mob]'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
  }
})();
