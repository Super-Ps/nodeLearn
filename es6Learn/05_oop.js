'use strict';
//js中使用构造函数作为对象的模板：专门用来生成市里对象的函数，是对象的模板
//构造函数的写法和特征
//构造函数名字的第一个字母通常大写
//函数体内部使用了this关键字，代表了所要生成的对象实例。
//生成对象的时候，必须使用new命令


//new:执行构造函数，返回一个实例对象

var Vehicle = function(num){
    this.price = 1000;
    this.num = num;
};

var v =new Vehicle(500);
console.log(v.price);
console.log(v.num)
//this指的是一个新生成的空对象，所有针对this的操作，都会发生在这个空对象上

//构造函数内部有return语句，而且return后面跟着一个对象，new命令会返回return语句指定的对象；
//否则，就会不管return语句，返回this对象。

var Vel = function(){
    this.price =1000;
    return 1000;
};
console.log( new Vel()===1000);//false

var Vel2 = function(){
    this.price = 1000;
    return {price:2000};
};
console.log(new Vel2().price)//2000

var vel3 = Object.create(Vel2);
//console.log(vel3().price);
console.log(vel3.price);

