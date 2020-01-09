let text = document.querySelector('input');
let submit = document.getElementById('submit');
submit.style.width = '200px'
submit.style.height = '50px'
submit.addEventListener('click', () => {
    window.scrollTo({
        top: 2000,
        behavior: 'smooth'
    })
})