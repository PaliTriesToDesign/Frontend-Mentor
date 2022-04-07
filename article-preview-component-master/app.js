const shareButton = document.querySelector(".user--share__primary");
const closeButtonCard = document.querySelector(".close--button");
const shareCard = document.querySelector(".share");

shareButton.addEventListener("click", function () {
  shareCard.classList.toggle("hidden");
});

closeButtonCard.addEventListener("click", function () {
  shareCard.classList.toggle("hidden");
});
