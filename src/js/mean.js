const refs = {
  list: document.querySelector('.container'),
  // items: document.querySelectorAll('.block__item'),
  card: document.querySelectorAll('.card'),
  listBtn: document.querySelectorAll('.btn'),
};

function filter() {
  refs.list.addEventListener('click', e => {
    e.preventDefault();
    const targetId = e.target.dataset.id;
    const target = e.target;

    if (target.classList.contains('btn')) {
      refs.listBtn.forEach(listItem => {
        listItem.classList.remove('active');
      });
      target.classList.add('active');
    }

    switch (targetId) {
      case 'all':
        getItems('card');
        break;
      case 'blue':
        getItems(targetId);
        break;
      case 'yellow':
        getItems(targetId);
        break;
      case 'green':
        getItems(targetId);
        break;
      case 'purple':
        getItems(targetId);
        break;
    }
  });
}
filter();

function getItems(className) {
  refs.card.forEach(item => {
    if (item.classList.contains(className)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
