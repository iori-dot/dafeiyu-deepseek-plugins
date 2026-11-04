# DSH 新手系列 · 第1集《安装》提示词与步骤合集

> DSH Desktop = 粉丝/社区客户端 · **非官方**。事实以 dsh-desktop.com / GitHub anywhere-labs/dsh-desktop 为准。

## 建议标题（3 选）
1. 3秒装好 DSH Desktop！Windows/Mac/Linux 新手全流程
2. DSH Desktop 安装教程｜SmartScreen 拦了怎么办
3. 粉丝社区客户端 DSH 新手第1集：从下载到托盘召唤

## 步骤清单
- **下载**：官网选 Win NSIS / Mac Universal DMG / Linux deb
- **安装放行**：Win: 更多信息→仍要运行；Mac: 右键→打开
- **召唤**：Ctrl/⌘ + Shift + Space
- **健康检查**：Settings → Desktop settings
- **数据目录**：Desktop: ~/.dsh-desktop ； CLI: ~/.dsh

## 本集口播稿
1. 看！桌面亮起来了——DSH Desktop，三秒就装好能用！
2. 今天带你从零安装。记好啦：它是粉丝社区客户端，非官方，别跟官方产品搞混哦～
3. 打开官网下载页，Windows 选 x64 的 NSIS；Mac 选 Universal 的 DMG；Linux 有 amd64 和 arm64 的 deb。
4. Windows 双击安装；Mac 打开 DMG，把应用拖进「应用程序」；Linux 用软件中心或命令装好 deb。
5. 小心踩坑！SmartScreen 或 Gatekeeper 拦你别慌，先确认来源可信。
6. Windows 点「更多信息」，再点「仍要运行」；Mac 在访达里右键应用，选「打开」。
7. 装好后可能会进托盘。随时按 Control 或 Command，再加 Shift 和空格，就能把窗口召唤回来。
8. 打开设置里的 Desktop settings，可以改召唤快捷键、登录自启，还能跑一遍本地健康检查。
9. 健康检查默认离线只读，不会自动上传或乱改。数据目录默认是用户下的点 dsh-desktop，和命令行点 dsh 分开。
10. 好啦，安装步骤都收好了！下集教你配置 API，选 deepseek-flash，一发测试消息就通，拜拜～

## 下集
下集：API 配置 · deepseek-flash

## 来源核对
- https://dsh-desktop.com/en/docs/install
- https://github.com/anywhere-labs/dsh-desktop
- https://dshdesktop.com/en/tutorials/guide-install.html（交叉核对）
- 模型：`deepseek-flash` = DeepSeek-V4.1-Flash-1017

## 平台下载速查
| 平台 | 包 |
| --- | --- |
| Windows x64 | NSIS 安装程序 |
| macOS | Universal DMG（Gatekeeper：右键 → 打开） |
| Linux | amd64 / arm64 `.deb`（亦见 GitHub Release 的 AppImage / tar.gz） |

## 召唤快捷键
默认 `Ctrl/Cmd + Shift + Space`（可在 Desktop settings 改）

## 数据目录
- Desktop 默认：`~/.dsh-desktop`
- CLI 常见：`~/.dsh`
