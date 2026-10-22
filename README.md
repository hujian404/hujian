# 胡健 Jian Hu

中英文个人主页与简历，内容依据个人简历与补充资料整理。网站使用 Jekyll，中文为默认语言。

## 页面

- `/` 中文主页，`/en/` English homepage
- `/cv/` 中文简历，`/en/cv/` English CV
- 顶部的 **中文 / English** 按钮切换对应语言，并保留当前栏目锚点。
- **打印 / 保存 PDF** 使用浏览器打印，自动隐藏导航并使用打印排版。

栏目包括教育、研究、论文、项目与竞赛、实践与服务、荣誉与技能。论文状态为已录用，硕士毕业时间标注为预计。

## 更新内容

`_data/profile.yml` 是中英文内容的唯一来源。保持 `zh` 和 `en` 中相同的栏目、条目和事实同步；不要把原始个人资料或证书编号上传到公开仓库。

`_layouts/resume.html` 共用一套页面布局；`assets/resume.css` 包含响应式和打印样式；`assets/resume.js` 保留语言切换时的栏目位置。语言按钮是普通链接，不依赖 JavaScript 也能工作。

旧 Academic Pages 模板内容保留在源码中供参考，但通过 `_config.yml` 排除，不会作为个人成果发布。

## 本地运行

```bash
bundle install
bundle exec jekyll serve --baseurl ""
```

## 博客同步

此仓库由 `hujian404/hujian404.github.io` 以 `resume/` 子模块引用，跟踪 `master`。提交到此仓库后，博客的 GitHub Actions 每小时同步并构建到：

- 中文：<https://hujian404.github.io/resume/>
- English：<https://hujian404.github.io/resume/en/>

在博客 Actions 中手动运行 **Sync resume and deploy blog** 可立即触发同步。博客构建时覆盖 `url` / `baseurl`，双语链接、资源、canonical 和 hreflang 随部署子路径生成。无需在两个仓库重复维护简历。

模板许可见 [LICENSE](LICENSE)。
