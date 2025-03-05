let ctn = document.getElementById('container');
let love = document.querySelector('i');

ctn.addEventListener('dblclick',function(){

    love.style.opacity = 0.8;
    love.style.transform = 'translate(-50%,-50%) scale(1)';

    setTimeout(function(){
        love.style.opacity = 0;
    },1000)

    setTimeout(function(){
        love.style.transform = 'translate(-50%,-50%) scale(0)';

    },2000)
})