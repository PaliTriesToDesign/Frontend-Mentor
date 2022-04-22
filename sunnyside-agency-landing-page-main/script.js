const menuBars = document.getElementById("bars-menu");
const menu = document.getElementById("mobile-menu");

menuBars.addEventListener("click", function () {
  menu.classList.toggle("hidden");
});

console.log(menuBars);
console.log(menu);
