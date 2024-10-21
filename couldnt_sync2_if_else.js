let enteredNumber = Number(prompt("enter a number"));
console.log(typeof enteredNumber);

if(enteredNumber > 0){
    console.log("1");
    
} else if (enteredNumber == 0){
    console.log("0");

} else if(enteredNumber < 1) {
    console.log("-1");

}


// let result ;
// let a = 4, b= 4;
// (a+b < 4) ? result = "Below" : result = "Over";
// console.log(result);
// at first iteration
let a,b= 4;
let result = (a+b+4) ? "Below" : "After";




let login = "employee";

let message =  login == "employee" ? "hello" : 
            login == "Director" ? "Greetings" : 
            login == '' ? "no login" : 
             '';

console.log(message);
             