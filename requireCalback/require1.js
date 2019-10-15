//1.require 函数用于在当前模块中加载和使用别的模块，传入一个模块名，返回
//回一个模块导出对象，模块名可以用相对路径也可以用绝对路径，.js拓展名可以省略

const fs = require('fs');
const fs1 = require('./fs');
const fs2 = require('./fs.js');
const fs3 = require('/node_module/fs/fs.js');

// fs到fs3中保存的是同一个模块导出对象


//var data = require('./data.json'); //加载和使用json文件

