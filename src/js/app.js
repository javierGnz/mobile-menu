import handleToggle from "./toggleMenu";
import handleToggleSubMenu  from "./toggleSubMenu";

const btnMenu = document.querySelector('.btn-toggle-menu');
const btnSubMenu = Array.from(document.querySelectorAll('.menu__item-title'));

btnMenu.addEventListener('click', handleToggle);
handleToggleSubMenu(btnSubMenu);