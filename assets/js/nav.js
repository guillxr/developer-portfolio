window.addEventListener('scroll', () => {
    let nav = document.querySelector('#menu')
    nav.classList.toggle('scroll', window.scrollY > 100)
})