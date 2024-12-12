// Recursion and stack 
/*
recursion is a prgramming pattern that is useful in situation when a task  can be naturally split into several tasks 
of the same kind 
or 

when a task can be simplified into an easy action plus simple variant of the same tasks
or to deal with certain data strcuture 

when a function solves a task in the process it can call many other function
a partical case of this is when a function calls itself
that is recursion 

*/


/*

Two ways of thinking 
1. iterative thinking for loop
2. Recursive thinking
*/

{
    function pow(x,n){
        let result = 1;
        for(let i = 0; i < n ; i++ ){
            result *=x;
        }
        return result;
    }

    console.log(pow(2,2));
    console.log(pow(2,3));
    console.log(pow(2,4));

}

{
    function pow(x,n){
        if(n==1) return x;
        else 
        return x*pow(x,n-1);
    }

    /*
    1. if n == 1 that everything is trivial, this is base condition of recursion
    because it immediately produce the obvious result pow(x,1) equal x 
    
    2. otherwise we can represnt pow(x,n) as pow(x,n-1)
    recursive step 
    we lowering the n and mulitply it with x further further until n reaches 1 ;

    so the recursive function reduces a function call to a simple one and then to even simpler and so on until the result becomes obvious

    */

    console.log(pow(2,2));
    console.log(pow(2,3));
    console.log(pow(2,4));

}


{
    // shorter variant of recursion 

    function pow(x,n){
        return (n==1) ? x : (x*pow(x,n-1));
    }

    console.log(pow(2,2));
    console.log(pow(2,3));
    console.log(pow(2,4));


    /*
        the maximal number number of nested calls includign the first one is called recursion depth 
        in this case its exactly n 

        the maximal recursion depth is limiteb by js engine 
        we can rely on it being 10000 some engies even allow more 
        but 100000 is probably out of limite for majority of them 
        there are automatic optimization that help alleviate this 

        that limit the application of recursion but it still remain very wise 
        there are many tasks where a recursive way of thinking gives simpler code and easier to maintain


    */
}


{
    /*
    THE EXECUTION CONTEXT AND STACK
    // how recursive call works 

    the information about the process of execution of a running function is tored in its execution context 

    the exeuction context is an internal ds that contains details about the execution of a function
    where the control flow is now , the curren variables and the value of this (we dont use it here) and few other internal details

    one function call has exactly one execution context associated with it 
    when a function makes a nested call the follwing happens 

    the current function is paused 
    the execution context associated with it is remembered in a special ds called execution context stack
    the nested call executed 
    after it ends the old execution context is retrieved from the stack 
    and the outer function is resumed from where it is stopped 

    so the current context is stored inside execution context 
    and bracktracking happens through the call stack the call stack itself keep track of the sequence of nested calls 
    when one functin finishes its context is popped off and control returns to the context that was paused 
    
    */
}


