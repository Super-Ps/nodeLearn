//this
var person = {
    name:'111',
    describe:function(){
        return 'name'+this.name;//this.name = '111'
    }
};//this 指向所在对象

//console.log(person.describe());//'name111'

//this的指向是可变的

var A = {
    name:'john',
    describe: function(){
        return 'name:' + this.name;
    }
};

var B = {
    name:'Kitty'
};

B.describe = A.describe;
console.log(B.describe());
//A.describe属性被赋给B，于是B.describe就表示describe方法
//所在的当前对象是B，所以this.name就指向B.name

function f(){
    return 'name'+this.name;
}

var A = {
    name:'zhangsan',
    describe:f
};

var B = {
    name:'lisi',
    describe:f
};
console.log(A.describe());//namezhangsan
console.log(B.describe());//namelisi
//函数f内部的this关键字，随着f所在对象不一样，指向也不一样


//this 使用场景


console.log(this === window);
