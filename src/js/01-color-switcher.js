function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const startBtnElem = document.querySelector('[data-start]');
const stopBtnElem = document.querySelector('[data-stop]');

let intervalId = null;

startBtnElem.addEventListener('click', onStartBtnItem);
function onStartBtnItem(event) {
  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  startBtnElem.disabled = true;
  stopBtnElem.disabled = false;
}

stopBtnElem.addEventListener('click', onStopBtnElem);
function onStopBtnElem(event) {
  clearInterval(intervalId);
  startBtnElem.disabled = false;
  stopBtnElem.disabled = true;
}
