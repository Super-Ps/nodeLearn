//同步阻塞

const fs = require('fs')
console.log('start:')
let data = fs.readFileSync('requireExportsMoudles/input.txt');
console.log(data.toString());
console.log('finish!')

//异步非阻塞：
console.log('start:')

fs.readFile('requireExportsMoudles/input.txt',function(err,data){
    if (err) return console.error(err);
    console.log(data.toString());


});

console.log('end.')
