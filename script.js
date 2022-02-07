const addNote = (ev) => {
    //stopping the page from reloading when form is submitted
    ev.preventDefault();
    
    //take the information from the title, subject and note sections
    let title = document.getElementById('note-title').value;
    let subject = document.getElementById('subject').value;
    let note = document.getElementById('text-input').value;
    console.log(`this is the title: ${title}, this is the subject:${subject}, this is the note:${note}`)
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('create-btn').addEventListener('click', addNote);
})