const loading = () => {
  const cover = document.createElement('div');
  const body = document.querySelector('body');
  const section = document.querySelector('.food-items');
  section.classList.add('none');
  cover.setAttribute('id', 'cover');
  body.appendChild(cover);
};

export const noloading = () => {
  const cover = document.querySelector('#cover');
  const section = document.querySelector('.food-items');
  section.classList.remove('none');
  cover.remove();
};

export default loading;