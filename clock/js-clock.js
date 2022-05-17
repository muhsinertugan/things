function promptName() {
  let getName = prompt("Lütfen Adınızı Giriniz...");
  const visitorName = document.querySelector("#myName");
  getName != null && getName != ""
    ? (visitorName.innerHTML = `${getName}`)
    : promptName();
}
promptName();

function showTime() {
  const clockDiv = document.querySelector("#myClock");
  let today = new Date();
  let date =
    today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
  var time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  clockDiv.innerHTML = `${date} ${time}`;
  setTimeout("showTime()", 1000);
}
showTime();
