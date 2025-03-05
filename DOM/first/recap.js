let h1 = document.querySelector('h1');
let countOFh1= 0;
h1.addEventListener('click',function(){
    if(!countOFh1){
        console.log(h1);
        h1.style.color = "white";
        h1.style.backgroundColor = "black"
        countOFh1++;
    }
    else{
        h1.style.color = 'black';
        h1.style.backgroundColor = 'white';
        countOFh1--;
    }
    
})


let bulb = document.querySelector('#bulb');
let button = document.querySelector('button');
let flag = 0;
button.addEventListener('click',function(){
    if(!flag){
        bulb.style.backgroundColor = 'yellow'; 
        button.innerHTML = 'OFF';
        flag = 1
    } else {
        bulb.style.backgroundColor = 'white'; 
        button.innerHTML = 'ON';
        flag = 0;
    }
    
})


// selecting multiple elements 
let ps = document.querySelectorAll('p');
ps.forEach(function(e){
    console.log(e.innerHTML);
    e.style.color = 'blue';
    
})
