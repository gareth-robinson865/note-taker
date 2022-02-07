const addNote = (ev) => {
    //stopping the page from reloading when form is submitted
    ev.preventDefault();
    console.log("test one")
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('create-btn').addEventListener('click', addNote);
})