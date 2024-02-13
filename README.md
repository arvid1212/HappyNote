HappNotes


Examination Swing Notes
Alternativ 1
Instruktioner
Du ska bygga en sida där man kan hantera sina anteckningar. Ens anteckningar är kopplade till ett användarnamn som man får mata in i ett inputfällt.

Som användare ska man kunna göra:

Se sina anteckningar
Skapa en ny anteckning genom att mata in sitt användarnamn, titel på anteckning och texten
Uppdatera en anteckning
Ta bort en anteckning
API
Basurl: https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com

Endpoint	Metod	Beskrivning
/api/notes/:username	GET	Hämta anteckningar
/api/notes	POST	Spara en anteckning
/api/notes/:id	PUT	Ändra en anteckning
/api/notes/:id	DELETE	Ta bort en anteckning
Posta en ny anteckning

// Skickas med som body alltså det vi vill spara i databasen
const note = {
  username: 'ada',
  title: "Första anteckningen",
  note: "Min första anteckning"
}

let response = await fetch("https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com/api/notes", {
  method: "POST",
  body: JSON.stringify(note), // Gör om till ett JSON objekt
  headers: {
    'Content-Type': 'application/json' // Berätta för servern att det vi skickar med är ett JSON objekt
  }
});
Hämta ens anteckningar

let response = await fetch("https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com/api/notes/ada"); // Det sista är mitt användarnamn som jag som användare matat in i något inputfält
Uppdatera en anteckning

const note = {
  note: 'Detta är min uppdaterade text'
}

let response = await fetch("https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com/api/notes/21312dadad", {
  method: "PUT",
  body: JSON.stringify(note), // Gör om till ett JSON objekt
  headers: {
    'Content-Type': 'application/json' // Berätta för servern att det vi skickar med är ett JSON objekt
  }
}); // Det sista är ett unikt id som är kopplat till en anteckning
Ta bort en anteckning

let response = await fetch("https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com/api/notes/21312dadad", {
  method: 'DELETE'
}); // Det sista är ett unikt id som är kopplat till en anteckning
Note - objekt

Nyckel	Värde	Beskrivning
id	String	Ett genererat ID för denna anteckning.
username	String	Vem denna anteckning tillhör
title	String	Titeln på anteckningen. Max 50 tecken.
note	String	Själva anteckningstexten, max 200 tecken.
createdAt	Date	Datum när anteckningen skapades.
Betygskriterier

För att få Godkänt ska du:
Uppfylla alla krav på funktionalitet Gjort i Typescript och i sass, Använda dig av statiska typer och interface, använda dig av scss variabler, nesting, och mixin, modules

API-svaret (arrayen du får tillbaka) ska ha en datatyp och får inte vara any. Ex: const data: Dog[] = await response.json();