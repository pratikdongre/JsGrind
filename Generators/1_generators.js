// Generator 
// regular function return only,single value(or nothing )

// generator can return "yeild" multiple values, one after another on demand 
// they wrok great with iterables 
// allowing to creat data streamt with ease 


/*
Generator function 
to create a generator we need a speical syntax construct function* so called generator function 
*/
function* generateSequence(){
    yield 1 ;
    yield 2 ;
    return 3;
}


// generator function behave differently from regular ones 
/*
wehn such function is alled it does not run its code 
instead it returns a speical objects called generator object to manage the exeuction 

*/


{
    function* generateSequence(){
        yield 1;
        yield 2;
        return 3;
    }

    // gnerator function creates generator object 
    let generator = generateSequence();
    console.log(generator);
    
}


/*
the function code exeuction has not started yet 
the mian method of a gnerator is next()
when called it runs the execution until the nearest yield<value> statement 
(value can be omitted then its undefined)
then the function exeuction pauses and the yeilded vlaue is retuend to the oute code 

the result of next() is always an object with two proeprties 
value : the yeided value 
done : true if the funciton code has finshed otherwise false 

for instancce here we create the genrator and get its first yeilded vlaue 

*/

{
    function* generateSequence(){
        yield 1 ;
        yield 2;
        return 3;
    }

    let generator = generateSequence();

    let one = generator.next();
    
    console.log(JSON.stringify(one));
    // as of now we got the first value only, the functin execution is on the second line 

// let call generator.next() again it resume the code exeuction and return the next yeild 

let two = generator.next();
console.log(JSON.stringify(two));


// and if we call it a thired time the execution reaches the return statemtn that finishes the fuction 
let three = generator.next();
console.log(JSON.stringify(three));

}

// now the genrator is done we should see it from done :true and value : 3 as final result 
// new call to genrator.next() does not make sense any more 
// if we do them they return the same object done : true 

/*
function* f() or function *f()
both syntax are correct 
but usally first syntax is preffered as the star denotes that its a genrator function 

*/

// generator are iterable 
// we can loop over their value using for ...of 

{
    function* generateSequence(){
        yield 1 ;
        yield 2;
        return 3 ;
    }

    let generator = generateSequence();

    for(let value of generator){
        console.log(value);
    }

    // shows 1 2 that all does not show 3 

    // because for ..of iteraiotn ignore the last vlaue when done : true 
    // so if we wnat all result to be shown by for..of we must return them with yeild
}

{
    function* generateSequence(){
        yield 1;
        yield 2;
        yield 3;
    }
    let generator = generateSequence();

    for(let value of generator){
        console.log(value); // 1 then 2 and then 3
    }
}

// as gnerator are iterable we can call all related functionality eg the spread syntax 

{
    function* generateSequence(){
        yield 1;
        yield 2;
        yield 3;
    }
    let sequence = [0,...generateSequence()];

    console.log(sequence);
    
}

// inthe code abaove ...generateSequence() turns the iterable generator object into any array of items 


// Using genrators for iterables 
// we created an iterable range objects taht returns value from...to 

{
    let range = {
        from : 1 ,
        to : 5,

        // for ...of range calls this methods once in the very begining 
        [Symbol.iterator](){
            // ... it returns the iterator object 
            // onward for..for works only with taht object asking it for next values 

            return {
                current : this.from,
                last : this.to,

                // next() is called on each iterator by the for ...of loop
                next(){
                    // it should retunr the value as an object {done : ..,value :...}
                    if(this.current <= this.last){
                        return {done : false,value : this.current++};
                    } else {
                        return {done : true};
                    }
                }
            };
        }
    };

    // iteration over range return numbers from range.from to range.to 
    console.log([...range]);
    
}


// we can use a genrator fucntion for iteration by providing it as symboliterator 
// here te same range but much mroe comapcy 

