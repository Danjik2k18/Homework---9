// let parent = document.querySelector('ol');
// let elemList = parent.children;
// for (let i = 0; i < elemList.length; i++) {
//     elemList[i].addEventListener('click', () => {
//         elemList.parentElement.removeChild(elemList);
//     });
// }

let li = document.getElementsByTagName("li");

for (var i = 0; i < li.length; i++) {
    li[i].addEventListener("click", func);
}

function func() {
    this.parentNode.removeChild(this);
}