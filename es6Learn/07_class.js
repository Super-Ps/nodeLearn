function Cat (name,color){
    this.name = name;
    this.color = color;
    this.meow = function(){
        console.log('喵喵');
    };

}

var cat1 = new Cat('大猫','白色');
var cat2 = new Cat('big','white');
//每新建一个实例，就会新建一个meow方法,浪费系统资源

function f(){
}
//console.log(typeof(f.prototype));//'object'：f.prototype 指向object
//每个函数都有一个prototype属性，指向一个对象

function Animal(name){
    this.name = name;

}
Animal.prototype.color = 'white';

var cat3 = new Animal('damao');
var cat4 = new Animal('class');
console.log(cat3.color,cat4.color);//white white

//原型对象的作用，就是定义所有实例对象共享的属性和方法。这也是它被称为原型对象的原因，
//而实例对象可以视作从原型对象衍生出来的子对象。

var MyArray = function(){};
MyArray.prototype = new Array(); //MyArray的原型对象是Array
MyArray.prototype.constructor = MyArray;//原型对象的构造函数是 MyArray
var mine = new MyArray();//实例，可以调用Array的方法
mine.push(1,2,3);
//console.log(mine.length)// 结果是3
//console.log(mine instanceof Array) //true
//instanceof 用来比较一个对象是否为，某个构造函数的实例 



function p(){}

//p.prototype.constructor === p // true默认指向prototype对象所在的构造函数
//constructor属性的作用是，可以得知某个实例对象，到底是哪一个构造函数产生的。

function F(){}
var f = new F;
f.constructor === F //true
f.constructor === RegExp //false

function Constr(){}
var x = new Constr();

var y = new x.constructor(); //指向的构造函数还是Constr

y instanceof Constr; //true






//constructor表示原型对象与构造函数之间的关联关系

function Person(name){
    this.name = name;
}
Person.prototype.constructor === Person; //true

Person.prototype = {
    constructor:Person,
    method:function(){}//修改原型对象的时候同时修改constructor属性；
};
//Person.prototype.constructor==  //Object
//console.log(Person.prototype.constructor)




//instanceof运算符：instanceof运算符返回一个布尔值，表示对象是否为某个构造函数的实例
function Vehicle(){}
var v = new Vehicle();
console.log(v instanceof Vehicle) //true
console.log(Vehicle.prototype.isPrototypeOf(v))//等价
//instanceof运算符的左边是实例对象，右边是构造函数。
//它会检查右边构建函数的原型对象（prototype），是否在左边对象的原型链上



//继承，构造函数的继承

function Shape(){
    this.x =0;
    this.y =0;
}

Shape.prototype.move = function(x,y){
    this.x +=x;
    this.y +=y;
    console.info("shape info");
};
//我们需要让Rectangle构造函数继承Shape。
//1.子类继承父类的实例
function Rectangle(){
    Shape.call(this);//调用父类的构造函数
    console.log('11',this)
}
//2子类继承父类的原型
Rectangle.prototype = Object.create(Shape.prototype)
Rectangle.prototype.constructor = Rectangle;

var data = new Rectangle()
console.log(typeof(data))