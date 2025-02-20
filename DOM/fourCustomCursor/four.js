let ctn = document.getElementsByClassName('container')[0];
let crsr = document.querySelector('.cursor');

crsr.style.backgroundColor = "green";
ctn.addEventListener('mousemove',(e) => {
    console.log(e);
    crsr.style.left = e.x+"px";
    crsr.style.top = e.y+"px";
})