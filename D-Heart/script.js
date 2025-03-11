const loveMe = document.querySelector('.loveMe')
const times = document.querySelector('#times')

let clickTime = 0
let timesClicked = 0


loveMe.addEventListener('click', (e) => {
    if (clickTime === 0) {
        clickTime = new Date().getTime();

        
        createIcon(e, 'fa-thumbs-up'); 

        setTimeout(() => {
            clickTime = 0;
        }, 400); 
    } else {
        if ((new Date().getTime() - clickTime) < 400) {
            createIcon(e, 'fa-heart'); 
            times.innerHTML = ++timesClicked;
        }
        clickTime = 0;
    }
});

const createIcon = (e, iconClass) => {
    
    const icon = document.createElement('i');
    icon.classList.add('fas', iconClass);
    
    const x = e.clientX - loveMe.getBoundingClientRect().left;
    const y = e.clientY - loveMe.getBoundingClientRect().top;

    icon.style.position = 'absolute';
    icon.style.left = `${x}px`;
    icon.style.top = `${y}px`;

    if (iconClass === 'fa-thumbs-up') {
        icon.style.color = 'blue';
    } else {
        icon.style.color = 'red';
    }

    icon.style.transform = 'translate(-50%, -50%) scale(1)';
    icon.style.animation = 'fadeOut 1s ease-in-out forwards';

    loveMe.appendChild(icon);

    setTimeout(() => icon.remove(), 1000); 
};