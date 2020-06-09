import { gsap } from "gsap";

const menu = document.querySelector(".menu");
let toggle = gsap.to(".btn-toggle-menu", {rotation: 90, x: -200, duration: 0.4, paused: true});

toggle.reverse();

const handleToggleMenu = () => {
  menu.classList.toggle("menu--open");
  toggle.reversed(!toggle.reversed());
};

export default handleToggleMenu;
