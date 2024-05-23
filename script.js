const mobile = document.getElementById('mobile');
const close = document.getElementById('close');
const navbar = document.getElementById('navbar');

if (mobile) {
   mobile.addEventListener('click', () => {
        navbar.classList.add('active')
   })
}

if(close){
    close.addEventListener('click', () => {
        navbar.classList.remove('active')
    })
}

//localization

window.onload = function() {
    // Hier wird die Geolokation des Benutzers abgefragt
    fetch('https://freegeoip.app/json/')
        .then(response => response.json())
        .then(data => {
            // Überprüfen des Landes
            const country = data.country_code;
            if (country === "US") {
                // Wenn der Benutzer in den USA ist, weiterleiten zur englischen Seite
                window.location.replace("index.html");
            } else if (country === "DE") {
                // Wenn der Benutzer in Deutschland ist, weiterleiten zur deutschen Seite
                window.location.replace("index.html");
            } else {
                // Standardweiterleitung, wenn das Land nicht identifiziert werden kann
                window.location.replace("index.html");
            }
        })
        .catch(error => console.error('Error fetching location:', error));
}

document.addEventListener('DOMContentLoaded', () => {
    const video = document.querySelector('.parallax-video');
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        const maxScroll = document.body.scrollHeight - window.innerHeight;
        const scrollFraction = scrollPosition / maxScroll;

        const videoDuration = video.duration;
        video.currentTime = videoDuration * scrollFraction;
    });
});
