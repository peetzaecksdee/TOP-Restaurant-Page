function createTitle(t, st) {
  const titleContainer = document.createElement('div');
  titleContainer.classList.add('title-container');

  const title = document.createElement('span');
  title.classList.add('title');
  title.textContent = t;

  const subtitle = document.createElement('span');
  subtitle.classList.add('subtitle');
  subtitle.textContent = st;

  return titleContainer;
}

export { createTitle };