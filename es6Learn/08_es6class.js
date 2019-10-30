class Person {
    constructor(name){
        this.name = name;

    }
    showName(){
        return this.name;

    }
}
var p1 = new Person('xiaoming')
console.log(p1.showName())
