import { gsap } from "gsap";

const tl = gsap.timeline({ ease: "power2.out", duration: 0.65 });
const btnToggle = document.querySelector(".btn-toggle-menu");

tl.to(".menu", { opacity: 1, duration: 0, visibility: "visible" })
  .to(".menu__bg", { scale: 50 })
  .add("end", 1)
  .to(".menu__logo", { opacity: 1 }, "end")
  .to(".menu__list", { opacity: 1 }, "end");

tl.reverse();

const handleToggleMenu = () => {
  tl.reversed(!tl.reversed());
  btnToggle.classList.toggle('active');
  let activeItem = document.querySelector('.menu__subitem--active');  
  if (activeItem != null) {
    setTimeout(() => {
      activeItem.classList.remove('menu__subitem--active');
    }, 500);
  }
};

export default handleToggleMenu;