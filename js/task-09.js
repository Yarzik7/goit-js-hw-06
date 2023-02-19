function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const btnChange = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');

const changeColor = () => {
  const generatedColor = getRandomHexColor();

  body.style.backgroundColor = generatedColor;
  spanColor.innerText = generatedColor;
};

btnChange.addEventListener('click', changeColor);
