import loadHome from './home.js';
import loadMenu from './menu.js';

let currentPage;
let debounce = false;

/**
 * Set the button to active
 * @param {HTMLButtonElement} button 
 */
function setActiveButton(button) {
  const buttons = document.querySelectorAll('.btn-nav');

  buttons.forEach((btn) => {
    if (btn !== button) {
      btn.classList.remove('active');
    }
  });

  button.classList.add('active');
}

function createButton(text) {
  const btn = document.createElement('button')
  btn.classList.add('btn-nav');
  btn.textContent = text;

  return btn;
}

function clearMain() {
  const main = document.querySelector('main');

  main.innerHTML = '';
  setTimeout(() => {
    debounce = false;
  }, 1000)
}

function createHeader() {
  const header = document.createElement('header');
  
  const nav = document.createElement('nav');
  header.appendChild(nav);
  
  const homeBtn = createButton('Home');
  homeBtn.classList.add('active');
  homeBtn.addEventListener('click', () => {
    if (homeBtn.classList.contains('active') || debounce) {
      return;
    }

    debounce = true
    currentPage.style = 'opacity: 0';
    setTimeout(() => {
      clearMain();
      setActiveButton(homeBtn);
      currentPage = loadHome();
    }, 1000);
  });
  
  const menuBtn = createButton('Menu');
  menuBtn.addEventListener('click', () => {
    if (menuBtn.classList.contains('active')) {
      return;
    }
    
    currentPage.style = 'opacity: 0';
    setTimeout(() => {
      clearMain();
      setActiveButton(menuBtn);
      currentPage = loadMenu();
    }, 1000);
  });
  
  const contactBtn = createButton('Contact');
  contactBtn.addEventListener('click', () => {
    if (contactBtn.classList.contains('active')) {
      return;
    }

    setActiveButton(contactBtn);
  });
  
  nav.appendChild(homeBtn);
  nav.appendChild(menuBtn);
  nav.appendChild(contactBtn);

  return header;
}

function createMain() {
  const main = document.createElement('main');
  return main;
}

function createFooter() {
  const footer = document.createElement('footer');
  const credit = document.createElement('span');
  credit.textContent = 'Another day, another project';
  credit.classList.add('credit');

  const abbreviation = document.createElement('a');
  abbreviation.href = 'https://github.com/peetzaecksdee';
  abbreviation.target = '_blank';
  abbreviation.classList.add('credit-a');

  const img = document.createElement('img');
  img.src = '../assets/images/pizza.jpg';
  img.alt = 'My github';
  img.classList.add('credit-img');

  abbreviation.appendChild(img);
  footer.appendChild(credit);
  footer.appendChild(abbreviation);

  return footer
}

function init() {
  const content = document.getElementById('content');

  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter());
  currentPage = loadHome();
}

init();