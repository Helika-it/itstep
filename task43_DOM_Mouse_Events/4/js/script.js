//! 4. Перекрашиваем 2 блока

document.querySelector(".parentElement").onmouseenter = function (event) {
  event.target.classList.add("bg-blue")
}
document.querySelector(".childElement").onmouseenter = function (event) {
  event.target.classList.add("bg-black")
}
document.querySelector(".parentElement").onmouseleave = function (event) {
  event.target.classList.remove("bg-blue")
}
document.querySelector(".childElement").onmouseleave = function (event) {
  event.target.classList.remove("bg-black")
}