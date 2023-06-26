## 在vscode中快速打开某个文件夹（文件）
`code .`(打开当前文件夹) `code ./readme.md`(打开readme文件)
场景：可以应用在`git clone` 某个项目之后，cd 到这个项目，最后 `code .`
配置：1. 打开`vscode`，输入`command+shift+p` 2. 在弹出窗口中输入 `shell command`（在PATH中安装code命令）

## 技巧
readme.md 在网页预览换行没有效果
解决方法：在行末加两个空格

## Github 配置SSH密钥
在官网链接中按照步骤来就行，首先生成SSH密钥，然后将 SSH 密钥添加到 ssh-agent 中，可以不存储在密钥链中，最后将SSH公钥放在Github上保存。
需要注意的是：id_rsa 里面存放私钥，id_rsa.pub 里面存放公钥，Github上保存的是公钥，这一点需要注意一下，否则Github会报SSH格式不正确的错误。
[Github 官方链接](https://docs.github.com/zh/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)