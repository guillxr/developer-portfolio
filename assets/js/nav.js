window.addEventListener('scroll', () => {
    let nav = document.querySelector('#menu');
    let scrollLimit = window.innerWidth > 834 ? 100 : 40;
    nav.classList.toggle('scroll', window.scrollY > scrollLimit);
});

window.addEventListener('scroll', function() {
    var currentSection = '';
    var sections = document.querySelectorAll('section');
    sections.forEach(function(section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id');
        }
    });

    var navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(function(link) {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === currentSection) {
            link.classList.add('active');
        }
    });
});