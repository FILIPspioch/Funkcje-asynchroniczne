//elementy
const viewport = document.querySelector("#main");

//zmienne
const date = new Date();

//funkcje
function sayHello() {
  viewport.innerHTML += `<h1>tekst</h1>`;
}

//kod
viewport.innerHTML += ` Godzina drukowana przed wywyołaniem funkcji ${date.getHours()} : ${date.getMinutes()}`;
setTimeout(sayHello, 1000);
viewport.innerHTML += `<br></br>`;
viewport.innerHTML += ` Godzina drukowana po wywyołaniu funkcji ${date.getHours()} : ${date.getMinutes()}`;

viewport.innerHTML += `<h2> Wniosek: </h2>`;
viewport.innerHTML += `<p>Program nie czeka na to aż się wykona funkcja setTimeout tylko idzie dalej i gdy minie podany czas to się wykonuje.</p>`;
