let headerPart=document.getElementById("header")
headerPart.style.display="flex"
headerPart.style.gap="20px"
headerPart.style.border="1px solid black"
headerPart.style.justifyContent="space-around"
headerPart.style.alignItems="center"
let signUp=document.querySelector("#log")
let Login=document.querySelector("#sign")

signUp.addEventListener("click",()=>{
  location.href="./singup.html"
})

Login.addEventListener("click",()=>{
  location.href="./login.html"
})