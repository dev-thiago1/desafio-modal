const button = document.querySelector('#openModal')
const modal = document.querySelector('#modal')
const body = document.querySelector('body')
console.log(body);
console.log(button);

button.addEventListener('click', () =>{
    modal.classList.remove("invisible")
})

body.onkeydown = function close(event) {
    if(event.key === "Escape"){
        modal.classList.add("invisible")
    }
    console.log(event.key);
}
