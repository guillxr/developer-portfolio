window.addEventListener('scroll', () => {
    let nav = document.querySelector('#menu');
    let scrollLimit = window.innerWidth > 834 ? 100 : 40;
    nav.classList.toggle('scroll', window.scrollY > scrollLimit);
});