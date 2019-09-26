// var 、let 、const之间的区别
for (var i =0;i<3;++i){
    setTimeout(function(){
        console.log(i)
    },1000);
}
// 打印结果是
//3,3,3

for (let i =0;i<3;++i){
    setTimeout(function(){
        console.log(i)
    },1000);
}
//打印结果是0,1,2

//let: 使用let，声明的变量仅在块级作用域内有效{}内有效
{
    let a=1;
    var b=2;
}
console.log(a)  //ReferenceError: a is not defined
console.log(b)  //2

//for循环的计数器，很适合let
for (let i = 0;i<10;i++){
    console.log(i)//
}
console.log(i);//ReferenceError: a is not defined

//如果区块中存在let和const命令，这个区块对这些命令声明的变量，
//从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就
//会报错。总之，在代码块内，使用let命令声明变量之前，该变量都是
//不可用的。这在语法上，称为“暂时性死区”


//const:声明一个只读的常量。一旦声明，常量的值就不能改变
var message = "Hello!";
let age = 25;

const message = "Goodbye!";//报错
const age = 30;//报错
