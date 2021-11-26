jokeBtn = document.querySelector(".joke-btn");
jokeAPI = "https://v2.jokeapi.dev/joke/Any";
jokeText = document.querySelector("p");

function tellJoke() {
  VoiceRSS.speech({
    key: "c982c85a0faf4bf9b23d832acdf86a57",
    src: joke,
    hl: "en-us",
    v: "Mary",
    r: 0,
    c: "mp3",
    f: "44khz_16bit_stereo",
    ssml: false,
  });
}

async function getJoke() {
  try {
    const response = await fetch(jokeAPI);
    const data = await response.json();
    if (data.setup) {
      joke = `${data.setup} ${data.delivery}`;
    } else {
      joke = data.joke;
    }
    tellJoke();
    jokeText.innerText = joke;
  } catch (error) {
    console.log(error);
  }
}

jokeBtn.addEventListener("click", getJoke);
