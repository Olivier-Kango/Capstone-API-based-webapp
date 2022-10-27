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
  instructionTitle.setAttribute('class', 'title-comments')

  const instruction = document.createElement('p');
  instruction.setAttribute('class', 'comments');
  instruction.textContent = item.strInstructions;

  const commentsTitle = document.createElement('h3');

  const comments = document.createElement('p');

  ul.append(idMeal, category, origin);
  section.append(name, ul, instructionTitle, instruction, commentsTitle, comments);
  modal.append(image, section);
};

export default commentsFromApi;