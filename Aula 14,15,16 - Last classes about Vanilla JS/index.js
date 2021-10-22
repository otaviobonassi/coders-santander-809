// // PROMISE

// // FRONT END -> ME VE A LISTA DE USERS

// // BACKEND CONSULTA UMA DB

// // function getUsersList() {
// //   return new Promise((resolve, reject) => {

// //     const usersPromise = mongoDB.get('USERS')
// //     usersPromise.then((data) => resolve(data))


// //     // const response = fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
// //     // response
// //     //   .then((data) => data.json())
// //     //   .then((result) => resolve(result))
// //     //   .catch((error) => reject(error))

  
// //     // setTimeout(() => (reject(new Error({}))), 5000)

// //     // setTimeout(() => (resolve({
// //     //   name: "Otavio",
// //     //   user: "obonassi"
// //     // })), 2000)
  
// //     // const usersList = buscaUsersNaDb(); // LEVA 5 S
// //     // resolve(usersList);
  
// //     // const error = buscaUsersNaDb(); // LEVA 5 S E RETORNA ERRO
// //     // reject(error.message);
// //   })
// // }

// // SOLICITANTE

// // const userPromise = thisReturnsAPromise();
// // userPromise
// //   .then((data) => console.log(data))
// //   .catch((error) => console.log(error))
// // console.log("DEPOIS");

// // CHAMADAS HTTP

const pokemons = ['Charmander', 'Charizard', 'Pikachu', 'Raichu', 'Squirtle', 'Blastoise', 'Bulbasaur', 'Venusaur']


// fetch('', {
//   method: 'POST',
//   body: ''
// })

// const promise1 = fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
// console.log(promise1)

// const promise2 = promise1.then(data => data.json())

// const promise3 = promise2.then(info => info)
// console.log(promise3)
// console.log("BATATA")

const getPokemonsPromisesData = (arr) => {
  return arr.map((pokemon) => fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`).then((data) => data.json()).then((result) => result))
}

// [Promise, Promise, Promise ...]

// const extractInfoFromPromises = (arr) => {
//   let pokeInfos = []
//   arr.forEach((prom, index) => {
//     prom
//       .then((data) => data.json())
//       .then((result) => {
//         pokeInfos.push(result)
//         return pokeInfos;
//       })
//       .then((resultFinal) => parsePokeInfo(resultFinal))
// })};

// const extractInfoFromPromises = (arr) => {
//   let pokeInfos = []
//   arr.forEach((prom, index) => prom.then(result => pokeInfos.push(result))
// }

// const extractInfoFromPromises = (arr) => {
//   let pokeInfos = []
//   const result = arr.map((prom) => {
//     prom.then((data) => data.json()).then((result) => pokeInfos.push(result));
//     // return pokeInfos // pokeInfos = [] ... (depois de alguns ms) -> [{...}];
//     })

//   // result = [[], [], [], [] ...]
    
//   console.log(result[0].length)
// }

// const extractInfoFromPromises = (arr) => {
//   const promiseAll = arr.map((prom) => prom.then(data => data.json()));
//   const promiseMASTER = Promise.all(promiseAll);
//   promiseMASTER.then((result) => parsePokeInfo(result));
// }

// const extractInfoFromPromises = (arr) => {
//   return new Promise((resolve, reject) => {
//     // let pokeInfos = []
//     const pokeInfos = arr.map((prom, index) => prom
//       .then(data => data.json())
//       .then(result => {
//         if (index === 3) setTimeout(() => pokeInfos.push(result), 3000);
//         return pokeInfos
//       })
//       .then((result) => {
//         if (arr.length === result.length) resolve(result)
//       })
//       .catch((err) => reject(err))
//       );
//   });
// }

// const extractInfoFromPromises = (arr) => {
//   return new Promise((resolve, reject) => {
//     let pokeInfos = []
//     arr.forEach((prom, index) => prom
//       .then(data => data.json())
//       .then(result => {
//         pokeInfos.push(result);
//         if (arr.length - 1 === index) resolve(pokeInfos)
//       })
//       .catch((err) => reject(err))
//       );
//   });
// }

// const extractInfoFromPromises = (arr) => {
//   return Promise.all(arr.map((prom) => prom.then(data => data.json())));
// }

// const extractInfoFromPromises = (arr) => {
//   return Promise.all(arr.map((prom) => prom.then(data => data.json())));
// }

// const pokemonsPromises = getPokemonsPromisesData(pokemons);
// extractInfoFromPromises(pokemonsPromises).then((result) => reduceObjects(result));

// const reduceObjects = (arr) => {
//   arr.reduce((acc, value) => {

//   }, {})
// }

// const parsePokeInfo = (arr) => {
//   console.log(arr)
// }

// const 

// const getPokemons = () => {
//   return fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
// }

// ASYNC AWAIT

// fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
//   .then(data => data.json())
//   .then(result => console.log(result))

// const getPokemonsData = async() => {
//   try {
//     console.log("ANTES DO RESPONSE")
//     const response = await fetch('https://pokeapi.co/api/v2/pokemon/pik')
//     return await response.json();
//   } catch (err) {
//     throw new Error("Deu ruim.");
//   }
// }

// const showPokemonInfo = async () => {
//   try {
//     const response = await getPokemonsData();
//     console.log(response);
//     console.log("DEPOIS DO RESPONSE")
//   } catch (err) {
//     console.log("THIS IS AN ERROR", err);
//   }
// }

// showPokemonInfo();

// const pokemons = ['Charmander', 'Charizard', 'Pikachu', 'Raichu', 'Squirtle', 'Blastoise', 'Bulbasaur', 'Venusaur']

const getPokemonsData = async (arr) => {
  return await arr.map(async (pokemon) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`)
    return response;
  });
}

const showData = async () => {
  console.log(await getPokemonsData(pokemons))
}

showData();









// const getPokemons = () => fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
// const response = getPokemons()
// const response = fetch('https://pokeapi.co/api/v2/pokemon/pikachu', {
//   method: "GET"
// })