import {Person} from './person.js'

// named and default export 

export function Promote(){}


export default class Teacher extends Person {
        constructor(name,degree){
            super(name);
            this.degree = degree;
        }

        teach(){
            console.log("teaches as well");
            
        }
    }