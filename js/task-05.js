const input = document.querySelector("#name-input");

const span = document.querySelector("#name-output");
const yoursName = (event) => {
  span.textContent =
    event.currentTarget.value.trim() === "" ? "незнакомец" : event.currentTarget.value;
};

input.addEventListener("input", yoursName);


