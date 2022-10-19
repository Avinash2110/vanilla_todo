const todoText = document.getElementById("todo-value");
const createButton = document.getElementById("create-button");
const clearButton = document.getElementById("clear-button");
const todoContainer = document.querySelector(".todo-container");

//Event Handler for create todo button
createButton.addEventListener('click', createNewTodo);

//Event Handler to clear all todos
clearButton.addEventListener('click', clearAllTodo);

todoText.addEventListener('keydown', createTodoOnEnter);

document.addEventListener('click', function(event){
    if(event.target && event.target.className=='delete-button'){
        let parent = event.target.parentNode;
        parent.remove();

        let todoItemList = document.querySelectorAll('.container-items');
        console.log(todoItemList);
        if(todoItemList.length==0){
            clearButton.classList.add('hide-element');
        }
    }
})

function createNewTodo(){
    if(!todoText.value){
        alert('Enter the todo task');
        return;
    }
    const todo = document.createElement('div');
    todo.className = "container-items";

    todo.innerHTML = todoText.value;

    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Remove';
    deleteButton.className = 'delete-button';
    todo.appendChild(deleteButton);

    todoContainer.appendChild(todo);

    todoText.value = "";

    if(clearButton.classList.contains("hide-element")){
        clearButton.classList.remove("hide-element");
    }
}

function createTodoOnEnter(event){

    if(event.key == 'Enter'){
        if(!todoText.value){
            alert('Enter the todo task');
            return;
        }
        const todo = document.createElement('div');
        todo.className = "container-items";
    
        todo.innerHTML = todoText.value;

        let deleteButton = document.createElement('button');
        deleteButton.innerHTML = 'Remove';
        deleteButton.className = 'delete-button';
        todo.appendChild(deleteButton);
    
        todoContainer.appendChild(todo);
    
        todoText.value = "";
    
        if(clearButton.classList.contains("hide-element")){
            clearButton.classList.remove("hide-element");
        }
    }

}

function clearAllTodo(){
    let todoList = document.querySelectorAll('.container-items');

    todoList.forEach(element => {
        element.remove();
    });

    hideClearButton();

    if(todoText.value){
        todoText.value = "";
    }
}

function hideClearButton(){
    clearButton.className = "hide-element";
}

function deleteSingleTodo(event){
    let targetedElement = event.target;
    let targetedParent = targetedElement.parentNode;

    targetedParent.remove();
}