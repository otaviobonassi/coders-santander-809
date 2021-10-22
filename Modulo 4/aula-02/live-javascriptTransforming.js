// SELEÇÃO DE ELEMENTOS

// CONSTRÓI ---> SELECIONA ---> ALTERAR DINAMICAMENTE

//getElementById
//querySelector  ---> querySelector('div'), querySelector('.class'), querySelector('#id')
//getElementByClassName
//querySelectorAll
//getElementByName
//getElementByTagName (p, div)

// MANIPULANDO O DOM

// 1.inserir elementos
// append() e appendChild()
const container = document.querySelector(".container");
// container.append("HELLO WORLD");
//createElement
const paragraph = document.createElement("p");
paragraph.innerText = "HELLO WORLD";
// container.append(paragraph);
container.append("HELLO WORLD");

// container.appendChild(paragraph);

//2. brincando com as classes
// paragraph.classList.add("classe1", "classe2");
// paragraph.classList.remove("classe1");
// paragraph.classList.toggle("classe2");

// inline style
paragraph.style.backgroundColor = "aqua";
paragraph.style.display = "inline";
