let containerAtracao = [document.querySelector(".planetario"), document.querySelector(".biblioteca"), document.querySelector(".musicLive"), document.querySelector(".kidsRoom")]
let nextButton = document.querySelector(".buttonFoward")
let backButtondiv = document.querySelector(".backButton")
backButtondiv.style.display = "none"
let slide = 0

nextButton.addEventListener('click', function() {
    backButtondiv.style.display = "block"
    slide = slide + 1
    containerAtracao[slide - 1].style.display = "none"
    containerAtracao[slide].style.display = "block"
    if(slide == 3) {
        nextButton.style.display = "none"
    }
})


document.addEventListener("DOMContentLoaded", function(){
    let BackButton = document.createElement("input")
    BackButton.type = "button"
    BackButton.setAttribute('class', 'backButton')

    BackButton.onclick = function() {
        containerAtracao[slide].style.display = "none"
        slide = slide - 1
        containerAtracao[slide].style.display = "block"
        if(slide <= 0) {
            backButtondiv.style.display = "none"
        }
        else if(slide < 3) {
            nextButton.style.display = "block"
        }
    }
    document.querySelector(".backButton").appendChild(BackButton)
})