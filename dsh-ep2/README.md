# DSH 新手系列 · 第2集《API配置》提示词与步骤合集

> DSH Desktop = 粉丝/社区客户端 · **非官方**。事实以 dsh-desktop.com / GitHub anywhere-labs/dsh-desktop 为准。

## 建议标题（3 选）
1. DSH 配 API 一次成功｜选 deepseek-flash 发测试消息
2. 新手必看：Base URL 别多写 /chat/completions
3. DSH Desktop 第2集：官方 Key / 第三方 / 自定义 API

## 步骤清单
- **入口**：Settings → Models
- **模型**：deepseek-flash = DeepSeek-V4.1-Flash-1017
- **测试句**：请用一句话介绍你能帮我做什么。
- **自定义 URL**：Base URL 只到 /v1，不要加 /chat/completions
- **安全**：Key 本地保存，勿进聊天/截图

## 本集口播稿
1. 看！一发测试消息，秒回成功——API 通啦！
2. 点左下角 Settings，打开 Models。三种接法：官方 DeepSeek、列表里的第三方提供商，或者自定义 API。
3. 有官方 Key，就直接粘贴。要是字段提示已经配置过，别把灰色占位文字整段粘进去哦。
4. 模型请选 deepseek-flash。它对应 DeepSeek V4.1 Flash，五百五十二 B 的 MoE，输入大约八 B，输出大约十六 B，原生视觉，一百万上下文。
5. 别再用老的 V3 或 R1 当当前主力啦，现在主推就是 deepseek-flash。
6. 关掉设置，点 New Session，在输入框右下角确认模型，发官方推荐的测试句：请用一句话介绍你能帮我做什么。
7. 小心踩坑！自定义 Base URL 只写到斜杠 v1，后面别再拼 chat completions，客户端会自己补。
8. 还有：别粘占位符，别填错模型 ID。Key 只存在本地，千万别发到聊天，也别截进分享图。
9. 配置清单收藏好！下集带你第一次会话，先选工作区再开口，拜拜～

## 下集
下集：第一次会话 · 选工作区开干

## 来源核对
- https://dsh-desktop.com/en/docs/install
- https://github.com/anywhere-labs/dsh-desktop
- https://dshdesktop.com/en/tutorials/guide-install.html（交叉核对）
- 模型：`deepseek-flash` = DeepSeek-V4.1-Flash-1017

## 推荐模型
- 模型 ID：`deepseek-flash`
- 对应：DeepSeek-V4.1-Flash-1017（552B MoE，约 8B in / 16B out，原生视觉，1M 上下文）
- 不要把老的 V3 / R1 当当前主力

## 测试消息
```
请用一句话介绍你能帮我做什么。
```
英文官方示例：
```
Hello. Please describe in one sentence what you can help me do.
```

## 自定义 API
- Base URL **只写到** `/v1`（不要拼 `/chat/completions`）
- Key 仅存本地；勿进聊天/截图
