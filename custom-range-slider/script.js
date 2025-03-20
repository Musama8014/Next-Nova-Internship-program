const range = document.getElementById('range')
const percentageCircle = document.querySelector('.progress-circle')
const percentageText = document.querySelector('.percentage-text')

const circleRadius = 40
const circumference = 2 * Math.PI * circleRadius

range.addEventListener('input', (e) => {
    const value = +e.target.value
    const label = e.target.nextElementSibling

    // Update Label Position
    const range_width = getComputedStyle(e.target).getPropertyValue('width')
    const label_width = getComputedStyle(label).getPropertyValue('width')
    const num_width = +range_width.substring(0, range_width.length - 2)
    const num_label_width = +label_width.substring(0, label_width.length - 2)
    const max = +e.target.max
    const min = +e.target.min
    const left = value * (num_width / max) - num_label_width / 2 + scale(value, min, max, 10, -10)
    label.style.left = `${left}px`
    label.innerHTML = value

    // Update Circular Progress
    const offset = circumference - (value / max) * circumference
    percentageCircle.style.strokeDashoffset = offset
    percentageText.innerHTML = `${value}%`
})

// Function to Scale Values
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min
}
