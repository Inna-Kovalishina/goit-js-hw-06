function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const bodyEl = document.querySelector('body');
const btnChangeColor = document.querySelector('.change-color');
const backgroundColorName = document.querySelector('.color');

btnChangeColor.addEventListener('click', onBtnChangeColor);

function onBtnChangeColor(event) {
  bodyEl.style.backgroundColor = getRandomHexColor();
  backgroundColorName.textContent = bodyEl.style.backgroundColor;
}