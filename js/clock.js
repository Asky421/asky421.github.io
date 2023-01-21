/** @format */

function startTime() {
  let today = new Date();
  let y = today.getFullYear();
  let m = today.getMonth() + 1;
  let d = today.getDate();
  let t = today.toLocaleTimeString();
  let ws = new Array("日", "一", "二", "三", "四", "五", "六");
  let w = today.getDay();
  document.getElementById(
    "time"
  ).innerHTML = `${y}年${m}月${d}号 ${t} 星期${ws[w]}`;
  r = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
