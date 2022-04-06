// Desafio Modal

const button = document.querySelector('#openModal')
const div = document.querySelector('.modal-wrapper')

button.addEventListener('click', () => {
  div.classList.remove('invisible')

  document.addEventListener('keyup', event => {
    if (event.key === 'Escape') {
      div.classList.add('invisible')
    }
  })
})

// document.addEventListener('keyup', e => {
//   console.log(e.key)
// })
