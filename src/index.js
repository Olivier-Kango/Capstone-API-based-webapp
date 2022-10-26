import './style.css';

const url = 'https://www.themealdb.com/api/json/v1/1/search.php?f=b';

const section = document.querySelector('.food-items');

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
      like.innerHTML = '<i class="fa-regular fa-heart"></i>';
      like.className = 'likeButton';

      const box = document.createElement('div');
      box.classList = 'first_flex title_box';
      box.append(title, like);

      const commentButton = document.createElement('button');
      commentButton.innerText = 'Comment';
      commentButton.classList = 'commentButton';
      commentButton.id = item.idMeal;

      const reservationButton = document.createElement('button');
      reservationButton.innerText = 'Reservation';

      container.append(image, box, id, commentButton, reservationButton);
      section.append(container);
    });
  });
