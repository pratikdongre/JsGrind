//20
function checkAge(age)
{
    if(age > 18) return true;
    
    return confirm("did parents allow yous");

}

function CheckAge(age)
{
    if(age > 18) return true;
    else 
    return confirm("did parents allow yours");

}
function CheckAgeVariant3(age)
{
    // age > 18 ? return true : return 
    // this is wrong 


    return (age>18) ? true : confirm("did parents allow");
 
}

function CheckAgeVariant4(age)
{
    // age > 18 ? return true : return 
    // this is wrong 


    return (age > 18) || confirm ("did parents know about this ");
}


// CheckAge(10);


function min(a,b){

    // return (a>b)? b : a;

    if(a>b)
    {
        return b ;
    }
    return a ;
    
}

console.log(` the min value is ${min(2,5)}`);
console.log(` the min value is ${min(3,-1)}`);

console.log(` the min value is ${min(1,1)}`);




function pow(x,n){
    // return x**n;
    // x*x*x
    result = 1;
    do {
        result *= x;
        n--;
    }while(n!=0);

    return result;

}

console.log(`the power is ${pow(3,2)}`);
console.log(`the power is ${pow(3,3)}`);
console.log(`the power is ${pow(1,100)}`);



/*
1-1 
2-2
3-4
4-8
5-16




*/
function chess(n){
    let ans=1;
    // if (n==1){
    //     ans = n;
    //     }
    // else if (n==2)
    //     {
    //         ans = n;
    //     } 
    
    if(n<=2)
    {
        ans = n;
    }
    else {
        for(let i = 1;i<n;i++)
            {
                 ans = ans * 2;
            }
    }


    alert(ans);
    
}


chess(64);



// this above are function declarations
// there are other type that is function expression

/*
in js functions are not magical code structure but a special value 
so as function is value 

1) we can store the value inside variable let x = function(){}
2) we can return them from another function like retunr function(){}...
3) can pass them as arguments somefunction(anotherfunction)


*/

function sayhi(){
    alert("hello");
    return "fab";
}


let sayHi = function(){
    alert("he+o");
}

// alert(sayhi);//cant 
//both functiosn can be called using sayhi() parenthesis only
alert(sayHi()); 
// but as function not return anything so return undefined 
alert(sayhi());



//note we dont have name to our function we can ommit it in function expression
// as it dont carry any value 



// In more advanced situations, that we’ll come across later,
// a function may be created and immediately called or scheduled for a later execution, 
// not stored anywhere, thus remaining anonymous.
//just not a good line to read 




/*
repeat lets iterate no matter how function is created,
a function is value in both function expression,function declarations


*/

let greet = function(){
    alert("hello");
}
// hwere we store function just like as any ther value we can store



function callfunction(func)
{
    func();
}


// here we passed another function as arguments 
callfunction(greet);