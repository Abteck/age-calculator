# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![<img src="./public/images/age-calc-completed.png" alt ="desktop completed state"]
![<img src="./public/images/age-calc-desktop-error.png" alt ="desktop error"]
![<img src="./public/images/age-calc-desktop-whole-error.png" alt ="desktop whole error"]
![<img src="./public/images/age-calc-mobile-design.png" alt ="mobile design"]

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- TailwindCSS
- Vanilla JavaScript

### What I learned

well I learnt alot I must admit. The part where I have to validate for the errors, I was finding it very difficult to apply the errors on all input filed with a few lines of code. And then i did my research on google and figured a way out(using query selector to call the inputs and iterate over the inputs in search for errors, then displaying the error once the form is submitted).
Below is a code snippet that solved almost half of my problems.. I used it to iterate over the input fields and display the error message on all when empty upon submission;

```js
const inputs = document.querySelector("input");
inputs.forEach((i) => {
  const parent = i.parentElement;
  if (!i.value) {
    i.style.borderColor = "red";
    parent.querySelector("small").innerHTML = "this field is required";
  }
});
```

### Continued development

Moving forward, I'm going to dig deeper on the age calculation part and make sure i get proper understanding of it

### Useful resources

- [https://www.google.com] - Google is always your friend because nobody is perfect. It hepled me alot and i fully recommend it to anyone facing difficulties with some syntax

## Author

- Frontend Mentor - [https://www.frontendmentor.io/profile/abteck]
- Twitter - [https://www.twitter.com/abteck2]