{
    /*

   1 function pow(x, n) {
   2    if (n == 1) {
   3         return x;
   4     } else {
   5         return x * pow(x, n - 1);
   6     }
   7  }

alert( pow(2, 3) );
        let see pow(2,3) call 

        in the beginning of call pow(2,3) the execution context will store variables x = 2 , n = 3 
        the execution is at line 1 of the function 
        pow(2,3)

        that when the function start to execute the condition n==1 is falsy 
        so the flow continues into the second branch of if 

        the variables are same but the lin chanes so the context is now 
        context : {x : 2 , n : 3} at line 5 } call : pow(2,3)

        to calculate x * pow(x,n-1) we need to make a sub call of pow with new arguments pow(2,2)



        pow(2,2)

        to do a nested call js remember that current exeuction context in the execution context stack.

        here we call the same function pow , 
        but it absolution doesnot matter the process is the same for all function 

        1. the currennt context is remembered on top of stack
        2. the new context is created for the subcall
        3. when the subcall is finished - its exeuction conetxt is popped and the previous context now comes to top of stack from the stack and its execution continues

        context stack when we entered the subcall pow(2,2)
          context : {x : 2 , n : 2} at line 5 } call : pow(2,2)
           context : {x : 2 , n : 3} at line 5 } call : pow(2,3)
         


        // note that in this example there only one subcall in line but generally 
         a single loc may containe multiple subcalls like pow(..) + pow(...) + somethingelse()

         so it would be more precise to say the exeuction resume immeadiealty after hthe subcall



         pow(2,1)
         the process repeats a new subcall is made at line 5 now with arugment x= 2 n = 1
           context : {x : 2 , n : 1} at line 5 } call : pow(2,1)
           context : {x : 2 , n : 2} at line 5 } call : pow(2,2)
           context : {x : 2 , n : 3} at line 5 } call : pow(2,3)
           
           a new exeuction context is created and added on top of the stack 

           ther are 2 old context now and 1 is currently running for pow(2,1)

           the exit 
           during the exuection of pow(2,1) unlike before the 
           base condition matches n == 1 is ttruthy 
           so the first branch of if works 

           ther are no more nested calls so the function finiesh returning 2 
           now as the function pow(2,1) finished 
           its exeuction context is not needed anymore 
           so its removed from the memory 
           the preiovus one is restored off the top of the stack
            context : {x : 2 , n : 2} at line 5 } call : pow(2,2)

           context : {x : 2 , n : 3} at line 5 } call : pow(2,3)

            the exeuction of pow(2,2) is resumed 
            it has the result of the subcall pow(2,1) so it also can finisehs the evalution of 
            x * pow(x,n-1) returning 4 

            now as the function pow(2,2) is also finished
            its exuection context is not needed anymore 
            so removed form the moemroy 
            the prevsiou one is restored off the top of stack 
            
            context : {x : 2 , n : 3} at line 5 } call : pow(2,3)
            when it finisehds we have reesult 8 

            the reucsion depth in this case is 3 

            note the requirement 
            contexts takes memory 
            in out case raising to the power of n 
            actually reuiqres the memory of n contexts for all lower values of n
            
            a loop based algo is mmore moery saving 

            function pow(x,n)
            {
            let result = 1 ;
            for(let i =0;i<n;i++)
            {
            result *= x;
            }
            
            }

            the iteravie pow uses a single context chaing i and result in the processs
            its memory requiresm are small fixed and do not depend on n 

            any recursion can be written as a loop 
            the loop vairant usually can be made more effective

            but sometimes ther rewrite is non trivial especailly 
            when a function uses differcne rercusive subcalls 
            depending on condition nad merges theri result or when branching is more itnricate 
            and the otpimzatin may be unneeded and toally not worth the effecots 

            recursion can give a shorted codde easire to undestand and support
            optimzatin are not required in every place , mostly we need good code 
            
    */
}


{
    /*
    RECURSIVE TRAVERSALS

    another great application of the recusion is a recusion traversal 

    imagine we have a compnay the staff strcuutre can be presentd as on objcet 


    */

    let company = {
        // company object contains collection collection of departments key/value pairs 
        // where key is departments and there value is sales memeber 

        // sales key stores value array ie array that contains list of people
        sales : [
            {
                name : "john",
                salary : 70000,
            },
            {
                name : "smith",
                salary : 34000,
            }
        ],
        //company contains development
        development :{
                whatsapp :  {
                    frontend : [

                    {
                        name : "rock",
                        salary : 22000,
                    }
                    ],

                    backend : 
                    [
                        {
                            name : "rayn",
                            salary : 24550,
                        }

                    ]
                    
    
                },
    
                sms : [
                    {
                        name : "mahi",
                        salary : 19000,
                    }
                ]
            }

            

        };
        

}

/*
company has departments 
a department may have an array of staff 
for instance sales has 2 emp john and smith

or department may split into two subdepartments
like develoment has two branches sites and uiUX
each of them has theri own staff

it can be further breakdown 
liek sites can have siteA and siteB

now let say we want a function to get sum of all salaries 

an iterative approach is not easy 
because the struc is not simple 
the firs may be to make a for loop 
over company 
with nested subloop over 1st level departments 
but then we need more nested subloops to iterave over the staff in 2nd level dep like sites 
and then antoher sub loop insdie those for a 3rd elvel 
too ugly all othis 

lets try recursion 
as we can see when out function gets department to sum 
// ther are two possibel cases 
1. either its a simple dep with an array of people then we can sum the salaries in a simple loop
2. or its object wtth n subdepts then we can make N recursive calls to get the sum for each of the subdep and combine the resutls 


*/

{
    let development = {
        frontend : [
            { 
                name : "pratik",
                salary : 20000
            },
            {
                name : "navin",
                salary : 15000
            }
        ]
    };


    // console.log(development.frontend[0]);
    
    function salaries(development){
        let sum = 0;
     for(let value of Object.values(development))
        {
            for(let key of value)
            {
                sum +=key.salary;
                console.log( key.salary);
                
            }
            
        }   
        console.log(sum);
        
    }

    salaries(development);


}


