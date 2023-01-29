let counterValue = 0;
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const result = document.querySelector("#value")

decrementBtn.addEventListener("click", onDecrementBtnClick);

function onDecrementBtnClick() {
    counterValue -= 1;
    result.textContent = counterValue;
    console.log(result.textContent);
}


incrementBtn.addEventListener("click", onIncrementBtnClick);

function onIncrementBtnClick() {
    counterValue += 1;
    result.textContent = counterValue;
    console.log(result.textContent);
}
