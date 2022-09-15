// time
setInterval(() => {
    let date = new Date()
    let clock = document.getElementById("clock")
    clock.innerHTML =
        date.getHours() + ":" +
        date.getMinutes() + ":" +
        date.getSeconds()  
    let day = document.getElementById("day")
    day.innerHTML =
        date.getUTCDate() + "/" +
        date.getMonth() + "/" +
        date.getFullYear()

}
)
// change html
function text_over() {
    document.getElementById("footer_web").style.color = "red"
    document.getElementById("footer_web").innerText = "Feel free to copyright :)"

}
function text_out() {
    document.getElementById("footer_web").style.color = "black"

}
function reset_text() {
    document.getElementById("footer_web").innerText = "This web had been created by LongDoan"
}




