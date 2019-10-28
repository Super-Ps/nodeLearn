function print(s){
    console.log(s);
}

//2函数表达式

var print = function(s){
    console.log(s);//这种写法将一个匿名函数赋值给变量。这时，这个匿名函数又称函数表达式（Function Expression），因为赋值语句的等号右侧只能放表达式。


}

//Function构造函数

var add = new Function(
    'x',
    'y',
    'return x + y'
);//等同于下方函数；

function foo(x,y){
    return x+y ;

}


//return 
//遇到return就返回后面return后面表达式的值，后面的语句不再执行
//return不是必须得，没有就不返回或者返回undefined


//函数调用自己——递归

function fib(num){
    if(num === 0) return 0;
    if(num === 1) return 1;
    return fib(num-2)+fib(num-1);
    
}
//console.log(fib(6))


//函数本身也是对象，有属性和方法

function fname(x){
    return x ;
};
console.log(fname.name) //fname;

//length属性

console.log(fname.length)//传入参数的个数；


//toString()：函数的toString方法返回一个字符串，内容是函数的源码

console.log(fib.toString())

//闭包：闭包可以让你从内部函数访问外部函数作用域

function  f1(){
    var n = 999;
    function f2(){
        console.log(n);
    }
    return f2;

}
//闭包就是函数f2，即能够读取其他函数内部变量的函数
var result = f1();
console.log(result());//999 undefined

//闭包的最大用处有两个，一个是可以读取函数内部的变量，
//另一个就是让这些变量始终保持在内存中

function createIncrementor(start){
    return function(){
        return start++;
    };
}
var inc = createIncrementor(5);
console.log(inc())//5
console.log(inc())//6
console.log(inc())//7
console.log(inc())//8




