# VisualJevBench project page

纯静态网站，无需 npm、构建工具或后端。文件使用相对路径，适配 GitHub Pages 的 /visualjev/ 路径。

## 部署
1. 把本目录内的 index.html、style.css、site.js、assets 和 .nojekyll 上传到 Heart-Meng/visualjev 的 main 分支根目录。
2. GitHub 仓库 Settings → Pages → Build and deployment → Deploy from a branch。
3. Branch 选择 main，目录选择 / (root)，Save。
4. 发布后访问 https://heart-meng.github.io/visualjev/ ，首次构建需等待 GitHub 完成。

本地预览：在本目录执行 `python -m http.server 8000`，浏览器打开 http://localhost:8000 。

## 作者

Li Zeng · Yeqi Zeng · Hengkai Liang · Shiguo Wang · Meng Xie · Zeyu Ye · Jinheng Zhang · Xianlong Wang · Ziqi Zhou · Hangtao Zhang

## 后续补充清单
- 可公开论文 PDF / arXiv 链接；把 Paper 的 disabled button 替换成 a 标签。
- 数据集和 Hugging Face 链接、许可证、图像来源及使用条款。
- 数据划分、评测阈值、完整结果表、运行环境和复现命令。
- 正式 BibTeX；当前没有编造作者、arXiv 编号或录用状态。
- 实验代码的公开版本及配置示例：上传的实验代码包未纳入这个主页包，正式发布前应清理凭据、个人路径及缓存。

## 内容说明
页面文字为根据所提供论文编写的英文概述，不是逐字摘要。三个主要结果来自论文摘要，不代表相同设置的横向对比。assets/overview.png 从论文 Figure 1 裁出，未附带审稿 PDF；公开前请自行确认图像和稿件可以公开。论文和数据集按钮明确标为待发布。

## 文件
- index.html：所有页面内容、资源链接、作者及数值
- style.css：响应式布局与配色
- site.js：四种问题类型切换
- assets/overview.png：论文图 1

本包只搭建主页，不实现在线模型推理，也不需要 API key。参考站仅用于栏目组织灵感，未复制其源码、作者信息或实验数据。
