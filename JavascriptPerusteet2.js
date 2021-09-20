//Javascript -perusteet, teht 2

const puhnumJaNimi = [
  { name: "Maija Meikalainen", number: "040034444" },
  { name: "Matti Meikalainen", number: "045345335" },
  { name: "Ville Valo", number: "0400897975" },
];

let jatketaan = true;
do {
  let input = require("readline-sync");
  console.log(
    "\n------------------------------------------------------------------"
  );
  console.log("Haluatko lisata uuden yhteistiedon vai hakea olemassa olevaa?");
  let vastaus = input.question("Uusi(u), Haku(h), Lopeta(l):");
  switch (vastaus) {
    case "u":
      var nimi = input.question("Nimi:");
      nimi = nimi.toUpperCase();
      var numero = input.question("Numero:");
      puhnumJaNimi.push({ name: nimi, number: numero });
      break;
    case "h":
      var vastaus1 = input.question("Nimi:");
      console.log(haku(vastaus1));
      break;
    case "l":
      jatketaan = false;
      break;
    default:
      break;
  }
} while (jatketaan == true);

function haku(str) {
  let virheIlmoitus = "Ei ole luettelossa.";
  str = str.toUpperCase();
  for (let i = 0; i < puhnumJaNimi.length; i++) {
    if (puhnumJaNimi[i].name == str) {
      return puhnumJaNimi[i].number;
    }
  }
  return virheIlmoitus;
}
