const addForm = document.querySelector('.add');
const ul = document.querySelector('.todos');
const searchForm = document.querySelector('.search');
const search = document.querySelector('.search input');

const generateTemplate = todo => {
  const html = `<li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>`;

  ul.innerHTML += html;
};

addForm.addEventListener('submit', e => {
  e.preventDefault();

  const todo = addForm.add.value.trim();

  if (todo.length) {
    generateTemplate(todo);
    addForm.reset();
  }
});

// delete todo
ul.addEventListener('click', e => {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
  }
});

const filterTodos = term => {
  Array.from(ul.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.add('filtered'));

  Array.from(ul.children)
    .filter(todo => todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.remove('filtered'));
};

search.addEventListener('keyup', () => {
  const term = search.value.trim().toLowerCase();
  filterTodos(term);
});

searchForm.addEventListener('submit', e => {
  e.preventDefault();
});