{
    let range = {
        from : 1,
        to : 5,

        *[Symbol.iterator](){
            // a shortahnd for [Symbol.iteraot]  : function*()
            for(let value = this.from;value <=this.to;value++){
                yield value;
            }
        }
    };

    console.log([...range]);

    // that works because range[Symbol.iterator]() now return a gnerator and ngerator method are exactly 
    // what for..of expect
    // it had a next() method 
    // that returns value in the form {value : ....done: true/false}

    /*
    that not a conincidence 
    generator were added to js langu with iterators in mind to implement them easilyt 

    the variatn with a generator is much more conside thatn the og iterable code of range 
    and kee the same functionality 


    Generator may genrate values forever 
    in above ex we gerneated finite sequence but we can also make a genrator that yeilds vlaues forvere 
    for insnace an undefine sequence of psuedo-randome number 

    that surely would require a break or return in for ..fo voer such genrator 
    toehr wise the loop would repreate fovern and hang 

    */
    
}


// Generator compostion 
/*
Generator composition is a speical feature of generator that allows to transparently embed generator in each other 
for instance we have a function that generates a sequnce of number 

*/

{
    function* generateSequence(start,end){
        for(let i = start;i <= end ;i++)
        {
            yield i;
        }
    }

    // now we like to reuse it to gernate a more complex sequence 
    // first digies 0..9 with char coes 48...57
    // follwed by upercase alpahbet letter A...Z (charca codes 65..90)
    // folled by lowercse alphae letter a...z (char codes 97..120)
    

    /*
    we can use this seuqnce to create password by selection char from it 

    in a regualr fucntion to combine reuslt from multiple other fucntion we call them and store the result and then join at the end 

    fro genrator there speical yield* syntax to embed compose one genrator into antoher 


    */
   {
    // thecompose generator 

    function* generateSequence(start,end){
        for(let i = start;i<= end ;i++)
            yield i ;
    }
    function* generatePassCodes(){
        yield* generateSequence(48,57);
        // 0...9

        yield* generateSequence(65,90);
        // A...Z

        yield* generateSequence(97,122);
        // a...z
    }

    let str = '';

    for(let code of generatePassCodes()){
        str += String.fromCharCode(code);
    }

    console.log(str);
    


   }
}

/*
the yield* direcvies deleages the exeuction to another genrator this term means that yeild* gen iterator over the the benrator gen a
and transparently forwards it yelds outisde 
as if the values were yeiled by the oouter genrator 

the result is the same as if we inline the code from ensted genreator 

*/

{
    function* generateSequence(start,end){
        for(let i = start;i<= end ; i++)
            yield i;
    }

     function* generataeAlphaNum(){

        // yield* generateSequence(48,57)
        for (let i = 48; i<=57 ;i++) yield i;

        // yield* generateSequence(65,90)
        for (let i = 65; i<=90 ;i++) yield i;

        // yield* generateSequence(97,122)
        for (let i = 97; i<=122 ;i++) yield i;

     }

     let str = '';
     for(let code of generataeAlphaNum()){
        str += String.fromCharCode(code);
     }

     console.log(str);
     
}

// a generator compostion is a naturally way to insera flow of one genrator into another 
// it does not use extra memory to store intermeidate reuslt 

// yeild is a two way -stree
/*
until this moment generator were similar to iterable objects with a speical sytnax to generate values 
but they are much more powerfule and flexible 

that because yield is a two way stree 
it not only return the result to the outside but also can pass the value inside the genreator 

to do so we should call generator.next(arg)
with an argu that arug becomes the result of yield


*/
{
    function* gen(){
        // pass a question to the outer code and wait for an answer 
        let result = yield "2 + 2 = ?"; // *
        console.log(result);
        
    }

    let generator= gen();
    let question = generator.next().value; // yield retursn the value 

    generator.next(4); // pass the resutl into the genrator 
}


/*
1. the first call generator.next() should e always made without an argument 
(the argument is ignored if passed)
it starts the execution and returns the result of the first yield = "2 + 2 ? "
at this point the generator pauses the exeuction while staying on the line *


2. then the result of yeild gets into quesiotn variable in calling code 
3. on Generator.next(4) the generator resumes and 4 gets in as result 
let result = 4

the outer code does not have to immediately call next(4) 
it may take time that not a prolbem the generator will wait 


*/

{
    // resume the generator after 1 s 
    // setTimeout(() => generator.next(4));
}


//unlike regular function a generator and teh calling code can exchnage the rresult by passing values in next/yield

{
    function* gen(){
        let ask1 =yield "2 + 2 = ?";

        console.log(ask1);

        let ask2 = yield "3 * 3 = ?";
        console.log(ask2);
        
    }

    let generator = gen();

    console.log(generator.next().value);

    console.log(generator.next(4).value);

    console.log(generator.next(9).done);
    
}

