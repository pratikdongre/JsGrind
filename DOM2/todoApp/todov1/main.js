let add = document.querySelector('.createTasks button');
let inputBox = document.querySelector('#input-box');

let listContainer = document.querySelector('#list-container');

function addTask(){
    if(inputBox.value == ''){
        alert('you must write something');
    } else {
       
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.append(li);
        let span = document.createElement('span');
        span.innerHTML = `&times;`;
        li.appendChild(span);
        
        console.log(listContainer);
        
    }
    inputBox.value = '';
    saveData();

}

listContainer.addEventListener('click',(e)=>{
    if(e.target.tagName == "LI"){
        e.target.classList.toggle('checked');
        saveData();
    }else if (e.target.tagName == 'SPAN'){
        e.target.parentElement.remove();
        saveData();

    }
    
},false)

inputBox.addEventListener('keydown',(e)=>{
if(e.key == "Enter" && e.key != 'ShiftKey'){
    e.preventDefault();
    addTask();
}
})

function saveData(){
    localStorage.setItem('dat',listContainer.innerHTML);

}

function showTask(){
    listContainer.innerHTML = localStorage.getItem('dat');
}

showTask();