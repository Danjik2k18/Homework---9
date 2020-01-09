let link = document.getElementsByTagName('a');
for(var i=0; i<link.length; i++){
    link[i].addEventListener('click', func1)
    link[i].addEventListener('click', function (func1) { if (func1.detail === 3) { 
        this.remove(func1)  } });
}


function func1() { 
    this.innerHTML = this.innerHTML + ' (' + this.href + ') ';
}
