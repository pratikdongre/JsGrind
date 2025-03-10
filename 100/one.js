// write a program to greet a person based on their first name and last name 

// iterationOne();

function iterationOne(){
    let firstName = "Pratik";
    let lastName = 'Dongre';
    
    console.log(`Hello, Mr.${firstName} ${lastName}`);

}

// usingClass();

function usingClass(){
    class Person{
        constructor(firstName,lastName,gender){
            this.firstName = firstName;
            this.lastName = lastName;
            this.gender = gender;
        }
    
        greet(){
            if(this.gender == 'M' || this.gender == 'm'){
                console.log(`Hey, Mr. ${this.firstName} ${this.lastName}`);

            } else {
                console.log(`Hey, Mrs. ${this.firstName} ${this.lastName}`);
   
            }

            
        }
    
    }
    
    const Person1 = new Person("pratik","dongre",'M');
    const Person2 = new Person("Priya","dixit",'F');

    Person1.greet();
    Person2.greet();
}




// write a code that counts from 1 ---1000
// learnLoop();
function learnLoop(){
    let count = 0;
    for(let i =1;i<=1000;i++){
        count += i;
        
    }
    console.log(count);
}




// write a code that prints all the given number in the array
// array1();
function array1(){
    let arr = [1,8,2,3,4,5,6];
    let evens = arr.filter((num)=> {
        if(num%2 == 0 ) return num;

    });

    console.log(evens);

    // let biggest = arr.filter((num) => {
    //     if(num >= biggest) return biggest;
    // })
    // console.log(biggest); // wrong 

    let biggest = arr.reduce((max,num) => {
       return max < num ? num : max;
    },0);

    biggest = arr.reduce((max,num)=>{
        if(max < num){
            return num;
        } else {
            return max;
        }
    })

    console.log(biggest);

    let meth2 = arr.reduce((max,num) =>{
       return  Math.max(max,num);
    },0);
    
    console.log(meth2);
    
    let meth3 = Math.max(...arr);
    console.log(meth3);
    
    
    
    
}


// objectLearn();

function objectLearn(){
    let arre = [
    {
        name : "pratik",
        gender : 'M',
    },
    {
        name : "raju",
        gender : 'M'
    },
    {
        name : 'shanti',
        gender : "F"
    }

] 

let males = arre.filter((obj) => {
    
 return obj.gender == 'M';
    
}).map(obj => { return obj.name})



males = arre.reduce((arr,current) => {
        if(current.gender == "M"){
           arr.push(current.name);
        }
        return arr;
},[]);

console.log(males);

}


// reverse();
function reverse(){
    let arr = [1,2,3,4,5,6];

    // arr.reverse();


    let reversed = arr.toReversed();
    // console.log(arr);
    // console.log(reversed);

    // using reduce 

    let arrReversed = arr.reduce((acc,cur) => {
       return [cur, ...acc];
    },[])
    
    // console.log(arrReversed);


    let reversedMap = arr.map((el,i)=>{
         return arr[arr.length -1 - i ] ;
    })

    console.log(reversedMap);
    
    
    
}


// Onsum();
function Onsum(){

    twoSum(4,5);


function twoSum(a,b){
    let total = a + b;
    displaySum(total);
   
}

function displaySum(sum){
    console.log(`the sum of the number is ${sum}`);
    
}

}

anotherSum();
function anotherSum(){
    function sum(a,b){
        return a + b;
    }

    function displayResult(sum){
        console.log("the sum is " + sum);
        
    }

 
    displayResult(sum(4,5));
}



// checkmemory();
function checkmemory(){
    let sum = 0;
    for(let i =0;i<= 10000000000000000;i++)
    {
        sum +=i;
    }

    console.log(sum);
    
}



// calback();
function calback(){
    function sum(num1,num2,callback){
        let result = num1 + num2;
        // displayResult(result);
        callback(result);
        return result;

    }

    function displayResult(data){
        console.log(`result of the sum is ${data}`);
        
    }

    function displayResultPassive(data){
        console.log(`sum's result is - ${data}`);
        
    }

    sum(4,5,displayResult)

}

// calci();
function calci(){

    function calculationArithmetic(a,b,type){
        if(type == 'sum'){
            return a + b;
        }
        if(type == 'minus'){
            return a - b;
        }
    }

   

    const ans = calculationArithmetic(20,6,'sum');
    console.log(ans);
    

}

// calci2();
function calci2(){

    function calculationArithmetic(a,b,type){
       
            const value = type(a,b);
            return value;
        

    }

    function sum(a,b){
        return a + b ;
    }

    function sub(a,b){
        return a - b;
    }


   

    const ans = calculationArithmetic(20,6,sub);
    console.log(ans);

}

