(() => {
  const refs = {
    openMobBtn: document.querySelector('.mob__menu-open'),
    closeMobBtn: document.querySelector('.mob__menu-close'),
    mob: document.querySelector('.mob__menu'),
  };

  refs.openMobBtn.addEventListener('click', toggleMob);
  refs.closeMobBtn.addEventListener('click', toggleMob);

  function toggleMob() {
    refs.mob.classList.toggle('is-hidden');
  }
})();
