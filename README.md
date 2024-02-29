# Git代码上传

```bash
1.初始化
git init
2.查看当前状态
git status
3.提交到暂存区
git add .
4.查询当前状态
git status
5.提交到本地的版本库
git commit -m "huangpw"
6.第一次需要关联远程仓库
git remote add origin https://gitee.com/huangpeiwen/uniapp-wxapp-vitepress.git
7.提交代码到远程仓库
git push -u origin "master"
8.将远程指定分支 拉取到 本地当前分支上
git pull # 将与本地当前分支同名的远程分支 拉取到 本地当前分支上
# git pull origin <远程分支名>:<本地分支名> # 将远程指定分支 拉取到 本地指定分支上
git pull -u origin "master" # git pull origin <远程分支名>
9.将项目克隆到本地
git clone https://gitee.com/huangpeiwen/uniapp-wxapp-vitepress.git
```

