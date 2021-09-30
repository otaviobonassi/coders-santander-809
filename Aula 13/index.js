// ESCOPO DE VARIÁVEIS
function func1() {
  var one = 1
  let two = 2

  if (true) {
    var one = 11;
    let two = 22;

    console.log(one)
    console.log(two)
  }

  console.log(one)
  console.log(two)
}

func1()

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

// ASSÍNCRONICIDADE

const showMeSomething = () => {
  setTimeout(() => console.log("HERE IT IS!"), 3000)
}

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