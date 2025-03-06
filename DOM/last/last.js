// let arr = [1,2,3,5]
// // arr.forEach(function(elem){
// //     console.log(elem);
    
// // })

// let clutter = "";
// arr.forEach(function(elem){
//     clutter += "elem";
// })

// console.log(clutter);


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
];

let clutter = "";
arr.forEach(function (elem,id){

    let image = elem.dp
    // console.log(elem.dp,id);
    clutter += ` <div class="story">
                        <img id='${id}' src="${image}" alt="">
                    </div>`;  
    
});

console.log(clutter);


document.querySelector('#storiyan').innerHTML = clutter;

let storiyan = document.querySelector('#storiyan')

storiyan.addEventListener("click",function(dets){
    console.log(arr[dets.target.id]);
   let value =  arr[dets.target.id].story;
   
    document.querySelector("#full-screen").style.display = 'block';
    document.querySelector('#full-screen').style.backgroundRepeat = 'no-repeat';
    document.querySelector('#full-screen').style.backgroundImage = `url(${arr[dets.target.id].story})`;


    setTimeout(function(){
        document.querySelector('#full-screen').style.display = 'none';
    },1000);
})
