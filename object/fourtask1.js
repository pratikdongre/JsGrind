// 
// let user = {};
let user = new Object();
user.name = "John";
user["surname"] = "Smith";
user.name = "Pete";
delete user["name"];


for(let key in user)
{
    console.log(key + " " + user[key]);
}



// 2 

function isEmpty(obj){
    let count = 0;
    for(let key in obj)
    {
        count++;
        // or if the the execution reaches here then direclty 
        // return false ;
    }


    if (count == 0)
    {
        return true;
    }
    else return false ;
}

let schedule = {};
console.log(isEmpty(schedule));

schedule["8:30"] = "get up";

console.log(isEmpty(schedule));


//3 

let salaries = {
    John : 100,
    Ann  : 160,
    Pete : 130, 
}

//sum all salaries 

function sum(salaries){
    let sum = 0;
    for(salary in salaries){
        // sum += salaries.salary; // this will work or not 
        sum += salaries[salary];

        // console.log(salaries[salary]);
    }


    console.log(sum);
}

sum(salaries);


// 4

let menu = {
    width : 200,
    height : 300,
    title : "My menu",
};

// console.log(typeof menu["width"]);

multiplyNumber(menu);

for(let prop in menu)
{
    console.log(`${prop} :- ${menu[prop]}`);
}

function multiplyNumber(menu){
    for(let key in menu)
    {
        if(typeof (menu[key]) == "number")
        {
            menu[key] *=2;
            // console.log(menu[key]);
        }

    }

}