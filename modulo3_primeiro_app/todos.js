var listElement = document.querySelector('#app ul');
var inputElemet = document.querySelector('#app input');
var btnAdicionar = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos() {

    listElement.innerHTML = '';

    for (todo of todos) {
        let todoElement = document.createElement('li');
        let todoText = document.createTextNode(todo);
        todoElement.appendChild(todoText);

        let posicaoTodo = todos.indexOf(todo);

        let btnExcluir = document.createElement('button');
        let btnExcluirText = document.createTextNode('Excluir');
        btnExcluir.setAttribute('onclick', 'deleteTodo(' + posicaoTodo + ')')
        btnExcluir.appendChild(btnExcluirText);

        listElement.appendChild(todoElement);
        listElement.appendChild(btnExcluir);

    }
}

function adicionarTodo() {
    if (inputElemet.value !== '') {

        for (let todo of todos) {
            if (todo === inputElemet.value) {
                alert('Todo já existe!');
                return;
            }
        }

        let todoText = inputElemet.value;

        todos.push(todoText);

        inputElemet.value = '';

        renderTodos();
        saveToStorage();

    } else {
        alert('Digite algo!');
    }
}

function deleteTodo(posicaoTodo) {
    todos.splice(posicaoTodo, 1);
    renderTodos();
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos));
}


renderTodos();
btnAdicionar.onclick = adicionarTodo;