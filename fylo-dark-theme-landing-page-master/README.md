# Frontend Mentor - Fylo dark theme landing page solution

This is a solution to the [Fylo dark theme landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/fylo-dark-theme-landing-page-5ca5f2d21e82137ec91a50fd). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](/screenshots/desktop-ss.png)
![](/screenshots/mobile-ss.png)

### Links

- Live Site URL: https://startling-cassata-a2b0fa.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- SCSS
- Flexbox
- CSS Grid
- Mobile-first workflow
- GSAP

### What I learned

```js
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
```

## Author

- Frontend Mentor - [@PaliTriesToDesign](https://www.frontendmentor.io/profile/PaliTriesToDesign)
- Twitter - [@PT2DS](https://twitter.com/PT2DS)
