// // OOP - Object-Oriented Programming - Programação Orientada a Objetos
import Uber from './Uber.js';
import Driver from './Driver.js';

const uber = new Uber();

const createUser = () => {
  const driver = new Driver({ name: 'otavio', age: 28, cpf: 10});
  console.log(uber);
  console.log(driver);
  uber.createDriver(driver);
}


const {price, distance} = uber.calculateRidePrice(10, 20);
driver.acceptRide(distance, price)
// // const user = {
// //   name: 'Otavio',
// //   address: 'Rua A',
// //   login: 'not-otavio',
// //   logUser() {
// //     setTimeout(console.log(`Oi, meu nome é ${this.nome} e eu tenho ${this.idade}`),
// //     10000)
// //   }
// // };

// const user = {
//   name: 'Otavio',
//   address: 'Rua A',
//   login: 'not-otavio',
//   logUser: (success) => {
//     if (success) console.log(this.login + ' is online now.')
//   }
// }
// user.logUser(true);

// // const person = {
// //   name: 'Kleber',
// //   age: 26,
// //   sayHello: function() {
// //     console.log(`OI, MEU NOME É ${person.name} E EU TENHO ${person.age} ANOS`)
// //   }
// // }
// // person.sayHello();

// // const person2 = {
// //   name: 'Kleber',
// //   age: 26,
// //   sayHello: function() {
// //     console.log(`OI, MEU NOME É ${this.name} E EU TENHO ${this.age} ANOS`)
// //   }
// // }

// // const person2 = {
// //   name: 'Kleber',
// //   age: 26,
// //   sayHello: () => {
// //     console.log(`OI, MEU NOME É ${this.name} E EU TENHO ${this.age} ANOS`)
// //   }
// // }

// // person2.sayHello()

// // const person2 = {
// //   name: 'João',
// //   age: 22,
// //   sayHello: function() {
// //     console.log(this)
// //     const sayHelloFromTheInside = () => {
// //       console.log("INSIDE FUNCTION", this);
// //     }
// //     sayHelloFromTheInside()
// //   }
// // }

// // person2.sayHello()

// const person2 = {
//   name: 'João',
//   age: 22,
//   sayHello: function() {
//     console.log(this)
//     const sayHelloAgain = () => {
//       console.log("INSIDE", this)
//     }
//     window.sayHelloAgain()
//   }
// }

// const person2 = {
//   name: 'João',
//   age: 22,
//   sayHello: function() {
//     console.log(this)
//     function sayHelloAgain() {
//       console.log("INSIDE", this)
//     }
//     window.sayHelloAgain.bind(person2)
//   }
// }

// person2.sayHello();

// const person3 = {
//   name: 'João',
//   age: 22,
//   sayHello: function() {
//     setTimeout(function sayHelloInside() {
//       console.log("OI DE DENTRO DO TIMEOUT" + this.name)
//     }.bind(person3), 5000);
//   }
// }

// person3.sayHello();

// const person3 = {
//   name: 'João',
//   age: 22,
//   sayHello: function() {
//     setTimeout(() => {
//       console.log("OI DE DENTRO DO TIMEOUT" + this.name)
//     }, 2000);
//   }
// }

// person3.sayHello();

// const user1 = {
//   name:'Otavio',
//   login: 'otavio',
//   logMeIn: function() {
//     console.log(`Hi ${this.name}, you are in.`)
//   }
// }

// const user2 = {
//   name: 'Fabio',
//   login: 'fabio',
//   logMeIn: function() {
//     console.log(`Hi ${this.name}, you are in.`)
//   },
//   showMeLove: function() {
//     console.log("love is a fairytale")
//   }
// }

// user2.logMeIn();

// console.log(user2);
// console.log(user2.showMeLove());
// console.log(user2.hasOwnProperty('name'));

// Object.prototype.showMeLove = function() {
//   console.log("this is love");
// }

// console.log(user2.showMeLove());

// call, apply, bind
// user2.logMeIn.call(user1, date, date2, date3);
// user2.logMeIn.apply(user1, [date, date2, date3]);

// const newFunction = user2.logMeIn.bind(user1);
// newFunction()



// FUNCTIONS

// const CarFactory = ({brand, model, year}) => {
//   return {
//     brand,
//     car: model,
//     year,
//     turnOn: function() {
//       console.log(`${this.car} is on.`)
//     }
//   }
// }

// const car = CarFactory({year: 2005, brand: 'Chevrolet', model:'Celta' });
// car.car = 'Prisma';
// console.log(car);
// car.turnOn();
// const car2 = CarFactory('Chevrolet', 'Celta', 2006);

// function CarFactory({brand, model, year}) {
//   this.brand = brand;
//   this.model = model;
//   this.year = year;
//   this.on = false;
//   // this.turnOn = function() {
//   //   console.log(`${this.model} is on.`)
//   // }
//   this.saveUserToDb = () => {
//     const encrypted = encryptPassword();
//     mongo.post({
//       user,
//       name,
//       password: encrypted
//     })
//   }

//   const encryptPassword = () => {
//     // console.log(`${this.model} is on.`)
//     this.on = true;
//   }

//   turnOn();
// }

// const car = new CarFactory({year: 2005, brand: 'Chevrolet', model:'Celta' });
// console.log(car);
// user.saveUserToDb();
// car.turnOn();
// const car2 = new CarFactory('Chevrolet', 'Celta', 2006);
// console.log(car2);

// FINALMENTE CLASSES

// class Vehicle {
//   constructor({ type, numberOfTires }) {
//     this.type = type;
//     this.numberOfTires = numberOfTires;
//   }

//   getDetails() {
//     console.log(`${this.type} has ${this.numberOfTires}`)
//   }
// }

// class Car extends Vehicle {
//   constructor() {
//     super({ type: 'car', numberOfTires: 4 });
//     this.brand = brand;
//     this.model = model;
//     this.year = year;
//   }

//   turnIntoGas() {
//     diesel = true;
//   }
  
//   turnOn() {
//     console.log(`${this.model} is on.`)
//   }

// }

// const car = new Car({ year: 2005, brand: 'Chevrolet', model:'Celta' })
// console.log(car);
// car.turnOn();
// car.getDetails();


