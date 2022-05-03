gsap.from(".logo-nav", { duration: 1, y: "-500%", ease: "bounce" });
gsap.from(".ul-main", {
  duration: 1,
  y: "-500%",
  ease: "bounce",
});

gsap.from(".image-intro", {
  duration: 1.5,
  y: "-100%",
  ease: "bounce",
  opacity: 0,
  delay: 1,
});
gsap.from(".main-title", { duration: 0.5, opacity: 0, delay: 1 });
gsap.from(".main-p", { duration: 0.5, opacity: 0, delay: 2 });
gsap.from(".main-btn", {
  duration: 0.5,
  y: "100%",
  ease: "elastic",
  opacity: 0,
  delay: 3,
});

const emailInput = document.getElementById("email-input");
const emailBtn = document.getElementById("email-btn");
const invalidEmail = document.getElementById("invalid-email");
const validEmail = document.getElementById("valid-email");

emailBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (emailInput.value == "") {
    validEmail.classList.add("hidden");
    invalidEmail.classList.remove("hidden");
    console.log("clicked!");
  } else {
    validEmail.classList.remove("hidden");
    invalidEmail.classList.add("hidden");
  }
});

console.log(invalidEmail);
