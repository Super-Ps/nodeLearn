//类定义
//匿名类
let Example = class{
    constructor(a){
        this.a =a;
    }
}

//命名类
let Example3 = class Example2 {
    constructor(a){
        this.a = a;
    }
}

//类声明
class Example1{
    constructor(a){
        this.a = a;
    }
}

//类的属性和方法
//prototype 覆盖方法 / 初始化时添加方法
Example.prototype={
    //method
}

//添加方法
Object.assign(Example.prototype,{
    //methods
})
 
//静态属性  ES6 中规定，Class 内部只有静态方法，没有静态属性。

//公共属性
class Name {}
Name.prototype.a = 2;


//实例属性 定义在实例对象this上的属性

class Tag {
    constructor(name){
        this.name = name
        console.log(this.name)//123
    }
}

//abc = new Tag(123);
//console.log(abc); Tag { name: 123 }


//constructor方法
//constructor 方法是类的默认方法，创建类的实例化对象时被调用。类似于python 中的__init__

class Tag1{
    constructor(){
        console.log('this is constructor,默认执行.')//只要创建了实例化对象，就会默认执行constructor函数

    }
}

tag = new Tag1();
//console.log(tag)

//静态方法,只能类本身调用，实例化对象后不能使用，只能类本身使用
class Sax{
    static sun(a,b){
        console.log(this);  //[Function: Sax]  指向的是Sax
    }
}

Sax.sun(9,10);//19
sax = new Sax();
//sax.sun(2,3);//报错  TypeError: sax.sun is not a function

//原型方法

class Sax1{
    sum(a,b){
        console.log(a+b);  //原型方法，是指实例化后对象的方法

    }
}
let sax1 = new Sax1();
sax1.sum(3,8); //11


//实例化对象 

class Exam{
    constructor(a,b){
        this.a =a ;
        this.b =b ;
        console.log('Exam');    
    }
    sum(){
        return this.a +this.b;
    }
}

let exam1 = new Exam(2,1)
let exam2 = new Exam(3,1)
console.log(exam1.sum())
console.log(exam2.sum())
