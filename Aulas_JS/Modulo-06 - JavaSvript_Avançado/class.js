//  PRIMEIRA FORMA DE INSTANCIAR

class Person {
    name;
    age;

    talk() {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old`)
    }
}

const newPerson = new Person()

newPerson.name = "Wanderson"
newPerson.age = 39
newPerson.talk()


// SEGUNDA FORMA DE INSTANCIAR

/*

class Person {
    constructor(name, age) {
        console.log(`Hello, I'm ${name}`)
        this.name = name
        this.age = age
    }
    talk() {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old`)
    }
}

const newPerson = new Person("wanderson", 39)

console.log(newPerson)

*/