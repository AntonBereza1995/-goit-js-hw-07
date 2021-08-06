const input = document.getElementById("font-size-control")
const span = document.getElementById("text")

const slider = (event) => {
span.setAttribute("style", `font-size:${event.currentTarget.value}px`)
}

input.addEventListener("input", slider)