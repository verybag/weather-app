import weather from '../src/modules/getweather';
import render from './modules/DOMRender';

const form = document.querySelector('form');
const userInput = document.querySelector('input');
const button = document.querySelector('.btn');

form.addEventListener('submit', (e) => {
  e.preventDefault();
});

button.addEventListener('click', async () => {
  if (userInput.value === '') return;
  const data = await weather.getData(userInput.value);
  render.results(data);
});
