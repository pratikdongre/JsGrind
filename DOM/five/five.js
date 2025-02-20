let elem = document.querySelectorAll('.elem');
let elemImage = document.querySelectorAll('.elem img');


console.log(elem.length);
elem.forEach((el) => {
    let elemImage = el.querySelector('img');
    
    el.addEventListener('mousemove',(e)=>{
    // console.log(e.x +"px");
    elemImage.style.left = e.x+"px";
    elemImage.style.top = e.y+"px";
    
});


el.addEventListener('mouseenter',()=>{
    elemImage.style.opacity = 1;
});

el.addEventListener('mouseleave',()=>{
    elemImage.style.opacity =0;
})
}
);


// elem[0].addEventListener('mousemove',(e)=>{
//     // console.log(e.x +"px");
//     elemImage[0].style.left = e.x+"px";
//     elemImage[0].style.top = e.y+"px";
    
// })


// elem[0].addEventListener('mouseenter',()=>{
//     elemImage[0].style.opacity = 1;
// })

// elem[0].addEventListener('mouseleave',()=>{
//     elemImage[0].style.opacity =0;
// })
