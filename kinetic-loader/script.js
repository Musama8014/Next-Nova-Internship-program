const kinetic = document.querySelector('.kinetic');
const progressText = document.querySelector('.progress-text');

let angle = 0;
let percentage = 0;

function animateLoader() {
  const radius = 50; // Move inside the circular border
  const centerX = 75; 
  const centerY = 75;

  const x = centerX + radius * Math.cos(angle);
  const y = centerY + radius * Math.sin(angle);

  kinetic.style.transform = `translate(${x}px, ${y}px)`;

  // Update percentage text
  progressText.textContent = `${percentage}%`;

  // Increment angle and percentage
  angle += 0.05;
  percentage = (percentage + 1) % 101;

  requestAnimationFrame(animateLoader);
}

animateLoader();
