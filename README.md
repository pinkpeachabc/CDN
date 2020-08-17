# CDN
jsDelivr+github

## 上传资源

复制需要上传的资源到本地git仓库（注：jsDelivr不支持加载超过20M的资源），在本地git仓库目录下右键 Git Bash Here，执行以下命令：

```bash
复制git status                //查看状态
git add .                    //添加所有文件到暂存区
git commit -m '第一次提交'     //把文件提交到仓库
git push                      //推送至远程仓库
```

# 通过jsDelivr引用资源

使用方法：https://cdn.jsdelivr.net/gh/你的用户名/你的仓库名@发布的版本号/文件路径