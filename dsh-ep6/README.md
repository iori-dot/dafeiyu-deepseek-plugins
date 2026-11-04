# DSH Desktop 新手第6集 · 接常见软件（IM）

> **重要**：本集走的是**社区插件**路径，不是深度求索官方功能。插件名：`@xmanrui/dsh-im`（社区维护）。Desktop 另有**自带飞书 cc-connect** 官方桌面路径，与本集分开。

## 三标题候选
- DSH 接 QQ / 飞书：社区插件 dsh-im 安全上手
- Settings → IM机器人｜QQ 扫码或 AppID，群聊要 @
- 先装 dsh-market，再装 @xmanrui/dsh-im｜非官方插件必看

## 步骤清单

1. **先装 dsh-market**（市场不是开机自带）  
   Settings → Desktop settings → 手动安装 `dsh-market`。第三方来源先核实再装。

2. **安装社区 IM 插件**  
   ```bash
   dsh plugin --profile desktop add -w @xmanrui/dsh-im
   ```  
   装完**重启** Desktop。

3. **打开 IM机器人**  
   Settings → **IM机器人**。支持频道示意：飞书 / 微信 / 钉钉 / 企微 / QQ / Slack / Telegram / Discord / WhatsApp（以插件当前版本为准）。

4. **接 QQ**  
   - 方式 A：手机 QQ 扫码  
   - 方式 B：填 AppID + AppSecret  
   - 私聊：显示「正在输入」，支持 Markdown  
   - 群聊：**被 @ 才回复**

5. **飞书两条路别混**  
   - 本集主路径：社区 `@xmanrui/dsh-im` → IM机器人 → 飞书  
   - 另一条：Desktop **自带飞书 cc-connect**（官方桌面路径，按官方桌面文档）

6. **安全必看**  
   - 白名单 / 权限：扫码新建的飞书、QQ 机器人**默认允许所有用户** → 记得收紧  
   - 密钥（AppSecret / Token）不进聊天、截图、公开仓库  
   - 局域网分享**无鉴权**；默认只听 `127.0.0.1`，别随手开 LAN

## 口播要点（与成片一致）
1. [hook] 想让 DSH 回 QQ 消息？可以！但今天这条路是社区插件，不是深度求索官方功能哦～
2. [mkt] 第一步：Settings 里手动安装 dsh-market。市场不是开机自带的，第三方来源先核实。
3. [im] 接着装社区插件：在终端对 Desktop 配置执行 dsh plugin --profile desktop add -w @xmanrui/dsh-im，装完重启。
4. [im] 重启后打开 Settings，找到 IM机器人。频道很多：飞书、微信、钉钉、企微、QQ、Slack、Telegram、Discord、WhatsApp。
5. [qq] 接 QQ：可用手机 QQ 扫码，或填 AppID 加 AppSecret。私聊会显示正在输入，支持 Markdown；群聊只有被 @ 才回复。
6. [fs] 飞书有两条路：这条社区 IM 插件一条；桌面自带的飞书 cc-connect 是另一条官方桌面路径，别混成同一个。
7. [safe] 安全：白名单和权限看清楚；密钥别外泄；局域网分享仍然没有鉴权，默认只留本机。
8. [outro] 常见软件接上啦！下集讲托盘、健康检查、Safe Mode 这些天天用的功能，拜拜～

## 标签
`DSH Desktop` `社区插件` `dsh-im` `dsh-market` `QQ` `飞书` `IM机器人` `非官方`
