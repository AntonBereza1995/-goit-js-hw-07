const buttonDecrement = document.querySelector('button[data-action="decrement"]');
const buttonIncrement = document.querySelector('button[data-action="increment"]');
const counterSpan = document.querySelector("#value");
const increment = () => {
  counterValue += 1;
  counterSpan.textContent = counterValue;
};
const decrement = () => {
  counterValue -= 1;
  counterSpan.textContent = counterValue;
};


let counterValue = 0;

buttonIncrement.addEventListener("click", increment);
buttonDecrement.addEventListener("click", decrement);


