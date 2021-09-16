const arrow1 = document.getElementsByClassName("fa-arrow-left")[0];
const arrow2 = document.getElementsByClassName("fa-arrow-right")[0];
const image = document.getElementsByTagName("img")[0];
const h3 = document.getElementsByTagName("h3")[0];
const h4 = document.getElementsByTagName("h4")[0];
const p = document.getElementsByTagName("p")[0];


const images = ["brad.jpg", "John.jpg", "Monica.jpg"];
const job = ["Software Engineer", " Web Developer", "UI Designer"];
const name = ["Brad", "John", "Monica"]
const para = ["I'm a software Engineer", " I'm am a Web Developer", "I'm a UI Designer"]
let i = 0;
arrow1.addEventListener("click", function () {
    i--
    changeContent()

})

arrow2.addEventListener("click", function () {
    i++
    changeContent()
})
function changeContent() {
    console.log(i)
    if (i >= 3) {
        i = 0;
    }
    else if (i === -1) {
        i = 2;
    }
    image.src = images[i]
    h4.innerText = job[i];
    h3.innerText = name[i];
    p.innerText = para[i];
}