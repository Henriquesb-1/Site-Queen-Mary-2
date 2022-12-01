const slideContent = Array.from($(".slideContent"))

const botaoSlideAnterior = $(".previous-slide-icon")
const botaoProximoSlide = $(".next-slide-icon")

function slide() {
    let slideContador = 1
    let slide = 0

    botaoProximoSlide.click(() => {
        slideContador += 1
        slide = slide - 100
        slideContent.forEach(l => l.style.left = slide + "%")

        if (slideContador == slideContent.length) {
            $(botaoProximoSlide).prop("disabled", true)
        } else if (slideContador >= 1) {
            $(botaoSlideAnterior).prop("disabled", false)
        }
    })

    botaoSlideAnterior.click(() => {
        slideContador -= 1
        slide = slide + 100
        slideContent.forEach(l => l.style.left = slide + "%")

        if (slideContador < slideContent.length) {
            $(botaoProximoSlide).prop("disabled", false)
        }
        if (slideContador == 1) {
            $(botaoSlideAnterior).prop("disabled", true)
        }
    })

}

slide()