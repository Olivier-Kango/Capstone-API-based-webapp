const popupComment = () => {
  const overlay = document.createElement('div');
  const body = document.querySelector('body');
  overlay.setAttribute('id', 'overlay');
  overlay.classList.add('active');
  body.appendChild(overlay);

  const modal = document.createElement('div');
  modal.setAttribute('id', 'modal');
  modal.classList.add('active');
  body.appendChild(modal);

  const closeButton = document.createElement('button');
  closeButton.setAttribute('class', 'close-button');
  closeButton.innerHTML = '&times;';
  modal.appendChild(closeButton);

  closeButton.addEventListener('click', () => {
    body.style.overflow = 'auto';
    overlay.classList.remove('active');
    modal.classList.remove('active');
    setTimeout(() => {
      modal.remove();
    }, 1000);
  });

  overlay.addEventListener('click', () => {
    body.style.overflow = 'auto';
    overlay.classList.remove('active');
    modal.classList.remove('active');
    setTimeout(() => {
      modal.remove();
    }, 1000);
  });
};

export default popupComment;