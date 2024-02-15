import "./main";
import { editNote } from "./editNote";
import { updateNote } from "./updateNote";
import { removeNote } from "./removeNote";import { User } from "./types/UinterFace";
import { newNote } from "./newNote";




export async function fetchNotesForUser() {
  const usernameInput: HTMLInputElement | null = document.querySelector<HTMLInputElement>("#UName_form");
  const username: string | undefined = usernameInput?.value;

  console.log(username);
  try {
    const response = await fetch(
      `https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com/api/notes/${username}`
    );
  
    if (response.ok) {
      const notesData = await response.json()
      const notes = notesData.notes;
      const notesContainer = document.querySelector(".Unotes");

   
      if (notesContainer) {
        notesContainer.innerHTML = "";
      }

      notes.map((note: any) => {
     
        const noteElement = document.createElement("div");
        noteElement.classList.add("note");
        noteElement.innerHTML = `
          <h3>Username: ${note.username}</h3>
          <h3>Title: ${note.title}</h3>
          <h3> Note: ${note.note}</h3>`;
      
        notesContainer?.appendChild(noteElement);

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.classList.add("editBtn");
        editButton.addEventListener("click", () => {
          editNote(note, noteElement)
        });
        noteElement.appendChild(editButton);

        const updateButton = document.createElement("button");
        updateButton.textContent = "Update";
        updateButton.classList.add("updateBtn");
        updateButton.style.display = "none";
        updateButton.addEventListener("click", () => {
          updateNote(note, noteElement);
        });
        noteElement.appendChild(updateButton);

        const deleteButton = document.createElement("button"); // Create delete button
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("deleteBtn");
        deleteButton.addEventListener("click", (event) => {
          event.preventDefault();
          deleteNoteHandler(note.id);
        });
        noteElement.appendChild(deleteButton);
      });
    } else {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  } catch (error) {
    console.error("Couldn't fetch notes", error);
  
  }
}
function deleteNoteHandler(noteId: string) {
  const confirmation = confirm("Are you sure you want to delete this note?");
  if (confirmation) {
    removeNote(noteId)
  }
}

const username = "Arvid";

document.getElementById("Get_NotesBtn")?.addEventListener("click", () => { fetchNotesForUser() })

document.getElementById("PostNotebtn")?.addEventListener("click", () => {
  newNote();
});