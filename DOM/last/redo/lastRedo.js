
let arr = [
    
        {   dp : "https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?cs=srgb&dl=pexels-pixabay-56866.jpg&fm=jpg",
            story : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS936d5Bd2hlfs-_1Ed6w5RGIJumQ0Lyn1Scw&s"
        },
        {   dp : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAbgQJR8Xev26OYs21h1M67hEZ5P9AOK8-7RySPiIOmA_KzqqRWKNO5u9ug2_kKts8lVY&usqp=CAU",
            story : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAbgQJR8Xev26OYs21h1M67hEZ5P9AOK8-7RySPiIOmA_KzqqRWKNO5u9ug2_kKts8lVY&usqp=CAU"
        },
        {   dp : "https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?cs=srgb&dl=pexels-pixabay-56866.jpg&fm=jpg",
            story : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS936d5Bd2hlfs-_1Ed6w5RGIJumQ0Lyn1Scw&s"
        } 
    

]
let dps = '';

arr.forEach(function(elem,id){
    console.log(elem.dp +" "+ id );
    
    let image = elem.dp;
 dps += `<div class="story">
 <img id='${id}'  src="${image}" alt="">
</div> ` ;
})

document.querySelector('#storyian').innerHTML = dps;                    
let storyian = document.querySelector('#storyian');
console.log(storyian);

let fullScreen = document.querySelector('#full-screen') ;
storyian.addEventListener("click",function(dets){
    
    if(dets.target.tagName === "IMG"){
        console.log(arr[dets.target.id].story);
        let value = arr[dets.target.id].story;
        fullScreen.style.display = 'block';
        fullScreen.style.backgroundImage = `url(${value})`;
        fullScreen.style.backgroundRepeat = 'no-repeat';
        
    }
    setTimeout(function(){
        fullScreen.style.display = 'none';
    },1000);


    
    
})







