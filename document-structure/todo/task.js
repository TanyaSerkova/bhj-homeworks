const taskAdd = document.getElementById('tasks__add');
const taskInput = document.getElementById('task__input');

taskAdd.addEventListener('click', function(e) {
    e.preventDefault();
    let task = document.createElement('div');
    task.classList.add('task');
    let taskTitle = document.createElement('div');
    taskTitle.classList.add('task__title');
    task.appendChild(taskTitle);
    let taskRemove = document.createElement('a');
    taskRemove.classList.add('task__remove');
    taskRemove.innerHTML = '&times;';
    taskRemove.setAttribute('href', '#');
    task.appendChild(taskRemove);
    const taskList = document.getElementById('tasks__list');
    taskList.appendChild(task);

    taskTitle.innerText = `${taskInput.value}`;
    taskInput.value = '';

    taskRemove.addEventListener('click', function(e){
        e.preventDefault();
        taskList.removeChild(task);
    })
})