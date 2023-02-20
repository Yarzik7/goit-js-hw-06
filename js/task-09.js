function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnChangeEl = document.querySelector('.change-color');
const spanColorEl = document.querySelector('.color');

const changeColor = () => {
  const generatedColor = getRandomHexColor();

  document.body.style.backgroundColor = generatedColor;
  spanColorEl.textContent = generatedColor;
};

btnChangeEl.addEventListener('click', changeColor);
