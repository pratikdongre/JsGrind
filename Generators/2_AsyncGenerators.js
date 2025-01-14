// async iterators and generators 
/*
asynchrnous iteration allow us to iterate over data that comes asyncrhonously on demand 
like 
when we donwload someting chunk by chunk over a network 
and asyncrhonous generators make it even more convients 
*/

// Recall iterables 
// the idea is that we have an object such as range 
{
    let range = {
        from : 1,
        to : 5,
    };

    /*

    we like to use for ..of loop on it such as for(value of range) to get values from 1 to 5 
    in other words we wnat to add an iteration ability to the object 

    that can be implemented using a speical method with the name Symbol.iterator
    the method is called in by the for ..of construct when the loop is started and it should return an object 
    with the next method 

    for each iteration the next() method is invoked for the next value 

    the next() should return a value in the form {done : true/false, value: <loop value>}
    where done : true means end of the loop
    */

    
}

{
    let range = {
        from : 1,
        to : 5,

        [Symbol.iterator](){ // called once,in the beginning of for ...of 
            return {
                current : this.from,
                last : this.to,

                next() { // called every iteration to get the next value 
                    if(this.current <= this.last){
                        return { done : false ,value : this.current++};
                    } else {
                        return { done : true};
                    }

                }
            };
        }
    };

    for(let value of range){
        console.log(value);
        
    }
}

// Async iterable 
{
    /*
        Asynchronous iteration is needed when value come asynchronously after setTimeout or another kind of delay

        the most common case is that the object needs to make a network request deliver the next value 

        to make an object iterable asynchronously 
        1. use Symbol.asyncIterator instead of Symbol.iterator 
        2. The next() method should return a promise (to be fulfilled with the next value )
            the sync keyword handles it we can simply make async next()
        3. to iterate over such an object we should use a for await (let item of iterable ) loop
         note the await word 
    */
}

{
    // as a starting example lets make an iterable range object similar like the one before 
    // but now it will return values asynchronously one per sec 

    // all we need to do is to perform a few replacement 
    {
        let range = {
            from : 1,
            to : 5,

            [Symbol.asyncIterator](){ // 1 
                return {
                    current : this.from,
                    last : this.to,

                    async next() { // 2
                        // note we can use await inside the async next 
                        await new Promise(resolve => setTimeout(resolve,1000)); // 3
                        if(this.current <= this.last){
                            return {done : false,value : this.current++}; 
                        } else {
                            return { done : true};
                        }
                    }
                };
            }
        };

        (async ()=> {
            for await (let value of range){ // 4
                console.log(value);
                
            }
        })()
    }
}


/*
as we can see the strucutre is quite similar to regular iterators 
1. to make an object asynchronously iterable it must have Symbol.asyncIterator 
2. this method must return the object with next() method returning a promise 2 
3. the next() method does not have to be async it may be a regular method returning a promise but 
async allows us to use await so thats convinient , here we delay of a second
4. to iterate we use for await  (let value of range) namely add await after for 
it calls range[Symbol.asyncIterator]() once ,and then its next() for values 
*/

/*
difference                                        iterators              asynciterators
Object method to provide iterator                  SYmbol.iterator        Symbol.asyncIterator
next() return value is                            any value               Promise
to loop,use                                       for ...of               for await..of
*/


/*
the spread syntax ... does not work asyncrhonously 
featueres that require regular,syncrhonous iterators , dont work with asyncrhonous ones 
for instance 
a spreead syntax wont work 
alert([...range]);
// error no symbol.iterator

that natural as it expects to find  SYmbol.iterator, not Symbol.asyncIterator
it also the case for for..of : the syntax without await needs symbol.iterator


*/


// Recall generators 
/*
they allow to make iteration code shorter 
most of the time we like to make iterable 

for sheer simplicity they are function that generate yield (values)

generators are labelled with function* and use yield to generate a value then we can use for ..of 
to loop over them 

*/

{
    function* generateSequence(start,end){
        for(let i = start;i <= end; i++){
            yield i;
        }
    }

    for(let value of generateSequence(1,5)){
        console.log(value);
        
    }


    
}

