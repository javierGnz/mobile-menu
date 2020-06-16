import { subItems, subItemsBack } from './utils';

const handleToggleSubMenu = (btnSubMenus) => {
  btnSubMenus.map((btnSubMenu, index) => {
    btnSubMenu.addEventListener('click', () => {
      subItems[index].classList.toggle('menu__subitem--active');
     });
  })
}

const handleSubMenuBack = () => {
  Array.from(subItemsBack).map((btnBack, index) => {
    btnBack.addEventListener('click', () => {
      subItems[index].classList.remove('menu__subitem--active');
    })
  })
}

handleSubMenuBack();

export default handleToggleSubMenu;