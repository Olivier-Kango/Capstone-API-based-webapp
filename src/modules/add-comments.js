/* eslint-disable consistent-return */
import counterComments from './counter-comments.js';

const addComments = async (id) => {
  const yourName = document.querySelector('.username-input');
  const yourComment = document.querySelector('.comments-input');
  const baseUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/y93FsknLoX2EUx8H81Od/comments?item_id=${id}`;
  if (yourName.value.length !== 0 && yourComment.value.length !== 0) {
    const response = await fetch(baseUrl, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ item_id: id, username: yourName.value, comment: yourComment.value }),
    });
    const res = await response.json();
    return res;
  }
};

export default addComments;

export const getComments = async (id, ulComments) => {
  const requestString = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/y93FsknLoX2EUx8H81Od/comments?item_id=${id}`;

  const data = await fetch(requestString);

  const response = await data.json();
  response.forEach((element) => {
    const contentList = `${element.creation_date} <strong>${element.username} </strong> <i>${element.comment}</i>`;
    const list = document.createElement('li');
    list.setAttribute('class', 'li-for-counter');
    list.innerHTML = contentList;
    ulComments.appendChild(list);
    const arr = ulComments.querySelectorAll('.li-for-counter');
    const count = arr.length;
    counterComments(count);
    document.querySelector('.unique').innerHTML = `Comments (${count})`;
  });
};

// Send data localy
export const addCommentsLocally = (id, ulComments) => {
  const yourName = document.querySelector('.username-input');
  const yourComment = document.querySelector('.comments-input');
  const today = new Date().toISOString().slice(0, 10);

  if (yourName.value.length !== 0 && yourComment.value.length !== 0) {
    const list = document.createElement('li');
    list.setAttribute('class', 'li-for-counter');
    list.innerHTML = `${today} <strong>${yourName.value} </strong> <i>${yourComment.value}</i>`;
    ulComments.appendChild(list);
    const arr = ulComments.querySelectorAll('.li-for-counter');
    const count = arr.length;
    document.querySelector('.unique').innerHTML = `Comments (${count})`;
  }
};