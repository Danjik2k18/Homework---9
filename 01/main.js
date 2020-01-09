var elems = document.getElementsByTagName('a');
for (var i = 0; i < elems.length; i++) {
    elems[i].addEventListener('mouseover', func);
}

function func() {
    this.setAttribute('title', this.innerHTML);
}