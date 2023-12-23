const appContainer = document.querySelector('.note-container');
const createBtn = document.getElementById('btn');
let notes = document.querySelectorAll('.input-el');
const inputSection = document.querySelector('.input-section');


createBtn.addEventListener('click', e => {
  let inputBox = document.createElement('p');
  inputBox.classList.add('input-el');
  inputBox.setAttribute('contenteditable', 'true');
  let image = document.createElement('img');
  image.src = './images/delete.svg';
  inputSection.appendChild(inputBox).appendChild(image);
});


appContainer.addEventListener('click', e => {
    if (e.target.tagName === 'IMG') {
        e.target.parentElement.remove()
    }
})
