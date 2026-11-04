# DeepSeek Harness · 新手提示词与步骤（精简）

官方桌面端：https://www.deepseek.com/download/  
CDN：`download.deepseek.com`（Win `dsh-latest-windows-x64.exe` / Mac Apple silicon `dsh-latest-macos-arm64.dmg`）  
Linux：`npx @deepseek-ai/dsh web`  
模型：`deepseek-flash`（DeepSeek-V4.1-Flash-1017）

> 不是社区 Tauri / 粉丝客户端。

## 安装核对

1. 只从官网或 `download.deepseek.com` 下载，不要第三方「绿色版」。
2. Win：双击 exe；若 SmartScreen 拦截 → 更多信息 → 仍要运行（先确认来源）。
3. Mac：dmg 拖入「应用程序」；Gatekeeper 时右键打开。
4. 首次启动后选工作区：用小项目文件夹，不要整盘 / 密钥目录。

## 模型

- 设置 → 模型：DeepSeek 账号登录，或填写开放平台 API Key（保存后不明文回显）。
- 会话里选 `deepseek-flash`。自定义 Base URL 时不要多写 `/chat/completions`。

## 常用提示词卡片

**小任务试跑**
```
帮我阅读当前工作区的 README，用中文写三句话介绍这个项目。
```

**学习任务**
```
把下面这段材料讲成初中生能懂的版本，再出 3 张问答闪卡（Q：… A：…）。
材料：
```

**小代码**
```
在当前工作区新建一个最小可运行示例，说明怎么启动，不要改无关文件。需求：
```

**审命令提醒（口令给自己）**
```
终端命令先审拟议卡片再执行；权限给最小；不确定就暂停。
```

## 安全

- API Key / 登录凭据不要进聊天、截图、仓库。
- 插件 = 本机权限；不明来源社区插件先审再装。
- LAN / 远程分享注意鉴权。

来源：deepseek.com/harness · github.com/deepseek-ai/deepseek-harness · api-docs.deepseek.com
