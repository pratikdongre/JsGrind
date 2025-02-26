let taskModal = document.querySelector('#taskModal');
let addNew = document.querySelector('#addNew');
let Cross = document.querySelector('.close');
let CloseButton = document.querySelector(".CloseButton");
// let inputs = document.querySelectorAll('#secondline input');

let count = 0;


let TaskInput = document.querySelector('#TaskInput');
let DateInput = document.querySelector('#DateInput');
let TextInput = document.querySelector('#TextInput');

let msg = document.querySelector('#msg');
let tasks = document.querySelector('#tasks');
addNew.addEventListener('click',function(){
    taskModal.style.display = 'flex';
});

Cross.addEventListener('click',function(){
    taskModal.style.display = 'none';
});

CloseButton.addEventListener('click',function(){
    taskModal.style.display = 'none';
});

taskModal.addEventListener('submit',function(e){
    e.preventDefault();
    
    formValidation();

});

let formValidation = ()=>{
    if(TaskInput.value == ""){
        console.log("failure");

        msg.innerHTML = "Task cannot be blank";
    } else {
        count++
        console.log("success");
        
        msg.innerHTML = "";
        acceptData();
        taskModal.style.display= "none";
    }

    
}

let data = JSON.parse(localStorage.getItem("data")) || [];

// let taskCounter = data.length ? Math.max(...data.map(task => task.id)) + 1 :0;

let acceptData = () => {
    let taskObj = {
        // id : taskCounter++,
        id : data.length,
        task : TaskInput.value,
        date : DateInput.value,
        Description : TextInput.value

    };

    data.push(taskObj);

    localStorage.setItem("data",JSON.stringify(data));
console.log(data);
createTasks();

}
let resetForm = ()=> {
 
    TaskInput.value = null;
    DateInput.value = null;
    TextInput.value = null;
}

let createTasks = () => {
    tasks.innerHTML = '';

    data.forEach((taskObj) => {
        tasks.innerHTML += `<div id="task${taskObj.id}">
        <p class="taskname">${taskObj.task}</p>
        <p class="date">${taskObj.date}</p>
        <p class="taskdesc">${taskObj.Description}</p>
        <div id="butts">
            <i class="fas fa-edit" onclick="editTask(${taskObj.id})" ></i>
            <i class="fas fa-trash-alt"   onclick=deleteTask(${taskObj.id})></i>
        </div>
    </div>`;

    })
   

  resetForm();
}

createTasks();  


// (()=>{
//     createTasks();  
// })();




let deleteTask = (id)=> {
// e.parentElement.parentElement.remove();
data = data.filter((task) => task.id !== id);
data.forEach((task,index) => task.id = index);
localStorage.setItem("data", JSON.stringify(data));
document.querySelector(`#task${id}`).remove();
createTasks();  

}

let editTask = (id) => {
    let taskObj  = data.find((task) => task.id == id);
    TaskInput.value = taskObj.task;
    DateInput.value = taskObj.date;
    TextInput.value = taskObj.Description;

    taskModal.style.display = "flex";

    deleteTask(id);

}


// document.querySelector('#tasks').addEventListener("click",function(e){
//    if(e.target.classList.contains('fa-edit')){
//         let taskdiv = e.target.closest("div[id^='task']");
//         // let taskdiv = e.parentElement.parentElement;
//         let taskname = taskdiv.querySelector('.taskname');
//         let date = taskdiv.querySelector('.date');
//         let taskdesc = taskdiv.querySelector('.taskdesc');
//         TaskInput.value = taskname.textContent;

//         let rawDate = date.textContent.trim();

//         // Check if the format is DD/MM/YYYY
//         if (rawDate.includes("/")) {
//             let [day, month, year] = rawDate.split("/");
        
//             // Convert to a JavaScript Date object (Month is zero-based)
//             let formatDate = new Date(Date.UTC(year, month - 1, day));
        
//             // Convert to YYYY-MM-DD format for the input field
//             DateInput.value = formatDate.toISOString().split("T")[0];
//         } else {
//             // If it's already in the correct format, assign it directly
//             DateInput.value = rawDate;
//         }
        
//         TextInput.value = taskdesc.textContent;

//         console.log(date.textContent + " " + DateInput.value);
//         taskModal.style.display = 'flex';

//         taskdiv.remove();
        
        
        
    
//    }
       
    
    
// })


// let formValidation = ()=>{

//     for(let input of inputs){
//         if(input.value == ""){
//             console.log("empty");
//             let failureMsg = document.createElement('div');
//             failureMsg.innerHTMl = '<p>Can not Be empty</p>';
//             failureMsg.className = 'failureMsg';

//             break;
//         }
//     }

// }



