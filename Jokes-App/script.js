const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')
function changeColor() {
  document.getElementById('jokeBtn').style.color = 'black';
}

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }

  const res = await fetch('https://icanhazdadjoke.com', config)

  const data = await res.json()

  jokeEl.innerHTML = data.joke
}
const babyIcon = document.getElementById('baby-icon');

function moveBaby() {
    let direction = 1; 
    let position = 0; 

    setInterval(() => {
        position += 5 * direction;
        babyIcon.style.left = position + "px";

        if (position >= window.innerWidth - 100 || position <= 0) {
            direction *= -1; 
        }
    }, 50);
}

moveBaby();
