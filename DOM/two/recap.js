let cardRemove = document.querySelector('#card .remove');
let cardRequest = document.querySelector('#card #request');

let cardStatus = document.querySelector('#card h5');
let cardP = document.querySelector('#card p');


    cardRequest.addEventListener('click',function(){
        
        if( cardStatus.innerHTML == 'Friends'){
            cardP.innerHTML = "Already a friend";
            return ;
         }
        cardP.innerHTML = "Request Sent";
       
            setTimeout(function(){
                cardP.innerHTML = "Request Accepted"
                cardStatus.innerHTML = 'Friends';
                cardP.style.display = "block";

                
            },1000);

            setTimeout(function(){
               
                cardP.style.display = "none";
                
            },2000);
            
    
    })




cardRemove.addEventListener('click',function(){
    cardStatus.innerHTML = 'Not a Friend';
})


let Card2Request = document.querySelectorAll('#request');



let card2Stats = document.querySelectorAll('h5');

let flag = 0;

Card2Request[1].addEventListener('click',function(){
    if(flag ==0){
        card2Stats[1].innerHTML = 'Friends';
        flag = 1;
        card2Stats[1].style.color = 'green';
        Card2Request[1].innerHTML = 'Remove';
    }

    else {
        card2Stats[1].innerHTML = 'Not a friend';
        flag = 0;
        card2Stats[1].style.color = 'red';
        Card2Request[1].innerHTML = 'Request';
    }
 
})






