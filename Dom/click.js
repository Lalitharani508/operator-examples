let h1Tag=document.getElementById("heading1")
console.log(h1Tag)
function onClick(){
    h1Tag.style.backgroundColor="red"
    h1Tag.textContent="hello"
    h1Tag.style.padding="30px"
    h1Tag.style.borderRadius="5px"
    h1Tag.style.boxShadow="5px 5px lightgray"
    h1Tag.textContent="how are you"
}

let h4Tag=document.getElementById("heading2")
console.log(h4Tag)
function doubleClick(){
    h4Tag.style.color="black"
    h4Tag.style.backgroundColor="pink"
    h4Tag.style.padding="30px"
    h4Tag.style.borderRadius="5px"
    h4Tag.style.boxShadow="5px 5px lightgray"
    h4Tag.textContent="good morning"
}

let h3Tag=document.getElementById("heading3")
console.log(h3Tag)
function hover(){
    h3Tag.style.color="black"
    h3Tag.style.backgroundColor="yellow"
    h3Tag.style.padding="30px"
    h3Tag.style.borderRadius="5px"
    h3Tag.style.boxShadow="5px 5px red"
    h3Tag.textContent="good evening"


}