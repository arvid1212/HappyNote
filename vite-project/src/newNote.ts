import "./main";
import { User } from "./types/UinterFace";

export async function newNote() {
  
  const usernameInput: HTMLInputElement | null = document.querySelector<HTMLInputElement>("#U_Name_Form");
  const username: string | undefined = usernameInput?.value;

  const titleInput: HTMLInputElement | null = document.querySelector<HTMLInputElement>("#Title_Form");
  const title: string | undefined = titleInput?.value;

  const noteInput: HTMLInputElement | null = document.querySelector<HTMLInputElement>("#Note_form");
  const note: string | undefined = noteInput?.value;

  try {

  
    const postNote = {
      username,
      title,
      note,
    };

   
    const response = await fetch(
      "https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com/api/notes",
      {
        method: "POST",
        body: JSON.stringify(postNote),
        headers: {
          "Content-Type": "application/json", // 
        },
      }
    );

    if (response.ok) {

      const responseData = await response.json();
      console.log("Response data from server:", responseData);

   
      const resultHTML = ` <h2><u>NOTE CREATED!</u></h2>
      <h2> <u> User: </u> ${postNote.username} </h2>
      <h2> <u> Title:</u> ${postNote.title} </h2>
      <h2> <u> Note:</u> ${postNote.note} </h2>
      `;
      const result: HTMLElement | null = document.querySelector<HTMLElement>("#result");
      if (result) {
        result.innerHTML = resultHTML;
      }

    }
    
  } catch (error) {
    console.error("error creating note: ", error);
  }
}