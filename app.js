const appContainer = document.querySelector(".note-container");
const createBtn = document.getElementById("btn");
let notes = document.querySelectorAll('.input-el')

function saveNotes() {
  let savedNotes = localStorage.getItem("notes");

  if (savedNotes !== null) {
    appContainer.innerHTML = savedNotes;
  } else {
    appContainer.innerHTML = '' // Set to an empty string if no notes are found
  }
}

saveNotes();

function updateNotes() {
  localStorage.setItem("notes", appContainer.innerHTML);
}

createBtn.addEventListener("click", (e) => {
  let inputBox = document.createElement("p");
  inputBox.className = 'input-el';
  inputBox.setAttribute("contenteditable", "true");
  let image = document.createElement("img");
  image.src = "./images/delete.svg";
  appContainer.appendChild(inputBox).appendChild(image);
  updateNotes()
  notes = document.querySelectorAll('.input-el')
});

appContainer.addEventListener("click", (e) => {
  const target = e.target;

  if (target.tagName === "IMG") {
    target.parentElement.remove();
    updateNotes();
  } else if (target.tagName === "P") {
    notes = document.querySelectorAll('.input-el');
    notes.forEach(nt => {
      nt.onkeyup = function() {
        updateNotes()
      }
    })
    };
});
