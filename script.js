// JavaScript for animations and interactivity will go here.
const friends = [
    {
        name: 'Luna',
        planet: 'Xylos',
        avatar: 'avatar1.png'
    },
    {
        name: 'Zorp',
        planet: 'Gleeb',
        avatar: 'avatar2.png'
    },
    {
        name: 'Pip',
        planet: 'Flurble',
        avatar: 'avatar3.png'
    }
];

function createFriendProfile(friend, index) {
    const profile = document.createElement('div');
    profile.className = 'friend-profile';
    profile.innerHTML = `
        <img src="friend${index + 1}.png" alt="${friend.name}" width="100" height="100" style="border-radius: 50%;">
        <h3>${friend.name}</h3>
        <p>from ${friend.planet}</p>
    `;
    return profile;
}

const friendsGrid = document.querySelector('.friends-grid');
friends.forEach((friend, index) => {
    friendsGrid.appendChild(createFriendProfile(friend, index));
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.about-section, .mint-section, .friends-section, .journal-section, footer');
hiddenElements.forEach((el) => observer.observe(el));
const copyButton = document.getElementById('copy-ca');
const ca = document.getElementById('ca').innerText;

copyButton.addEventListener('click', () => {
    navigator.clipboard.writeText(ca).then(() => {
        copyButton.innerText = 'Copied!';
        setTimeout(() => {
            copyButton.innerText = 'Copy';
        }, 2000);
    });
});