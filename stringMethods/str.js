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
console.log(str.replace("in klm","for chirstamas"))

let aadhar="0982"
let aadhar1=aadhar.padStart(12,"x");
console.log(aadhar1)
let aadhar2=aadhar.padEnd(12,"x");
console.log(aadhar2)










