const ToDoList = []
function AddToDo() {
  const inputElement = document.querySelector('.js-name-input')
  const name = inputElement.value
  
  ToDoList.push(name);
  console.log(ToDoList);

  inputElement.value = '';
}