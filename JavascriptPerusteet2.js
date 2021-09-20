//Javascript -perusteet, teht 2

let puhnumJaNimi = [
  { name: "Maija Meikäläinen", number: "040034444" },
  { name: "Matti Meikäläinen", number: "045345335" },
  { name: "Ville Valo", number: "0400897975" },
];

console.log(
  "------------------------------------------------------------------"
);
let input = require("readline-sync");
console.log("Haluatko lisata uuden yhteistiedon vai hakea olemassa olevaa?");
let vastaus = input.question("\nUusi(u), Haku(h), Lopeta(l):");

switch (vastaus) {
  case "u":
    let nimi = input.question("Nimi:");
    let numero = input.question("Numero:");
    puhnumJaNimi.push({ name: nimi, number: numero });
    break;
  case "h":
    let vastaus1 = input.question("Nimi:");
    console.log(haku(vastaus1, puhnumJaNimi));
    break;
  case "l":
    break;
}

function haku(str, lista) {
  let numeroLoytyi = false;
  let virheIlmoitus = "Ei ole luettelossa.";

  for (let i = 0; i < lista.length; i++) {
    if (str == lista[i].name) {
      return lista[i].number;
    }
  }
  return virheIlmoitus;
}
