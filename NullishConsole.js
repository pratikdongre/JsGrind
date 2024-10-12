// 10
console.log(null * 100); // 0

let height = null;
let weight = null;

let area = (height ?? 100) * (weight ??     50 );

console.log(area);

//jargon 
// ?? has same precedence as || that is on 3 after = ? , 
// + - */ has higher precedence so we must use () to do nullish coalescing before *+-/

// cant use ?? with || or && together its forbidden

// let x = 1 ?? 2 && 3 ;
let x = 1 ?? (2 && 3 );
// 1 ?? 3 
// so first value is not null or undefined to x would be 1 

console.log(x);




