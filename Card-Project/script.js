const Card = document.querySelectorAll('.Card')

Card.forEach(Card => {
    Card.addEventListener('click', () => {
        removeActiveClasses()
        Card.classList.add('active')
    })
})

function removeActiveClasses() {
    Card.forEach(Card => {
        Card.classList.remove('active')
    })
}
