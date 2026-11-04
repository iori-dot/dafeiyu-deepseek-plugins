# 大肥鱼 · DeepSeek 学习 / 直播插件

配套教学视频《大肥鱼教你做学习直播插件》的完整可运行代码与提示词。

> 模型按 DeepSeek 官方文档（2026-11）：`deepseek-flash`（DeepSeek-V4.1-Flash），`base_url = https://api.deepseek.com`，接口兼容 OpenAI 格式。API Key 在 [DeepSeek 开放平台](https://platform.deepseek.com) 创建。

## 目录

| 路径 | 说明 |
| --- | --- |
| `dfy-study/` | Chrome / Edge 扩展（Manifest V3）：划词 → 右键「大肥鱼讲解」→ 讲解 + 闪卡 |
| `dfy-live/live_helper.py` | 直播助手：终端输入问题，OBS 浏览器来源显示回答卡 |
| `提示词与代码合集.md` | 全部提示词、安装步骤、常见坑与安全说明 |

## 学习插件（dfy-study）

1. 打开 `chrome://extensions`（Edge：`edge://extensions`）
2. 打开「开发者模式」→「加载已解压的扩展程序」→ 选本仓库的 `dfy-study` 文件夹
3. 点扩展图标，粘贴 DeepSeek API Key 并保存（只存在本机浏览器）
4. 在任意网页选中文字 → 右键「大肥鱼讲解」→ 再点图标查看讲解与闪卡

## 直播助手（dfy-live）

```bash
pip install flask openai
# Windows PowerShell
$env:DEEPSEEK_API_KEY="你的Key"
# macOS / Linux
export DEEPSEEK_API_KEY=你的Key

python dfy-live/live_helper.py
```

OBS：「来源」→「+」→「浏览器」→ URL 填 `http://localhost:5000`（建议宽 800、高 300）。

## 安全

- **不要**把 API Key 写进代码、提交到 Git，或出现在直播画面上
- Key 只放在浏览器本地存储 / 环境变量里；不要把带 Key 的扩展打包发给别人
- AI 回答建议先过目再展示；遵守各直播平台关于 AI 内容的规则

## 常见坑

- **401**：Key 不对或有多余空格
- **402**：余额不足
- **429**：请求太快——直播场景请挑问题、排队发，不要每条弹幕都打

## License

MIT。仅供学习交流；与 DeepSeek / 大肥鱼官方无隶属关系。
