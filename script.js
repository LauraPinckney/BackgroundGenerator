var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');

function setGradient() {
  console.log(color1.value, color2.value);
  body.style.background =
    'linear-gradient(to right, ' + color1.value + ', ' + color2.value + ')';

  css.textContent = body.style.background + ';';
}

color1.addEventListener('input', setGradient);

color2.addEventListener('input', setGradient);

window.addEventListener('load', setGradient);

function generateRandomColour() {
  const result = Math.floor(Math.random() * 16777215).toString(16);
  return `#${result}`;
}
