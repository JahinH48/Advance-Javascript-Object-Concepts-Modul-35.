const student = { name: 'Jisan Hasan', age: 16, job: 'Cricketer' };
// console.log(student)

const person = new Object();
// console.log(person)

const human = Object.create(student)
// console.log(`Name : ${human.name} age : ${human.age}  Profation : ${human.job}`)

class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}


const Peo = new People('manus', 44);
console.log(Peo)