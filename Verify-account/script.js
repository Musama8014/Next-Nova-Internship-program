const codes = document.querySelectorAll('.code');
const submitBtn = document.getElementById('submitBtn');
const message = document.getElementById('message');

codes[0].focus();

codes.forEach((code, idx) => {
    code.addEventListener('keydown', (e) => {
        if(e.key >= 0 && e.key <= 9) {
            codes[idx].value = ''
            setTimeout(() => {
                if (idx < codes.length - 1) {
                    codes[idx + 1].focus();
                }
                checkFilled();
            }, 10);
        } else if(e.key === 'Backspace') {
            setTimeout(() => {
                if (idx > 0) {
                    codes[idx - 1].focus();
                }
                checkFilled();
            }, 10);
        }
    });
});

function checkFilled() {
    const allFilled = [...codes].every(code => code.value !== '');
    if (allFilled) {
        submitBtn.style.display = 'block'; 
    } else {
        submitBtn.style.display = 'none'; 
    }
}

submitBtn.addEventListener('click', () => {
    message.innerText = 'Your account is verified ✅';
    message.style.display = 'block';
});
