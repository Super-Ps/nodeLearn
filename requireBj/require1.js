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
console.log(counter1.count());//1
console.log(counter2.count());//2
console.log(counter2.count());//3



//模块路径解析规则
/* 1.内置模块
    如果传递给require函数的是NodeJS内置模块名称，不做路径解析，直接返回内部模块的导出对象；
    例子：
    require('js')
2.node_module目录
    NodeJS定义了一个特殊的node_modules目录用于存放模块
    例子：
    某个模块的绝对路径是/home/user/hello.js，在该模块中使用require('foo/bar')方式加载模块时，则NodeJS依次尝试使用以下路径：
    /home/user/node_modules/foo/bar
    /home/node_modules/foo/bar
    /node_modules/foo/bar
3.NODE_PATH环境变量
    与PATH环境变量类似，NodeJS允许通过NODE_PATH环境变量来指定额外的模块搜索路径。NODE_PATH环境变量中包含一到多个目录路径，路径之间在Linux下使用:分隔，在Windows下使用;分隔
    NODE_PATH=/home/user/lib:/home/lib
    当使用require('foo/bar')的方式加载模块时，则NodeJS依次尝试以下路径。

    /home/user/lib/foo/bar
    /home/lib/foo/bar */



