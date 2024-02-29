{/* <div class="menu-container">
  <div class="title-container">
    <span class="title">Menu</span>
    <span>What we have to offer</span>
  </div>
  <div class="item-container">
    <img src="../assets/images/Doppio.jpg" alt="Doppio">
    <div class="description">
      <div class="title">Doppio</div>
      <span>Our doppio packs a powerful punch with two expertly pulled espresso shots.</span>
    </div>
  </div>
  <div class="item-container">
    <div class="description">
      <div class="title">Americano</div>
      <span>The Americano starts with our rich espresso shots.</span>
    </div>
    <img src="../assets/images/Americano.jpg" alt="Americano">
  </div>
  <div class="item-container">
    <img src="../assets/images/Espresso.jpg" alt="Espresso">
    <div class="description">
      <div class="title">Espresso</div>
      <span>Rich & bold, our espresso ignites the senses. Enjoy it solo or customize your favorite latte.</span>
    </div>
  </div>
  <div class="item-container">
    <div class="description">
      <div class="title">Latte</div>
      <span>Creamy & smooth, our latte is a delightful blend of espresso and steamed milk, topped with a touch of foam.</span>
    </div>
    <img src="../assets/images/Latte.jpg" alt="Latte">
  </div>
  <div class="item-container">
    <img src="../assets/images/Cappuccino.jpg" alt="Cappuccino">
    <div class="description">
      <div class="title">Cappuccino</div>
      <span>Rich & velvety, our cappuccino combines espresso, steamed milk, and foamy milk for a perfect balance of flavors.</span>
    </div>
  </div>
  <div class="item-container">
    <div class="description">
      <div class="title">Mocha</div>
      <span>Indulge in chocolatey bliss. Rich espresso, smooth milk, and decadent chocolate combine for a delightful treat.</span>
    </div>
    <img src="../assets/images/Mocha.jpg" alt="Mocha">
  </div>
</div> */}

import {createTitle} from './shared.js';

const info = [
  [
    'Doppio',
    'Our doppio packs a powerful punch with two expertly pulled espresso shots.',
    '../assets/images/Doppio.jpg',
  ],
  [
    'Americano',
    'The Americano starts with our rich espresso shots.',
    '../assets/images/Americano.jpg',
  ],
  [
    'Espresso',
    'Rich & bold, our espresso ignites the senses. Enjoy it solo or customize your favorite latte.',
    '../assets/images/Espresso.jpg',
  ],
  [
    'Latte',
    'Creamy & smooth, our latte is a delightful blend of espresso and steamed milk, topped with a touch of foam.',
    '../assets/images/Latte.jpg',
  ],
  [
    'Cappuccino',
    'Rich & velvety, our cappuccino combines espresso, steamed milk, and foamy milk for a perfect balance of flavors.',
    '../assets/images/Cappuccino.jpg',
  ],
  [
    'Mocha',
    'Indulge in chocolatey bliss. Rich espresso, smooth milk, and decadent chocolate combine for a delightful treat.',
    '../assets/images/Mocha.jpg',
  ],
]

function createDescription(name, description) {
  const descriptionContainer = document.createElement('div');
  descriptionContainer.classList.add('description');

  const title = document.createElement('span');
  title.classList.add('title');
  title.textContent = name;

  const descrip = document.createElement('span');
  descrip.textContent = description;

  descriptionContainer.appendChild(title);
  descriptionContainer.appendChild(descrip);

  return descriptionContainer;
}

function createItemContainer(itemInfo, invert) {
  const itemContainer = document.createElement('div');
  itemContainer.classList.add('item-container');

  const description = createDescription(itemInfo[0], itemInfo[1]);

  const image = document.createElement('img');
  image.src = itemInfo[2];
  image.alt = itemInfo[0];

  if (!invert) {
    itemContainer.appendChild(image);
    itemContainer.appendChild(description);
  } else {
    itemContainer.appendChild(description);
    itemContainer.appendChild(image);
  }

  return itemContainer
}

function loadMenu() {
  const main = document.querySelector('main');

  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menu-container');

  menuContainer.appendChild(createTitle('Menu', 'What we have to offer'));

  for (let i = 0; i < info.length; i++) {
    menuContainer.appendChild(createItemContainer(info[i], i % 2 == 1));
  }

  main.appendChild(menuContainer);
}

export default loadMenu;