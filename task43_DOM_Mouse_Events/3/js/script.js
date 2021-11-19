//! 3. Перекрашиваем 2 блока

document.querySelector(".parentElement").onmouseenter = function (event) {
  event.target.classList.add("bg-blue")
}

document.querySelector(".childElement").onmouseenter = function (event) {
  event.target.classList.add("bg-black")
  event.relatedTarget.classList.remove("bg-blue")
}

document.querySelector(".parentElement").onmouseleave = function (event) {
  event.target.classList.remove("bg-blue")
}

document.querySelector(".childElement").onmouseleave = function (event) {
  event.target.classList.remove("bg-black")
  event.target.parentElement.classList.add("bg-blue")
}