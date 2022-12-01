const quarto1 = $(".qrt1conteudo")
const quarto2 = $(".qrt2conteudo")

const backgroundElement1 = $(".qrt1Title")
const backgroundElement2 = $(".qrt2Title")

const backgroundColor = { 'background': 'rgba(100, 150, 150, 0.4)' }
const removeBackgroundCSS = { 'background': 'none' }
const backgroundPadrao = { "background": "" }

const isVisibile = { 'visibility': 'visible' }

const esconderQuarto = (quarto) => $(quarto).hide(1000)
const mostrarQuarto = (quarto) => $(quarto).show(2000)

const removeBackground = (elemento) => $(elemento).css(removeBackgroundCSS)
const setBackground = (elemento) => $(elemento).css(backgroundColor)

$(".qrt1").click(() => {
    esconderQuarto(quarto2)
    mostrarQuarto(quarto1)
    backgroundElement2.css(backgroundPadrao)

    if (quarto1.css(isVisibile)) {
        removeBackground(backgroundElement1)
        setBackground(backgroundElement2)
    }
})

$(".qrt2").click(() => {
    esconderQuarto(quarto1)
    mostrarQuarto(quarto2).css("display", "flex")
    backgroundElement1.css(backgroundPadrao)

    if (quarto2.css(isVisibile)) {
        removeBackground(backgroundElement2)
        setBackground(backgroundElement1)
    }
})