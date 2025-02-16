let addFriend = document.querySelectorAll('#request');
let stats = document.querySelectorAll('h5');
let remove = document.querySelector('.remove');

console.log(addFriend[0]);


addFriend[0].addEventListener('click',function(){
    stats[0].innerHTML = "Friends";
    stats[0].color = "pink";
});

remove.addEventListener('click',function(){
    stats[0].textContent = "Unfriend";
    stats[0].color = 'red'
})


let check = 0;

addFriend[1].addEventListener('click',function(){
    if(check ==0){
        stats[1].textContent = "Friends";
        stats[1].color = 'pink'
         check = 1;
         addFriend[1].innerHTML = "Remove";
    }
    else {
        stats[1].textContent = "UnFriend";
        stats[1].color = 'red';
        check = 0;
        addFriend[1].innerHTML = "Request";
    }
})
