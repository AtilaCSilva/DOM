//Adicionando elementos
const div = document.createElement('div')
div.innerText = 'olá Devs!'
//insertBefore
const body = document.querySelector('body')
let script = body.querySelector('script')
body.insertBefore(div, script)
console.log(body)
//insertAfter

const span = document.createElement('span')
span.innerText = 'Hello Developer!'

let style = body.querySelector('style')
body.insertBefore(span, style.nextSibling)
console.log(body)
