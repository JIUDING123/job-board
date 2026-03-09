# 国际化（i18n）实施总结

## 实施完成情况 ✅

### 核心策略变更

鉴于 Next.js App Router 的 Parallel Routes 与 `[lang]` 动态路由结合时产生的无限重定向问题，我们采用了 **基于 Cookie 的国际化策略**。

**新架构优势：**
1.  **URL 保持简洁**：无需 `/en` 或 `/zh` 前缀（`localhost:3000/` 直接访问）。
2.  **兼容性更强**：完美兼容现有的 Parallel Routes (`@sidebar`) 和 Clerk 认证。
3.  **用户体验**：语言偏好通过 Cookie 持久化，自动记住用户选择。

### 核心基础设施

#### ✅ 已完成的文件

1.  **`src/lib/i18n-config.ts`** - 新建
    *   定义 `locales`、`defaultLocale` 和 `LOCALE_COOKIE_NAME`。
    *   解耦了服务端限定代码，供中间件和客户端使用。

2.  **`src/lib/get-locale.ts`** - 重写
    *   改为优先从 Cookie 读取语言偏好。
    *   降级回退到 `Accept-Language` 请求头。

3.  **`src/lib/set-locale.ts`** - 新建 (Server Action)
    *   提供 `setLocale` Server Action 安全地设置 HttpOnly Cookie。

4.  **`src/app/layout.tsx`** - 更新
    *   在根布局中从 Cookie 获取语言。
    *   将字典传递给 Client Context。
    *   移除了 `[lang]` 目录结构，扁平化到 `src/app`。

5.  **`src/middleware.ts`** - 简化
    *   移除了复杂的语言重定向逻辑。
    *   保留基本的 Clerk 认证保护。

### 字典文件

5.  **`src/dictionaries/en.json`** & **`zh.json`**
    *   涵盖：通用翻译、导航、侧边栏、职位列表、表单、雇主功能、元数据、错误消息、日期等。

### UI 组件

6.  **`src/components/LanguageSwitcher.tsx`** - 重构
    *   使用 Server Action (`setLocale`) 切换语言。
    *   调用 `router.refresh()` 刷新页面数据，而不改变 URL。

7.  **`src/components/sidebar/AppSidebar.tsx`** - 更新
    *   从 Server Component 获取当前语言并传递给切换器。

### 组件清理

8.  **路径修复**
    *   `_EmployerSidebarContent.tsx` 等组件移除了 `useLocalizedPath`，因为不再需要 URL 前缀。
    *   `JobListingItems.tsx` 链接路径保持原样。

---

## 功能特性

### ✅ 已实现的核心功能

1.  **语言持久化**
    *   用户选择语言后，偏好保存在 Cookie 中（有效期1年）。
    *   下次访问自动应用偏好。

2.  **无缝切换**
    *   侧边栏切换语言，页面即时刷新。
    *   不丢失当前页面路径或查询参数。

3.  **国际化内容**
    *   ✅ 侧边栏导航
    *   ✅ 职位列表页面
    *   ✅ 职位徽章（类型、经验、地点等）
    *   ✅ 雇主仪表板

---

## 测试验证

### 如何测试

1.  **启动开发服务器**
    ```bash
    npm run dev
    ```
    访问 http://localhost:3000

2.  **测试语言切换**
    *   在侧边栏底部找到语言切换器。
    *   切换语言，页面应立即刷新并显示新语言。
    *   刷新浏览器，语言偏好应保持。

3.  **测试深层链接**
    *   访问特定职位或页面（如 `/employer`）。
    *   切换语言，应该停留在同一页面。

---

## 技术说明

### URL 结构

*   **旧/原计划**: `/en/job-listings`, `/zh/employer`
*   **实际实施**: `/job-listings`, `/employer` (语言由 Cookie 决定)

### 为什么放弃 `[lang]` 路由？

Next.js 的 Parallel Routes（如 `@sidebar`）在动态路由段（`[lang]`）下的行为非常复杂，尤其是在根路径重定向时容易产生无限循环。改为 Cookie 方案避免了所有路由冲突，是目前最稳健的解决方案。

---

## 后续计划

### 📋 待实施的功能

1.  **表单国际化**：职位创建/编辑表单。
2.  **页面元数据**：动态页面标题翻译。
3.  **SEO 优化**：如果需要搜索引擎区分语言，将来可能需要重新引入 URL 策略（或使用子域名），但目前 Cookies 对于 SaaS 应用体验更好。
