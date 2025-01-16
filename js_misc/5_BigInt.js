/*
bigInt is a special numeric type that provies support for integers of arbitrary length

a bigint is created by appening n to the end of an integers literal or by calling the funciton 
BigInt that creates bigints from string ,numbers etc 

*/
{
    const bigint = 13215646548979845161n;
    const sameBigint = BigInt("13215646548979845161");

    const bigINtFromNumber= BigInt(10);  // same as 10n 
}

// math operators 
/*
bigInt can mostly be uslied like a reugalr nubmer 

*/
{
    console.log(1n + 2n); // 3
    console.log(5n / 2n);
    // divison 5/2 returns the resutl roudneded towrad zero without decimal part 
    // all part on bigint return bigints 

    // we cant mix biginst and regualr nub 

    // console.log(2n * 5); errort cant mix types 
      
    
}

// we hsould expliclty convert them if needed 
// using BigInt() or Number()
{
    let bigint = 1n;
    let number = 2;

    console.log(bigint + BigInt(number)); // 3

    console.log(Number(bigint) + number);
    
    
}


/*
the converstino operation are awlays sirlent 
never give erro 
but if bigint is too uge and ownt fit the nubmer tpe 
then xtra bits will cut off 
we should be creaful doing such conversion 

*/

// the unary plus is not supported on bigints 
// the unary plus operator +value is to convert value to number 
// in s ntot supproted on bigints 

{
    let bigint = 1n;

    // console.log(+bigint); // errir 
    
    // we should use Number() to convert a bigint to a nubmer 
}


// comparision 
// comparison such as < > works with bigints and numbers just fine 

{
    console.log(2n > 1n);// true 

    console.log(2n > 1); // true 
    
    // as number and bigint belong to differerent types 
    // they can be equal == but not strictly equal === 

    console.log(1 == 1n);
    console.log(1 === 1n);
 
    
}


/*
Boolean oeprators
 wehn inside if or other booleans oepration 
 bigints behave like nubmers 
 for insce in if bigint 0n is falsye other values are truthy 
 
*/
{
    if (0n)
    {
        console.log("wont happend");
        
    }

    // boolean ops suchas || or && and others also work with bigints similar to numbers 

    console.log(1n || 2); // 1 (1n is considers truthy)

    console.log(0n || 2) ; // 2 (0n is consieered falsey)
    
    
}


/*
Polyfills 
polyfilling bigints is tricky 
the reaosn is that many js ops such as + - and so on behave 
differenlty with bigints compared to regualr numbers 

for ex divison of bigints always returns a bigint 

to emulate such behaviour 
a polyfill would need to analyze the code and replacae all such operator with its function 
but doing so is cumbersone and cost lost of performance

so ther no well know good polyfill

althought the other way around is propsed by JSBI lib 

the lib implement big numbers using its own methods 
we can use them isntead of native bigints 

operation                        native BIgint                     JSBI
creation from Nubmer              a= BigInt(79)                    a = JSBI.BigInt(79)
addition                         c= a+ b                            c=  JSBI.add(a,b)
subraction                     c = a -b                         c = JSBI.subtract(a,b)


and then use the polyfill babel plygin to convert JSBI calls to native bigints 
for those broswer that suppor them 

this approace suggest that we werite code in JSBI instead of native bigints 
but JSBI works with numbeers as with bigints interanlly 
emulates thems cloesly so the code will be bigint  ready 

we can use JSBI code as is for engines that dont support bigints and for those that do supports 
the polyfills will convert the call to native bigints 
*/