{
        // as already know to mkae an object iterable   we should add SYmbol.iterable to it 
    let range = {
        from  : 1,
        to : 5,

        [Symbol.iterator](){
            // return // object with next to make range iterable 
        }
    }
}


{
    // a common proactice for symbol.iterator is to return a generator 
    let range = {
        from : 10,
        to : 15,

        *[Symbol.iterator](){ // a shorthand for [Symbol.iterator] : function*()
            for(let value = this.from; value <= this.to; value++){
                yield value;
            }

        }
    };


    for(let value of range){
        console.log(value);
        
    }
}

/*
in regualr generators we cant use await 
all values must come syncrhonously as required by the for ...of construct 

but if we like to get asyncrhonoulsy from netwrok requrest 

*/

// Async generators (finally) 
/*
for most practical application when we like to make an object that asynchronously generates a sequence of values 
we can use an asyncrhonous generator 

the syntax is simple prepend function*  with async this makes the generator asynchronous 
and then use for await (...) to iterate over it like this 
*/

{
    async function* generateSequence(start,end){
        for(let i = start; i<=end ;i++){
            await new Promise(resolve => setTimeout(resolve,1000));

            yield i;
        }
    }

    (async () => {
        let generator = generateSequence(20,25);
        for await(let value of generator) {
            console.log(value);
            
        }
    })();
}

/*
as the generator is asyncrhonous we can use await inside it rely on promises perform network requrest and so on 

under the hood difference
for async generators the generator.next() methods is asyncrhonous it retunrs promsie

in a regualr generator we use result = generator.next() to get values 
in async generator we should add await 
result = await generator.next()
// result  = {value : ...,done : true/false}

tahts why async generators work with for await of 

*/


// async iterable range 
/*
Regular generatosrs can be used as Symbol.iterator  to make the iteration code shorter 
simirl to that async generator can be used as Symbol.asyncIterator to implement the asynchronous iteration

for instnce we can make the range object generate values asynchronously once per sec by replacing 
by replacing syncrhonous Symbol.iterator with asyncrhonous  Symbol.asyncIterator

*/
{
    let range = {
        from : 30,
        to : 35,

        // this line is  same as [Symbol.asyncIterator] : async function*() {}
        async *[Symbol.asyncIterator](){
            for(let value =  this.from;value <= this.to; value++){
                // make a puse between value and wait for something 

                await new Promise(resolve => setTimeout(resovle,1000));
                yield value;
            }
        }
    };

    (async () => {
        for await (let value of range){
            console.log(value);
            
        }
    })();

    // now values comes with a delay for 1 sec between them 

}

/*
we can add both Symbol.iterator and SYmbol.asyncIterator to the object so its boht 
asynchronously for..of  and asyncrhonously for await of iterable 
*/


/*
Real life Paginated data 

ther are many online services that delive paginated data 
for instance when we need a list of users a request 
returns a predefined count eg 100 users - one page 
and provide a url to next page 

the patters is very common 
it not about users but just about anything 

for instance github allows us to retrive commit in the same , paginated fashion

we should make a request to fetch in the form
https://api.github.com/repos/<repo>/commits
it responsds with json of 30 commits and also provides a link to the next page in the link header 
then we can use that link for the next reqruest to get more commit and so on 


let make a simple function to get commits 
function fetchCommits(repo) that gets commits for us making request whenever needed
and let it care about all pagination stuff 
fot us it will be simple async iteration for await of 

{
    for await  (let commit of fetchCommit('username/repository'))
    // process commit 
}

*/


{
    // a function impelemented as async generator 

    async function* fetchCommits(repo){
        let url =  `https://api.github.com/repos/${repo}/commits`;

        while(url){
            const response = await fetch(url, { // 1    
                headers : {'User-Agent' : 'Our Script'},
                // github need any useragent headr

            });
            const body = await response.json(); 
            // 2 response is json array of commits;

            // 3 url of the next page is in the headers extract it 
            let nextPage = respone.headers.get('Link').match(/<(.*?)>; rel = "next"/);
            nextPage = nextPage?.[1];

            url = nextPage;

            for(let commit of body){
                // 4 yeild commits one by one until the page end 
                yield commit;
            }
        }
    }
}

// more explaination 