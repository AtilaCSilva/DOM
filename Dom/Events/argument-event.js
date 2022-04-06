//Evento
//argumento event
const input = document.querySelector('input')

input.onkeydown = function (event) {
  console.log(event.target.value)
}
