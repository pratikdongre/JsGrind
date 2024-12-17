// 


{
    let delay = 1000;
    
    let timerId = setTimeout(function request(){
        // .. send request
        // if(sending request failed )
    {
        delay *=2;
    }
    timerId = setTimeout(request,delay);
    },delay);

}