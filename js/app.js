const hamburger = document.querySelector(".hamburger");
const Menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  Menu.classList.toggle("active");
});

document.querySelectorAll(".menu-item").forEach((n) => {
  n.addEventListener("click", () => {
    Menu.classList.toggle("active");
    hamburger.classList.toggle("active");
  });
});
