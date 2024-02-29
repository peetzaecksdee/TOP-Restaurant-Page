import {createTitle} from './shared.js';

function loadHome() {
  const main = document.querySelector('main');

  const homeContainer = document.createElement('div');
  homeContainer.classList.add('home-container');

  const titleContainer = createTitle('Peetza\'s Café', 'Truly Yours Café');

  const image = document.createElement('img');
  image.src = '../assets/images/como-hacer-cafe.png';
  image.alt = 'Coffee';
  image.classList.add('img');

  const text = document.createElement('span');
  text.classList.add('text');
  text.textContent = 'Ensured the best quality';

  main.appendChild(homeContainer);

  homeContainer.appendChild(titleContainer);
  homeContainer.appendChild(image);
  homeContainer.appendChild(text);
}

export default loadHome;