const css = document.querySelector('h3');
const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
const body = document.getElementById('gradient');
const randomButton = document.getElementById('randomButton');

function setGradient() {
  body.style.background =
    'linear-gradient(to right, ' + color1.value + ', ' + color2.value + ')';

  css.textContent = body.style.background + ';';
}

color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);
window.addEventListener('load', setGradient);
randomButton.addEventListener('click', setRandomColourGradient);

function generateRandomColour() {
  const result = Math.floor(Math.random() * 16777215).toString(16);
  return `#${result}`;
}

function setRandomColourGradient() {
  const randomColour1 = generateRandomColour();
  const randomColour2 = generateRandomColour();

  color1.value = randomColour1;
  color2.value = randomColour2;

  setGradient();
}
