/** @format */

let click = 0;
function red() {
  document.getElementById("fakeLink").style.color = "red";
  setTimeout("purple()", 150);
}
function purple() {
  alert("哈哈哈你被骗了，点空白区域试试吧");
  document.getElementById("fakeLink").style.color = "purple";
}
