//Alterando estilos
//classlist
const element = document.querySelector('body')
element.classList.add('active', 'green')
console.log(element.classList)
// element.classList.remove('active')
element.classList.toggle('active')
element.classList.remove('green')
element.classList.toggle('green')
