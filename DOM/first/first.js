// 4 pillars of dom
// 1. selection of an element
// 2. changing html
// 3. changing css
// 4. event listener


//basics
// to select element use name simply like h1  
// to select class use .name
// to select id use #name

// 1. selection of an element
let a = document.querySelector('h1');
console.log(a);

//  2. changing html
a.innerHTML = "Changed to HTML";

// 3. changing css
a.style.color = "red";
a.style.backgroundColor = "black";

// 4. event listener

a.addEventListener("click", function(){
    console.log('Back to Dom');
    a.innerHTML = "Learn DOM";
    a.style.color = "black";
    a.style.backgroundColor = "red";
    
})



/////////////////////////////////////////////////////////////

let bulb = document.querySelector('#bulb');
let button = document.querySelector('button');
let flag = 0;

button.addEventListener('click',function(){
   if(flag ==0){
        bulb.style.backgroundColor = "yellow";
        flag = 1;
        button.innerHTML = "ON";

   }
   else {
    bulb.style.backgroundColor= "white";
    flag = 0;
    button.innerHTML = "OFF";
   }
});



// selecting multiple element at a time 

let p = document.querySelectorAll('p');

p.forEach(function(e){
    console.log(e.innerHTML);
});


// document.getElementById('')
// document.getElementsByClassName('')