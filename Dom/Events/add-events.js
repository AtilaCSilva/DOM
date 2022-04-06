//Eventos
const entrada = document.querySelector('input')
const h2 = document.querySelector('#title')

entrada.addEventListener('keyup', e => {
  h2.textContent = e.target.value
})

// function print(e) {}
