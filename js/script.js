document.addEventListener("DOMContentLoaded", function() {
    const subgenres = {
        "tech-house": "Tech-House",
        "afro-house": "Afro House",
        "deep-tech": "Deep Tech",
        "drum-bass": "Drum & Bass",
        "dubstep": "Dubstep",
        "hard-techno": "Hard Techno",
        "indie-dance": "Indie Dance",
        "hardstyle": "Hardstyle",
        "melodic-house": "Melodic House",
        "melodic-techno": "Melodic Techno",
        "peaktime-techno": "Peaktime Techno",
        "hypnotic-techno": "Hypnotic Techno",
        "trance": "Trance"
    };

    const sortedSubgenres = Object.entries(subgenres).sort((a, b) => a[1].localeCompare(b[1]));
    const subgenreListElement = document.getElementById('subgenre-list');
    const currentPath = window.location.pathname.split('/').pop();

    sortedSubgenres.forEach(([key, name]) => {
        const linkItem = document.createElement('a');
        linkItem.href = `${key}.html`;
        linkItem.textContent = name; 
        if(currentPath === `${key}.html`) {
            linkItem.classList.add('active');
        }
        subgenreListElement.appendChild(linkItem);

        
    });

    const hamburgerMenu = document.getElementById('hamburger-menu');
    const body = document.body;

    hamburgerMenu.addEventListener('click', function() {
        const isMenuOpen = body.classList.toggle('menu-open');

        if (isMenuOpen) {
            body.style.overflowX = 'hidden';
        } else {
            body.style.overflowX = 'auto';
        }
    });

    function redirectToRandomSubgenre() {
        const genreKeys = Object.keys(subgenres);
        const randomKey = genreKeys[Math.floor(Math.random() * genreKeys.length)];
        const randomGenrePage = `${randomKey}.html`;

        window.location.href = randomGenrePage;
    }

    // Event-Listener für den Button
    const randomGenreButton = document.getElementById('random-genre-button');
    randomGenreButton.addEventListener('click', redirectToRandomSubgenre);
    

    const genreContainer = document.querySelector('.genre-container');
    
    function createDot(container) {
        const dot = document.createElement('div');
        dot.classList.add('dot');

        const minSize = 30;
        const maxSize = 80;
        const size = Math.random() * (maxSize - minSize) + minSize;

        dot.style.width = `${size}px`;
        dot.style.height = `${size}px`;
        dot.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        dot.style.left = `${Math.random() * (container.offsetWidth - size)}px`;
        dot.style.top = `${Math.random() * (container.offsetHeight - size)}px`;

        container.appendChild(dot);
        setTimeout(() => { dot.remove(); }, 3000);
    }

    const colors = ['#1ae68c', '#67a2ea', '#f036a4', '#fec864'];
    
    if (window.matchMedia("(min-width: 800px)").matches) {
        const genreContainer = document.querySelector('.genre-container');
        const startContainer = document.querySelector('.startcontainer');

        if (genreContainer) {
            setInterval(() => { createDot(genreContainer); }, 1000);
        }

        if (startContainer) {
            setInterval(() => { createDot(startContainer); }, 1000);
        }
    }

    // Create a new dot every 500ms
    setInterval(createDot, 1000);

});
