// v1

let ctn = document.getElementById('container');
let love = document.querySelector('i');
UsingDblclick();
function UsingDblclick(){
    ctn.addEventListener('dblclick',function(){
        console.log('double clicked');
    
    
        love.classList.add('show');
        
        setTimeout(function(){
            love.classList.remove('show');
        },1000);
        
    })
}
// usingSingleClick();
function usingSingleClick(){
    ctn.addEventListener('click',function(){
    
        love.classList.toggle('show')
    })
        
}

