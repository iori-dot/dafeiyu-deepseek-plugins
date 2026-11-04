# 大肥鱼 · DeepSeek 学习 / 直播插件

制作相关的**可运行代码**与**提示词**（不含视频、封面、口播稿）。

> 模型：`deepseek-flash`（DeepSeek-V4.1-Flash），`base_url = https://api.deepseek.com`。API Key：https://platform.deepseek.com

## 目录

| 路径 | 说明 |
| --- | --- |
| `dfy-study/` | Chrome / Edge 扩展（Manifest V3）：划词讲解 + 闪卡 |
| `dfy-live/live_helper.py` | 直播助手脚本（OBS 浏览器源） |
| `提示词与代码合集.md` | 大肥鱼插件提示词与安装说明 |
| `dsh-prompts.md` | DeepSeek Harness 官方桌面端精简步骤与提示词 |

## 学习插件

1. `chrome://extensions` → 开发者模式 → 加载已解压 → 选 `dfy-study`
2. 扩展图标里粘贴 API Key（只存本机）
3. 网页划词 → 右键「大肥鱼讲解」

## 直播助手

```bash
pip install flask openai
export DEEPSEEK_API_KEY=你的Key   # Windows PowerShell: $env:DEEPSEEK_API_KEY="你的Key"
python dfy-live/live_helper.py
```

OBS → 浏览器源 → `http://localhost:5000`

## 安全

不要把 API Key 写进代码或提交到 Git；回答建议先过目再展示。

## License

MIT。仅供学习交流；与 DeepSeek / 大肥鱼官方无隶属关系。
