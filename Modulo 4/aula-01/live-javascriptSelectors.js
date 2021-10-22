// pegando elementos pelo ID
const byId = document.getElementById("text");
console.log(byId);

// pegando elementos por class
const byClass = document.getElementsByClassName("container"); // também retorna uma HTML Collection
console.log(byClass[0]);
// pegando elementos genéricos

// pegando elementos com Tag
const divs = document.getElementsByTagName("div");
console.log(divs[0]);
console.log(divs.item(0)); // Método específico do HTML Collection

for (let item of divs) {
  console.log(item);
}

// MUUUUUUUUUUUUITO IMPORTANTES: QUERYSELECTOR
const querySelect = document.querySelector("div");
const querySelect2 = document.querySelector("#text");
const querySelect3 = document.querySelector(".first");
console.log(querySelect);
console.log(querySelect2);
console.log(querySelect3);

const queryAll = document.querySelectorAll("div"); // NodeList
console.log(queryAll);
console.log(queryAll[0]);
console.log(queryAll.item(0));
queryAll.forEach((item) => console.log(item)); // HTML Collection NAO PERMITE
// for (let item in queryAll.item()) {
//   console.log(item);
// }

// SELEÇÃO DE ELEMENTOS

// CONSTRÓI ---> SELECIONA ---> ALTERAR DINAMICAMENTE

//getElementById
//querySelector  ---> querySelector('div'), querySelector('.class'), querySelector('#id')
//getElementByClassName
//querySelectorAll
//getElementByName
//getElementByTagName (p, div)

