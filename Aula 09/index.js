// CONVERSÃO ENTRE NUMERO, STRING E BOOLEAN
const numberAsString = "22"

console.log(1 + numberAsString)

console.log(1 + 1*numberAsString)
console.log(1 + +numberAsString)
console.log(1 + Number(numberAsString))
console.log(1 + parseInt(numberAsString))
console.log(1 + parseFloat(numberAsString))
console.log(parseFloat("1.23"))
console.log(parseInt("1.23"))

console.log(Boolean("")) // FALSY VALUES: false, null, undefined, 0, ''




// CONDICIONAIS
// if - aula passada
// switch
function showingSwitch(input) {
    switch (input) {
        case 5:
            console.log("é 5")
            break;

        default:
            console.log("não é 5")
            break;
    }

    console.log("acabou")
}

// if (condition) {
    
// } else if (condition2) {

// } else if () {

// }

showingSwitch(5);

// FUNÇÕES/MÉTODOS APLICÁVEIS À ARRAYS
const arr = ["item0", "item1", "item2", "item3"]
// push
// arr.push("item5")
// console.log(arr)

// pop
// arr.pop()
// console.log(arr)

// unshift
// arr.unshift('item00')
// console.log(arr)

// shift
// arr.shift()
// console.log(arr)

// indexOf
// console.log(arr.indexOf('item3'))

// includes
// console.log(arr.includes('item3'))

// slice
// console.log(arr.slice(0,3)) // NÃO INCLUI O 3, NESSE CASO. NÃO ALTERA O ARRAY PRINCIPAL
// console.log(arr)

// splice
// console.log(arr.splice(0,2, 'item00'))
// console.log(arr) //ALTERA O ARRAY PRINCIPAL

// join
// console.log(arr.join('-'))


// filter

// flat
// const arr1 = [[1,2,3], 4]
// console.log(arr1.flat(1))

// concat
// const arr2 = ['item4', 'item5']
// console.log(arr.concat(arr2))

// SPREAD OPERATOR (...) - "copia" os valores internos de um objeto ou array

// LAÇOS DE REPETIÇÃO - for, for...in, for...of, while

// function foods() {
//     var favouriteFood = 'sushi'
//     let favDrink = 'juice'

//     for (var i = 0; i < 5; i++) {
//         var favouriteFood = 'grapes'
//         let favDrink = 'soda'
//         console.log(favouriteFood)
//         console.log(favDrink)
//     }

//     console.log(favouriteFood)
//     console.log(favDrink)
// }

function withSetTimeOut() {
    for (let i = 0; i < 3; i++) {
        setTimeout(() => console.log(i), 1000)
    }
}

withSetTimeOut()

// foods()

// EXERCÍCIO
// 1. Faça uma função que calcule o preço de um terreno que tenha 5m de frente, 20m de profundidade e custe R$6.350/m2.

// 2. Faça uma função que calcule a hipotenusa do triangulo retângulo, recebendo por parâmetro o valor dos seus catetos. Teste seus valores com lados de 9 e 16 (pitágoras).

// 3. Faça uma função que retorne se vale a pena ou não abastecer com álcool. A função deve receber como parâmetros o valor do álcool e da gasolina.


// 4. Faça uma função que calcule o preço médio dos elementos que compõe a cesta de produtos:
// const productsPrice = [28, 33, 42, 14, 10, 88, 95, 100, 29]

// 5. Faça uma função que receba os alunos e suas respectivas médias e retorne apenas os aprovados (média maior ou igual a 5).
// const students = [
//     {name: 'Estudante 1', score: 8},
//     {name: 'Estudante 2', score: 4},
//     {name: 'Estudante 3', score: 1},
//     {name: 'Estudante 4', score: 6},
//     {name: 'Estudante 5', score: 10},
// ]

// 6. Faça uma função que retorne o % de clientes felizes com a empresa (cliente feliz é aquele que deu nota maior que 7).
// const customers = [
//     {name: 'customer1', nps: 7},
//     {name: 'customer2', nps: 3},
//     {name: 'customer3', nps: 1},
//     {name: 'customer4', nps: 7},
//     {name: 'customer5', nps: 6},
//     {name: 'customer6', nps: 9},
//     {name: 'customer7', nps: 8},
//     {name: 'customer8', nps: 1},
//     {name: 'customer9', nps: 7},
//     {name: 'customer10', nps: 7},
//     {name: 'customer11', nps: 3},
//     {name: 'customer12', nps: 1},
//     {name: 'customer13', nps: 7},
//     {name: 'customer14', nps: 6},
//     {name: 'customer15', nps: 9},
//     {name: 'customer16', nps: 8},
//     {name: 'customer17', nps: 1},
//     {name: 'customer18', nps: 7}
// ]