import { gsap } from "gsap";

const tl = gsap.timeline({ ease: "power2.out", duration: 1.2 });

tl.to(".menu", { opacity: 1, delay: -0.4, visibility: "visible" })
  .to(".btn-toggle-menu", { rotate: 180 })
  .to(".menu__bg", { scale: 50 })
  .to(".menu__list", { opacity: 1 });

tl.reverse();

const handleToggleMenu = () => {
  tl.reversed(!tl.reversed());
};

export default handleToggleMenu;
