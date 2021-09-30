//1.
// const userName = 'George Raymond Richard Martin' //"GRRM"

// // const splitAndGetFirstLetters = (name) => {
// //   const splited = name.split(' ');
// //   // const firtsLetters = splited.map((item) => item[0])
// //   // return firtsLetters.join('');
// //   return splited.map((item) => item[0]).join('');
// // }

// const splitAndGetFirstLetters = (name) => {
//   const splited = name.split(' ');
//   // const firtsLetters = splited.map((item) => item[0])
//   // return firtsLetters.join('');
//   return splited.reduce((acc, value) => {
//     // return acc + value[0]
//     return `${acc}${value[0]}`
//   }, '')
// }

// console.log(splitAndGetFirstLetters(userName));

//2.
const wishlist = [
  { title: "Tesla Model S", price: 90000 },
  { title: "4 carat diamond ring", price: 45000 },
  { title: "Fancy hacky Sack", price: 5 },
  { title: "Gold fidgit spinner", price: 2000 },
  { title: "A second Tesla Model S", price: 90000 }
];

// const addH1ToTitle = (list) => list.map(({title}) => "<h1>" + title + "</h1>")
// const addH1ToTitle = (list) => list.map(({title, price}) => `<h1>${title}-${price}</h1>`)
// const addH1ToTitle = (list) => list.map(({title}) => `<h1>${title}-${item.price}</h1>`)
// console.log(addH1ToTitle(wishlist))


const addH1ToTitle = (list, property) => {
  return list.map((item) => `<h1>${item[property]}</h1>`)
}

const pipe = 'pipeline'

// const obj = {
//   pipe: 'jenkins'
// }

const obj = {
  [pipe]: pipe
}

console.log(obj)

console.log(addH1ToTitle(wishlist, 'title'))


// const getVotersStats = (voters) => {
//   return voters.reduce((acc, {age, voted}) => {
//     if (!voted) return {...acc}
//     const property = age < 25 ? 'under25' : (age < 40) ? 'under40' : 'under60';
//     return {...acc, [property]: acc[property] + 1 }
//   }, {under25: 0, under40: 0, under60: 0})
// }

const voters = [
  {name:'Bob' , age: 30, voted: true},
  {name:'Jake' , age: 32, voted: true},
  {name:'Kate' , age: 25, voted: false},
  {name:'Sam' , age: 20, voted: false},
  {name:'Phil' , age: 21, voted: true},
  {name:'Ed' , age:55, voted:true},
  {name:'Tami' , age: 54, voted:true},
  {name: 'Mary', age: 31, voted: false},
  {name: 'Becky', age: 43, voted: false},
  {name: 'Joey', age: 41, voted: true},
  {name: 'Jeff', age: 30, voted: true}
]

// {under25: , under40, under60:}

// const filterDepedingOn = ({age, voted}, data) => {
//   return data.filter((item) => item.age === age && item.voted === voted )
// }

const getVotersStats = (voters) => {
  return voters.reduce((acc, value) => {
    const {age, voted} = value;
    if (!voted) return {...acc};
    const property = rankMyAge(age);
    // return {...acc, [property]: acc[property] + 1}
  }, {under25: 0, under40: 0, under60: 0})
}

const rankMyAge = (age) => {
  if (age < 25) return 'under25'
  if (age < 40) return 'under40'
  if (age < 60) return 'under60'
}

console.log(getVotersStats(voters));












// function x() {
//   if(x) {
//     return "true"

//   } else {
//     return "false"
//   }
// }

// function x() {
//   if (x) return "true"
//   return "false"
// }


// const y = () => {
//   return [1, 2, 3].map((item) => {
//     return item * 2
//   })
// }
// const y = () => [1, 2, 3].map((item) => item * 2)

// const k = () => 12434

// const k = () => {
//   return 12434
// }


// function showComparison(x) {
//   let y = []
//   y.forEach(() => {
//     x.push()
//   })
//   return x;
// }

// function s() {
//   const arr = [1, 2, 3]
//   const arr2 = [4, 5, 6]
//   const arr3= []

//   arr2.forEach((item, index) => {
//     arr2.push('lalalala')
//     return item + arr[index]
//   })

//   console.log(arr2)
//   console.log(arr3)
// }

// function s() {
//   const arr = [1, 2, 3]
//   const arr2 = [4, 5, 6]
//   const arr3= []

//   const smth = arr2.map((item, index) => {
//     arr2.push('lalalala')
//     return item + arr[index]
//   })

//   console.log(arr2)

//   return smth
// }

// console.log(s())

// function showComparison2(x) {
//   return x === true ? "é true" : "é false"
// }
