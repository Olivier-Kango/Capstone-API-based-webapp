import './style.css';
import popupComment from './modules/popup-comments.js';
import commentsFromApi from './modules/api-comments.js';
import counter from './modules/counter.js';
import './favicon.ico';
import select, { selectAlphabet } from './modules/select-alphabet.js';

let local = 0;
const storage = localStorage.getItem('selected');

if (storage === null) {
  local += 4;
} else {
  local = storage;
}

const selected = select.options[local].text;
const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${selected}`;
const url2 = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/wIvcfoeCMowsKdAOdXJy/likes/';
const section = document.querySelector('.food-items');

const displayLikes = (arr) => {
  const ids = document.querySelectorAll('.dont_display');
  arr.forEach((element) => {
    ids.forEach((id) => {
      if ((element.item_id) === Number((id.innerText))) {
        const likeContent = document.createElement('div');
        likeContent.innerText = `${element.likes} likes`;
        likeContent.className = 'likes';
        const y = id.parentElement;
        y.insertBefore(likeContent, id);
      }
    });
  });
};

const getData = () => {
  fetch(url2)
    .then((response) => response.json())
    .then((data) => displayLikes(data));
};

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    data = data.meals;
    data.forEach((item) => {
      const container = document.createElement('div');
      container.classList = 'main-container';

      const id = document.createElement('p');
      id.innerText = item.idMeal;
      id.classList = 'dont_display';

      const image = document.createElement('img');
      image.classList = 'photo';
      image.src = item.strMealThumb;

      const title = document.createElement('div');
      title.innerText = item.strMeal;
      title.classList = 'title';

      const like = document.createElement('div');
      like.className = 'likeButton';

      const box = document.createElement('div');
      box.classList = 'first_flex title_box';
      box.append(title, like);

      const commentButton = document.createElement('button');
      commentButton.innerText = 'Comment';
      commentButton.classList = 'commentButton';
      commentButton.id = item.idMeal;

      container.append(image, box, id, commentButton);
      section.append(container);

      commentButton.addEventListener('click', () => {
        document.querySelector('body').style.overflow = 'hidden';
        popupComment();
        commentsFromApi(item.idMeal);
      });
    });

    const likeButton = Array.from(document.querySelectorAll('.likeButton'));
    likeButton.forEach((item) => {
      item.addEventListener('click', () => {
        let likeNumber = parseInt(item.parentElement.nextElementSibling.innerText, 10);
        const index = Number(item.parentElement.nextElementSibling.nextElementSibling.innerText);
        const object = {
          item_id: index,
          likes: likeNumber,
        };
        fetch(url2, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(object),
        });
        likeNumber += 1;
        item.parentElement.nextElementSibling.innerText = `${likeNumber} likes`;
      }, { once: true });
    });
    const containerz = Array.from(document.querySelectorAll('.main-container'));
    const meals = document.querySelector('.meals');
    meals.innerText = `${counter(containerz)} Meals`;
  })
  .then(getData());

select.addEventListener('change', selectAlphabet);
if (localStorage.getItem('selected')) {
  document.getElementById(localStorage.getItem('selected')).selected = true;
}