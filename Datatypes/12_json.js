// json methods 
/*
let say ew have a complex object 
we like to convert it to  string 
sent it over a netwrok or just output if for loggin purpose 

// naturally such a string shoudl include all importnat properties 


*/

let user = {
    name : "john",
    age : 30,

    toString(){
        return `{name : "${this.name} , age : ${this.age}}`;
    }
};

console.log(user.toString());


/*
but inthe process of development a
a new property are added
old property are reanamed and rmeoved 
updating such toString every time can become a pain 
we could try to looop over properties in it .
but what if the object is complext and has nested object in propertiers 
we would need to impelment theri conversion as well 

*/

// JSON.stringify
// the json is javascript object notattion is a general format to repretn values and objects 
// initially made for js but other lang have libraried to handle it as well
// so its easy to use json for data exchnage when the client user js and ther server is written on rubu/php/java/whatever

// js provies methods 
// JSON.stringify to convert object into json 
// JSON.parse to convert JSON back into a object 

// for instance here we JSON.stringify a student 

let student = {
    name : "John",
    age : 22,
    isAdmin : true,
    course : ['html', "css", "js"],
    spouse : null,
};

let json = JSON.stringify(student);

console.log(json);
// the method JSON.stringify(student) takes the object and convert it into a string

// the result json string is called JSON-encoded or serialized or marshalled object 
// we are ready to sent it over the wire or put into a plain data store 

// between JSON- encoded - object and object literal
// there are some difference 
// strings use double quotes , no single quotes or backticks in JSON 
// so 'john' becomes "John"
// object property names are double quoted as well , thats obligatory so age : 30 becomes "age" : 30.

// JSON.stringify can ve applied to primitves as well 
// JSON support following data types 
// object {...}  
// array [...]
// primitives strings numbers ,boolean values true/false null.

console.log(JSON.stringify(1));
console.log(JSON.stringify("test"));
console.log(JSON.stringify(true));
console.log(JSON.stringify(["refuse",2,"sink"]));

// json is data only lanaguage independent specification 
// some js specifc object properties are skipped by JSON.stringify
// they are function proeprties (methods) 
// SYmboli keys and vlaues
// propeties that store undefiend


user = {
    SayHi(){
        console.log("hi");
    },
    [Symbol("id")] : 123,
    something : undefined,
};

console.log(JSON.stringify(user));

// great thing is that nested object are supported and converted automatically

let meetup = {
    title : "conference",
    room : {
        number : 123,
        participants : ["JOhn", "weak"],
    }
};

console.log(JSON.stringify(meetup));
// stringified // or got JSON encoded

// the important limitation there must be no ciruclare reference 
{
    let room = {
        number : 23
    };


    let meetup = {
        title : "Conference",
        participants : ["John", "weak"],
    };

    meetup.place = room;// meetup reference room
    room.occupiedBy = meetup; // room reference meetup

    // JSON.stringify(meetup); error
    // becuase of circulre reference 


}

// EXcluding and transforming: replacer 

//  json = JSON.stringify(value[,replacer,space])

// value a value to encode 
// replace array of peroties to encode or a mapping function function(key,value)
// space amount of space to use for formatting 

// most of the time JSON.strinfigy is used with the first argument only
// but if we need to fine tune the replace process , like to filter out circulare referecens 
// we can use the second argument of JSON.stringify

// if we pass an array of propreties to it , only these properties will be encoded

