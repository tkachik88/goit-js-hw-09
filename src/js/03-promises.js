import Notiflix from 'notiflix';

const form = document.querySelector('form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const {
    elements: { delay, step, amount },
  } = event.target;

  let delayNumber = Number(delay.value);
  const stepNumber = Number(step.value);
  const amountNumber = Number(amount.value);

  for (let i = 1; i <= amountNumber; i += 1) {
    createPromise(i, delayNumber)
      .then(result => Notiflix.Notify.success(result))
      .catch(error => Notiflix.Notify.failure(error));

    delayNumber += stepNumber;
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
}
