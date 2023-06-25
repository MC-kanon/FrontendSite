# git 

## git基础知识介绍

1. 工作区：未被git管理起来的文件。
2. 暂存区：在使用git管理项目文件的时候，其本地的项目文件会多出一个.git的文件夹，将这个.git文件夹称之为版本库。其中.git文件夹中包含了两个部分，一个是暂存区（Index或者Stage）,顾名思义就是暂时存放文件的地方，通常使用add命令将工作区的文件添加到暂存区里。
3. 本地仓库：.git文件夹里还包括git自动创建的master分支，并且将HEAD指针指向master分支。使用commit命令可以将暂存区中的文件添加到本地仓库中。
4. 远程仓库：不是在本地仓库中，项目代码在远程git服务器上，比如项目放在github上，就是一个远程仓库，通常使用clone命令将远程仓库拷贝到本地仓库中，开发后推送到远程仓库中即可；

## git配置命令

<blockquote>
查询配置信息
</blockquote>

1. 列出当前配置：`git config --list`;

2. 列出repository配置：`git config --local --list`;

3. 列出全局配置：`git config --global --list`;

4. 列出系统配置：`git config --system --list`;

<blockquote>
配置用户信息
</blockquote>
1. 配置用户名：git config --global user.name "your name"
2. 配置用户邮箱：git config --global user.email "youremail@github.com"
<blockquote>
配置ssh密钥
</blockquote>
1. ssh-keygen -t rsa  生成sshkey
2. 一直回车使用默认值
3. 查找公钥
   1. window系统： C:\Users\用户\\.ssh\id_rsa.pub
   2. MAC系统：命令行输入  cat ~/.ssh/id_rsa.pub
4. 将公钥加入GitHub的ssh中
5. 可以使用ssh拉代码啦
6. 有可能会碰到github说格式不正确的问题，这个时候试一下这两个命令去生成ssh，ssh-keygen -t ed25519 -C "your_email@example.com" 或者 ssh-keygen -t rsa -b 4096 -C "your_email@example.com"

## git基础

```
git init  初始化git管理文件
git clone <远程仓库url>     拉取一个远程仓库(适合本地啥都没有的情况)

工作区：有变动的文件or新增文件   红色
缓存区：经过 git add . 绿色

工作区提交代码到暂存区
git add .  提交工作区所有文件到暂存区
git add <dir> 添加指定目录到暂存区，包括子目录
git rm --cached <file>  将file文件从暂存区迁移到工作区 （未跟踪的状态，文件还在）
git restore --staged <file>	 文件从staged -> unstage
git rm -f <file>  强制删除文件
git checkout -- <filename> 将工作区指定的文件恢复到上次commit的状态

暂存区提交到本地仓库
git commit -m "版本信息"

本地仓库提交到远程仓库
git push <远程仓库别名> <远程仓库分支>

查询信息
git status  查询当前工作区所有文件的状态
git diff    比较工作区中当前文件和暂存区之间的差异，也就是修改之后还没有暂存的内容
git diff --cache <file>  比较暂存区与上一版本的差异
git log 查看提交历史
git reflog 查看版本库（查看所有分支的所有操作记录，包括已经删除的）
git log --pretty=oneline --graph  以图的形式显示版本日志
```

## git提高