{
    let company = {
        sales : [{name : 'John', salary : 2000}, {name : "alice", salary : 3000 }],
        development : {
            sites : [{name : 'pratik', salary : 1500}, {name : 'Alex' , salary : 800}],
            internals : [{name : 'Jack', salary : 1300}]
        }
    };

    function sumOfSal(department){
        //case 1 
        if(Array.isArray(department)){  
            return department.reduce((prev,current) => {
                return prev+ current.salary;
            },0);
        }
        else {
            let sum = 0;
            for(let subdep of Object.values(department))
            {
                sum += sumOfSal(subdep);
            }
            return sum;
        }
        
    }

    console.log(sumOfSal(company));


}

// Recursive structures 

/*

a recursive ds is a structure that replicates itself in parts 

// as seen before
// company dept is 
// either an array of people 
// or an object with dept.

// in web dev eg like html and xml dcoument 
// in html doc an html tag may contain of list of 
text pieces
html comments 
other html tags that in turn may contains ttext peices / html comments 
that is once again a recursive definition

// one-linerR :- recursive think about base condition put that in if and in else part make the function more simpler 

*/


/*

linked list 
we want to store an ordered list of objects 
ordered list ? array of objects ?

let arr = [ obj1 , obj2, obj3, obj4];

but aint the deletion and insert elemnt operation are expensive 
for instance arr.unshift(obj) operation has to renumber all element to make a room for a new ojb 
if the array is big it takes time, same with arr.shift()

the only structural modification that do not requires mass -renumbering are those that operation with end of 
array
arr.push/pop

so an array can be quite slow for big queue when we have to work iwht the begiing 




*/

{
    // alternatively if we reall need fast interstion/deletion we can choose another ds called linked list

// the linked list element is recusrively defines as object with 
// value 
// next property referenicng the next linked list element or null if that end 

    let list = {
        value : 1 ,
        next : {
            value : 2,
            next : {
                value : 3,
                next : {
                    value : 4,
                    next : {
                        value : 5,
                        next : null,
                    }
                }
            }
        }
    };


    // alternative code ofr creation 
    list = {value : 1};
    list.next = {value : 2};
    list.next.next = {value : 3};
    list.next.next.next = {value : 4};
    list.next.next.next.next = null;
    
    /*
    we can see more cleary see that there are multiple object each one has the value and next pointint to the neightbout 
    the list vairalbe is first object in the chain , so the follwing next pointer from it we can reach nay element

    the list can be easily split into multiple parts and alter joined back;

    */

    let secondList = list.next.next; // 3 and 4 
    // console.log(secondList);

    list.next.next = null;

    // console.log(list);  1 2 as we deleted list.next.next made it null

    // to join
    list.next.next = secondList;

    // console.log(list); 
    

    // surely we can insert or remove items in any place 
    // for instance to prepend a new value , we need to update the head of the list 

    list = {value : "next item" , next : list};

    console.log(list);
    
    // to remove the value from the middle group, change the next of previosou one 

    list.next = list.next.next; // the next with value 1 we assigned with next furhter one

    console.log(list);
    

    // we made list.next jump over 1 to value 2 
    // the value 1 is now exluced from the chain if its not stored anywhere else 
    // it will be autmocally removed from the memory 

    // unlike array there no mass renumbering we can easily rearrange elements 

    // naturallly list are not always better than array otherwise everyonw would use only list

    // the main drawback is the we cant easily aceees an element by its number 
    // in an array arr[n] is an direct referencec 
    // but in the list we need to start from the first item and go next N times to get the Nth element

    // but we dont always need such operations 
    // when we need a quee or even a deqeue the ordered structure that must allow very fast adding/removing
    // elements from both ends but access to its middle is not eeded

    /*
    list can be enhanced 
    we can add property prev in addiont to next to reference the previ element to move back easily
    we can also add a vraible name tail reference the last elemetn of the list and update it when adding/rmeoving elements from the end
    the ds may vary according to our needs
    */


     


}


/*
summaary
recursion is a programming terms that means calling a function from iteself 
recursive function can be used to solve tasks 

when a function call itself that called a recursion step the basis of recursion is function arugments taht 
make a the tasks sosimple that the function does make further calls 

//Recursion involves a function calling itself repeatedly to solve smaller instances of the same problem.
To prevent infinite recursion, every recursive function needs a base case—a condition where the function stops calling itself.

a recursively defined ds is a ds that can be defined using itself

// for instance the linked list can be defined as a ds consition of an object reference a list or null;
list = { value, next -> list}

tree lieks html elemnet tree or dept tree liek we seen above are naturally recursive they have branches
and every branch can havae other branches 

recursive function can be used to walk them 

any reucsive function can be rewritten to an iterative one 
and ths sometimes reuriest to optimizes stuff 
but for many tasks a recusive solution is fast enought and easier to write and support


*/

