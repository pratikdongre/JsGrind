// private and protected properteis and methods 

// one of the most imp principel of oop is that delimiting internal interface from the external one 

// that is a must practice in developing anything more than complex than a hello world app 

// internal and external interface 

// in object oriented programming , properties and methods are split into two groups 
// internal interface - method and properties ,accesisble from other methods of the class but not from the outside the class 
// external interface - method and properties accessible also from outside the class 

/*

in js there are two types of object fiels properties and methods 

public accessible from anywhere they comprise the extertnal interface 
private accesislbe only from inside of the classs there are for internal interface 

in other lang there also exsits protected fields 
which can be accesed by the inheriting class 


*/


// protecting WaterAmount

{
    class CoffeeMachine{
        waterAmount = 0;
        // the amt of water inside 

        constructor (power){
            this.power =power;
            console.log(`Created a coffee machine , power : ${power}`);
        }
    }

    let coffeeMachine = new CoffeeMachine(100);

    // add water 
    coffeeMachine.waterAmount = 200;
}

/*
the props waterAMount and power are public 
we can easilye get /set them from the outside to any value 

let cahnge waterAMount property to protect to have more control over it 
//we dont want anyone to set it bewlo zero

properties properties are usually prefixed with aan _ underscore 

that is not enfored on the lang level 
bgut there well known convention between progr that such prop and method should not be accesed from the outside 

so our prop will be called _waterAMount
*/

{
    class CoffeeMachine {
        _waterAmount = 0;

        set waterAmount(value){
            if(value < 0)
            {
                value = 0;
            }
            this._waterAmount = value;
        }

        get waterAmount(){
            return this._waterAmount
        }

        constructor(power){
            this._power = power;
        }
    }

    let coffeeMachine = new CoffeeMachine(200);


    coffeeMachine.waterAmount = -10;
    console.log(coffeeMachine); // still zero waterAMoutn 

}


// read Only power 
/*
for pwoer property let make it read only 
it sometimes happens that a property must be set at creation time only and then never modified 

for coffeeMachine the power never changes 
to do so we only need to mkae getter but not the setter 

*/

{
    class CoffeeMachine {
        constructor(power){
            this._power = power ;
        }

        get power(){
            return this._power;
        }
    }

    let coffeeMachine = new CoffeeMachine(100);
    // console.log(`Power is ${coffeeMachine.power}W`);

    coffeeMachine.power = 25; // no effect 
    console.log(`Power is ${coffeeMachine.power}W`);

}


/*
here we used getter /setter 
but most of the time get.../ set.... function are prefffered 

*/

{
    class CoffeeMachine {
        _waterAmount = 0;
        setWaterAmount(value){
            if(value < 0){
                value = 0;
            }
            this._waterAmount = value;
        }

        getWaterAmount(){
            return this._waterAmount;
        }
    }

   let m =  new CoffeeMachine();
   m.setWaterAmount(20);
   console.log(m.getWaterAmount());

    // functions are also flexible they can accept multiple argumetns  // (if it deso not make sense let it be )
    // even if we dont need them right now 
    // one the other hand get/set syntax is shorter 
}

/*
protected fiels are inhertied 
if we inherit class MEgaMachine extends CoffeeMachine then we even access this._waterAmount or this._power
form the methos of new class 
so protected fiels are naturally inheritable 
unlike pprivate ones 
*/

/*
Private #waterLimit

priavate should start with # 
they are only accessible from the inside of the class 

for instance #waterLimit property and the water-checking private method #fixeWaterAmount

*/

{
    class CoffeeMachine{
        #waterLimit = 200;

        #fixWaterAmount(value){
            if(value < 0) return 0;
            if  (value > this.#waterLimit) return this.#waterLimit; 
        }

        setWaterAMount(value){
            this.#waterLimit = this.#fixWaterAmount(value);
        }
    }
    let coffeeMachine = new CoffeeMachine();

    // coffeeMachine.#fixWaterAMount(123); // error 
    // coffeeMachine.#waterlimit = 1000; // error 


}

/*
# is a speical sign that the field is private 
we cant access it from outside or from inherting class 


private fiels do not conflict with public ones 
we can have both private #waterAmoutn and public WaterAmount fiels at the same time 

// make waterAmount an accessor for #waterAmount

*/


{
    class CoffeeMachine {
        #waterAmount = 0;
    
        getWaterAmount(){
            return this.#waterAmount;
        }
    
        set waterAmount(value){
            if(value < 0) value = 0;
            this.#waterAmount = value;
        }
        
    }

    let machine = new CoffeeMachine();

    machine.waterAmount = 1000;
    console.log(machine.getWaterAmount());

    // console.log(machine.#waterAmount);// error 
}


/*
unlike protected oens 
private fiels are engored by the lang itself 

but if we inherit from CoffeeMacine then we have no direct acess to #waterAmount 
we need to rely on waterAMount getter/setter
*/

{
    class CoffeeMachine {}
    class MEgaMachine extends CoffeeMachine{
        method (){
            // console.log(this.#waterAmount); // no access 
        }
    }
}


/*
in many scneaior such limiation is too sever 
if we exted a coffeemachien we have legimate reasons to access it internal 
thats why protected fields are used more often even thorugh not suppoert by lnag syntax offically 

priavte fields are not avaivale as this[name]

private fields are speical 

we can acces fields using this[name]
{
class User {
    sayHi(){
    let fieldNmae = "name";
    console.log(`Hello ${this[fieldName]}`);
    }
}

wit priavete fiels taht import this[#name] does not work 

}


*/


/*
Summary 
in terms of OOPs 
delimting of the internal interface from the external one is caleld encapsulation 

it gvies following benefits 
Protection for users so they dont shooot themselves in the foot 

supportable 
if we stricly delimit the internal interface then the developer of the class 
can freeley changes its internal properties and methods 
even without informing the users 

private methods can be safely renmaed their parameterst can be changes and even removed 
because no external code depends on them 

for users when a enw version comes out 
it may be total overahul itnernally but still simple to uprage if the external interface is the same 


hiding complexity 

people adore using thisngs taht are simple 
at least from outside 

it wlays conveinet when implementation details are hidden and a simpel well docuemnt external interface is avaiable 

to hisde an internal interfeace we use either protected or private proeprties 
protect fiels start with _ 
that is conventiont not enfored by the lang levle 
programming shouldy only access a field starting with _ from its class and classes inherting from it 

private fiels start siwth # js make sure we can only acces those from isndie the class 

may be private fields are not well supported among browser but can be polyfilled 

*/