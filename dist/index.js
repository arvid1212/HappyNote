"use strict";
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
let newNote = {
    title: "first",
    author: "arvid",
    date: "02/13",
    text: "today i thougt about",
};
const note = document.getElementsByClassName('card');
const title = document.getElementById('title');
const author = document.getElementById('author');
const date = document.getElementById('date');
const text = document.getElementById('text');
const p = document.createElement("p");
const url = ": https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com";
fetch(url)
    .then(function () {
    //response
})
    .catch(function () {
    //error
});
fetch(url)
    .then((response) => {
    return response.json();
})
    .then((data) => {
    let card = data;
    card.map(function (note) {
        let title = document.createElement('h1');
        let author = document.createElement('h2');
        let date = document.createElement('h3');
        let text = document.createElement('p');
        title.innerHTML = `${note.title}`;
        author.innerHTML = `${note.author}`;
        date.innerHTML = `${note.date}`;
        text.innerHTML = `${note.text}`;
        title.appendChild(title);
        author.appendChild(author);
        date.appendChild(date);
        text.appendChild(text);
    });
});
p.textContent = "Hello World";
note === null || note === void 0 ? void 0 : note.appendChild(p);
//# sourceMappingURL=index.js.map