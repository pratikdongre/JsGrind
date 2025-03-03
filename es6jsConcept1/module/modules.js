import {Person} from './person.js';

// import {Teacher } from './teacher.js'; // named export 

// but if we had default export 

// defautl -> import ... from '';
// named -> import {...} from '';

//we can have both as well 
import Teacher, {Promote} from './teacher.js'
// we see it in react like 
// import react , {component} from 'react';
// we are importing react which is a default class and compononend which is a named from react 
  
    const person = new Person("pratik");
    person.walk();

   
    const teacher = new Teacher("Tanvi","BE");
    console.log(teacher);
    
    

