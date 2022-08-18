function time() {
   let date = new Date();

  let month = date.toLocaleString( 'en-gb', {month: 'long', day: 'numeric'});
  //Метод toLocaleString() возвращает строку с языкозависимым представлением даты.

 let hr = date.getHours();
  hr = (hr < 10) ? "0" + hr : hr;

  let mm = date.getMinutes();
  mm = (mm < 10) ? "0" + mm : mm;

  let ss = date.getSeconds();
  ss = (ss < 10) ? "0" + ss : ss;

  document.querySelector(".month").innerText = month;
  document.querySelector(".mm").innerText = mm;
  document.querySelector(".hr").innerText = hr;
  document.querySelector(".ss").innerText = ss;

  setInterval(time, "1000");
}

time();