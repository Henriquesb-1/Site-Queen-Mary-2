$(".qrt2").click(() => {
    $(".qrt1conteudo").hide(1000)
    $(".qrt2conteudo").show(2000)
    if ($(".qrt2conteudo").css({ 'visibility': 'visible' })) {
        $('.qrt2Title').css({ 'background': 'none' })
        $('.qrt1Title').css({ 'background': 'rgba(100, 150, 150, 0.4' })
    }
})
$(".qrt1").click(() => {
    $(".qrt2conteudo").hide(1000)
    $(".qrt1conteudo").show(2000)
    $(".qrt2Title").css({ 'background': '' })
    if ($('.qrt1conteudo').css({ 'visibility': 'visible' })) {
        $(".qrt1Title").css({ 'background': 'none' })
        $(".qrt2Title").css({ 'background': '' })
    }
})