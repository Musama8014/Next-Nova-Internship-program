const textEl = document.getElementById('text');
const speedDisplay = document.getElementById('speedDisplay');
const increaseBtn = document.getElementById('increaseSpeed');
const decreaseBtn = document.getElementById('decreaseSpeed');

const text = 'WELCOME TO THE INTERNSHIP AT NEXT-NOVA-TECH';
const words = text.split(' '); 
let idx = 0;
let speed = 500; 

writeText();

function writeText() {
    textEl.innerHTML = words
        .slice(0, idx + 1)
        .map(word => `<span style="color:${getRandomColor()}">${word}</span>`)
        .join(' ');

    idx++;

    if (idx >= words.length) {
        idx = 0; 
    }

    setTimeout(writeText, speed);
}


function getRandomColor() {
    return `hsl(${Math.random() * 360}, 100%, 50%)`; 
}


increaseBtn.addEventListener('click', () => {
    if (speed > 100) speed -= 100; 
    updateSpeedDisplay();
});


decreaseBtn.addEventListener('click', () => {
    speed += 100; 
    updateSpeedDisplay();
});


function updateSpeedDisplay() {
    speedDisplay.textContent = `Speed: ${speed}ms`;
}
