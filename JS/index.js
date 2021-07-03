const breakTask = document.getElementById('break');
const gymTask = document.getElementById('gym');
const studyTask = document.getElementById('study');
const tvTask = document.getElementById('tv');
const friendsTask = document.getElementById('friends');
const workTask = document.getElementById('work');
const deselectBtn = document.getElementById('deselect');
const taskContainer = document.querySelector('.task__container');
const scheduleContainer = document.querySelector('.schedule__container');

let selectedColor, active;

//Event Listeners
taskContainer.addEventListener('click',selectTask);
scheduleContainer.addEventListener('click', setColors);



//Task click
function selecTask(e){
    resetTasks();

    taskColor = e.target.style.backgroundColor;

    switch(e.target.id){
        case 'break':
            activeTask(breakTask, taskColor);
            icon = '<i class="fas fa-couch"></i>'
            break
        case 'gym':
            activeTask(gymTask, taskColor);
            icon = '<i class="fas fa-dumbbell"></i>'
            break
        case 'study':
            activeTask(studyTask, taskColor);
            icon = '<i class="fas fa-book"></i>'
            break
        case 'tv':
            activeTask(tvTask, taskColor);
            icon = '<i class="fas fa-tv"></i>'
            break
        case 'friends':
            activeTask(friendsTask, taskColor);
            icon = '<i class="fas fa-users"></i>'
            break 
        case 'work':
            activeTask(workTask, taskColor);
            icon = '<i class="fas fa-briefcase"></i>'
            break        
    }
};

//set colors for schedule

function setColors(e){
    if(e.target.classList.contains('task') && active === true){
        e.target.style.backgroundColor = selectedColor;
        e.target.innerHTML = icon; //<-- I think I should put some text if possible)
    }
}

//Active TASK

function activeTask(task, color){
    task.classList.toggle('selected');

    if(task.classList.contains('selected')) {
        active = true;
        selectedColor = color;
        return selectedColor;
    } else {
        active = false;
    }
}


//Reset tasks
function resetTasks(){
    const allTasks = document.querySelectorAll('.task__name');

    allTasks.forEach((item)=>{
        item.className = 'task__name';
    })
}