const cardData = [
  {
      header: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80",
      title: "Lorem ipsum dolor sit amet",
      excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis",
      profile_img: "https://randomuser.me/api/portraits/men/45.jpg",
      name: "John Doe",
      date: "Oct 08, 2020"
  },
  {
      header: "https://images.unsplash.com/photo-1521747116042-5a810fda9664?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2100&q=80",
      title: "Exploring the World of Nature",
      excerpt: "Experience the breathtaking beauty of nature and its wonders.",
      profile_img: "https://randomuser.me/api/portraits/women/45.jpg",
      name: "Jane Smith",
      date: "Nov 15, 2021"
  }
];

setTimeout(getData, 2500);

function getData() {
  cardData.forEach((data, index) => {
      document.getElementById(`header${index + 1}`).innerHTML = `<img src="${data.header}" alt="Card Image" class="card-img"/>`;
      document.getElementById(`title${index + 1}`).textContent = data.title;
      document.getElementById(`excerpt${index + 1}`).textContent = data.excerpt;
      document.getElementById(`profile_img${index + 1}`).innerHTML = `<img src="${data.profile_img}" alt="Profile Image"/>`;
      document.getElementById(`name${index + 1}`).textContent = data.name;
      document.getElementById(`date${index + 1}`).textContent = data.date;
  });

  document.querySelectorAll('.animated-bg').forEach(bg => bg.classList.remove('animated-bg'));
  document.querySelectorAll('.animated-bg-text').forEach(bg => bg.classList.remove('animated-bg-text'));
}
