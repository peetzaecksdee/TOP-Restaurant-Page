import {createTitle} from './shared.js';

function loadContact() {
  const main = document.querySelector('main');

  const titleContainer = createTitle('Contact', 'Where to contact us?');

  const contactContainer = document.createElement('div');
  contactContainer.classList.add('contact-container');

  const phone = document.createElement('span');
  phone.classList.add('text');
  phone.textContent = "📞 099-999-9999";

  const email = document.createElement('span');
  email.classList.add('text');
  email.textContent = "📪 peetzaecksdee@skiff.com";

  contactContainer.appendChild(titleContainer);
  contactContainer.appendChild(phone);
  contactContainer.appendChild(email);
  main.appendChild(contactContainer);

  return contactContainer;
}

export default loadContact;