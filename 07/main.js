let button = document.getElementById('myButton')
button.onclick = (event) => {
    if (button.innerText === "Кнопка") {
        event.target.innerText = "Кирпич"
    } else if (button.innerText === "Кирпич") {
        event.target.innerText = "Кнопка"
    }
}