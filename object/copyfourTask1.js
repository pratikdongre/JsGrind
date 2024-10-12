// task 1 

// let user = {};
let user = new Object();
user.name = "John";
user["surname"] = "Smith";
user["name"] = "Pete";

// delete user["name"];
delete user.name;


for(let key in user)
{
    console.log(user[key]);
}


// task 2 

let schedule = {};

console.log(isEmpty(schedule));
schedule["8:30"] = "get up";
console.log(isEmpty(schedule));

function isEmpty(schedule){
    let count = 0;
    for(let key in schedule)
    {
        return false;
        // or 
        count++;

    }

    /*
    if (count == 0)
    {
    return true;
    }
    else return false;

    */

    return true;
}


// task 3

let salaries = {
    John : 100,
    Ann : 160,
    Pete : 130

};

let sum = 0;
for(let key in salaries)
{
    sum += salaries[key];
}

console.log(sum);


// task 5

let menu = {
    width : 200,
    height : 300,
    title : "My menu",
};

multiplyNumber(menu);

for(prop in menu)
{
    console.log(menu[prop]);
}


function multiplyNumber(menu)
{
    for(let key in menu)
    {
        if (typeof menu[key] == "number")
        {
            menu[key] = menu[key]*2;
        }
    }
}

// console.log(typeof menu["width"]);