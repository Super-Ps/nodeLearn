var n =0
if (n==0){  //if else 结构
    console.log(n+1)
}else{
    console.log('n is not 0');
}




//switch结构

fruit = 'banana'
switch (fruit) {
    case 'banana':
        console.log(fruit)
        break;
}
//switch语句后面的表达式，与case语句后面的表示式比较运行结果时，采用的是严格相等运算符（===），
//而不是相等运算符（==），这意味着比较时不会发生类型转换。

//三元运算符
//(条件)?表达式1:表达式2；如果“条件”为true，则返回“表达式1”的值，否则返回“表达式2”的值。
var n =3
var even = (n % 2 ===0)?true:false;
console.log(even)

//循环语句
var sum = 0;
while (n <3){
    sum = n+sum;
    n++;
    console.log(sum);
};

//for 语句

//for (初始化表达式;条件;递增表达式){}

//typeof 可以确定一个值到底是什么类型。

console.log(typeof(even),typeof(123),typeof('456'),typeof(undefined),typeof(NaN))
//boolean number string undefined number

//与数值相关的全局方法 # 
//parseInt()
//parseInt的返回值只有两种可能，要么是一个十进制整数，要么是NaN。
parse = parseInt('1000',2)
console.log(parse)//8

//parseFloat()//方法用于将一个字符串转为浮点数。

//isNaN方法可以用来判断一个值是否为NaN

//isFinite方法返回一个布尔值，表示某个值是否为正常的数值。
