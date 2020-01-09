let text = document.querySelector('input');
let submit = document.querySelector('button');
submit.addEventListener('click', () => {
    let clone = text.cloneNode(true);
    text.parentElement.appendChild(clone);
})