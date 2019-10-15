//1.require 函数用于在当前模块中加载和使用别的模块，传入一个模块名，返回
//回一个模块导出对象，模块名可以用相对路径也可以用绝对路径，.js拓展名可以省略

//const fs = require('fs');
//const fs1 = require('./fs');
//const fs2 = require('./fs.js.js');
//const fs3 = require('/node_module/fs/fs.js');


// fs到fs3中保存的是同一个模块导出对象


//var data = require('./data.json'); //加载和使用json文件
/* 模块导入顺序：
    1.核心模块
    2.路径形式加载文件模块
    3.当前目录的node_modules目录中查找该模块是否存在，若不存在，则继续在其父目录的node_modules目录中查找，反复执行这一过程，直到根目录为止。
 */
var counter1 = require('./counter.js')
var counter2 = require('./counter.js')
//fs 模块被require多次，但是只会初始化一次
console.log(counter1.count());
console.log(counter2.count());
console.log(counter2.count());

