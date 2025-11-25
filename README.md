# Vitesse

一个基于 Vue 3、Vite 和 TypeScript 的现代化前端开发模板。

## 技术栈

- [Vue 3](https://v3.vuejs.org/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Pinia](https://pinia.vuejs.org/) - 状态管理
- [UnoCSS](https://uno.antfu.me/) - 原子化 CSS
- [Vue Router](https://router.vuejs.org/)

## 快速开始

### 开发环境

```bash
# 启动开发服务器
pnpm dev
```

### 构建项目

```bash
# 构建生产版本
pnpm build
```

### 其他命令

```bash
# 类型检查
pnpm type-check

# 代码格式化
pnpm format

# 代码检查并修复
pnpm lint
```

## 项目结构

```
src/
├── pages/         # 页面组件
├── router/        # 路由配置
├── stores/        # 状态管理
├── styles/        # 全局样式
├── App.vue        # 根组件
└── main.ts        # 应用入口
```

## 功能特点

1. 基于文件系统的路由
2. 状态管理 (Pinia)
3. 原子化 CSS (UnoCSS)
4. TypeScript 支持
5. 开箱即用的开发工具 (Vue DevTools)
6. 图标自动导入 (Iconify)

## 浏览器兼容性

支持所有现代浏览器。

## 许可证

MIT
