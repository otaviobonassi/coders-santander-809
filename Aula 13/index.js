// // ESCOPO DE VARIÁVEIS
// function func1() {
//   var one = 1
//   let two = 2

//   if (true) {
//     var one = 11;
//     let two = 22;

//     console.log(one)
//     console.log(two)
//   }

//   console.log(one)
//   console.log(two)
// }

// func1()

// // function foods() {
// //     var favouriteFood = 'sushi'
// //     let favDrink = 'juice'

// //     for (var i = 0; i < 5; i++) {
// //         var favouriteFood = 'grapes'
// //         let favDrink = 'soda'
// //         console.log(favouriteFood)
// //         console.log(favDrink)
// //     }

// //     console.log(favouriteFood)
// //     console.log(favDrink)
// // }

// function withSetTimeOut() {
//   for (let i = 0; i < 3; i++) {
//       setTimeout(() => console.log(i), 1000)
//   }
// }

// withSetTimeOut()

// // ASSÍNCRONICIDADE

// const showMeSomething = () => {
//   setTimeout(() => console.log("HERE IT IS!"), 3000)
// }

// Promise

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("LALALALA");
//     console.log(promise);
//   }, 5000);
// });
// console.log(promise);
// promise.then((result) => console.log(result));
// promise.catch((error) => console.log(error));

//GET
// const response = fetch("https://pokeapi.co/api/v2/pokemon/ditto")
//   .then((response) => {
//     // console.log(response.ok)// = response.status === 200
//     console.log(response);
//     return response.json();
//   })
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// const dasdsadas = async () => {
//   try {
//     const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
//     const data = await response.json();
//     console.log(data);
//     console.log("Hello");
//   } catch (error) {
//     console.log(error);
//   }
// };

// Pegue as informações dos seguintes pokemons e agrupe-os por seus tipos:

// {
//   fire: ['Charmander'],
//   electric: ['Pikachu', 'Zapdos'],
//   water: ['Squirtle', 'Blastoise'],
//   poison: ['Bulbasaur']
// }

['Charmander', 'Charizard', 'Pikachu', 'Raichu', 'Squirtle', 'Blastoise', 'Bulbasaur', 'Venusaur']

// JEITO #1
const pokemons = ['Charmander', 'Charizard', 'Pikachu', 'Raichu', 'Squirtle', 'Blastoise', 'Bulbasaur', 'Venusaur']
// let pokemonsInfos = [];

// // const pushInfosIntoExternalArray = (globalVariable, arr) => {
// //   arr.forEach((promise) => {
// //     promise.then((data) => data.json()).then((result) => {
// //       globalVariable.push(result);
// //       console.log(globalVariable);
// //     })
// //   })
// // }

// // const getPokemonsInfos = (arr) => {
// //   const promises = arr.map(pokemon => fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`))
// //   pushInfosIntoGlobalArray(pokemonsInfos, promises);
// // }


// // getPokemonsInfos(pokemons);

// JEITO #2
// let pokemon = []

// const getPokemonsInfos = (arr) => {
//   Promise.all(arr.map(pokemon => fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`).then((data) => data.json()))).then((data) => {
//     pokemon.push(data)
//     console.log(pokemon)
//   })
//   // pushInfosIntoGlobalArray(pokemonsInfos, promises);
// }

// const pokemons = ['Charmander', 'Charizard', 'Pikachu', 'Raichu', 'Squirtle', 'Blastoise', 'Bulbasaur', 'Venusaur']

// getPokemonsInfos(pokemons);

// JEITO #3
// const getPokemonsInfos = (arr) => {
//   return new Promise((resolve, reject) => {
//     Promise.all(arr.map(pokemon => fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`).then((data) => data.json()))).then((data) => {
//       resolve(data)
//     })
//   })
// }

// getPokemonsInfos(pokemons).then((result) => console.log(result))