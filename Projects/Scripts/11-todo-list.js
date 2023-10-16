const todoList = [];
function renderTodoList()
{
    let todoListHTML = '';

    for(let i = 0; i<=todoList.length-1; i++)
    {
      const todoObject = todoList[i];
      //const name = todoObject.name;
      //const dueDate = todoObject.dueDate;
      const{name, dueDate}=todoObject;
      todoListHTML += `<div>
       ${name}</div>
       
       <div>${dueDate}</div>
      
       <button onclick="
        todoList.splice(${i}, 1);
        renderTodoList();
      " class="delete-button">Delete</button>
      `;

    }

   document.querySelector('.js-todo-list')
      .innerHTML = todoListHTML;
   }

function addTodo()
{
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date');
  const dueDate = dateInputElement.value;

  todoList.push(
    {
      name, dueDate
    });
    renderTodoList();
  inputElement.value = '';
  dateInputElement.value = '';
  
}

function enterKey(event)
{
  if (event.key === 'Enter')
  {
    addTodo();
  }
}
