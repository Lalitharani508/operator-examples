// console.log("for each array method")

// //syntax: array.foreach(callback(current value,index,array),(this arg))
// const numbers1 = [1, 2, 3, 4];

// numbers1.forEach((number) => {
//     console.log(number * 2);
// });




// const numbers=[2,3,45]
// const double=numbers.forEach(function db(){
//     return db
// })
// console.log(double)

// let food=['mango','apple','banana','avakado']
// function food1(){
//     food.forEach(x=>console.log("i wan to eat ",food))
// }
// food1()
// let foodd=['mango','apple','banana','avakado','custard apple']
// food.forEach(function(fooditem){
//     console.log('i wanna eat ',fooditem);
// })

// const c=[1,2,3,4,5,6]
// // for(i=0;i<c.length;i++){
// //     console.log(c[i])
// // }
// c.forEach(function(s){
//     return s
// })
// console.log(c)

// c.forEach(function(s){
//     console.log(s)
// })


// for(i=0;i<food.length;i++){
//     food.forEach(x=>console.log('i wanna eat ',food[i]))
// }


// console.log("map array method")
// // map((currentElement, indexOfElement, array) => { ... } );

// const numbers2 = [1, 2, 3, 4];

// const doubledNumbers = numbers2.map((number) => {
//     return number * 2;
// });

// console.log(doubledNumbers);


// // let a=[100,200,300,400,450]
// // let cost=a.map(function(arr){
// //     return arr/10
// // })

// let arr=[1,2,3,4,5,6,8]
// console.log(arr.map(x=>x*2))
// // console.log(cost)
// console.log(" ");
// let names=['HaRi','sAi','raHul','raM','sEEtha','veENa']
// let upper=names.map(function (name){
//     return name.toUpperCase()
// })
// console.log(upper)

// let lower=names.map(function (name1){
//     return name1.toLowerCase()
// })
// console.log(lower)

// console.log(" ");
//  const num1=[1,2,3,4,5,6,7]
//  const roots=num1.map(x=>x*x)
//  console.log(roots)
// console.log("filter array method")

// let b=[200,34324,456,234,446,474]
// console.log(b.filter(x=>x<=200))
// let num=b.filter(function (fill){
//     return fill <240
// })
// console.log(num)

//  var ARR=[1,2,342,4,"car","cat","dog",231,"hello","world","robot","robo"]
//  let threewords=ARR.filter(function (h){
//     return h.length>=4;
//  })
//  console.log(threewords)
 

// var f=["apple","banana","cat","dog","eagle","fan","gun"]
// console.log(f.map(x=>x.length==3))//.............
// console.log(f.filter(x=>x.length==3))
// f.forEach(x=>console.log(x.length==3))//.............
// console.log(f)


//18-12-2024::array methods
//every()
// fill()
// find()
// flat()
// includes()
// endswith()
// startswith()
// padend()
// padstart()
// scrollTo()
// splice()
// replace()
// repeat()
// let a=[false,false,false]
// let ba=a.every(x=>x===false)
// console.log(ba)
// let b=[false,false,false,true]
// let c=b.every(m=>m===true)
// console.log(c)

// let g=[1,2,3,4,5,6]
// let h=g.fill(x=>g[2]="lalli")
// console.log(h)

let A=[1,23,[2,4,5,6[5,6,88,[8734,23424[245,235,4,6[1,2,3,4,5]]]]]]
console.log(A.length)
console.log(A[A.length-1].length)
console.log(A.flat(Infinity))

let a=[1,2,3,[2,3,[12,13,141,5,12,[11,[22,33,44,55,66,77,88,[12345678,123456789,[123456789,[1234567,[1234567,[12345678,[123456789,[1234567890]]]]]]]]]]]];
console.log(a[a.length-1].length);
let b=a.flat()
console.log(b.flat(Infinity));

var t=["laptop","tv","friedge","cooler","airpods"]
var f=t.includes("tv")
var g=t.includes("h")
console.log(g)
console.log(f)


const data=[
    {
      "id": 1,
      "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      "price": 109.95,
      "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      "rating": {
        "rate": 3.9,
        "count": 120
      }
    },
    {
      "id": 2,
      "title": "Mens Casual Premium Slim Fit T-Shirts ",
      "price": 22.3,
      "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      "rating": {
        "rate": 4.1,
        "count": 259
      }
    },
    {
      "id": 3,
      "title": "Mens Cotton Jacket",
      "price": 55.99,
      "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      "rating": {
        "rate": 4.7,
        "count": 500
      }
    },
    {
      "id": 4,
      "title": "Mens Casual Slim Fit",
      "price": 15.99,
      "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      "rating": {
        "rate": 2.1,
        "count": 430
      }
    },
    {
      "id": 5,
      "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      "price": 695,
      "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
      "category": "jewelery",
      "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      "rating": {
        "rate": 4.6
        
      }
    }
]
let n=data.filter(x=>x.price>50)
console.log(n)
console.log(data.includes("rate"))
let data1=["apple","banana","cat","banana"]
console.log(data1.find(x=>x==="hi"))//undefined
console.log(data1.find(x=>x==="cat"))

//sort
let numberss=[3,1,,01,13,11,4,2]
var v=numberss.sort()
console.log(v)
console.log(v.sort((a,b)=>(a-b)))
console.log(v.sort((a,b)=>(b-a)))

