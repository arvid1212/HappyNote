/*
let id:string;
let username:string;
let title:string;
let note:string;
let createdAt:Date;

interface Response

let stringify:any;

let response:Response = await fetch("https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com/api/notes/arvid");
let url :string = ": https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com";

/*
async function logNotes(){
const response = await fetch("https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com");
const notes = await response.json();
console.log(notes);

}
/*

// import 

//get

// eventlistener


 let Basurl: https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com

// api
let url :string = ": https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com";
let inputName:string;
let inputTitle:string;
let inputNote:string 

// funktioner
/*Se sina anteckningar
// function viewNotes (username){}
/*
if inputName === note.username[]
{
    print note data in overlay
    overlay display:block

}
*/


/*
Skapa en ny anteckning genom att mata in sitt användarnamn,
 titel på anteckning och texten
// function newNote(inputTitle,inputName,noteText)
/*
{
if (inputTitle && Inputname && noteText === not empty){
if inputName ==== Note.username[] {
    POST new Note to Note.username 
    call saveTime(); to store the time witch the note was created
}
else{

}
    POST(); Note And new user to Note
    saveTime(); 
}
else if (title === "")
{

    alert("please write a title!")

}
else if (name === "" )
{
    alert ("please write your name")
}
else if (noteText.length 0< && =>250){
        POST;
    }
    else if ( noteText === "")
    alert ("empty note")

}
*/
//ta bort en anteckning
/*
 function deleteNote(Title) {let response = await fetch(url), {
  method: 'DELETE'
}
}
/*
om anv trycker på knappen ska en ruta dyka vill du ta bort anteckning,
 om ja Delete Note and Note.title from object
*/
/*
function saveTime(){
// spara datorns tid i note.createdat
}
function changeTime(){
// ändra tiden som noten var skapad
}
/*
//redigera en anteckning
/*
function editNote () {
    Anv ska kunna ändra titel eller text,
     om något av fälten är tomma kommer en alert, 
    anv ska också kunna ta bor som ropar på deleteNote
    ändra tiden med changeTime
}
/*
skriv in anv namn som visar en sida med anteckningar

skapa ny anteckning med titel och anv.namn som lagras med dom andra anteckningarna

ta bort anteckning 

redigera anteckning 

bläddra mellan anteckningar


*/

//overlay
/*


//function newNote(username,title,note)
const note ={
    username:'Arvid',
    title:'mitt namn',
    note:"det har jag hetat länge"
}
let response = await fetch("https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com") , {
    method: "POST",
    body: JSON.stringify(note), 
    headers: {
      'Content-Type'; 'application/json' 
    }
  });
*/
//get url
interface Note  {
    title:string;
    author:string;
    date:string;
    text:string;
}
let newNote: Note ={
    title:"first",
    author:"arvid",
    date:"02/13",
    text:"today i thougt about",

};
const note = document.getElementsByClassName('card')
const title  =  document.getElementById('title');
const author = document.getElementById('author');
const date   = document.getElementById('date');
const text   = document.getElementById('text');
const p = document.createElement("p");
const url :string = ": https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com";

fetch (url)
  .then(function(){
    //response
  })
  .catch(function(){
    //error

  });

fetch (url)
  .then((response) => {
    return response.json();

  })
  .then((data) =>{
    let card = data;
    card.map(function(note: Note) {
        let title = document.createElement('h1');
        let author = document.createElement('h2');
        let date = document.createElement('h3');
        let text =document.createElement('p');

        title.innerHTML = `${note.title}`;
        author.innerHTML = `${note.author}`;
        date.innerHTML = `${note.date}`;
        text.innerHTML = `${note.text}`;

        title.appendChild(title);
        author.appendChild(author);
        date.appendChild(date);
        text.appendChild(text);
    });
  })
p.textContent = "Hello World";
note?.appendChild(p);
