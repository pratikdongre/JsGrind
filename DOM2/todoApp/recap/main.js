let closeModal = document.querySelectorAll('.close');
let CreateModal = document.querySelector('.createModal');

let TaskNameInput = document.querySelector('.TaskInput');
let TaskDateInput = document.querySelector('.DateInput');
let TaskDescInput = document.querySelector('.TextInput');

let failureMsg = document.querySelector('#msg');
let Tasks = document.querySelector('#Tasks');

Toggle();
function Toggle(){
    closeModal.forEach((close)=>{
        close.addEventListener('click',function(){
            CreateModal.style.display = 'none';
    
        })
        // console.log(close);
    })
    
    let openModal = document.querySelector('#addnewTask');
    openModal.addEventListener('click',function(){
        CreateModal.style.display = 'flex';
    
    })
}

CreateModal.addEventListener('submit',function(e){
    e.preventDefault();
    console.log('submitted');
    

    formValidation();
})

function formValidation(){
   if(TaskNameInput.value == '')
   {
    console.log('failure');
    failureMsg.innerHTML = '<p>!Name can not be empty!</p>';
    failureMsg.style.color = 'red'
    setTimeout(function(){
        failureMsg.innerHTML = '';
    },1000)
   } else {
    console.log('success');
    acceptData();
    CreateModal.style.display = 'none';
    resetForm();

    
   }
}
let data =JSON.parse(localStorage.getItem('data'))||[];
// let highestId = data.length ? Math.max(...data.map(task => task.id)) : -1;

function acceptData(){
    
    let taskObj = {
        id :data.length,
        task : TaskNameInput.value,
        date : TaskDateInput.value,
        Description : TaskDescInput.value,
    }

    data.push(taskObj);

    localStorage.setItem('data',JSON.stringify(data));
    showTasks();
    

}

let resetForm = ()=> {
    TaskNameInput.value = null;
    TaskDateInput.value = null;
    TaskDescInput.value = null;
}

showTasks();
function showTasks(){
    Tasks.innerHTML = '';

    data.forEach((taskObj)=>{

        Tasks.innerHTML +=  `<div id="task${taskObj.id}">
        <p class="TaskName">${taskObj.task}</p>
        <p class="TaskDate">${taskObj.date}</p>
        <p class="TaskDesc">${taskObj.Description}</p>
        <options id="butts">
            <i class="fas fa-edit" onclick="editTask(${taskObj.id})"></i>
            <i class="fas fa-trash-alt" onclick='deleteTask(${taskObj.id})'></i>
        </options>
    </div>`
    })
    localStorage.setItem('data', JSON.stringify(data)); // Update localStorage
    console.log(data);
    


}



function deleteTask(id){
    // console.log(`task${id}`);
    data = data.filter((task) => task.id !== id );
    data.forEach((task,index) => task.id = index);
    // console.log(data);
    document.querySelector(`#task${id}`).remove();
    localStorage.setItem('data',JSON.stringify(data));

    showTasks();
}


let editTask = (id) =>{
    let taskObj = data.find((task)=> task.id == id );
    
    
    TaskNameInput.value = taskObj.task;
    TaskDateInput.value = taskObj.date;
    TaskDescInput.value = taskObj.Description;
    CreateModal.style.display = 'flex';

    deleteTask(id);

}


