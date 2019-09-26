github 修改fork的代码之后如何提交代码并pull request

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

    代码目录左上方有如图所示的图表，点击绿色的图标，然后就可以比较你的版本和源中代码的差别，然后就可以选择发送一个Pull request给主开发者，添加修改的原因描述。然后就等待主开发者去merge了。

6.抓取原始库最新的更新
    抓取原数据库的更新，我们需要使用是git fetch upstream命令。这命令会自动选择更改过的代码文件进行更新。
