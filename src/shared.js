/**
 * 
 * @param {string} t Title
 * @param {string} st Subtitle
 * @returns {HTMLDivElement} The titleContainer div
 */

function createTitle(t, st) {
  const titleContainer = document.createElement('div');
  titleContainer.classList.add('title-container');

  const title = document.createElement('span');
  title.classList.add('title');
  title.textContent = t;

  const subtitle = document.createElement('span');
  subtitle.classList.add('subtitle');
  subtitle.textContent = st;

  titleContainer.appendChild(title);
  titleContainer.appendChild(subtitle);

  return titleContainer;
}

export { createTitle };