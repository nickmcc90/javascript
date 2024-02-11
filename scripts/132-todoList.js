const toDoArray = [];

function toDo() {
  const inputElement = document.querySelector('.js-input');
  toDoArray.push(inputElement.value);
  console.log(toDoArray);

  inputElement.value = '';  // This takes the value out of the input box once we push the value into the array.
}


