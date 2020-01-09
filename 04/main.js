let link = document.getElementsByTagName('p');
for (var i = 0; i < link.length; i++) {
    link[i].addEventListener('click', function () {
        this.innerHTML = this.innerHTML + ' ( ' + this.innerHTML * this.innerHTML + ' ) ' + 'код Emmet(p{$}*20)'
    })
}