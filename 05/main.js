let link = document.getElementsByTagName('a');
for(var i=0; i<link.length; i++){
    link[i].addEventListener('click', function func()
    {
       this.innerHTML = this.innerHTML + ' (' + this.href + ') ';
    }) ;
}
