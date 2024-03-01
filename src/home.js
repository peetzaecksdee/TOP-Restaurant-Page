{/* 
<div class="home-container">
  <div class="title-container">
    <span class="title">Peetza's Café</span>
    <span class="subtitle">Truly yours Café</span>
  </div>
  <img src="../assets/images/como-hacer-cafe.png" alt="Coffee" class="img">
  <span class="text">Ensured the best quality</span>
</div> */}

import {createTitle} from './shared.js';
import cafeImage from '../assets/images/como-hacer-cafe.png';

function loadHome() {
  const main = document.querySelector('main');

  const homeContainer = document.createElement('div');
  homeContainer.classList.add('home-container');

  const titleContainer = createTitle('Peetza\'s Café', 'Truly Yours Café');

  const image = new Image();
  image.src = cafeImage;
  image.alt = 'Coffee';
  image.classList.add('img');

  const text = document.createElement('span');
  text.classList.add('text');
  text.textContent = 'Ensured the best quality';

  main.appendChild(homeContainer);

  homeContainer.appendChild(titleContainer);
  homeContainer.appendChild(image);
  homeContainer.appendChild(text);

  return homeContainer
}

export default loadHome;