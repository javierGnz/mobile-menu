import { gsap } from "gsap";
// import { subItems, subItemsActive } from './utils';

const tl = gsap.timeline({ ease: "power2.out", duration: 0.65 });

tl.to(".menu", { opacity: 1, duration: 0, visibility: "visible" })
  .to(".btn-toggle-menu", { rotate: 180 })
  .to(".menu__bg", { scale: 50 })
  .to(".menu__list", { opacity: 1 });

tl.reverse();

const handleToggleMenu = () => {
  tl.reversed(!tl.reversed());
};

export default handleToggleMenu;
