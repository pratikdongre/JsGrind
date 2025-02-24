let form = document.getElementById('form');
let input = document.querySelector('#input');


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log("button clicked");
    formValidation();
    
});


let formValidation = ()=>{
    if(input.value == ""){
        console.log("failure");
        let failureMsg = document.createElement('div');
        failureMsg.innerHTML = "<p>Post cant be empty</p>";
        failureMsg.className = "failMsg";
        
        let InsertFailureBefore = document.querySelector('#form button');
        InsertFailureBefore.before('failureMsg');

        

    }else {

        console.log('Success');
       
        
    }
}