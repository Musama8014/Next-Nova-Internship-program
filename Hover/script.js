const container = document.getElementById('container')
const colors = ['#e74c3c', '#00ff00', '#ff9900', '#ff9900','#00ff00']
const SQUARES = 60

for(let i = 0; i < SQUARES; i++) 
    
    {
    const square = document.createElement('div')
    square.classList.add('square')
    // Change this text as needed
const text = document.createElement('span')
text.innerText = "Next Nova Internship"; 
square.appendChild(text);

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseout', () => removeColor(square))

    container.appendChild(square)
}

function setColor(element, textElement)


{
   const color = getRandomColor()
   element.style.background = color
   textElement.style.opacity = "1";
   element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}


function removeColor(element, textElement)
 {
   element.style.background = '#1d1d1d'
   element.style.boxShadow = '0 0 2px #000'
   textElement.style.opacity = "0"; 
}


function getRandomColor() 

{
    return colors[Math.floor(Math.random() * colors.length)]
}
