// Rest parameters and Spread Syntax 

// Many js built int function supports an aribrary number of arguments

// for instance 
// Math.max(arg1, arg2, ..., argN) returns the greatest of arguments
// object.assign(dest, src1, scr2,...scrN) - copies properties from sources to destination

// lets learn how do the same and also pass arrays to such function as parametes 

// Rest parameters...
// a function can be called with any number of arguments, no matter how it is defined 
{
    function sum(a,b)
    {
        return a +b ;
    
    }

    console.log(sum(1,2,3,4,5));

    // got no erroes because of excessive arguments 
    // but of course in the result first two will be  counted 
    // the rest parameters can be included in the function defintion by using three dots ... 
    // folled by the name of array that will contain them

    // the dots literally means gather the remaining params into the array

    function sumAll(...args)
    {
        let sum = 0;
        for(let key of args)
        {
            sum += key;
        }
        return sum;
    }

    let answ = sumAll(1,1,1,2,3);
    console.log(answ);

    /*
    we can choose to get the first argument into param as variable and gather only the rest 
    the first two arguments go into variables and rest go into titles array    
    */
//    function showName( a,_,b,c,...hearts)
//    {
//     console.log(hearts);
    
//    }


function showName(firstName, lastName, ...titles){
    console.log(firstName +" " +lastName);
    
    console.log(titles[0]);
    
}
    showName("Pratik","Dongre", "theOne", "masia", "notStupid");
    
}

// the rest must be at end 
/*
function (arg1,...rest, arg2) // wont work
*/


// The argument variable

