let form = document.querySelector('form');
let input = document.querySelector('#input');

let failureMsg;

let posts = document.querySelector('#posts');
let count = 0;
let editingPost = null;

input.addEventListener('keydown',function(e){
    if(e.key == 'Enter' && !e.shiftKey){
        e.preventDefault();
        form.dispatchEvent(new Event('submit',{cancelable: true}));

    }
})

form.addEventListener('submit',function(e){
    e.preventDefault();
    console.log('button Clicked');
    formValidation();  
})

function formValidation(){
    if(input.value =='')
    {
        console.log('failure');
        failureMsg = document.createElement('div');
        failureMsg.innerHTML = `<p>Post cant be emtpy</p>`;
        failureMsg.className = 'failureMsg';
        failureMsg.style.color = 'red';

        let InsertFailure = document.querySelector('#form button');
        InsertFailure.before(failureMsg);

        setTimeout(function(){
            failureMsg.remove();
        },1000);
        
    }else {
        if(editingPost){
            let CurrentContent = editingPost.querySelector('p:nth-of-type(2)');
            CurrentContent.innerHTML = input.value;
            editingPost = null;
        } else { 
            count++;
            console.log('success');
            posts.innerHTML += ` <div id="post${count}">
                            <p>Post${count}</p>
                            <p>${input.value}</p>
                            <span id="options">
                                <i class="fas fa-edit" onclick='edit(this)'></i>
                                <i class="fas fa-trash-alt" onclick="removePost('post${count}')"></i>
        
                            </span>
                        </div>`;
            console.log(posts);
            input.value='';

        }
       
                    
        
        
    }
}


function edit(e){
    console.log(e);
    editingPost = e.closest("div");
    console.log(editingPost);
    input.value = e.parentElement.previousElementSibling.innerHTML;
    
    
}

function removePost(deletePost){
    let postElement = document.querySelector(`#${deletePost}`);
    if(postElement){
        postElement.remove();
    }
}