{
    let room = {
        number : 23,
    }

    let meetup = {
        title : "Conferer",
        participants : [{name : "pratik" }, {name : "alice"}],
        place : room , // meetup reference room
    }

    room.occupiedBy = meetup;
    console.log(JSON.stringify(meetup,['title','participants']));
    // {"title":"Conferer","participants":[{},{}]}

    // too strict 
    // the property list is applied to the whle object strucutre 
    // so the obj in participants are emtpy because name is not in the list 

    // let add nested properties also 
    console.log(JSON.stringify(meetup,["title","participants","name","place","number"]));
    //{"title":"Conferer","participants":[{"name":"pratik"},{"name":"alice"}],"place":{"number":23}}

    // now eveyrthint is serialized or json encoded except occupiedBY
    // but the list of prop is quite long 

    // fortunaely we can use a function instead of an array as the repalce 

    // the functino will be called for every (key,value) pairs and should retunr the "replace" value which will be used instead 
    // the og one or udnefiend if the vlaue is to be skipped 

    // so as the prop is too long 
    // we can use function as replacer


}

{
    let room = {
        number : 40,

    }

    let meetup  = {
        title : "CONf",
        participants : [{name : "raj"} , {name : "notme"}],
        place : room,
    };
    room.occupiedBy = meetup;

    console.log(JSON.stringify(meetup,function replacer(key,value){
        console.log(`${key} : ${value}`);
        return (key == 'occupiedBy') ? undefined : value;
        
    }));
    

    /*
Please note that replacer function gets every key/value pair including nested objects and array items.
 It is applied recursively. The value of this inside replacer is the object that contains the current property.

The first call is special. It is made using a special “wrapper object”: {"": meetup}. 
In other words, the first (key, value) pair has an empty key, and the value is the target object as a whole.
 That’s why the first line is ":[object Object]" in the example above.

The idea is to provide as much power for replacer as possible: 
it has a chance to analyze and replace/skip even the whole object if necessary.
    */
}

// Formatting Space 
// the third argument of JSON.stringify(value,replacer,space)
// is the nubmer od spae to use for pretyy formatting 

// preivously all JSON encoded object had no indent and extra space .
// that find if we want to send an object ove a netwerok 
// the space arugment is used exlusiver for a nice output 

// here space = 2 
// telss js to shw nested object on multiples lines with indetation of 2 spaces insside an object 

{
    let user = {
        name : "john",
        age : 25,
        roles : {
            isAdmin : false,
            isEditor : true,
        },
    };

    console.log(JSON.stringify(user,null,"-"));
    console.log(JSON.stringify(user,null,4));

// the third argumnet can be string then the string is sued for indentation
// insteaf of number of spaces 
// so the space param is used solely for loogin and nice output purposes.    
}


//CUstom "toJSON"
{
    /*
        like toString for string conversion an object , 
        //object may provide method toJSOn for to-JSON conversion
        // JSON.stringify automatically calls if its available.
    */

    let room = {
        number : 666,
    }

    let meetup = {
        title : "Couple",
        date : new Date(Date.UTC(2024,11,6)),
        room
    };

    console.log(JSON.stringify(meetup));
    // date became string 
    // the bacuse all dates havee a builtin JSON method which returns such kind of string
        

    
}

{
    // letd add a custom toJSON ofr our object 
    let room = {
        number : 666,
        toJSON(){
            return this.number;
        }
    }

    let meetup = {
        title : "Couple",
        date : new Date(Date.UTC(2024,11,6)),
        room
    };

    console.log(JSON.stringify(meetup)); // insetead of room : {number : 666} we got room : {666}
    console.log(JSON.stringify(room)); // 666

    //As we can see, toJSON is used both for the direct call JSON.stringify(room) 
    // and when room is nested in another encoded object.
    // so in summary toJSOn defines how an ojbect should be serilized to JSON format when JSon.stringify called 
}


{
    let obj = {name : "alice"};
    console.log(String(obj)); // we got [object object]

    obj.toString = function (){
        return `name : ${this.name}`;
    };
    console.log(String(obj));
    

     user = {name : "Alice", age : 25},
    user.toJSON = function(){
        return {name : this.name};
    }
    console.log(JSON.stringify(user)); // see using toJSON we serialized
    // both toJSON and toString are having automatic invoation
    // automcaticall called 
    
    
    
}

