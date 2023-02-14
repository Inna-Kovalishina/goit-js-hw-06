function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const btnCreateEl = document.querySelector('button[data-create]');
const btnDestroyEl = document.querySelector('button[data-destroy]');
const boxesContainerEl = document.querySelector('#boxes');

btnCreateEl.addEventListener('click', getAmountElements);
btnDestroyEl.addEventListener('click', destroyBoxes);

function getAmountElements() {
  const amount = document.querySelector('#controls > input').value;
  createBoxes(amount);
}

function createBoxes(amount) {
  const firstBoxSize = 30;
  const divWraper = document.createElement("div");
  for (let i = 0; i < amount; i += 1) {
    const divEl = document.createElement("div");
    const boxSize = firstBoxSize + i * 10;
    divEl.style.width = boxSize + 'px';
    divEl.style.height = boxSize + 'px';
    divEl.style.backgroundColor = getRandomHexColor();
    divEl.style.marginTop = 5 + 'px';
    divEl.style.marginBottom = 5 + 'px';
    // console.log(divEl.style.backgroundColor);
    divWraper.append(divEl);
  }
  boxesContainerEl.append(divWraper);
}

function destroyBoxes() {
  boxesContainerEl.innerHTML = "";
  clearInput();
}

function clearInput() {
  document.querySelector('#controls > input').value = '';
}