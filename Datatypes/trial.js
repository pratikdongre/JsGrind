
// let input = 'sometthig that contain > < "" & ';


// // sql injection example 
// function escapeSQL(input){
//     return input.replace("/'/g","''"); // escape single quotes
// }

// // while regex works but parameterized queries are used for sql injection

// console.log(typeof input);
// //preventing xss
// function escapeHtml(input){
//     if(typeof input !=="string"){
//         throw new Error("input must be a string");
//     }
// return input.replace(/&/g,"&amp;")
//     .replace(/</g,"&lt;")
//     .replace(/>/g,"&gt;")
//     .replace(/"/g,"&quot;");
//    // .replace("/&/g", "&amp;")  wrong 
// }

// console.log(escapeHtml(input)); 



let inputs = [1,-2,3,4,-9,6];

function getMaxSubSum(inputs){

    let answer = 0;
    for(let i =0;i<inputs.length;i++)
    {   
       let  subAnswer = 0;

        for(let j = i;j<inputs.length;j++)
        {
            subAnswer+=inputs[j];
            answer = Math.max(answer,subAnswer);

        }
        
    }
    return answer;


};

// console.log(getMaxSubSum(inputs));


// function getMaxSubSUm Fast

function fasterSub(inputs){
    let answer = 0;
    let subAnswer = 0;
    
    for(let key of inputs)
    {
        subAnswer += key;
        answer = Math.max(answer,subAnswer);


        if(subAnswer < 0) subAnswer = 0;



    }



    return answer;
}

console.log(fasterSub(inputs));