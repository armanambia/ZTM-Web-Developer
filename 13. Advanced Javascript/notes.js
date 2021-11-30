// ----------------------------------- 153 Advanced Functions
// Closure
const first = ()=>{
    const greet = 'Hi'
    const second = () => {
        const name = 'bobby'
        alert(greet)
        let obj = {name, greet}
        return obj
    }
    return second
}

const newFunc = first();
let output = newFunc();

// Currying
const multiply = (a,b) => a*b;
const curriedMultiply = a => b => a*b;
const multiply5 = curriedMultiply(5);

// Compose
const compose = (f,g) => a => f(g(a))
const sum = num => num + 1;
const square = num => num*num;
compose(square,sum)(5)

// let lets u make scope anywhere, dont use var


// ----------------------------------- 155 Advanced Arrays
// Advanced Arrays
const array = [1,2,10,16]
const double =[]
const newArray = array.forEach((x)=> {
    double.push(x*2);
})
console.log('forEach', double)

// map, filter, reduce
// if u ()=> to a value, it returns value

// maps to a new array
const mapArray = array.map((num) =>  num*2)
console.log('map', mapArray)

// filter: uses the bool to pick the values in ur new array
const filterArray = array.filter(num => num > 5)
console.log("filter", filterArray)

// reduce: gets that accumulator which stores info
const reduceArray = array.reduce((accumulator, num)=> {
    return accumulator + num
}, 5) 
// 5 is the starting value for accumulator.
console.log("reduce", reduceArray)

// ----------------------------------- 157 Advanced Objects
var object1 = {value: 10};
var object2 = object1;
var object3 = {value: 10};
object1 === object2 // true
object1 === object3 // false
// context vs scope
// context is where u are
const object4 ={
    a: ()=> {
        console.log(this)
    }
}
// instantiation
class Player {
    constructor(name, type){
        this.name = name
        this.type = type;
    }
    introduce() {
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`)
    }
}

class Wizard extends Player{

    constructor(name, type){
        super(name,type)
    }
    play(){
        console.log(`WEEEEEE I'm a ${this.type}`)
    }
}

const wizard1 = new Wizard('Shelly', 'Healer')
const wizard2 = new Wizard('Shawn', 'Dark Magic')

// ----------------------------------- 158 Pass by Value vs Ref
// primitives are pass by val
var a = 5;
var b = a;
b++;
console.log(a) // 5
console.log(b) // 6

// objects are pass by ref (arrays count as objects)
let obj1 = {name: 'Yao', password: '123'}
let obj2  = obj1
obj1.name = 'bob'
console.log(obj1,obj2) // will both be bob

var c = [1,2,3,4,5]
var d = c
d.push(1876421)
console.log(c,d) // will both have the new num

// clone object
let obj = {a: 'a', b: 'b', c: 'c'}
let clone = Object.assign({}, obj)
let clone2 = {...obj} // spread operator
obj.c = 5;
console.log(obj)
console.log(clone)
console.log(clone2)

// breaks if u try to go deeper
obj = { a: 'a', 
            b: 'b', 
            c: {
                deep: 'try and clone me'
            }
        }
clone = Object.assign({}, obj)
clone2 = {...obj} // spread operator
obj.c.deep = 'hahhahaha';
// all 3 objects will be same
console.log(obj)
console.log(clone)
console.log(clone2)

// deep copy using json
let superClone = JSON.parse(JSON.stringify(obj))
obj.c.deep = 'vnvbnc';
console.log(obj)
console.log(superClone)


// ----------------------------------- 167 ES10
// flat
const array3 = [1,2,[3,4,[5]]]
array3.flat() // flattens 1 layer by default 
array3.flat(2) // will get rid of double nesting, can just throw up a really high number

const entries = ['bob','sally',,,,,,,,,,,,'cindy'] // gets rid of commas
entries.flat()

// flat map
const map = array3.flatMap(val => val+5)

// trim
const userEmail = '            eddytheeagle@gmail.com'
const userEmail2 = 'johnnydangerous@gmail       '
userEmail.trimStart()
userEmail2.trimEnd()

// fromEntries - turn array to objects // opposite from the entries method
const userProfiles = [['commanderTom', 23], ['derekZlander', 40], ['hansel', 12]]
const obj = Object.fromEntries(userProfiles)
// now go back
Object.entries(obj) // will look like userProfile