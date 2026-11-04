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
