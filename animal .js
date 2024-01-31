class Animal{
   //encapsulation. this makes the properties private and can only be accessed with the class method
    constructor(name, ColdBlooded){
        this.name = name;
        this.ColdBlooded= ColdBlooded;
    }


    //this methods are general methods that every animal have.
    //this eat() method is an example of abstraction. It has other things like the console.log running inside, but when
    //it is called, only eat() is used, hereby hiding the other things which are not seem.
    
    eat(){
        console.log(`${this.name} eats food`);
    }

    static hasBackbone(){
        return true;
    }

    toString(){
        return `Animal - ${this.name}`;
    }
//this is the base class that other animal can inherit, and checks whether the animal  is coldblooded
}


    class Anthropoda extends Animal{ //inheritance is used here
        constructor(name, ColdBlooded){
            super(name, ColdBlooded); //this inherits the properties created in the Animal class and sets the coldblooded to true because anthropods are coldblooded

        }
    //then we create the methods of the class like the activities they perform

    age = 12; //this is property of the butterfly class. 
    fly(){
        console.log(`${this.name} flies in the air, Am i Coldblooded == ${this.ColdBlooded}`);
    }


        //polymorphism 
    toString(){
        return `Anthropoda: ${this.name}`; //this is the inherited method from the Animal class, here we change the Animal to Anthropoda
    }

        }


        // further application of inheritance, as it is the principle i have grasped at the moment

            class Termite extends Anthropoda{
                constructor(name, age, gender){
                    super(name,true);
                    this.age = age;
                    this.gender = gender;
                }

                //lets create methods for Termite class
                run(){
                    console.log(`I am a ${this.name}, I can run on the floor, my age is ${this.age}, I am a ${this.gender} termite`);
                }

            toString(){
                return `Termite: ${this.name}`; //Anthropoda is overridden with Termite, as Termite inherits the Anthropoda properties,
                //this is the Polymorphism concept, meaning a new class that inherits from another class can have a different property although its still using the parent method.

            }

            } 

    //let create another sub class on top Termite
    //check if you can access other properties of the Termite class without adding them in the constructor method
                class TermiteChild extends Termite{
                    constructor(name, age, gender, color, isYoung, married){
                        super(name, age, gender);
                        this.color = color;
                        this.isYoung = true;
                        this.married = false;
                    }

                    //create new methods for this Termitechild class
                    changeColor(){
                        console.log(`My colour is ${this.color}, My name is ${this.name}, I am ${this.age} years old and my marriage status is ${this.married}`);
                    }


                }
class Avec extends Animal{
    constructor(name){
        super(name, false);
        
    }
}




//lets create new instance of the classes we have created and work with them.
const butterfly = new Anthropoda('Butterfly', true);
const spider = new Anthropoda('Spider')

butterfly.fly();
console.log(butterfly.toString(), butterfly.age);
console.log(spider.toString());


//this time, lets work with the new subclass of Anthropoda which is Termite
const termite = new Termite('Cooco', 5, 'male');

const newTermiteChild = new TermiteChild('Brad', 4, 'female', 'blue', true, false);
termite.run();
console.log(termite.toString());


console.log(newTermiteChild.changeColor());
console.log(newTermiteChild.name);
//console.log(Animal.hasBackbone());