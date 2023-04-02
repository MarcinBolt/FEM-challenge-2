fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const categoryDOM = document.querySelectorAll('.span-category');
    const scoreDOM = document.querySelectorAll('.span-score');
    for (let i = 0; i < categoryDOM.length; i++) {
      categoryDOM[i].textContent = data[i].category;
      scoreDOM[i].textContent = data[i].score;
    }
  });
