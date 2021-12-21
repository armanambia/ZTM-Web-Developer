// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
let double = []
array.forEach((num) => {
  num.username = num.username + '!'
  double.push(num)
})
console.log('forEach', double)

//Create an array using map that has all the usernames with a "? to each of the usernames
const newArr = array.map((obj)=>{
  obj.username = obj.username + '?'
  return obj
})
console.log('map', newArr)

//Filter the array to only include users who are on team: red
const filterArr = array.filter((obj) =>{
  return obj.team == 'red'
})
console.log('filter', filterArr)

//Find out the total score of all users using reduce
const reduceArr = array.reduce((acc, obj) =>{
   return acc + obj.score
}, 0)
console.log('reduce', reduceArr)


// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	console.log(num, i);
	alert(num);
	return num * 2;
})

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const listArr = array.map((obj) => {
	let bob = obj.items
  bob = bob.map((item) => item + '?')
  obj.items = bob
  return obj
})
console.log('new List', listArr)