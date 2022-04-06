//Criando e adcionando elementos

// createElements
const div = document.createElement('div')
div.innerText = 'Olá, Devs!!!'

//append prepend

let body = document.querySelector('body')

body.append(div)
console.log(body)
