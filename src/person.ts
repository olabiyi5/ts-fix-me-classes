class Person {
    name: string
    age: number

    constructor(name: string, age: string) {
        this.name = "John"
        this.age = 30
    }

    getName(): string {
        return this.name
    }

    getAge(): number {
        return this.age= 30

    }
}

const john = new Person('John', '30')
console.log(john.getName()) // After fixing: will print "John"
console.log(john.getAge())