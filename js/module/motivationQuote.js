// motivationQuote.js
export function getQuote() {
    const quotes = [
        "堅持就是勝利，你的每一步努力都在累積成功！",
        "今天的努力是明天的基礎，加油！",
        "進步不在於速度，而在於堅持，持之以恆就能達成目標！",
        "每天進步1%，一年後你會進步37倍！",
        "成功是每天努力的積累，繼續向前！",
        "不要輕言放棄，你比想像中更接近成功！",
        "今天的付出，是為了明天的收穫，堅持！"
    ];
    return quotes[Math.floor(Math.random() * quotes.length)];
}