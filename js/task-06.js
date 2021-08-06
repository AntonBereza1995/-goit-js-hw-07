const input = document.querySelector("#validation-input")

const chekIsInputValid = (event) => {
    if (input.getAttribute("data-length") === String(event.currentTarget.value.length)) {
        input.classList.add("valid");
        input.classList.remove("invalid");
    } else {
        input.classList.add("invalid");
        input.classList.remove("valid");
    }
};

input.addEventListener("blur", chekIsInputValid);