/*
1. the first .next() starts the exeuction it reaches the first yield 
2. the result is returned to the outer code 
3. the second .next(4) passes 4 back to the generator as the result of the first yield and resumes the exeuction 
4. .. it reaches the second yeild that becomes the result of the generator call 
5. the third next(9) passes 9 into the genrator as the same result of the second yield and resumes  the exeuction 
that reaches the end of teh function true 

*/

// generator.throw
/*
the outer code may pass a value into the genrator as the result of yield 
but it can also intitate throw an error there 
that natural as an error is a kind of result 

to pass an error into a yield we shoulc call generator.throw(err) 
inthat case the err is thrown in the line with that yield 

for instance here the yield of 2 + 2 = ? leads an error 

*/

{
    function* gen(){
        try {
            let result = yield "2 + 2 = ? "; // 1 
            console.log("the execution does not ereach here because the exception is throw above ");
            
        } catch(e) {
            console.log(e); // shows the error 
            
        }
    }
    let generator = gen();
    let question =generator.next().value;

    generator.throw(new Error("the answer is not found in my database ")); // 2 
}

/*
the error thrown into the generator at line 2 lead an execpeiton in line 1 with yield 
in above try...catch catches it and show it 

if we dont catch it then just like exception it falls out the genrator into teh calling code 

the current line of the callind code is the lien with generator.throw 
so we can catnch it like this 
*/

{
    function* generate(){
        let result = yield "2 + 2 = ?" ; // error in this lien 
    }

    let generator = generate();
    let question = generator.next().value;

    try {
        generator.throw(new Error ("the answer is not found in my database"));
    } catch (e) {
        console.log(e); // shows the error 
        
    }

    // if we dont catch the error here as usual it falls through to the outer callind code 
    // and if uncaught kills the script 
}

// generator.return 
/*

generator.return(value) finsihes the generator execution and retrune the given value 
*/

{
    function* gen(){
        yield 1;
        yield 2;
        yield 3;
    }
    const g = gen();

    g.next(); // {value : 1, done : false}
   g.return("foo"); // {value : foo , done : true}
    g.next(); // {value : undefined,done : true}
}

/*

if we again use generator.retunr() in a completed generator it will return that value again 
often we dont use it as most of time we want to get all returning values 
but it can be usueful when we want to stop generator in specific condition 
*/

/*
summary 
generator are created by generator function function* f() {}
inside generator only there exist yield  operator 
the outer code and the generator may exchange results via next/yields calls 

in modern js generator are rarely used 
but sometimes comes in handy 
because the ability for function to exchange the data with the calling code during the exeuction is quite unique 
and also great for making iterable objects 

also async generator which are used to read streams of asynchrnously generated data 
eg paginated feteches over a netowrk in for await .. of loops 

in web programming we often work with streamed data 

*/


// tasks // pseudo random generator 
/*
there are many areas where we need random data 
one of them is testing we may need random data : text,numbers,etc to test things out well 

in js we could use Math.random()
but if someting goes wrong we'd liek to be able to repeat the test 
using the same exact data 

for that so called seeded pseudo randome generator are used 
they take a seed first value and then generate the next ones based on a formuale so that same seed 
yields the same sequence and hence the whole flow is easily reproducible 
we only need to remember the seed to repeat it 

an exof such formuale that generates somwhat uniformly distributed values 

next = previous * 16807 % 214783467

if we use 1 as the seed the values will be 
16807
67691782

the task is to create a generator function PsuedoRandomeSeed that takes seed adn creates the generator with formula 

*/

{

    function* psuedoRandom(seed)
    {
        let value = seed;
        while(true){
            value = value * 16807 % 214783467;
            yield value;
        }
    }


    let generator = psuedoRandom(1);
    console.log(generator.next().value);
    console.log(generator.next().value);
    console.log(generator.next().value);


    
}

// we can do the same in regular fucntion 
// but then lose abilty to iterate with for ..of and to use generaator compostion

{
    function psuedoRandom(seed){
        let value = seed;

        return function(){
            value  =value * 16807 % 214783467;
            return value;
        }
    }

    let generator = psuedoRandom(1);

    console.log(generator());
    console.log(generator());
    console.log(generator());


    
}