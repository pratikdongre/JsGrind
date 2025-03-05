let ctn = document.getElementsByClassName('container')[0];
let cursor = document.querySelector('.cursor');

console.log(ctn);


ctn.addEventListener('mousemove',function(e){
    console.log(e);
    cursor.style.left = e.x + 'px';
    cursor.style.top = e.y + 'px';

    
})