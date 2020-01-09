let elems = document.getElementsByTagName('div');
for (let i = 0; i < elems.length; i++) {
    elems[i].addEventListener('click', () => {
        elems[i].innerHTML = elems[i].innerHTML + ' ' + elems[i].tagName.toLowerCase()
    })
}