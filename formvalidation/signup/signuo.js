let signup = document.getElementById("signUp");

signup.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let confirmPassword = document.getElementById("confirmPassword");

  let nameValue = name.value.trim();
  let emailValue = email.value.trim();
  let passwordValue = password.value.trim();
  let confirmPasswordValue = confirmPassword.value.trim();


  console.log(nameValue);
  
//   if (nameValue===""){
//     alert("name is required")
//   }else if(nameValue.length<=3){
//     alert("pls enter more than 3 char")
//   }

    // if(nameValue===""){
    //     document.getElementById("nameError").textContent="name requiered"
    // }
    // else{
    //     document.getElementById("nameError").textContent="pls enter more than 3 char"
    // }
//formik docs website

    const emailpattern=/^{a-zA-Z0-9}+@{a-zA-Z}+.{a-zA-Z}{4,}$/
    // const checking=emailpattern.test(emailValue)
    // console.log(checking);
    
    if(emailValue===""){
        document.getElementById("emailError").textContent="mail requiered"
    }else if(emailpattern.test(emailValue)){
        document.getElementById("emailError").textContent="mail not valid"
        // document.getElementById("emailError").textContent=""


    }
    
    const passwordPattern=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@]).{8,}$/
    if(passwordValue===""){
        document.getElementById("pswdError").textContent="password requiered"
    }
   
    
    else if(passwordValue!=confirmPasswordValue){
        document.getElementById("pswdError").textContent="password does not matched"
    }
    




})