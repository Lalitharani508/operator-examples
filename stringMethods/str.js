console.log("good morning");
console.log("question-1 ");

var str1="    10kCoders"
var str2="Students    "
console.log(str1.trim());
console.log(str2.trim());

a = str1.concat(str2)
console.log(a);
console.log(a.toUpperCase());

console.log("question-2 ");
str3="10Coder,StUdents,ClassEs,HtMl,css"
console.log(str3);
b=str3.slice(8,29)
console.log(b);
console.log(b.charAt(20));
console.log(b.toLowerCase());

console.log("question-3 ");
var A="L";
var B="alitha";

C=A.concat(B);
console.log(C)
console.log(C.toUpperCase());
console.log(C.slice(-2,-1));

console.log("question-4 ");
var x="mother"
var y="Father"
p=x.slice(0,3)
q=y.slice(-3,)
console.log(p);
console.log(q);
v=p.concat(q)
console.log(v);
var d=v.slice(0,1).toUpperCase();
var g=v.slice(-1).toUpperCase();
console.log(d);
console.log(g);




console.log("question-6 ");
var e ="hello there , how are you   "
D=e.trim()
console.log(D);
k=D.split(" ");
console.log(k);
console.log(k.indexOf("are"))


//string methods part2
// startsWith
// endsWith
// lastIndexOf
// Repeat
// Replace
// Match (research method )
// Splice
// Substring
// Substr (depreciated)
// Tostring

let email="lalithad260@gmail.com"
console.log(email.endsWith("com"))
let web="https://wwww.youtube.com"
console.log(web.startsWith("htt"))//true
console.log(web.startsWith("httsp"))//false

console.log(web.endsWith("com"))
let file="resume.pdf"
console.log(file.endsWith(".pdf"))

//real time example using if/else condition
let filetype=".pdf"
// let uploadresume=prompt("enter resume name along with extension name: ")
// if(uploadresume.endsWith(filetype)){
//     alert("resume uploaded successfully!!")
// }else{
//     alert("please check properly while uploading file...")
// }

let h="iam recently graduated in bachelors degree in cse background with cgppa 7.6 "
console.log(h.lastIndexOf("graduated"))
console.log(h.lastIndexOf("7.6"))

let description = "This product is the best. Best price, best quality.";
let index = description.lastIndexOf("best");
console.log(index)

let str="special offer in klm "
console.log(str.repeat(3));
// let seperator=str.repeat(5:"-")

console.log(str.replace("in klm","for chirstamas"))

let aadhar="0982"
let aadhar1=aadhar.padStart(12,"x");
console.log(aadhar1)
let aadhar2=aadhar.padEnd(12,"x");
console.log(aadhar2)

let products=["laptop","ac","remote","heater","fridge","earphone","airpods"]
products.splice(1,0,"tablet","smartphone");
let products2=products.slice(1,2)
console.log(products)


console.log(products2)
// Remove items from an array
products.splice(1,3)//1,2,3 positions removed
console.log(products)
// Add items to an array
let cart = ["Laptop", "Smartphone","hahaha","hehehe"];
cart.splice(3, 0, "Tablet", "Smartwatch","ac","pods","friedge");
console.log(cart)


//substring
let flower="lotus flower"
console.log(flower.substring(2,6))//6th position exclude

let subject="JavaScript"
console.log(subject.substring(6,1));
console.log(subject.substring(-6,-1));//empty space
console.log(subject.substring(-1,-6));//empty space

// : Extract a portion of a string
let message = "Hello, World!";
let part1 = message.substr(0, 5);
console.log(part1)

//tostring
let number=3456789;
let l=number.toString()
console.log(l);
console.log(typeof(d))
let arr1=["dfghj","fghj","dfghj"]//array to string
console.log(arr1.toString())







