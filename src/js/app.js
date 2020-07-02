import handleToggleMenu from "./toggleMenu";
import handleToggleSubMenu  from "./toggleSubMenu";
import handleToggleDetail from "./toggleDetails";

const btnMenu = document.querySelector('.btn-toggle-menu');
const btnSubMenu = Array.from(document.querySelectorAll('.menu__item-title'));
const btnAdd = document.querySelector('.btn--plus');
const btnProfile = document.querySelector('.navbar__profile');

btnMenu.addEventListener('click', handleToggleMenu);
btnAdd.addEventListener('click', handleToggleDetail);
btnProfile.addEventListener('click', () => {
  document.querySelector('.profile').classList.toggle('profile--active');
})
handleToggleSubMenu(btnSubMenu);