{
    // JSON.parse
    // to decode a json string we need another method names JSON.parse.
    // let value = JSON.parse(str[,reviver])

    // str json string to parse 
    // reviver optional functin(key,value) that will be called for each(key,value) pair anc can transform the value

    let number = "[0,1,2,3,4]";
    number = JSON.parse(number);
    console.log( number);
    

    // for nested object 

    let userDate = '{"name" : "John", "age" : 35, "isAdmin" : "false", "friends" : [0,1,2,3]}';
    let user = JSON.parse(userDate);

    console.log(user.friends[1]);

    // the json may be as complex as necesasayr objecct and arrys can include other ojbect and array 
    // but they must obey the same json format

    /*
    let json = '{
        name : "John",                 // mistake property name without double quotes
        "surname" : 'Smith',           // single quote in value must be double quote
        'isAdmin' : false,              // single quotes in key 
        "birthday" : new Date(2000,2,3), //  no "new" is allowed only bare values 
        "friends" : [0,1,2,3]            // here all fine 
        
    }';

    besided json does not support comments 
    there another format json5 that supports unqoted keyn comments but this is standalone lib not in the speicifaction of the lang 
    
    the regular json is that strict not because dev were lazy but to allow easy,reliable and ery fast implementation 
    of parsing algo 


    */
    

}


{
    // using reviver

    // we got stringified meetup object from the server 
    let str = '{"title" : "Conference", "date" : "2018-11-30T12:00:00.000Z"}';
    // and now we need to deserilized it to turn back into js object

    let meetup  = JSON.parse(str);

    // console.log(meetup.date.getDate()); error 
        // the vlaue meetup.date is string and not an object 
        // how could json.parse know that it should trnaform that string into date 

        // llet use reviving function as the second argument that returns all values as it is 
        // but date will become a date 

        meetup = JSON.parse(str, function(key,value){
            if(key =='date') return new Date(value);
            return value;
        });

        // either we can exlucde it while stringify or 
        // use reviveer whie parsing to not get an error
        console.log(meetup.date.getDate()); // now we got it 
        
       
    


}   


{
    // let schedule = '{}'; this works 
    // but for multiple line of string use backticks
    let schedule = `{
    "meetups" : [
                {"title" : "Conference", "date" : "2017-11-30T12:00:00.000Z"},
                {"title" : "Birthday" , "date" : "2017-04-18T12:00:00.000Z"}
        ]
    }`;

    schedule = JSON.parse(schedule, function (key,value){
        if (key == 'date' ) return new Date(value);
        return value;
    });

    console.log(schedule.meetups[0].date.getDate());
    
}


{
    /*
    json is data format that has it own dependent standar and libr for most prog langa
    json support plain object array string number boolean and null
    js provied methods such as JSON.stringify to serlized (json-encoded object) 
    and JSON.parse() to read from JSON
    both methods support transformer function for smart reading/writing
    if n object has toJSOn then it is called by JSON.stringify
    */


}

// tasks


{
    // turn the object into json and back

    let user = {
      name : "John smith",
      age : 35,  
    };

    let json = JSON.stringify(user);
    console.log(json);

    let backToString = JSON.parse(json);

    console.log(backToString);
    
    
}


{
    // exclude backreference 

    let room = {
        number : 23,
    };

    let meetup = {
        title :"Conferece",
        occupiedBy : [{name : "john"}, {name : "alice"}],
        place : room,

    };

    // circulare reference 
    room.occupiedBy = meetup;
    meetup.place = room;

    console.log(JSON.stringify(meetup, function replacer(key,value){
       return (key != '' && value == meetup) ? undefined : value; 
       // we use key!='' because the root key "" is empty string for root object meetup
       // so exclude reference and by key!=="" we ensure that root is not excluded 
       // as the root is key "" and value is meetup so 
    }));


    console.log(JSON.stringify(meetup,["title","occupiedBy","name"]));
    
    


}


