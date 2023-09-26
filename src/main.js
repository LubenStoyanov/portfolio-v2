const copyright = document.querySelector(".copyrigth");
const date = new Date();
copyright.textContent += `${date.getFullYear()} Luben Stoyanov. All rights reserved.`;

const app = document.querySelector("#typewriter");

if (!window.location.href.endsWith("about/")) {
  let typewriter = new Typewriter(app, {
    loop: true,
    delay: "natural",
    deleteSpeed: "natural",
  });

  typewriter
    .typeString('I create the web.')
    .pauseFor(300)
    .deleteChars(17)
    .typeString('I ride a bicycle.')
    .pauseFor(300)
    .deleteChars(17)
    .typeString('I play chess.')
    .pauseFor(300)
    .deleteChars(13)
    .typeString('I lift weights.')
    .pauseFor(300)
    .deleteChars(15)
    .typeString('I play the piano.')
    .pauseFor(300)
    .deleteChars(17)
    .start();
}
