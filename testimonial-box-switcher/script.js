const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')
const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
const progressBar = document.querySelector('.progress-bar')

const testimonials = [
  {
    name: 'Miyah Myles',
    position: 'Marketing',
    photo:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6',
    text:
      "I've worked with literally hundreds of HTML/CSS developers and I have to say the top spot goes to this guy. This guy is an amazing developer...",
  },
  {
    name: 'June Cha',
    position: 'Software Engineer',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    text:
      'This guy is an amazing frontend developer that delivered the task exactly how we need it...',
  },
  {
    name: 'Iida Niskanen',
    position: 'Data Entry',
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    text:
      "This guy is a hard worker. Communication was also very good with him...",
  }
]


let idx = Math.floor(Math.random() * testimonials.length)
let interval = setInterval(updateTestimonial, 10000)

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx]

  testimonial.innerHTML = text
  userImage.src = photo
  username.innerHTML = name
  role.innerHTML = position

  idx = (idx + 1) % testimonials.length
  resetProgress()
}

function resetProgress() {
  progressBar.style.width = '0%'
  setTimeout(() => {
    progressBar.style.transition = 'width 10s linear'
    progressBar.style.width = '100%'
  }, 100)
}

prevBtn.addEventListener('click', () => {
  idx = (idx - 1 + testimonials.length) % testimonials.length
  updateTestimonial()
  resetInterval()
})

nextBtn.addEventListener('click', () => {
  idx = (idx + 1) % testimonials.length
  updateTestimonial()
  resetInterval()
})


testimonialsContainer.addEventListener('mouseenter', () => clearInterval(interval))
testimonialsContainer.addEventListener('mouseleave', () => resetInterval())

function resetInterval() {
  clearInterval(interval)
  interval = setInterval(updateTestimonial, 10000)
}

updateTestimonial()
resetProgress()
