# 🗂️ TodoPlanPrivate - 多益與減重追蹤計畫

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![Status](https://img.shields.io/badge/status-active-brightgreen)

> 多益學習 + 減重健身，雙軌並進的 47 天挑戰工具。

---

## 🔍 專案簡介
TodoPlanPrivate 是一套幫助你在短期內同時提升「英文能力」與「身體健康」的追蹤工具。

透過每日任務安排、進度條視覺化、成就提示、體重追蹤與每日一句勵志語錄，讓學習與健康變得更具動力與系統性。

---

## 📂 專案結構

```
TodoPlanPrivate/
├── index.html                # 主 HTML 入口
├── css/
│   └── styles.css            # 自訂樣式
├── js/
│   ├── main.js               # 主整合腳本
│   └── modules/              # 功能模組
│       ├── countdown.js          # 倒數計時器
│       ├── taskStorage.js        # 任務儲存與同步
│       ├── weightTracker.js      # 體重追蹤與進度更新
│       ├── taskRenderer.js       # 顯示每日任務
│       ├── collapsible.js        # 折疊開關控制
│       ├── progressUpdater.js    # 進度條更新
│       ├── achievementSystem.js  # 成就邏輯與提示
│       └── motivationQuote.js    # 每日勵志語錄
└── data/
    └── tasks.json           # 任務資料（建議擴充）
```

---

## 🧰 功能特色

- ✅ 自動每日任務篩選與顯示
- 📈 雙進度條（多益與體重）實時更新
- 🏆 成就系統與動態提醒
- 🧠 任務完成狀態與體重記錄儲存至 localStorage
- 💬 每日一句隨機勵志語錄提升動力

---

## 🚀 使用說明

1. 將專案 clone 或下載後，直接打開 `index.html`
2. 點擊任務勾選、輸入體重並點擊更新
3. 進度與狀態自動儲存並即時反映

```bash
# 可選擇使用建構工具
npm install
npm run dev
```

---

## 📌 擴充建議

- 🔄 將任務內容改為動態載入 JSON（`data/tasks.json`）
- 📊 使用 Chart.js 顯示體重與任務進度圖表
- 🔐 整合 Firebase 登入與雲端同步任務狀態
- 🌓 加入深色模式切換
- 📱 加入 PWA 功能，可加入桌面並離線使用

---

## 🖼️ 預覽畫面

```
📌 [TO DO] screenshots/today-task.png
📌 [TO DO] screenshots/progress-bar.png
```

---

## 📄 License

本專案採用 MIT License。

---

Made with ❤️ by [Ash] · 成就感就是每天完成一點點！