function myMove() {
    let elemOne = document.getElementById("myunique");
    let posForBackground = 0;
    let id = setInterval(frame, 5)

    function frame() {
        if (posForBackground == 300) {
            clearInterval(id);
        } else {
            posForBackground++
            elemOne.style.height = posForBackground + 'px'
            elemOne.style.width = posForBackground + 'px'
        }
    }

    let elemTwo = document.getElementById("myuniqueTwo")
    let posForText = 0;
    let idTwo = setInterval(frameTwo, 5)

    function frameTwo() {
        if (posForText == 50) {
            clearInterval(idTwo)
        } else {
            posForText++
            elemTwo.style.fontSize = posForText + 'px'
            elemTwo.style.top = '120px'
            elemTwo.style.left = '75px'

        }
    }
}