import { subItems } from './utils';

const handleToggleSubMenu = (btnSubMenus) => {  
  btnSubMenus.map((btnSubMenu, index) => {
    btnSubMenu.addEventListener('click', function() { 
      subItems[index].classList.toggle('menu__subitem--active');
     });

  })
}

const handleSubMenuBack = () => {
  
}

export default handleToggleSubMenu;