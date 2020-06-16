import { gsap } from "gsap";

const tl = gsap.timeline({ ease: "power2.out", duration: 0.65 });

tl.to(".btn-toggle-menu", { rotate: 180 })
  .to(".menu", { opacity: 1, duration: 0, visibility: "visible" })
  .to(".menu__bg", { scale: 50 })
  .to(".menu__list", { opacity: 1 });

tl.reverse();

const handleToggleMenu = () => {
  tl.reversed(!tl.reversed());
  let activeItem = document.querySelector('.menu__subitem--active');  
  if (activeItem != null) {
    setTimeout(() => {
      activeItem.classList.remove('menu__subitem--active');
    }, 500);
  }
};

export default handleToggleMenu;
