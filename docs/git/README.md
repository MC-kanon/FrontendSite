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
1. 配置用户名：git config --global user.name "your name";
2. 配置用户邮箱：git config --global user.email "youremail@github.com";
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

## git境界之练气期

```
git init  初始化git管理文件
git clone <远程仓库url>     拉取一个远程仓库(适合本地啥都没有的情况)

工作区提交代码到暂存区
git add .  提交工作区所有文件到暂存区

暂存区提交到本地仓库
git commit -m "版本信息"

本地仓库提交到远程仓库
git push <远程仓库别名> <远程仓库分支>


查询信息
git status  查询当前工作区所有文件的状态
git diff    比较工作区中当前文件和暂存区之间的差异，也就是修改之后还没有暂存的内容
git log 查看提交历史
git reflog 查看版本库（查看所有分支的所有操作记录，包括已经删除的）


```

## git境界之筑基期

```

暂存区提交到本地仓库
git commit -m "版本信息"   
git commit -am "版本信息"  相当于add+commit(将git跟踪的文件直接提交版本库，跳过暂存区，注意：新增的文件不会提交)
git commit --amend 提交文件时，发现漏掉几个文件可以撤销上一次提交


查询信息
git diff --cache  比较暂存区与上一版本的差异

打标签（用于特定结点，比如说版本上线）
git tag					列出所有标签
git tag v1.0		    创建标签
git push origin v1.5	将标签推送到远程仓库中
git push origin --tags	将本地所有的标签全部推送到远程仓库中

分支管理
git branch <branch-name>	  创建分支
git checkout <branch-name>    切换到其他分支
git checkout -b <branch-name> 新建并切换到新建分支
git branch -d <branch-name>   删除分支
git merge <branch-name>;	将当前分支与指定分支进行合并
git branch				   显示本地仓库的所有分支
git fetch <remote-name>/<branch-name> 把远程分支拉倒本地(未合并)
git merge <remote-name>/<branch-name> 把远程分支合并到当前分支
git checkout -b <branch-name> <remote-name>/<branch-name>
创建新的本地分支并把远程分支设置为当前分支的上游分支（之后可以直接git pull和git push简写操作）

查询信息
git remote -v  查看本地仓库关联的远程仓库url地址
git remote add [remote-name] [url]  给远程仓库(url地址)取一个名字叫做remote-name

拉取远程仓库分支

git pull [remote-name] [branch-name]
```

## git境界之结丹期

```
分支管理
查看上游分支
git status 、git checkout <branch>
设置上游分支
git branch --set-upstream-to=origin/main main   给本地main分支设置远程main分支作为上游分支(远程分支存在的情况)
git push set-upsteam origin HEAD:main	远程分支不存在的情况
取消上游分支
git branch --unset-upstream

stash
分支管理
merge
rebase
将一个分支里提交的改变移到基底分支上重放一遍：git rebase <rebase-branch> <branch-name>，如git rebase master server，将特性分支server提交的改变在基底分支master上重演一遍；使用rebase操作最大的好处是像在单个分支上操作的，提交的修改历史也是一根线；如果想把基于一个特性分支上的另一个特性分支变基到其他分支上，可以使用--onto操作：git rebase --onto <rebase-branch> <feature branch> <sub-feature-branch>，如git rebase --onto master server client；使用rebase操作应该遵循的原则是：一旦分支中的提交对象发布到公共仓库，就千万不要对该分支进行rebase操作；
```

