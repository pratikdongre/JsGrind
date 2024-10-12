// let strr = "fd
// dfdsf
// sfsdf
// debuggerdfsdfads";

// cant do this 

// use back ticks 

// let strr = `dsfsd
// dfsd
// fd
// df
// adsf
// a`;




// function placement 
// 3 ways 
// first functiosn then code 
//  first code then function
//  mixed 


function pow(x, n) {
  let result =1;
  
  for(let i = 0;i < n; i++) {
    result *=x;
    }
  return result;
}

let x=prompt("x?",'')
let n=prompt("n?",'')

if (n <= 0) {
  alert(`Power ${n} is not supported, please enter an integer number greater than zero`);
} else {
  alert( pow(x,n) );
}


/*
// function pow(x,n)
// {
//   let result=1;
//   for(let i=0;i<n;i++) {result*=x;}
//   return result;
// }

// let x=prompt("x?",''), n=prompt("n?",'')
// if (n<=0)
// {
//   alert(`Power ${n} is not supported, please enter an integer number greater than zero`);
// }
// else
// {
//   alert(pow(x,n))
// }

fix the coding style 
*/