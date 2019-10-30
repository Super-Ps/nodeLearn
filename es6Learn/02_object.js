var obj = {
    p:'hello world',
    foo:function(x){
        return x
    }
}
console.log(obj.p)//属性读取

console.log(obj['p'])//属性读取
console.log(obj.foo)

//属性的赋值
obj.bar = 'hello bar!';
obj['dat'] = 'hello dat !';
console.log(obj)

//属性的查看
keys = Object.keys(obj);//[ 'p', 'foo', 'bar', 'dat' ]
//console.log(keys);

//属性删除：delete
delete obj.p;
console.log(Object.keys(obj));//[ 'foo', 'bar', 'dat' ]

//需要注意的是，delete命令只能删除对象本身的属性，无法删除继承的属性

//属性是否存在：in 运算符

console.log('p' in obj);//false
console.log('foo' in obj);//true

//属性的遍历：for...in 循环

for (var i in obj){
    console.log('键名',i);
    console.log('键值',obj[i]);
}
