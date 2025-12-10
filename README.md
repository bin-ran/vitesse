# Vitesse

一个基于 Vue 3、Vite 和 TypeScript 的现代化前端开发模板。

## 技术栈

- [Vue 3](https://v3.vuejs.org/) - 渐进式框架
- [Vite](https://vitejs.dev/) - 构建工具
- [TypeScript](https://www.typescriptlang.org/) - 类型支持
- [Pinia](https://pinia.vuejs.org/) - 状态管理
- [UnoCSS](https://uno.antfu.me/) - 原子化 CSS
- [Vue Router](https://router.vuejs.org/) - 路由管理
- [VueUse](https://vueuse.org/) - 组合式工具库
- [Axios](https://axios-http.com/) - HTTP 客户端

## 环境要求

- Node.js >= 20.0.0 || >= 22.0.0 || >= 24.0.0
- pnpm

## 快速开始

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建生产版本
pnpm build

# 预览构建产物
pnpm preview

# 类型检查
pnpm type-check

# 代码检查并修复
pnpm lint

# 代码格式化
pnpm format
```

## 项目结构

```
src/
├── manager/       # 服务管理
├── pages/         # 页面组件
├── router/        # 路由配置
├── stores/        # 状态管理 (Pinia)
├── styles/        # 全局样式
├── App.vue        # 根组件
└── main.ts        # 应用入口
```

## 功能特点

- 📁 基于文件系统的路由 (unplugin-vue-router)
- 🗃️ 状态管理 (Pinia)
- 🎨 原子化 CSS (UnoCSS)
- 📘 TypeScript 支持
- 🛠️ Vue DevTools 集成
- 🎯 图标自动导入 (@iconify)
- 🎉 Canvas Confetti 粒子动效
- 🔧 ESLint + Prettier 代码规范

## 浏览器兼容性

支持所有现代浏览器。

## 许可证

MIT
