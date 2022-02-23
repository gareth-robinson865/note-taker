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
    titleHolder.appendChild(title);

    //appending the subject to subject element
    subjectHolder.appendChild(subject);


}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('create-btn').addEventListener('click', addNote);
})