```
暂存区提交到本地仓库
git commit -m "版本信息"   
git commit -am "版本信息"  相当于add+commit(将git跟踪的文件直接提交版本库，跳过暂存区，注意：新增的文件不会提交)
git commit --amend <file1> <file2> 提交文件时，发现漏掉几个文件可以重新提交
git commit -v  提交时显示所有diff信息
git commit --amend -m '***' 修改上次提交的信息

打标签（用于特定结点，比如说版本上线）
git tag				   列出所有标签
git tag -d [tag]		删除本地tag
git tag v1.0		    创建标签
git push <remote> v1.0	将标签推送到远程仓库中
git push <remote> --tags	将本地所有的标签全部推送到远程仓库中
git push <remote> :refs/tags/[tagName]	删除远程tag
git show [tag]			查看tag信息

分支管理
git branch				   显示本地仓库的所有分支
git branch -r				 显示远程仓库的所有分支
git branch <branch-name>	  创建分支
git checkout <branch-name>    切换到其他分支
git checkout -b <branch-name> 新建并切换到新建分支
git branch -d <branch-name>   删除本地分支
git branch -dr <remote/branch> 删除远程分支（用这个）
git push origin --delete [branch-name] 删除远程分支
git merge <branch-name>	将当前分支与指定分支进行合并

查看上游分支
git status 、git checkout <branch>
设置上游分支
git branch --set-upstream-to=origin/main main   给本地main分支设置远程main分支作为上游分支(远程分支存在的情况)
git push set-upsteam origin HEAD:main	远程分支不存在的情况
取消上游分支
git branch --unset-upstream

git fetch <remote-name> <branch-name> 把远程分支拉倒本地(未合并)
git merge <remote-name> <branch-name> 把远程分支合并到当前分支
git checkout -b <branch-name> <remote-name> <branch-name>
创建新的本地分支并把远程分支设置为当前分支的上游分支（之后可以直接git pull和git push简写操作）

查询信息
git remote -v  查看本地仓库关联的远程仓库url地址
git remote add <remote-name> <url>  给远程仓库(url地址)取一个名字叫做remote-name
git remote rename origin o  给远程仓库重命名
git diff --shortstat "@{0 day ago}"  显示今天你写了多少行代码

拉取远程仓库分支
git pull <remote-name> <branch-name>

撤销操作
版本库—>缓存区（绿色）	git reset --soft 版本号（版本号可以用HEAD^来代替，表示上一个版本，撤销commit操作）
版本库->工作区的tracked位置（红色）    git reset --mix 版本号
版本库->工作区的untracked位置         git reset --hard 版本号
缓存区->工作区的tracked位置（红色）    绿变红 git reset HEAD <file>

--soft：仅仅是撤回commit操作，您写的代码仍然保留
--mixed：不删除工作空间改动代码，撤销commit，并且撤销git add操作
--hard：删除工作空间改动代码，撤销commit，撤销git add，注意完成这个操作后，就恢复到了上一次的commit状态。
```

## git进阶

```
git stash 命令会将所有已提交到暂存区，以及没有提交的修改，都进行内部保存，没有将工作区恢复到上一次commit的状态。
git stash list  列出所有暂时保存的工作
git stash pop   恢复最近一次stash的文件
git stash drop  丢弃最近一次stash的文件
git stash clear 删除所有的stash
git stash apply stash@{1}  恢复某个暂时保存的工作


分支管理
merge
rebase
将一个分支里提交的改变移到基底分支上重放一遍：git rebase <rebase-branch> <branch-name>，如git rebase master server，将特性分支server提交的改变在基底分支master上重演一遍；使用rebase操作最大的好处是像在单个分支上操作的，提交的修改历史也是一根线；如果想把基于一个特性分支上的另一个特性分支变基到其他分支上，可以使用--onto操作：git rebase --onto <rebase-branch> <feature branch> <sub-feature-branch>，如git rebase --onto master server client；使用rebase操作应该遵循的原则是：一旦分支中的提交对象发布到公共仓库，就千万不要对该分支进行rebase操作
```

## 冲突

1. 同一分支下pull或push：比如在同一个分支下，对**本地的a文件**做出了**修改**，此时我们在进行pull或push时如果**远程分支**下的**a文件也有修改**，那么代表本地和远程分支的代码是不同步的，此时也会引起冲突。
2. 不同分支下的merge：两个分支下的同一个文件都有修改，这个时候两个分支不同步会产生冲突。

## 解决冲突

1. 先将工作区文件暂存，再拉远程代码
   1. git stash
   2. git pull
   3. git stash pop  或者  git stash apply stash@{0}
   4. 找到冲突文件并解决
   5. add+commit提交

2. 提交更改，然后再进行合并
   1. git add . + git commit -m "your commit message"
   2. 拉下远程代码手动解决冲突
   3. 最后push到远程

最好解决冲突的办法就是：每次写代码之前都从远程仓库拉取最新的代码







参考目录：

[阮一峰-常用 Git 命令清单](http://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html)   	[阮一峰-ES6入门教程](https://es6.ruanyifeng.com/) 		[书栈网-Git命令大全](https://www.bookstack.cn/read/git-tutorial/docs-commands-git-stash.md)

[git常用命令](https://juejin.cn/post/6844903598522908686)

[各种工作场景的 git 指令大全](https://juejin.cn/post/7021023267028729887)