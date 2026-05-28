function displayPoem(respose) {
  console.log("poem generatared");

  new Typewriter("#poem", {
    strings: Response.data.answer,
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
  let prompt = `Generate a Portuguese poem about ${instructionsInput.value} `;
  let context =
    "User instructions: You are a romantic Poem expert and love to write poems. Your mission is to generate a 4 line poem in basic HTML.Make sure to follow the user instructions.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apikey}`;

  console.log("Generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  //make call to the api by axios

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
