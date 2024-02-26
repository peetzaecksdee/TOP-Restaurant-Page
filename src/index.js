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

function createHeader() {
  const header = document.createElement('header');
  
  const nav = document.createElement('nav');
  header.appendChild(nav);

  const homeBtn = createButton('Home');
  homeBtn.classList.add('active');
  homeBtn.addEventListener('click', () => {
    if (homeBtn.classList.contains('active')) {
      return;
    }

    setActiveButton(homeBtn);
  });
  
  const menuBtn = createButton('Menu');
  menuBtn.addEventListener('click', () => {
    if (menuBtn.classList.contains('active')) {
      return;
    }

    setActiveButton(menuBtn);
  });
  
  const contactBtn = createButton('Contact');
  contactBtn.addEventListener('click', () => {
    if (contactBtn.classList.contains('active')) {
      return;
    }

    setActiveButton(contactBtn);
  });
  
  nav.appendChild(menuBtn);
  nav.appendChild(contactBtn);
  nav.appendChild(homeBtn);

  return header;
}

function createMain() {
  const main = document.createElement('main');
  return main;
}

function createFooter() {
  const footer = document.createElement('footer');
  return footer
}

function init() {
  const content = document.getElementById('content');

  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter());
}

init();