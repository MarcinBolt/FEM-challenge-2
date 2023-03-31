// const iconsDOM = document.querySelector('icon');
// const memoryIconDOM = document.querySelector('img#memory-icon');
// const verbalIconDOM = document.querySelector('img#verbal-icon');
// const visualIconDOM = document.querySelector('img#visual-icon');

// reactionIconDOM.setAttribute('src', 'data[0].');

fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const iconsDOM = document.querySelectorAll('.icon');
    const categoryDOM = document.querySelectorAll('.span-category');
    const scoreDOM = document.querySelectorAll('.span-score');
    for (let i = 0; i < iconsDOM.length; i++) {
      iconsDOM[i].src = data[i].icon;
      categoryDOM[i].textContent = data[i].category;
      scoreDOM[i].textContent = data[i].score;
    }
  });
