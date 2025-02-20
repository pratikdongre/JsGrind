let ctn = document.getElementById('container');
let love = document.querySelector('i');

ctn.addEventListener('dblclick',function(){
    love.classList.add('show');

    setTimeout(()=>{
        love.classList.remove('show');
    },800);
})