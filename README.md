# nodeLearn
github 代码提交操作流程

1.Fork一个项目到自己的主页

   在想要fork的页面fork一个。

2.克隆一个拷贝到自己的主机上

   在我们fork出来的自己的主页上拷贝http clone的地址，在本地的机子上运行如下命令将自己主页代码库中的代码文件拷贝到本机上的文件夹来。

   $ git clone git@github.com:Minguanz/nodeLearn.git

   一般clone下来的文件夹都会在本地的用户的主目录下面。所以直接在终端输入cd命令加上项目名称即可进入项目文件夹中。


3.配置本地库与原始库的关联
    进入我们的项目文件夹：
    $ cd nodeLearn

    添加与原始库的关联，命名为upstream，此地址是原项目开发者的项目主页上的clone的地址：这是专门用来与主开发者保持相同进度的方法：
    $ git remote add upstream 'https://github.com/Super-Ps/nodeLearn.git'

    从原始库中抓取最新的更新
     git fetch upstream

4.在本地修改代码文件并PUSH

    在本地修改完文件测试完成之后，将代码提交到我们自己的fork出来的项目主页。(一般先要把文件添加到)
    git commit -a -m ’更新原因'  
    git push 'fork出来的地址‘  

    通过这两个命令就可以将我们的修改发送到我们的fork主页上去，但是，这个时候项目的开发者还不知道我们的修改，通过下面的步骤可以通知开发者

    注意
    error：On branch master
    Your branch is up to date with 'origin/master'.

    报这个错的时候先要 git add .
    才能git commit 和 git push

    https://www.jianshu.com/p/1657e92f5289


5.发送pull request给主开发者

    代码目录左上方有如图所示的图表，点击绿色的图标，然后就可以比较你的版本和源中代码的差别，然后就可以选择发送一个Pull request给主开发者，
    添加修改的原因描述。然后就等待主开发者去merge了。

6.抓取原始库最新的更新
    抓取原数据库的更新，我们需要使用是git fetch upstream命令。这命令会自动选择更改过的代码文件进行更新。


模块导入:
    一个模块中的JS代码仅在模块第一次被使用时执行一次，并在执行过程中初始化模块的导出对象。之后，缓存起来的导出对象被重复利用。

模块导入顺序：
    1.核心模块
    2.路径形式加载文件模块
    3.当前目录的node_modules目录中查找该模块是否存在，若不存在，则继续在其父目录的node_modules目录中查找，反复执行这一过程，直到根目录为止。

    Node.js模块分为核心模块和文件模块；
    核心模块是Node.js标准API中提供的模块，可以直接通过require获取；
    文件模块是存储为单独的文件的模块，可以是javascript代码、Json或编译好的C/C++代码；
    核心模块拥有最高的加载优先级，如果有模块与其明明冲突，Node.js总是加载核心模块；
    文件模块如果不显式指定文件模块扩展名，则会按照.js、.json、.node的顺序加上扩展名；
    文件模块的加载有两种方式，一种是按路径加载，一种是查找node_modules文件夹；
    文件模块按路径加载又分为按相对路径加载和按绝对路径加载两种；

    优先加载核心模块；

    以路径形式加载文件模块： 
    ① 如果显示指定文件模块扩展名，则在该路径下查找该模块是否存在； 
    ② 如果未显示指定文件模块扩展名，则在该路径下，依次查找以.js、.json、.node为扩展名的模块是否存在；

    既不是核心模块，又不是以路径形式表示的模块，则首先在当前目录的node_modules目录中查找该模块是否存在，若不存在，则继续在其父目录的node_modules目录中查找，反复执行这一过程，直到根目录为止。