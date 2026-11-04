import os, html, time, threading
from flask import Flask
from openai import OpenAI

LIVE_PROMPT = "你是直播间助手大肥鱼。用不超过 30 字、可爱友好的语气回答观众问题；不确定就说“我去问问主播”，不要编造。"
client = OpenAI(api_key=os.environ["DEEPSEEK_API_KEY"], base_url="https://api.deepseek.com")
app = Flask(__name__)
state = {"q": "", "a": "等待观众提问中…"}

def reply(question):
    r = client.chat.completions.create(
        model="deepseek-flash",
        messages=[{"role": "system", "content": LIVE_PROMPT},
                  {"role": "user", "content": question}])
    state["q"], state["a"] = question, r.choices[0].message.content

def console_loop():
    # 主播在终端里粘贴挑好的观众问题，回车发送；一条一条来，避免 429
    while True:
        q = input("观众问题> ").strip()
        if not q:
            continue
        try:
            reply(q)
            print("回答：", state["a"])
        except Exception as e:
            print("出错了：", e)
        time.sleep(1)

@app.route("/")
def card():
    return f"""<meta charset="utf-8"><meta http-equiv="refresh" content="3">
<body style="margin:0;background:transparent;font-family:sans-serif">
<div style="margin:20px;padding:20px 28px;border-radius:22px;color:#fff;
 background:linear-gradient(135deg,#3d7bff,#7a5cff)">
<div style="opacity:.85">观众：{html.escape(state['q'])}</div>
<div style="font-size:28px;font-weight:800">大肥鱼：{html.escape(state['a'])}</div></div></body>"""

threading.Thread(target=console_loop, daemon=True).start()
app.run(port=5000)
