function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  // built api url

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "5c9fa8tb15a0808c494ddd28db3adc8o";
  let prompt = `Generate a Portuguese poem about ${instructionsInput.value}`;
  let context =
    "User instructions: You are a romantic Poem expert. Generate a 4 line poem in HTML using <p> tags only. Do not use markdown, do not use code blocks, do not include backticks. End the poem with a <p> signed by `SheCodes AI` inside a <strong> element. Only return HTML, nothing else.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating"> ⏳Generating a Portuguese Poem about ${instructionsInput.value}</div>`;

  //make call to the api by axios

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
