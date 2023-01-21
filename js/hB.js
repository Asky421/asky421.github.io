/** @format */

function hpBirth() {
  let today = new Date();
  let y = today.getFullYear() - 2007;
  let m = today.getMonth() + 1;
  let d = today.getDate();
  if (m === 1 && d === 20) {
    document.getElementById("hb").innerHTML = `今天是站长Asky的${y}岁生日<br />\
      让我们祝TA生日快乐！！！<br />\
      <a href="https://www.powercx.com/r/9n085" style="color:#77a4ff">点击送上生日祝福</a>\
      `;
  }
}
/*
      <button type="button" onclick="cele()">点击送上生日祝福</button><br />\
        <span id="survey"></span>\
      function cele(){
       document.getElementById("survey").innerHTML='\
       <iframe src="https://www.powercx.com/r/9n085" frameborder="0" height="500px"></iframe>\
       '
      }
*/ //废，手机端加载不出来
