import { gsap } from "gsap";

const closeDetail = document.getElementById('details-close');
const tl = gsap.timeline({ ease: "expo.out" });

tl.to(".container__details", { opacity: 1, translateX: 0, visibility: "visible" });

tl.reverse();

const handleToggleDetail = () => {
  tl.play();
}

const handleCloseDetail = () => {
  tl.reverse();
}

closeDetail.addEventListener('click', handleCloseDetail);

export default handleToggleDetail;