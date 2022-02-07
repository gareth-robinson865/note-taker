let numberOfNotes = 0;

const addNote = (ev) => {
    //stopping the page from reloading when form is submitted
    ev.preventDefault();
    
    //take the information from the title, subject and note sections
    let title = document.getElementById('note-title').value;
    let subject = document.getElementById('subject').value;
    let note = document.getElementById('text-input').value;
    
    //reseting the forms to blank after the submit button has been clicked
    document.forms[0].reset();

    //create a new lits item with the class "active-list-item" and an individual ID
    let newListItem = document.createElement("li");
    newListItem.setAttribute("id", "active-list-item"+numberOfNotes);
    newListItem.setAttribute("class", "active-list-item");

    
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('create-btn').addEventListener('click', addNote);
})