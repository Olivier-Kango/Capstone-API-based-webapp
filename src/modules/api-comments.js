import addComments, { getComments, addCommentsLocally } from './add-comments.js';

const commentsFromApi = async (idElement) => {
  const requestString = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idElement}`;

  const datas = await fetch(requestString);
  const response = await datas.json();
  const data = response.meals;
  const item = data[0];

  const image = document.createElement('img');
  image.classList = 'photoApi';
  image.src = item.strMealThumb;

  const modal = document.querySelector('#modal');

  const section = document.createElement('section');
  section.setAttribute('class', 'details-section');

  const name = document.createElement('h2');
  name.setAttribute('class', 'nameMeal');
  name.innerHTML = `<strong>${item.strMeal}</strong>`;

  const ul = document.createElement('ul');
  ul.setAttribute('class', 'identification-ul');

  const idMeal = document.createElement('li');
  idMeal.innerHTML = `<strong>IdMeal: </strong>${item.idMeal}`;

  const category = document.createElement('li');
  category.innerHTML = `<strong>Category: </strong>${item.strCategory}`;

  const origin = document.createElement('li');
  origin.innerHTML = `<strong>Area: </strong>${item.strArea}`;

  const instructionTitle = document.createElement('h3');
  instructionTitle.innerText = 'Instructions';
  instructionTitle.setAttribute('class', 'title-comments');

  const instruction = document.createElement('p');
  instruction.setAttribute('class', 'comments');
  instruction.textContent = item.strInstructions;

  const commentsTitle = document.createElement('h3');
  commentsTitle.setAttribute('class', 'title-comments');
  commentsTitle.innerText = 'Add Comments';

  const form = document.createElement('form');
  form.setAttribute('id', 'form');

  const userName = document.createElement('input');
  userName.setAttribute('class', 'username-input');
  userName.setAttribute('placeholder', 'Your Name');

  const comments = document.createElement('textarea');
  comments.setAttribute('class', 'comments-input');
  comments.setAttribute('placeholder', 'Enter your comment here...');

  const buttonAddComments = document.createElement('button');
  buttonAddComments.innerText = 'Add your comment';
  buttonAddComments.setAttribute('class', 'btn-add-comments');
  buttonAddComments.setAttribute('type', 'button');

  const commentairesTitre = document.createElement('h3');
  commentairesTitre.innerText = 'Comments()';
  commentairesTitre.setAttribute('class', 'title-comments commentaires');

  const commentaires = document.createElement('ul');
  commentaires.setAttribute('class', 'comments commentaires');

  ul.append(idMeal, category, origin);
  section.append(name, ul, instructionTitle, instruction, commentairesTitre,
    commentaires, commentsTitle, form);
  form.append(userName, comments, buttonAddComments);
  modal.append(image, section);

  buttonAddComments.addEventListener('click', () => {
    addComments(idElement);
    addCommentsLocally(idElement, commentaires);
    if (userName.value.length !== 0 && comments.value.length !== 0) {
      form.reset();
    }
  });
  getComments(idElement, commentaires);
};

export default commentsFromApi;