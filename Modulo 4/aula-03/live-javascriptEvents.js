// CONSTRÓI ---> SELECIONA ---> ALTERAR DINAMICAMENTE

// SELEÇÃO DE ELEMENTOS

//getElementById
//querySelector  ---> querySelector('div'), querySelector('.class'), querySelector('#id')
//getElementByClassName
//querySelectorAll
//getElementByName
//getElementByTagName (p, div)

// MANIPULANDO O DOM

//append e appendChild
//createElement
//classList (add, remove, toggle)
//element.style.______

// EVENTOS
// element.addEventListener( TIPO_EVENTO, (event) => { ... })
// Relacionados a um comp.: focus, blur, input, change
// Relacionados ao teclado: keydown, keypress, keyup
// Relacionados ao mouse: click, mousedown, mouseup, mouseenter, mouseover, mouseleave
// Relacionados ao form: submit (atenção ao event.preventDefault() para bloquear o envio automático do form)



















































const div = document.querySelector(".container")
div.addEventListener('click', () => {
    console.log("cliquei no pai")
})
const input = document.querySelector('input')
input.addEventListener('focus', (evt) => {
    console.log(evt)
    input.style.backgroundColor = 'grey'
})
input.addEventListener('click', (evt) => {
    console.log("cliquei no filho")
    // evt.stopPropagation()
})

// Relacionados ao teclado: keydown, keypress, keyup
input.addEventListener('keypress', (evt) => {
    if (evt.key === 'Enter') console.log("seu pedido é uma ordem")
})

// Relacionados ao mouse: click, mousedown, mouseup, mouseenter, mouseover, mouseleave
input.addEventListener('mouseleave', (evt) => {
    console.log("mouseleave")
})

// Relacionados ao form: submit
const form = document.addEventListener('submit', (evt) => {
    evt.preventDefault()
    console.log("enviei")
})

// const typo = (evt) => {
//     evt.preventDefault()
//     console.log("enviei")
// }