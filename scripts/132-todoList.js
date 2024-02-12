const toDoArray = ['make dishes', 'wash food'];

renderTodoList();

function renderTodoList () {    // (2) This function takes the array and gets all the values into a variable that stores HTML format.
  let todoListHTML = '';

  for(let i = 0; i < toDoArray.length; i++) {
    const todo = toDoArray[i];                    // (3) We are making html here, from the input text.
    const html = `<p>${todo}</p>`;
    todoListHTML += html;
  }
  console.log(todoListHTML);

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;  // (4) Putting the paragraphs into an already made div.
}


function toDo() {     // (1) This function takes the input text and pushes it into the array.
  const inputElement = document.querySelector('.js-input');
  toDoArray.push(inputElement.value);
  console.log(toDoArray);

  inputElement.value = '';  // This takes the value out of the input box once we push the value into the array.

  renderTodoList();
}


// Within renderTodoList, we are generating the HTML with Javascript.
