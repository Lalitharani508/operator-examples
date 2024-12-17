console.log("for each array method")

//syntax: array.foreach(callback(current value,index,array),(this arg))
const numbers1 = [1, 2, 3, 4];

numbers1.forEach((number) => {
    console.log(number * 2);
});




const numbers=[2,3,45]
const double=numbers.forEach(function db(){
    return db
})
console.log(double)

let food=['mango','apple','banana','avakado']
function food1(){
    food.forEach(x=>console.log("i wan to eat ",food))
}
food1()
let foodd=['mango','apple','banana','avakado','custard apple']
food.forEach(function(fooditem){
    console.log('i wanna eat ',fooditem);
})

const c=[1,2,3,4,5,6]
// for(i=0;i<c.length;i++){
//     console.log(c[i])
// }
c.forEach(function(s){
    return s
})
console.log(c)

c.forEach(function(s){
    console.log(s)
})


for(i=0;i<food.length;i++){
    food.forEach(x=>console.log('i wanna eat ',food[i]))
}


console.log("map array method")
// map((currentElement, indexOfElement, array) => { ... } );

const numbers2 = [1, 2, 3, 4];

const doubledNumbers = numbers2.map((number) => {
    return number * 2;
});

console.log(doubledNumbers);


let a=[100,200,300,400,450]
let cost=a.map(function(arr){
    return arr/10
})

let arr=[1,2,3,4,5,6,8]
console.log(arr.map(x=>x*2))
console.log(cost)
console.log(" ");
let names=['HaRi','sAi','raHul','raM','sEEtha','veENa']
let upper=names.map(function (name){
    return name.toUpperCase()
})
console.log(upper)

let lower=names.map(function (name1){
    return name1.toLowerCase()
})
console.log(lower)

console.log(" ");
 const num1=[1,2,3,4,5,6,7]
 const roots=num1.map(x=>x*x)
 console.log(roots)
console.log("filter array method")

let b=[200,34324,456,234,446,474]
console.log(b.filter(x=>x<=200))
let num=b.filter(function (fill){
    return fill <240
})
console.log(num)

 var ARR=[1,2,342,4,"car","cat","dog",231,"hello","world","robot","robo"]
 let threewords=ARR.filter(function (h){
    return h.length>=4;
 })
 console.log(threewords)
 

var f=["apple","banana","cat","dog","eagle","fan","gun"]
console.log(f.map(x=>x.length==3))//.............
console.log(f.filter(x=>x.length==3))
f.forEach(x=>console.log(x.length==3))//.............
// console.log(f)
