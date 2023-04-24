let menuButton = document.querySelector(".menuBtn");
let closeButton = document.querySelector(".closeBtn");
let navbar = document.querySelector(".navbar");

menuButton.addEventListener("click", () => {
  navbar.classList.toggle("slider");
});
closeButton.addEventListener("click", () => {
  navbar.classList.remove("slider");
});
