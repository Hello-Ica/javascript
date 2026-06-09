const ToDoList = ['make dinner', 'wash dishes']
renderTodoList();

function renderTodoList () {
  let todoListHTML = '';

  for (let i = 0; i < ToDoList.length; i++) {
    const todo = ToDoList [i];
    const html = `<p> ${todo} </p>`;
    todoListHTML += html;
  }

  console.log(todoListHTML);
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

  function AddToDo() {
    const inputElement = document.querySelector('.js-name-input')
    const name = inputElement.value
    
    ToDoList.push(name);
    console.log(ToDoList);

    inputElement.value = '';

    renderTodoList();
  }
 
