var formEl = $('#skills-form');
var nameInputEl = $('#skill-name');
var dateInputEl = $('#datepicker');
var skillsListEl = $('#skills-list');


//form function
var printSkills = function (name, date) {
    var listEl = $('<li>');
    var listDetail = name.concat(' on ', date);
    listEl.addClass('list-group-item').text(listDetail);
    listEl.appendTo(skillsListEl);
  };
  
  var handleFormSubmit = function (event) {
    event.preventDefault();
  
    var nameInput = nameInputEl.val();
    var dateInput = dateInputEl.val();
  
    if (!nameInput || !dateInput) {
      console.log('You need to fill out the form!');
      return;
    }
  
    printSkills(nameInput, dateInput);
  
    nameInputEl.val('');
    dateInputEl.val('');

 };
  
formEl.on('submit', handleFormSubmit);

// form lists removing fuctions

function handleFormSubmit(event){
    event.preventDefault();

    var daylistItem = $('input[name="skill-name"]').val();
    
    if(!daylistItem) {
        console.log('No daylists item filled out in form!');
        return;
    }

    var daylistListItemEl = $(
        '<li class="flex-row justify-space-between align-center p-2 bg-light text-dark">'
    );
    daylistListItemEl.text(daylistItem); //checked

    //add delete button to remove daylistss items
    daylistListItemEl.append(
        '<button class="btn btn-danger btn-small delete-item-btn">Remove</button>'
    );




    //print the form input element
    skillsListEl.append(daylistListItemEl)
    $('input[name="skill-name"]').val('');

    //Create a function to handle removing a list item when '.delete btn' clicked

    function handleRemoveItem(event) {
        var btnClicked = $(event.target);
        btnClicked.parent('li').remove();
    }

    nameInputEl.on('click','.delete-item-btn', handleRemoveItem);
    skillsListEl.on('submit', handleFormSubmit);
}






const breakTask = document.getElementById('break');
const gymTask = document.getElementById('gym');
const studyTask = document.getElementById('study');
const tvTask = document.getElementById('tv');
const friendsTask = document.getElementById('friends');
const workTask = document.getElementById('work');
const deselectBtn = document.getElementById('deselect');
const taskContainer = document.querySelector('.task__container');
const scheduleContainer = document.querySelector('.schedule__container');
const resetBtn = document.querySelector('.deleteBtn');
const popUp = document.querySelector('.pop-up__container');
const noBtn = document.getElementById('btn__no');
const yesBtn = document.getElementById('btn__yes');



let selectedColor, active;

//Event Listeners
taskContainer.addEventListener('click',selectTask);
scheduleContainer.addEventListener('click', setColors);
deselectBtn.addEventListener('click', resetTasks);
resetBtn.addEventListener('click', openPopup);
noBtn.addEventListener('click', closePopup);
yesBtn.addEventListener('click',deleteTasks);



// Datepicker widget
$(function () {
  $('#datepicker').datepicker({
    changeMonth: true,
    changeYear: true,
  });
});

//Task click
function selectTask(e){
    resetTasks()

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


//delete tasks
function deleteTasks(){
    const tasks = document.querySelectorAll('.task');

    tasks.forEach((item) =>{
        item.innerHTML = '';
        item.style.backgroundColor = 'white';
    })

    closePopup();
}

//Open pop-up
function openPopup(){
    popUp.style.display = 'flex';
  
}


//Close pop-up
function closePopup(){
    popUp.style.display = 'none';
}
