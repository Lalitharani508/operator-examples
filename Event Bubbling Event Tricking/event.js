// console.log(Math.floor(4.3));//4
// console.log(Math.floor(4.6));//4
// console.log(Math.round(5.7));//6
// console.log(Math.round(5.6));//6
// console.log(Math.round(5.5));//6
// console.log(Math.round(5.4));//5
// console.log(Math.round(5.1));//5
// const a=10;
// console.log(a)
// console.log(typeof a)
// console.log(Math.round(7.88));//8
// console.log(Math.ceil(5.1));//6
// console.log(Math.ceil(7.6));//8
// console.log(Math.ceil(3.1));//4
// console.log(Math.floor(5.888));//5

// console.log(Math.random());//0-1

// console.log(Math.floor(Math.random()))//0
// console.log(Math.ceil(Math.random()))//1
// console.log(Math.floor(Math.random() *10))


// var otp=""
// for(i=1;i<=1;i++){
//     otp+=Math.floor(Math.random() * 10000)
// }
// console.log(otp);
// console.log(typeof otp);
// console.log(Math.abs(-3));//3
// console.log(Math.abs(5));//5
// console.log(Math.abs(-10));//10
// console.log(Math.pow(2,5));
// console.log(Math.pow(3,1));
// console.log(Math.pow(5,3));
// console.log(Math.min(44,6,21,767,6,8,79));
// console.log(Math.max(44,6,21,767,6,8,79));
// console.log(Math.sqrt(49));
// console.log(Math.sqrt(55));
// console.log(Math.sqrt(36));
// console.log(Math.sqrt(82));
// console.log(Math.sqrt(81));
// console.log(Math.trunc(4.9));
// console.log(Math.trunc(-4.9));

// console.log(Math.trunc(1.3));
// console.log(Math.trunc(-7.1));//removes the decimal part of the number and return the integer part is called truc



// let btnotp=document.querySelector("button")
// function OTP(){
//     let otp=""
//     for(i=1;i<=4;i++){
//     otp+=Math.floor(Math.random() *10)
//     }
//     console.log(otp);
    
// }

//EVENT BUBBLING AND EVENT TRCIKILING

let btnotp=document.querySelector("button")
// dont disturb other events or dont call other events o specific event
//why?
//prevention



// let grand=document.getElementById("grand")
// grand.addEventListener("click",()=>{
//     grand.style.backgroundColor="red"
//     console.log("grand clicked");
    
// })

// //use capture--arg(true/false)

// let parent=document.getElementById("parent")
// parent.addEventListener("click",()=>{
//     parent.style.backgroundColor="yellow"
//     console.log("parent clicked");
    
// })
// let child=document.getElementById("child")
// child.addEventListener("click",()=>{
//     child.style.backgroundColor="blue"
//     console.log("child clicked");
    
// })

//bubbling is an event propagation in the html dom tree from innermost element to outermost element


// let grand=document.getElementById("grand")
// grand.addEventListener("click",()=>{
//     grand.style.backgroundColor="red"
//     console.log("grand clicked");
    
// },false)

// //use capture--arg(true/false)

// let parent=document.getElementById("parent")
// parent.addEventListener("click",()=>{
//     parent.style.backgroundColor="yellow"
//     console.log("parent clicked");
    
// },false)
// let child=document.getElementById("child")
// child.addEventListener("click",()=>{
//     child.style.backgroundColor="blue"
//     console.log("child clicked");
    
// },false)


// let grand=document.getElementById("grand")
// grand.addEventListener("click",()=>{
//     grand.style.backgroundColor="red"
//     console.log("grand clicked");
//     setTimeout(()=>{
//     grand.style.backgroundColor="pink"

//     },1000)
    
// },true)

// //use capture--arg(true/false)

// let parent=document.getElementById("parent")
// parent.addEventListener("click",()=>{
//     parent.style.backgroundColor="yellow"
//     console.log("parent clicked");
//     setTimeout(()=>{
//         parent.style.backgroundColor="green"
    
//         },1000)
    
// },true)
// let child=document.getElementById("child")
// child.addEventListener("click",()=>{
//     child.style.backgroundColor="blue"
//     console.log("child clicked");
//     setTimeout(()=>{
//         child.style.backgroundColor="red"
    
//         },1000)
    
// },true)//grand--parent--child(top-bottom if we put true)



let grand=document.getElementById("grand")
grand.addEventListener("click",(e)=>{
    e.stopPropagation()
    grand.style.backgroundColor="red"
    console.log("grand clicked");
    setTimeout(()=>{
    grand.style.backgroundColor="pink"
    },1000)
},false)

//use capture--arg(true/false)

let parent=document.getElementById("parent")
parent.addEventListener("click",(e)=>{
    e.stopPropagation()
    parent.style.backgroundColor="yellow"
    console.log("parent clicked");
    setTimeout(()=>{
        parent.style.backgroundColor="white"
        },2000)
    
},false)
let child=document.getElementById("child")
child.addEventListener("click",(e)=>{
    e.stopPropagation()
    child.style.backgroundColor="blue"
    console.log("child clicked");
    setTimeout(()=>{
        child.style.backgroundColor="white"
    
        },3000)
    
},false)

// let productCart=document.querySelector("div")
//  let addtocart=document.querySelector("button")
//  let buy=document.getElementById("buy now")

//  addtocart.addEventListener("click",()=>{
//     alert("proceed to buy!!!")
//  })
//  buy.addEventListener("click",()=>{
//     alert("are u sure?")
//  })

// let productCart=document.querySelector("div")
 

// productCart.addEventListener("click",(e)=>{
//     e.stopPropagation()
//     // alert("single page")
//     window.location.href="./singlecard.html"
// })

//  let addtocart=document.querySelector("button")
//  let buy=document.getElementById("buy now")

//  addtocart.addEventListener("click",(e)=>{
//     e.stopPropagation()
//     alert("added to cart!!!")
//  })
//  buy.addEventListener("click",(e)=>{
//     e.stopPropagation()
//     alert("are u sure?")
//  })