// task 1 
// sum all number till the given one 

{
    // variant 1 using for loop
    function sumTo(n){
        let sum = 0;

        for(let i=1; i<=n; i++){
            sum += i;
        }

        return sum;
    }
    console.log(sumTo(100));
    
}

{
    // variant 2 using recursion 
    function sumTo(n){
        if(n == 1)
            return 1;
        else {
            
            return n + sumTo(n-1);
        }

    }
    console.log(sumTo(100));
    
}

{
    // variant three using recursion 

    function sumTo(n){
        if(n > 1){
            return n + sumTo(n-1);
        }
        if(n==1)
        {
            return 1 ;
        }
            
    }

    console.log(sumTo(100));
    

}


{
    // variant 3 using arithmetica formuale
    function sumTo(n){
        return n * ((n+1)/2);
    }

    console.log(sumTo(100));
    
}


// the arthimetic forumal is fastest
// the loop variant is the second in term of speed
// in both loop and recusrive we sum the same number;
// but in recurive invloded nested calls and execution stack managemnet 
// that also takes resources so its slower




// tasks 2 factorial
{
    function factorial(n){
        if(n > 1)
        {
            return n * factorial(n-1);
        }
        else {
            return n;
        }
    }

    console.log(factorial(5));
    
}

// tasks 3 fibonnaci 
{

    function fib(n){
        if (n <= 1) {
            return n;
        }    
        else {
            return fib(n-1) + fib(n-2);
        }
    }
    console.log(fib(3));

    // call and evaluation same thing multiples times like fib(3) would be called by b oth sside in fib(5)
    // same values are reevauled again and again

    
}

{
    //faster fibonnaic  
    function fib(n){
        let a = 1 , b = 1;
        
    for(let i = 3 ;i<=n;i++)
        {
            let c = a +b;
            
            a = b;
            b = c ;
            
            
        }
        return b ;
    
    }
    console.log(fib(5));
// the loop start with i = 3 because the first and second sequence values are hard coded into var a = 1 b = 1
// the approeach is called dynamic programming bott up     
}

// tasks 4 output a single linked list 
{
    let list = {
        value : 1,
        next : {
            value : 2,
            next : {
                value : 3,
                next : {
                    value : null,
                }
            }
        }
    };

    function printList(list)
    {
        let temp = list;
        while(temp)
        {
            console.log(temp.value);
            temp = temp.next;
            
        }
    }
    // we could use the list instead of temp 
    // but then that not adivisble to ched chad with og like if we change list the og list would be 
    // affected which we might be useing somerwhere else too

printList(list);
    
}


{
    //revusrive list 
    let list = {
        value : 1,
        next : {
            value : 2,
            next : {
                value : 3 ,
                next : {
                    value : null,
                }
            }
        }
    };

    function printList(list)
    {
        console.log(list.value);
       if(list.next){
        printList(list.next)
       } 
        
    }
    printList(list);

    // so to remember is when does list.next becomes undefined 
}

// tasks 5 output a single linked list in the reverse order 
{

    // recurstion variant 
    let list = {
        value : 1 ,
        next : {
            value : 2,
            next : {
                value : 3,
                next : {
                    value : null,
                }
            }
        }
    };

    function printReverseList(list)
    {
       if(list.next)
       {
        printReverseList(list.next);
       }
       
       console.log(list.value);
       
    }
    printReverseList(list);
}


{
    // loop vairant 
    let list = {
        value : 1,
        next : {
            value : 2,
            next : {
                value : 3,
                next : {
                    value : null,
                }
            }
        }
    };
    
    function printReverseList(list)
    {
        let arr = [];
        let temp = list;

        while(temp)
        {
            arr.push(temp.value);
            temp = temp.next;
        }
        
        // now reverse an array

        for(let i = arr.length-1;i >=0 ; i--)
        {
            console.log(arr[i]);
            
        }

        
    }

    printReverseList(list);

}

// please not that recusive solution actually does exactly the same 
// it follow the list 
// remeers the items in the chain of nested calls (in execution context stack)
// and then output them