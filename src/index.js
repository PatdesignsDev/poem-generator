function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Amor não se transforma de hora em hora",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
