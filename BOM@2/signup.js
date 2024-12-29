let signForm=document.getElementById("signupPage")
signForm.addEventListener("submit",()=>{
    let fn=document.getElementById("fname")
    let ln=document.getElementById("lname")
    let em=document.getElementById("email")
    let pswd=document.getElementById("paswd")
    console.log(pswd);


    // localStorage.setItem("user",JSON.stringify({"fname":fn,"lname":ln,"email":ln,"password":pswd}));
    location.href="./login.html";
    

})