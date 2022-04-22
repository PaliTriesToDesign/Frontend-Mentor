# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshots

![](./screenshots/desktop-ss.png.png)
![](./screenshots/mobile-ss.png-ss.png.png)
![](./screenshots/mobile-ss-active.png-ss.png.png)

### Links

- Live Site URL: https://cerulean-raindrop-6e675d.netlify.app/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

```html
<main class="image-header">
  <nav class="nav-menu">
    <img src="./images/logo.svg" alt="Sunnyside Logo" />
    <i class="fa-solid fa-bars" id="bars-menu"></i>

    <div id="desktop-menu">
      <div class="triangle"></div>
      <ul class="desktop-list">
        <li>About</li>
        <li>Services</li>
        <li>Projects</li>
        <li class="button desktop-button">CONTACT</li>
      </ul>
    </div>
  </nav>

  <div class="hidden" id="mobile-menu">
    <ul class="menu-list">
      <li>About</li>
      <li>Services</li>
      <li>Projects</li>
      <li class="button mobile-button">CONTACT</li>
    </ul>
  </div>

  <div class="container main-section">
    <h1 class="main-title">We are creatives</h1>
    <div class="arrow-down">
      <a href="#first-section" class="arrow-link">
        <img
          src="./images/icon-arrow-down.svg"
          alt="Arrow down"
          class="arrow-down-img"
        />
      </a>
    </div>
  </div>
</main>
```

```css
#mobile-menu::after {
  content: "";
  width: 0;
  height: 0;
  border-bottom: 20px solid var(--white);
  border-left: 20px solid transparent;
  position: absolute;
  top: -20px;
  right: 0;
}

.transform-link,
.stand-out-link {
  position: relative;
}

.transform-link::before,
.stand-out-link::before {
  content: "";
  display: block;
  background-color: var(--primary-yellow);
  border-radius: 8px;
  width: 130px;
  height: 8px;
  top: 65%;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  opacity: 0.5;
  z-index: -1;
}

.stand-out-link::before {
  background-color: var(--primary-red);
}

.transform-link:hover::before,
.stand-out-link:hover::before {
  opacity: 1;
  transition: all 100ms ease-in-out;
}
```

## Author

- Frontend Mentor - [@PaliTriesToDesign](https://www.frontendmentor.io/profile/PaliTriesToDesign)
- Twitter - [@PT2DS](https://www.twitter.com/PT2DS)
