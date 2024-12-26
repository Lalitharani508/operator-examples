// function name(){
//     console.log("this is a function");
//     console.log("hii");
    
    
// }
// name();
// //anonymous function
// var x=function(){
//     console.log("function");
    
// }
// x();
// //arrow function
// // funtion(a,b){
// //     return a+b;
// //     // console.log();
    

// // }
// // add(2,3)
 
// var x="vamsi";
// var rev=x.split("").reverse("");
// console.log(rev);
// var rev=x.split("").reverse("").join("");
//  //array and reverse
// console.log(rev);


// //variables in js
// // vra,let,const
// var a=20;
// console.log(a);
// console.log(typeof a);

// let n=40;
// let n1=20;
// n=40;
// console.log(n);
// console.log(typeof n);
//hoisiting
// console.log(a)

// let a=100
// a=200
// console.log(a)
 
// a="vamsi"
// console.log(a)
// //temporal dead zone:a time taken by let or const variables to assign a value
// // z()

// // var z=10;
// var z=function(){ //function expression
//     console.log("lalitha rani")
// }
// z()
// // j()//type error
// var j=()=>{ //arrow function 
//     console.log("arrow function")
// }
// j()

//

// function t(x,y,z,w,c){ //parameters x,y
//     console.log(x+y+z+w)
//     console.log(y)
//     console.log(c)

// }
// t(1,23,1,[1,2,3,4],{id:1,name:"lalli"})//24
// t(1,"lalli")//1lalli
// at the time invokation if i pass some values like 1,2 arguements 

// var rrr=[1,2,3,4]
// a function which is passed as an arg to another function at invokation and that function is called call back funtion
// function parent(x){
//     console.log(x)// output: ƒ b(){
//        x()   //b function output                      // console.log("b   function")
//                                     // }
//     console.log(x())//undefined... dont use console if we use get undefines output



// }
// parent(function b(){
//     console.log("b function")
// })

// setTimeout(function y(){
//     console.log("a function")
// },5000) // take a time and get output after time taken and example like delivery filpkart msg like order confirm tracking


// DOM-1(DOCUMENT OBJECT MODEL)
// to change the ui dynamically
//dom is a tree kind of structure with he full of nodes
// let divTag=document.getElementById("myid")
// console.log(divTag)
// divTag.style.backgroundColor="red"
// divTag.style.padding="10px"
// divTag.style.cursor="pointer"
// divTag.style.border="2px black"
// // divTag.textContent="10kcoders"
// function changeText(){
//     divTag.innerText=divTag.textContent="hello"
// }

// let b=document.getElementById("p1")
// b.textContent="hii"
// b.innerText="company"
// b.innerHTML="<a href=''>google</a>"//reassigning
// let c=document.querySelector("#p3")
// c.innerHTML="mnc company"
// console.log(c)
// console.log(b);

// let f=document.querySelector("#p2")
// f.innerText="<a href=''>google</a>"
// console.log(f)

// let k=document.querySelectorAll("p")[0]//get in the array of elements odeList(3) [p#p1, p#p2, p#p3]
// k.style.backgroundColor="blue"
// console.log(k)
// let k1=document.querySelectorAll("#p1")

// console.log(k1)


// let j=document.querySelectorAll("p")
// for(i=0;i<j.length;i++){
//     let color=["blue","gray","yellow"]
//     j[i].style.backgroundColor=color[i]
// }
// console.log(j)


// let a=document.getElementById("card")
// a.innerHTML=" <img src='https://dogtime.com/wp-content/uploads/sites/12/2023/11/GettyImages-1454565264-e1701120522406.jpg' width='400'/> <p>price:10000</p>  <div><img src='https://dogtime.com/wp-content/uploads/sites/12/2023/11/GettyImages-1454565264-e1701120522406.jpg' width='400'/> <p>price:10000</p> </div> "
// a.style.backgroundColor="lightpink"
// console.log(a)



// let data=[{
//           "id": 1,
//           "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//           "price": 109.95,
//           "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//           "category": "men's clothing",
//           "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//           "rating": {
//             "rate": 3.9,
//             "count": 120
//           }
//         },
//         {
//           "id": 2,
//           "title": "Mens Casual Premium Slim Fit T-Shirts ",
//           "price": 22.3,
//           "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
//           "category": "men's clothing",
//           "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
//           "rating": {
//             "rate": 4.1,
//             "count": 259
//           }
//         },
//         {
//           "id": 3,
//           "title": "Mens Cotton Jacket",
//           "price": 55.99,
//           "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
//           "category": "men's clothing",
//           "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
//           "rating": {
//             "rate": 4.7,
//             "count": 500
//           }
//         },
//         {
//           "id": 4,
//           "title": "Mens Casual Slim Fit",
//           "price": 15.99,
//           "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
//           "category": "men's clothing",
//           "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
//           "rating": {
//             "rate": 2.1,
//             "count": 430
//           }
//         },
//         {
//           "id": 5,
//           "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
//           "price": 695,
//           "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
//           "category": "jewelery",
//           "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
//           "rating": {
//             "rate": 4.6,
//             "count": 400
//           }
//         },
//         {
//           "id": 6,
//           "title": "Solid Gold Petite Micropave ",
//           "price": 168,
//           "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
//           "category": "jewelery",
//           "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
//           "rating": {
//             "rate": 3.9,
//             "count": 70
//           }
//         }]
// console.log(data.length)
// //`` tempolate literals or back ticks

// let cardCon=document.querySelector("#card")
// cardCon.style.display="flex"
// cardCon.style.flexWrap="wrap"
// for(i=0;i<data.length;i++){
//     let card= document.createElement("div")
//     card.innerHTML=`<img src='${data[i].image}' width="300"/>
//     <h3>${data[i].title}</h3>
//     <p>${data[i].price}</p>
//     `
//     card.style.width="300px"
//     // console.log(card1)
//     cardCon.appendChild(card)
// }


// 23-12-24
console.log(typeof function (){ //function output
  console.log("hello")
})


let arr=[1,2,34,"undefined",null,{id:1,name:"sai"}]
console.log(typeof arr)

let obj={
  id:1,
  name:"lalli"
}

console.log(typeof obj)

function parent(){
    
}
parent(function child(){
  console.log("karthik")
})

// setTimeout(() => {
  
// }, timeout); // call back funtion example


let obj1=[
 
  {
    id:1,
    name:"vamsi",
    age:26
  },
  {
    id:2,
    name:"ravi",
    age:24
  }
]

console.log(obj1)
console.log(obj.age)