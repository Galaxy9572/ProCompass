# ProCompass 隐私政策网站

基于 Vue 3 + Vite + vue-i18n 构建的隐私政策页面，支持多语言。

## 技术栈

- Vue 3 - 渐进式 JavaScript 框架
- Vite - 新一代前端构建工具
- vue-i18n - Vue 国际化插件
- GitHub Pages - 静态站点托管

## 开发

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:5173 查看效果。

### 构建生产版本

```bash
npm run build
```

构建产物在 `dist` 目录。

## 部署

### 方式一：GitHub Actions 自动部署（推荐）

1. 将代码推送到 `main` 分支
2. GitHub Actions 自动构建并部署到 GitHub Pages
3. 访问 https://junyliao.github.io/ProCompass/ 查看效果

**首次使用需要配置：**

1. 进入仓库 Settings > Pages
2. Source 选择 "GitHub Actions"

### 方式二：手动部署

```bash
npm run deploy
```

这将执行构建并使用 `gh-pages` 包推送到 `gh-pages` 分支。

## 添加新语言

1. 在 `src/i18n/locales/` 创建新的 JSON 文件，如 `ko.json`
2. 在 `src/i18n/index.js` 中导入并添加到 messages
3. 在 `PrivacyView.vue` 的语言选择器中添加选项

## 项目结构

```
procompass-site/
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions 部署配置
├── src/
│   ├── components/
│   │   └── PrivacyView.vue # 隐私政策组件
│   ├── i18n/
│   │   ├── index.js        # i18n 配置
│   │   └── locales/        # 翻译文件
│   │       ├── zh-Hans.json
│   │       ├── zh-Hant.json
│   │       ├── en.json
│   │       └── ja.json
│   ├── App.vue             # 根组件
│   └── main.js             # 入口文件
├── index.html              # HTML 模板
├── vite.config.js          # Vite 配置
└── package.json            # 项目依赖
```

## 配置说明

### vite.config.js

- `base: '/ProCompass/'` - GitHub Pages 路径，如果你的仓库名不同，需要修改

### 修改联系信息

编辑 `src/i18n/locales/*.json` 中的 `contact` 字段：

```json
{
  "contact": {
    "name": "Your Name",
    "email": "your.email@example.com"
  }
}
```

## 许可证

MIT
