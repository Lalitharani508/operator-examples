let a;
a=200;
let a=200; // canont re initialised and redeclare
if(true){
    let x=200;
    x="lalli";
    x="345611"
    console.log(x)
    x="ravi"
}
console.log(x)//x is not defined because we did not assign x variable.. outside the function
let x=10;
if(true){
    let x=200;
    x="lalli";
    x="345611"
    console.log(x)...
    x="ravi"
}
console.log(x)....
let b=200;
const c=300;
{
    var a=100;
    // let b=200;
    // const c=300
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(a+b+c)
}
console.log(a)//100


let b=200;
const c=300;
{
    var a=100;
    // let b=200;
    // const c=300
    {
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(a+b+c)
    }
}
console.log(a)//100



console.log(a)//undefined
var a=10
console.log(a);//10

a()
function a(){
    console.log("a function");
    
}
a()

console.log(z())//z is not a function
z()//a is not a function
console.log(z); //undefined because var z defalut is undefines

var z=function (){
    console.log("function expression ");
    
}
z()
 

problem-solving
checking prime or not
prime is nothing but divisible by 1 and itself
let a=+prompt("enter digit here:  ")
let count=0
for(i=1;i<=a;i++){
    if(a%i==0){
        // console.log(a)
        count++
    }
    
}
if(count==2){
    console.log(a+  "prime")
}
else{
    console.log(a+ "not prime");
    
}

// let btn=document.getElementById("click")
// btn.onclick=function (){
//     btn.style.fontsize="20px"
//     btn.style.borderBlockColor="red"
//     btn.style.color="black"
// }

// let btn1=document.getElementById("ondoubleclick")
// btn1.ondblclick=function (){
//     btn1.style.borderBlockColor="red"
//     btn1.textContent="hello"
// }

// let btn3=document.getElementById("onmouserover1")
// btn3.onmouseover=function (){
// btn3.style.backgroundColor="red"
// }