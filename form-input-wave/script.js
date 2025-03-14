const labels = document.querySelectorAll('.form-control label');

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('');
});

document.querySelector('.btn').addEventListener('click', function (event) {
    event.preventDefault(); 

  
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>You have logged in successfully!</span>
    `;

    document.body.appendChild(notification);

   
    setTimeout(() => {
        notification.remove();
    }, 3000);
});
