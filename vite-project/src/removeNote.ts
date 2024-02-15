export async function removeNote(noteId: string) {
    try {
        const response = await fetch(
            `https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com/api/notes/${noteId}`,
            {
                method: "DELETE"
            }
        );

        if (response.ok) {
            const notesContainer = document.querySelector(".Unotes");
            if (notesContainer) {
                notesContainer.innerHTML = "";
            } else {
                console.error("Notes container not found.");
            }

    
        } else if (response.status === 400) {
            console.log("Note is already deleted or not found.");
        } else {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
    } catch (error) {
        console.error("Couldn't delete note", error);
    }
}