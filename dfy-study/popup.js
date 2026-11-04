const out = document.getElementById("out");
chrome.storage.local.get(["last"]).then(({ last }) => {
  out.textContent = last || "选中网页文字 → 右键「大肥鱼讲解」";
});
chrome.action.setBadgeText({ text: "" });
document.getElementById("save").onclick = async () => {
  await chrome.storage.local.set({ key: document.getElementById("key").value.trim() });
  out.textContent = "Key 已保存（只存在本机浏览器里）";
};
