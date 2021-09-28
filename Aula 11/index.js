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

// const numberAsString = "22"
// console.log(1 + numberAsString)

// console.log(1 + 1*numberAsString)
// console.log(1 + +numberAsString)
// console.log(1 + Number(numberAsString))
// console.log(1 + parseInt(numberAsString))
// console.log(1 + parseFloat(numberAsString))

// console.log(parseInt("1.23"))
// console.log(parseFloat("1.23"))

//FALSY VALUES: false, null, undefined, 0, ''
// console.log(Boolean('false'))

// const thisIsAJSON = {
//     key1: true
// }

// const thisIsAnObject = {
//     propriedade1: "lalalal"
// }

// const helloJSON = JSON.stringify(thisIsAnObject)

// console.log(thisIsAnObject.propriedade1)
// console.log(JSON.parse(helloJSON).propriedade1)


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

// console.log(someDoisMaisDois())

// function someDoisMaisDois() {
//     const valor1 = 2;
//     const valor2 = 2;
//     const soma = valor1 + valor2;
//     return soma;
// }


// const someTresMaisTres = function() {
//     return 3 + 3
// }

// console.log(someTresMaisTres())

// // ARROW FUNCTION
// const someQuatroMaisQuatro = () => {
//     return 4 + 4
// }

// console.log(someQuatroMaisQuatro())

// const functionWithParameters = (rebimboca1 = 1, rebimboca2 = 2) => {
//     return rebimboca1 + rebimboca2
// }

// console.log(functionWithParameters(1, 2))

// // FUNÇÕES "PRONTAS"
// // MATEMATICA
// const x = Math.sqrt(52)
// console.log(x)
// console.log(Math.round(x))
// console.log(Math.ceil(x))
// console.log(Math.floor(x))

// // relacionadas a strings
// const str = "Isso é uma string"
// // console.log(str[2])
// console.log(str.length)
// const arr = ['1', '2', 3]
// console.log(arr.length)
// console.log(str.slice(0, 4))
// console.log(str.replace("i", "K"))
// console.log(str.toUpperCase())

// console.log(str.indexOf('string'))
// console.log(str.includes('string'))
// console.log(str)

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

// function showingSwitch(input) {
//     switch (input) {
//         case 5:
//             console.log("é 5")
//         case 10:
//             console.log("é 10")
//             break
//         default:
//             console.log("não é nenhum dos dois")
//             break
//     }

//     console.log("sai do switch")
// }
// showingSwitch(10)


// console.log(doSomething(2, 2))

// EXERCÍCIO
// 1. Faça uma função que calcule o preço de um terreno que tenha 5m de frente, 20m de profundidade e custe R$6.350/m2.
// 2. Faça uma função que calcule a hipotenusa do triangulo retângulo, recebendo por parâmetro o valor dos seus catetos. Teste seus valores com lados de 9 e 16 (pitágoras).
// 3. Faça uma função que retorne se vale a pena ou não abastecer com álcool. A função deve receber como parâmetros o valor do álcool e da gasolina.

// FUNÇÕES APLICADAS À ARRAYS
// const arr = ["item0", "item1", "item2", "item3", 5]

//push
// arr.push("item4")
// console.log(arr)

//pop
// arr.pop()
// console.log(arr)

//unshift
// arr.unshift("item00")
// console.log(arr)

//shift
// arr.shift()
// console.log(arr)

// indexOf
// console.log(arr.indexOf('item4'))

// includes
// console.log(arr.includes('5'))

// if (arr.indexOf('x') >= 0)

// if (arr.includes('x'))

// slice
// console.log(arr.slice(0, 3))
// console.log(arr)

// splice
// console.log(arr.splice(4, 0, 'itemX', 'itemY'))
// console.log(arr)

// ... - spread operator
// const arrX = "...arr"
// const arrY = [...arr, ...arrX]
// console.log(arrX)

// arrX.push('itemLALALA')
// console.log(arr)

// const obj1 = {
//     prop1: 'lalala',
//     prop2: 'kakaka'
// }

// obj1.prop2 = 'HAHAHHA'

// const obj3 = {...obj1, prop2: 'JAJAJAJAJ'}

// console.log(obj3)

// join
// const v = arr.join('-')
// console.log(v.split('-'))

// concat
// const arr1 = [1,2]
// const arr2 = [3,4]
// console.log(arr1.concat(arr2))
// console.log([...arr1, ...arr2])

// flat
// const complexArr = [1, 2, [3, 4, 5]]
// console.log(complexArr)
// console.log(complexArr[2][1])
// console.log(complexArr.flat(10))

// filter
// const arrK = [1, 2, 3, 4, 5]
// HIGH ORDER FUNCTION (HOF)
// const filteredItens = arrK.filter((item) => {
//     return item > 4
// })

// const filteredItens = arrK.filter(isBiggerThanFour)

// function isBiggerThanFour(item) {
//     return item > 4
// }

// console.log(filteredItens)

// LAÇOS DE REPETIÇÃO - for, for...in, for...of, while

const arr = ['azul', 'rosa', 'roxo', 'purpura', 'vermelho']
const arr1 = [1, 2, 3, 4, 5]
const obj = {
    color1: 'azul',
    color2: 'rosa',
    color3: 'roxa',
    color4: 'purpura',
    color5: 'vermelho'
}
// function doSomething(arrInput) {

//     for (let i = 0; i <= arrInput.length - 1; i++) {
//         console.log(arrInput[i])
//     }
// }

// function doSomethingElse(arrInput) {
//     for(let item of arrInput) {
//         console.log(item)
//     }
// }

// doSomethingElse(arr);

function doAnotherThing(objInput) {
    for(let item in objInput) {
        console.log(objInput[item])
    }
}

doAnotherThing(obj);

// forEach

function twoTimes(arr) {
    let x = []
    arr.forEach((item) => {
        const double = item * 2;
        x.push(double)
    })

    return x;
}

// map

function usingMap(arr) {
    // return arr.map((item) => {
    //     return item * 2
    // })

    return arr.map((item) => item * 2)
}

// function map(arr, func) {
//     for (let item of arr) {
//         func(item)
//     }
// }

console.log(usingMap(arr1));

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

// function whoIsApproved(arr) {
//     const result = arr.filter(({score}) => {
//         return  score >= 5
//     })

//     return result
// }
 
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
function npsCalculator(arr) {
    const total = arr.length;

    const happyCustomers = arr.filter(({nps}) => nps > 7).length

    return happyCustomers / total;
}

// 7. Processe o JSON que enviei pra vocês e me respondam em um: 
// {
//     total:, // total de alunos
//     stateCount:, // quantos estados diferentes temos
//     infosPerState: [
//         {
//             "SP": {
//                 "totalStudents":
//                 "averageAge":
//             },
//             "RJ": {
//                 "totalStudents":
//                 "averageAge":
//             }
//         }
//     ]
// }