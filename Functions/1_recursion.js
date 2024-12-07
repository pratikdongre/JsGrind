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
        sales : [
            {
                name : "john",
                salary : 70000,
            },
            {
                name : "smith",
                salary : 34000,
            }],

         development :{
                sites :
                
                {
                    siteA : [

                    {
                        name : "rock",
                        salary : 22000,
                    }
                    ],
                    siteB : 
                    [
                        {
                            name : "rayn",
                            salary : 24550,
                        }

                    ]
                    
    
                },
    
                UiUx : [
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
ther firs may be to make a for loop 
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

