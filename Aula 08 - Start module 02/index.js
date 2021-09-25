// VARIAVEIS - var, let, const
// REGRA: NUNCA USE VAR
// console.log(x)
// console.log(y)
// var x = 10

// let y = 15
// const z = 20

// x = "UMA COISA"
// y = "UMACOISA"
// z = 30

// console.log(x)
// console.log(y)
// console.log(z)

//TIPOS DE DADOS JS
// primitivos: strings, numbers, boolean, undefined, null
// complexo: objects, arrays

// let thisIsAString = "ISSO AQUI É UMA STRING"
// console.log(thisIsAString)

// const thisIsANumber = 10.4329328327328
// console.log(thisIsANumber)

// const thisIsABoolean = false;
// console.log(thisIsABoolean)

// const thisIsAnUndefined = undefined;
// console.log(thisIsAnUndefined)

// const thisIsANull = null;
// console.log(thisIsANull)

// const thisIsAnObject = {
//     carrossel: 'azul',
//     rodaGigante: 'marrom',
//     objeto: {},
//     funcao: () => {
//         console.log("OIOIOI")
//     }
// }

// thisIsAnObject.funcao()

// console.log(thisIsAnObject)

// const thisIsAnArray = ['azul', 'verde', 'vermelho']

// const thisIsAnObjectArray2 = {
//     0: 'azul',
//     1: 'verde',
//     2: 'vermelho'
// }

// console.log(thisIsAnArray[1])
// console.log(thisIsAnArray2[1])

// COMPARAÇÃO: ==, ===, !=, !==, >= ...

// const value = 4 === '4' ;
// console.log(value);

// const objeto1 = {
//     chave1: 'valor1'
// }

// const objeto2 = objeto1

// console.log(objeto2 === objeto1)

// const objeto2 = {
//     chave1: 'valor1'
// }

// console.log(objeto1 == objeto2)

// FUNÇOES

console.log(someDoisMaisDois())

function someDoisMaisDois() {
    const valor1 = 2;
    const valor2 = 2;
    const soma = valor1 + valor2;
    return soma;
}


const someTresMaisTres = function() {
    return 3 + 3
}

console.log(someTresMaisTres())

// ARROW FUNCTION
const someQuatroMaisQuatro = () => {
    return 4 + 4
}

console.log(someQuatroMaisQuatro())

const functionWithParameters = (rebimboca1 = 1, rebimboca2 = 2) => {
    return rebimboca1 + rebimboca2
}

console.log(functionWithParameters(1, 2))

// FUNÇÕES "PRONTAS"
// MATEMATICA
const x = Math.sqrt(52)
console.log(x)
console.log(Math.round(x))
console.log(Math.ceil(x))
console.log(Math.floor(x))

// relacionadas a strings
const str = "Isso é uma string"
// console.log(str[2])
console.log(str.length)
const arr = ['1', '2', 3]
console.log(arr.length)
console.log(str.slice(0, 4))
console.log(str.replace("i", "K"))
console.log(str.toUpperCase())

console.log(str.indexOf('string'))
console.log(str.includes('string'))
console.log(str)

// CONDICIONAIS - if

// function doSomething(arg1, arg2) {
//     if (arg1 > arg2) {
//         return 'arg1 é maior'
//     } else {
//         return 'arg2 é maior'
//     }
// }

// function doSomething(arg1, arg2) {
//     return arg1 > arg2 ? 'arg1 é maior' : 'arg2 é maior'
// }

// function doSomething(arg1, arg2) {
//     if (arg1 > arg2) return 'arg1 é maior'
//     return 'arg2 é maior'
// }

// console.log(doSomething(2, 2))

// EXERCÍCIO
// 1. Faça uma função que calcule o preço de um terreno que tenha 5m de frente, 20m de profundidade e custe R$6.350/m2.
// 2. Faça uma função que calcule a hipotenusa do triangulo retângulo, recebendo por parâmetro o valor dos seus catetos. Teste seus valores com lados de 9 e 16 (pitágoras).
// 3. Faça uma função que retorne se vale a pena ou não abastecer com álcool. A função deve receber como parâmetros o valor do álcool e da gasolina.