//elementy
const viewport = document.querySelector("#main");

//zmienne

//funkcje
function getTime() {
  const data = new Date();
  viewport.innerHTML = `<p id="zegar">${data.getHours()} : ${data.getMinutes()} : ${data.getSeconds()}</p> <br>`;
}

//kod
setInterval(getTime, 1000); //czyli co 1s się wywołuje ta funkcja
