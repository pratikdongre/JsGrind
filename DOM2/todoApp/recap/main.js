let closeModal = document.querySelectorAll('.close');
let CreateModal = document.querySelector('.createModal');

let TaskNameInput = document.querySelector('.TaskInput');
let TaskDateInput = document.querySelector('.DateInput');
let TaskDescInput = document.querySelector('.TextInput');

let failureMsg = document.querySelector('#msg');


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
    acceptDate();
    CreateModal.style.display = 'none';

    
   }
}
let data = [];

function acceptData(){

}







