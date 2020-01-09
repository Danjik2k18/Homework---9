let btn = document.getElementsByTagName('button')[0]
btn.onclick = () => {
    let elements = document.querySelectorAll('ol > li:last-child')
    for (let elem of elements) {
        elem.remove()
    }
}