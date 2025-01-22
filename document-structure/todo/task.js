const taskAdd = document.getElementById('tasks__add');
const taskInput = document.getElementById('task__input');

taskAdd.addEventListener('click', function(e) {
    e.preventDefault();
    if (taskInput.value.trim() == ''){
        taskInput.value = '';
    return
    }

    const taskList = document.getElementById('tasks__list');
    taskList.insertAdjacentHTML('afterbegin', `
        <div class="task">
          <div class="task__title">
            ${taskInput.value}
          </div>
          <a href="#" class="task__remove">&times;</a>
        </div>
        `);
        taskInput.value = '';

    let taskRemove = document.querySelector('.task__remove');
    taskRemove.addEventListener('click', function(e){
        e.preventDefault();
        taskList.removeChild(document.querySelector('.task'));
    })
})