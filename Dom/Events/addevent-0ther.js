//Eventos
//Outro jeito de adicionar eventos via JS
const h1 = document.querySelector('h1')

h1.addEventListener('click', () => {
  console.log('print')
})

h1.addEventListener('click', function () {
  console.log('Outra coisa')
})
