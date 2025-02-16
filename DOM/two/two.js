let addFriend = document.querySelector('#request');
let stats = document.querySelector('h5');
let remove = document.querySelector('.remove');

addFriend.addEventListener('click',function(){
    stats.innerHTML = "Friends";
    stats.color = "pink";
});

remove.addEventListener('click',function(){
    stats.textContent = "Unfriend";
    stats.color = 'red'
})

