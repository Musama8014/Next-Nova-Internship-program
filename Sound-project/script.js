const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
const emojis = ['👏', '😡', '😲', '🎉', '🏆', '❌'];

const buttonsContainer = document.getElementById('buttons');

sounds.forEach((sound, index) => {
    const wrapper = document.createElement('div');
    wrapper.classList.add('sound-wrapper');

    const emoji = document.createElement('span');
    emoji.classList.add('emoji');
    emoji.innerText = emojis[index];

    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = sound;

    btn.addEventListener('click', () => {
        stopSounds();
        document.getElementById(sound).play();
    });

    wrapper.appendChild(emoji);
    wrapper.appendChild(btn);
    buttonsContainer.appendChild(wrapper);
});


const carButton = document.createElement('button');
carButton.classList.add('btn');
carButton.innerText = 'Drive Car 🚗';

carButton.addEventListener('click', () => {
    stopSounds();
    playOnlineCarSound(); 
    moveCar();
});

buttonsContainer.appendChild(carButton);

function stopSounds() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound);
        song.pause();
        song.currentTime = 0;
    });
}


function playOnlineCarSound() {
    const carSound = new Audio('https://www.soundjay.com/transport/car-horn-01.mp3');
    carSound.volume = 0.10; 
    carSound.play().catch(error => console.log(error)); 
}


function moveCar() {
    const car = document.getElementById('car');
    car.style.transition = "left 2s ease-in-out";
    car.style.left = "80%";

    setTimeout(() => {
        car.style.left = "10%"; 
    }, 2500);
}
