const p = document.querySelector(".p");
const body = document.querySelector("body");
////addEvvent
p.addEventListener('',setInterval(randomColor,2000));
//functionColor

function randomColor(){
    let random = Math.floor(16777216 * Math.random()).toString(16);
    body.style.backgroundColor='#' + random;
    p.style.innerHtml ="#"+random;
}