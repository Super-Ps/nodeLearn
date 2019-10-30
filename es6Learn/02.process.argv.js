let num1 = process.argv[2] -0;
let num2 = parseInt(process.argv[3]);
let sum = num1 + num2;
console.log('计算中......')//

//查询process

setTimeout(()=>{
    console.log('计算结果：'+sum);
},2000);  //记得查 setTimeout
