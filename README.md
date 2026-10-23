# 胡健 Jian Hu

个人学术主页，沿用 [Academic Pages](https://github.com/academicpages/academicpages.github.io) 原生布局、侧栏、导航、响应式样式和主题切换。

## 内容与语言

- 中文主页 `/`，英文主页 `/en/`，简历 `/cv/` 与 `/en/cv/`。
- 导航包含教育经历、研究方向与经历、论文、项目、荣誉和简历；实践与服务在主页与简历中提供入口。
- 顶部的 English / 中文 链接切换到对应栏目，保留当前锚点；无 JavaScript 时仍可切换语言。
- `_data/profile.yml` 维护双语资料，`_data/authors.yml` 维护双语侧栏，`_data/navigation.yml` 维护分类。
- 头像为 `images/hj.png`，源自用户提供的 `hujian/hj.png`。
- 硕士专业名称统一为 MEng Student in Computer Technology (Electronic Information)。项目内容不展示量化指标。
- 旧模板示例页不参与发布。原始 Word 简历不上传。

## 博客同步

此仓库由 `hujian404/hujian404.github.io` 以 `resume/` 子模块引用，跟踪 `master`；每小时自动同步，也可手动运行博客的 Sync resume and deploy blog 工作流。
线上地址：[中文](https://hujian404.github.io/resume/) · [English](https://hujian404.github.io/resume/en/)。

## 本地预览

```sh
bundle install
bundle exec jekyll serve --baseurl ""
```

上游更新已合并至 `7b95833`。保留原始许可证与模板署名。
