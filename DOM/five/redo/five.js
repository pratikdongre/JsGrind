let elem = document.querySelectorAll('.elem');

elem.forEach(function(el){
    let elemImage = el.querySelector('img');
    console.log(elemImage);

    el.addEventListener('mousemove',function(e){
        elemImage.style.left =  e.x + 'px';
        elemImage.style.top = e.y + 'px';
    })

    el.addEventListener('mouseenter',function(){
        elemImage.style.opacity = 1;
    })

    el.addEventListener('mouseleave',function(){
        elemImage.style.opacity= 0;
    })
    
})




