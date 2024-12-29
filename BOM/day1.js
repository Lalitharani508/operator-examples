// let formRegister=document.getElementById("register")

// formRegister.addEventListener("submit",(j)=>{
// j.preventDefault();
// let n=document.getElementById("name").value
// let e=document.getElementById("email")
// let p=document.getElementById("pswd")
// console.log(n,e,p);
// localStorage.setItem("name",n)
// localStorage.setItem("email",e)
// localStorage.setItem("password",p)
// localStorage.setItem("users",JSON.stringify({id:1,"name":"vamsi"}))
// })



let formfill1=document.getElementById("register11")




// individual values
// formfill1.addEventListener("submit", (e) => {
//     e.preventDefault()
//     let uname=document.getElementById("fname1").value;
//     let uemail=document.getElementById("email1").value;
//     let upswd=document.getElementById("pswd1").value;
//     localStorage.setItem("name",uname)
//     localStorage.setItem("mail",uemail)
//     localStorage.setItem("password",upswd)

// })

// JSON formats
// 1.parse()
// 2.stringify()
// localStorage.setItem("userinformation",JSON.stringify({id:1,"name":"rani"}))
// localStorage.setItem("useritemslist",JSON.stringify({id:1,"name":"rani"}))
// localStorage.setItem("useritemslist222",JSON.stringify({id:2,"name":"ranidfghj"}))

//         localStorage.setItem("useritems",JSON.stringify({id:1,"name":"rani"}))
// formfill1.addEventListener("submit",(e)=>{
//         e.preventDefault()
//         let uname=document.getElementById("fname1").value;
//         let uemail=document.getElementById("email1").value;
//         let upswd=document.getElementById("pswd1").value;
        
// })
    
//json strigfy
formfill1.addEventListener("submit" , (l)=> {
    l.preventDefault()
    let uname=document.getElementById("fname1").value;
    let uemail=document.getElementById("email1").value;
    let upswd=document.getElementById("pswd1").value;
    localStorage.setItem("user issues",JSON.stringify({"name":uname,"email":uemail,"password":upswd}))

})