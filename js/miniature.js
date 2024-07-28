import {pictureContainer, pictureElement} from './dom-elements.js';

const createMiniatureClickHandler = (miniature) => (evt) => {
  evt.preventDefault();
  document.dispatchEvent(new CustomEvent('miniatureSelect', {detail: miniature}));
};

const createMiniature = (miniature) => {
  const { url, comments, description, likes } = miniature;
  const miniatureElement = pictureElement.cloneNode(true);

  miniatureElement.querySelector('.picture__img').src = url;
  miniatureElement.querySelector('.picture__img').alt = description;
  miniatureElement.querySelector('.picture__likes').textContent = likes;
  miniatureElement.querySelector('.picture__comments').textContent = comments.length;

  miniatureElement.addEventListener('click', createMiniatureClickHandler(miniature));

  return miniatureElement;
};

const renderMiniatures = (miniatures) => {
  pictureContainer.append(...miniatures.map((miniature) => createMiniature(miniature)));
};

export { renderMiniatures };
