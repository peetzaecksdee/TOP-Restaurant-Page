/* <div class="container">
  <span class="title">Peetza's Café</span>
  <span class="subtitle">Truly yours Café</span>
  <img src="../assets/images/como-hacer-cafe.png" alt="Coffee" class="img">
  <span class="subtitle">Ensured the best quality</span>
</div> */

function loadHome() {
  const main = document.querySelector('main');

  const homeContainer = document.createElement('div');
  homeContainer.classList.add('home-container');

  const title = document.createElement('span');
  title.classList.add('title');
  title.textContent = 'Peetza\'s Café';

  const subtitle1 = document.createElement('span');
  subtitle1.classList.add('subtitle');
  subtitle1.textContent = 'Truly Yours Café';

  const image = document.createElement('img');
  image.src = '../assets/images/como-hacer-cafe.png';
  image.alt = 'Coffee';
  image.classList.add('img');

  const subtitle2 = document.createElement('span');
  subtitle2.classList.add('subtitle');
  subtitle2.textContent = 'Ensured the best quality';

  main.appendChild(homeContainer);
  homeContainer.appendChild(title);
  homeContainer.appendChild(subtitle1);
  homeContainer.appendChild(image);
  homeContainer.appendChild(subtitle1);
}

export default loadHome;