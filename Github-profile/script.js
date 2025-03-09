const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');
const button = document.getElementById('submit-btn');

const API_URL = 'https://api.github.com/users/';


form.addEventListener('submit', (e) => {
    e.preventDefault();
    fetchSingleUser();
});


button.addEventListener('click', (e) => {
    e.preventDefault();
    fetchSingleUser();
});


function fetchSingleUser() {
    const user = search.value.trim();
    if (user) {
        getUser(user);
        search.value = '';
    }
}


async function getProfiles(usernames) {
    main.innerHTML = '';

    const profiles = await Promise.all(
        usernames.map(username => getUser(username))
    );

    profiles.forEach(user => {
        if (user) {
            createUserCard(user);
        } else {
            createErrorCard('No profile found for one of the usernames');
        }
    });
}


async function getUser(username) {
    try {
        const response = await axios.get(API_URL + username);
        createUserCard(response.data);
    } catch (error) {
        createErrorCard(`User "${username}" not found`);
    }
}


function createUserCard(user) {
    const userID = user.name || user.login;
    const userBio = user.bio ? `<p>${user.bio}</p>` : '';
    const cardHTML = `
    <div class="card">
        <div>
            <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
        </div>
        <div class="user-info">
            <h2>${userID}</h2>
            ${userBio}
            <ul>
                <li>${user.followers} <strong>Followers</strong></li>
                <li>${user.following} <strong>Following</strong></li>
                <li>${user.public_repos} <strong>Repos</strong></li>
            </ul>
        </div>
    </div>
    `;
    main.innerHTML = cardHTML;
}


function createErrorCard(msg) {
    const cardHTML = `
        <div class="card">
            <h1>${msg}</h1>
        </div>
    `;
    main.innerHTML = cardHTML;
}
