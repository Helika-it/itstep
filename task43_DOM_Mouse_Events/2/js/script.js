//! 2. Перекрашиваем 2 блока

document.querySelector(".parentElement").onmouseover = function (event) {
  if (event.target.classList.contains("parentElement")) {
    event.target.classList.add("bg-blue")
  }
  if (event.target.classList.contains("childElement")) {
    event.target.classList.add("bg-black")
    event.relatedTarget.classList.add("bg-blue")
  }
}
document.querySelector(".parentElement").onmouseout = function (event) {
  if (event.target.classList.contains("parentElement")) {
    event.target.classList.remove("bg-blue")
  }
  if (event.target.classList.contains("childElement")) {
    event.target.classList.remove("bg-black")
  }
}