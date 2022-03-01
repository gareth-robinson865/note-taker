let numberOfNotes = 0;

const addNote = (ev) => {
    //stopping the page from reloading when form is submitted
    ev.preventDefault();
    
    //take the information from the title, subject and note sections
    let title = document.getElementById('note-title').value;
    let subject = document.getElementById('subject').value;
    let note = document.getElementById('text-input').value;
    console.log(title);
    console.log(subject);
    console.log(note);
    //reseting the forms to blank after the submit button has been clicked
    document.forms[0].reset();

    //create a new lits item with the class "active-list-item" and an individual ID
    let newListItem = document.createElement("li");
    newListItem.setAttribute("id", "active-list-item"+numberOfNotes);
    newListItem.setAttribute("class", "active-list-item");

    // creating the elements to hold the different inputs that have been created
    let titleHolder = document.createElement("h3");
    let subjectHolder = document.createElement("h5");
    let inputHolder = document.createElement("p");

    //create a delete button
    let deleteButton = document.createElement('input');
    deleteButton.setAttribute('id', 'delete-btn');
    deleteButton.setAttribute('type', 'button');
    deleteButton.setAttribute('value', 'remove');
    deleteButton.setAttribute('onclick', 'deleteNote("+ numberOfNotes +);');

    //appending the title section to the titleholder element
    let titleText = document.createTextNode(title);
    titleHolder.appendChild(titleText);
    console.log(titleHolder);
    //appending the subject to subject element
    let subjectText = document.createTextNode(subject);
    subjectHolder.appendChild(subjectText);

    //creating text to to be appended to the note section
    let noteText = document.createTextNode(note);

    //appending the text to the p input holder element
    inputHolder.appendChild(noteText);

    //appending the note, subject and title to the list element
    newListItem.appendChild(titleHolder);
    newListItem.appendChild(subjectHolder);
    newListItem.appendChild(inputHolder);

    //appending the list item to the overall list
    let noteList = document.getElementById('note-display-area');
    noteList.appendChild(newListItem);

    //increament the number of notes for next ID
    numberOfNotes++
}

const deleteNote = (ID) => {
    document.getElementById('active-list-item'+ID).remove();
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('create-btn').addEventListener('click', addNote);
})