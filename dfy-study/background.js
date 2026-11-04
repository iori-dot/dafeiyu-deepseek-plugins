const STUDY_PROMPT = "你是耐心的学习老师。先用初中生能听懂的话讲解下面这段文字，再出 3 张问答闪卡，格式：Q：… A：…";

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({ id: "dfy", title: "大肥鱼讲解", contexts: ["selection"] });
});

chrome.contextMenus.onClicked.addListener(async (info) => {
  if (info.menuItemId !== "dfy") return;
  const { key } = await chrome.storage.local.get("key");
  if (!key) {
    await chrome.storage.local.set({ last: "请先点扩展图标，填入 API Key～" });
    return;
  }
  chrome.action.setBadgeText({ text: "…" });
  try {
    const res = await fetch("https://api.deepseek.com/chat/completions", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Authorization": `Bearer ${key.trim()}` },
      body: JSON.stringify({
        model: "deepseek-flash",
        messages: [
          { role: "system", content: STUDY_PROMPT },
          { role: "user", content: info.selectionText }
        ]
      })
    });
    if (!res.ok) {
      const hint = res.status === 401 ? "（API Key 不对，检查有没有多余空格）"
                 : res.status === 402 ? "（余额不足，去平台充值）"
                 : res.status === 429 ? "（请求太快，稍后再试）" : "";
      await chrome.storage.local.set({ last: `出错了：${res.status}${hint}` });
    } else {
      const data = await res.json();
      await chrome.storage.local.set({ last: data.choices[0].message.content });
    }
  } catch (e) {
    await chrome.storage.local.set({ last: "网络出错：" + e.message });
  }
  chrome.action.setBadgeText({ text: "✓" });
});
