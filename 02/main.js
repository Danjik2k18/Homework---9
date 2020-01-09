var link = document.getElementsByTagName('a');
for(var i=0; i<link.length; i++){
    link[i].onclick = func;
}
function func()
{
   this.innerHTML = this.innerHTML + ' (' + this.href + ') ';
   return false;
}
