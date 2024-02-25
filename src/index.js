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
  nav.appendChild(homeBtn);

  const menuBtn = createButton('Menu');
  nav.appendChild(menuBtn);

  const contactBtn = createButton('Contact');
  nav.appendChild(contactBtn);

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