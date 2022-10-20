'use strict';
 
const Person = function(firstName, birthYear) {
   // console.log(this);
    this.firstName = firstName;
    this.birthYear = birthYear;
}


Person.prototype.ageCalc = function() {
    console.log(2022 - this.birthYear);
}

Person.prototype.species = 'HUmans';

const Student = function(firstName, birthYear, course) {
    Person.call(this, firstName, birthYear);
    this.course = course;
    
}

Student.prototype = Object.create(Person.prototype);

Student.prototype.intro = function() {
    console.log(`Name - ${this.firstName} and Course - ${this.course}`)
}

const mike = new Student('Mike', 1990, 'CSE');

console.log(mike);

mike.intro();
mike.ageCalc();




const maninder = new Person('Maninder', 1330);
console.log(maninder)
// New {} Empty object is created 
// Function is called this, {}
// {} is linked to Prototype
// Return {}

const maninder2 = new Person('Maninder2', 1430);
const maninder3 = new Person('Maninder3', 1630);

console.log(maninder2);
console.log(maninder3);

console.log(maninder instanceof Person);

console.log(Person.prototype);

maninder.ageCalc();
maninder2.ageCalc();
maninder3.ageCalc();

console.log(maninder.species);
console.log(maninder2.species);

console.log(maninder.hasOwnProperty('firstName'));
console.log(maninder.hasOwnProperty('ageCalc'));
console.log(maninder.hasOwnProperty('species'));


const Car = function(make, speed) {
    this.make = make;
    this.speed = speed;
}

const CarEV = function(make, speed, charge) {
    Car.call(this, make, speed);
    this.charge = charge;
}

const BMW = new Car ('BMW', 120);

Car.prototype.accerlate = function() {
    this.speed += 10;
    console.log(`${this.make} is going on ${this.speed} km/h`);
}

Car.prototype.brake = function() {
    
    this.speed -= 5;
    console.log(`${this.make} is going on ${this.speed} km/h`)
}

CarEV.prototype = Object.create(Car.prototype);

CarEV.prototype.chargeBattery = function(charge) {
    this.charge = charge;
}
const Tesla = new CarEV('Tesla', 12, 23);
// This will use the CAR accerlate method
Tesla.accerlate();
// We're override the Parent class by child class
CarEV.prototype.accerlate = function() {
    this.speed += 10;
    this.charge -= 2;
    console.log(`${this.make} is going on ${this.speed} km/h and Battery is Drained to ${this.charge}`);
}

console.log(BMW);
console.log(Tesla);

Tesla.chargeBattery(90);
console.log(Tesla);

BMW.accerlate();
BMW.accerlate();
BMW.accerlate();
BMW.brake();

Tesla.accerlate();


// Classes in ES6 

// Classes Expression 

//const PersonCl = class{}

// class Declaration 

class PersonCl {

    // Data 
    constructor (firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
    // Methods will inside the Prototype
    ageCalc() {
        console.log(2037 - this.birthYear);
    }

    greet() {
        console.log(`Hey ${this.firstName}`)
    }

    get age() {
        return console.log(2040 - this.birthYear)
    }

    set lastName(last) {
        console.log(this.firstName = last);
    }

}

class StudentCl extends PersonCl  {
    constructor(firstName, birthYear, course) {
        super(firstName, birthYear);
        this.course = course;
    }

    intro() {
        console.log(`Name: ${this.firstName} - Course: ${this.course}`);
    }
    ageCalc() {
        console.log(`BirthYear: ${2037 - this.birthYear} Course: ${this.course}`);
    }
}


// We can write inside the classess --- 
// PersonCl.prototype.ageCalc = function() {
//     console.log(2037 - this.birthYear);
// }

const jessica = new PersonCl('Jessica', 1990);
console.log(jessica);

jessica.ageCalc();
jessica.greet();
jessica.age;
jessica.lastName = 'Maan'
jessica.lastName;

const JessicaStu = new StudentCl('Student', 1990, 'CSE');
console.log(JessicaStu);
JessicaStu.intro();
JessicaStu.ageCalc();


// Classes are not hoisted 
// Classess are first class citizen 
// classess are executed in strict mode 

// Getters and Setters 

const account =  {
    owner: 'Maninder',
    movement: [100,200,300,400],

    get latest() {
        return this.movement.slice(-1).pop();
    },

    set latest(mov) {
        this.movement.push(mov);
    }
}

console.log(account);

// Getter 
console.log(account.latest);

// Setter 
account.latest = 10;

console.log(account.latest);

const PersonProto = {

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    },

    ageCalc() {
        console.log(2037 - this.birthYear);
    },
}

const steave = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, birthYear, course) {
    PersonProto.init.call(this, firstName, birthYear);
    this.course = course;
};

StudentProto.introduce = function () {
    console.log(`I am ${this.firstName} - Course: ${this.course}`)
}

const studentObj = Object.create(StudentProto);

console.log(studentObj);
studentObj.init('OBJ', 2000, 'Computer');
studentObj.ageCalc();
studentObj.introduce();

// steave.firstName = 'Steave';
// steave.birthYear = 1990;
steave.init('Maninder', 1990);

console.log(steave);

steave.ageCalc();


class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accerlate() {
        this.speed += 10;
        console.log(`${this.make} is going on ${this.speed} km/h`);
    }

    brake(){
        this.speed -= 5;
        console.log(`${this.make} is going on ${this.speed} km/h`)
    }

    get speedUS(){
        return this.speed / 1.6;
    }

    set speedUS(speed) {
        this.speed = speed * 1.6;
    }
}

const Ford = new CarCl('Ford', 120);

Ford.accerlate();
Ford.accerlate();
Ford.brake();

console.log(Ford.speedUS);

Ford.speedUS = 60;
console.log(Ford)




class Account {
    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.pin = pin;
        this.movement = [];
        this.language = navigator.language;
        console.log('We can add anything here');
    }

    deposit(val) {
        this.movement.push(val);
        return this // This will make it in Chainable
    }

    withdraw(val) {
        this.deposit(-val)
        return this // CHaining 
    }
}

const acc = new Account('Maninder', 'INR', 2222);
acc.deposit(400);
acc.withdraw(200);

// chaining method
acc.deposit(400).deposit(41).withdraw(56).deposit(855);

console.log(acc);