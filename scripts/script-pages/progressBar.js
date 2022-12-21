const progressBar = document.querySelector("[progressBar]")
const progressInformation = document.querySelector("[progressInformation]")

window.onscroll = () => {
    const bodyHeight = document.body.clientHeight
    const innerHeight = window.innerHeight
    const total = bodyHeight - innerHeight
    let current = window.pageYOffset
    let porcentRead = Math.floor(current / total * 100)
    progressBar.style.width = porcentRead + "%"
    progressInformation.innerHTML = porcentRead + "%"
}