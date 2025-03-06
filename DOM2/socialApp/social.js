let form = document.getElementById('form');
let input = document.querySelector('#input');
let failureMsg;
let posts = document.querySelector('#posts');
let count = 0;
let arrayofPosts = [];
let editingPost= null;

input.addEventListener('keydown',function(e){
    if(e.key =='Enter' && !e.shiftKey){
        e.preventDefault();
        form.dispatchEvent(new Event('submit',{cancelable:true}));
    }
})


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log("button clicked");
    formValidation();
    
});


let formValidation = ()=>{
    if(input.value == ""){
        console.log("failure");
        // if(!failureMsg){
            if(!document.querySelector('.failureMsg')){

            failureMsg = document.createElement('div');
            failureMsg.innerHTML = "<p>Post cant be empty</p>";
            failureMsg.className = "failureMsg";
            
            let InsertFailureBefore = document.querySelector('#form button');
            InsertFailureBefore.before(failureMsg);

           

        }
        setTimeout(function(){
            failureMsg.remove();
            // failureMsg = null;
        },1000);
       

        

    }else {
        console.log('Success');

        if(editingPost){
            let CurrentContent = editingPost.querySelector("p:nth-of-type(2)");
            // console.log(CurrentContent);
            
            CurrentContent.innerHTML = input.value;
            editingPost = null;
        }
         else {
            count++;
        posts.innerHTML += `<div id="post${count}">
                        <p>Post${count}</p>
                        <p>${input.value}</p>
                        <span class="options">
                            <i class="fas fa-edit" onclick="edit(this)"></i>
                            <i class="fas fa-trash-alt" onclick="removed('post${count}');"></i>
                        </span>
                    </div>`

         }

        
       
        input.value = "";
        
        
    }
}

function edit(e){
    editingPost = e.closest("div");
    input.value = e.parentElement.previousElementSibling.innerHTML; 
}

function removed(deletePost){
let postElement = document.querySelector(`#${deletePost}`);
if(postElement){
    postElement.remove();
}

}
