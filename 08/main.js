let myInput = document.getElementById('txt')

myInput.oninput = () => {
    if(!isNaN(myInput.value)) {
        return myInput.style.color = 'green'
      } else myInput.style.color = 'red'  
}