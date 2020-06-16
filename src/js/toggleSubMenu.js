import { subItems } from './utils';

const btnBack = document.querySelector('.menu__subitem-back')

const handleToggleSubMenu = (btnSubMenus) => {  
  btnSubMenus.map((btnSubMenu, index) => {
    btnSubMenu.addEventListener('click', function() { 
      subItems[index].classList.toggle('menu__subitem--active');
     });

  })
}

btnBack.addEventListener('click', function() {
  Array.from(subItems).map((item, index) => {
    item.classList.remove('menu__subitem--active')
  })
})

export default handleToggleSubMenu;