function a(){
    // alert("button clicked")/
}
a()
function clickbutton(){
    // alert("button clicked")
    console.log()
}
clickbutton()
// let imgElem=document.querySelector("#hero")
// function image(){
//     // imgelem.src="https://static.toiimg.com/thumb/msid-108462508,width-1280,height-720,resizemode-4/108462508.jpg"
//     imgElem.src=`<img src="https://static.toiimg.com/thumb/msid-108462508,width-1280,height-720,resizemode-4/108462508.jpg" />`
// }
// image()

function click1(){
    console.log("button clickedd")
}



let imageElement=document.querySelector("#img1")
function image1(){
    // imageElement.style.borderRadius="50%"
    // imageElement.innerHTML=`<img src='https://assets.eenadu.net/article_img/Kabosu1.jpg'/>`
    imageElement.src="https://assets.eenadu.net/article_img/Kabosu1.jpg"
    

}

//event binding
let d=document.getElementById("dog")
dog.onclick=function (){
    d.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrkFkeDK8KvtTuRRYRJJly3ullotZeSGi3pg&s"
}


let btn1=document.getElementById("hover")
btn1.onmouseover=function (){
    btn1.style.backgroundColor="red"
    btn1.style.fontSize="30px"
    btn1.style.color="yellow"
    btn1.style.cursor="pointer"
}

let btn2=document.getElementById("clickme")
btn2.onclick=function (){
    btn2.style.backgroundColor="lightgray"
    btn2.style.fontSize="40px"
    btn2.style.color="blue"
    btn2.style.cursor="pointer"
}
// let btn3=document.getElementById("dblclickme")
// btn3.ondblclick=function (){
//     btn3.style.backgroundColor="purple"
//     btn3.style.fontSize="80px"
//     btn3.style.color="pink"
//     btn3.style.padding="30px"
//     btn3.style.cursor="pointer"
// }

let inputTag=document.querySelector("input")
inputTag.onkeyup=function (){
    document.body.style.backgroundColor="red"
}
let inputTag1=document.querySelector("#in")
inputTag1.onkeypress=function (){
    document.body.style.backgroundColor="purple"
}
let inputTag2=document.querySelector("#down")
inputTag2.onkeydown=function (){
    document.body.style.backgroundColor="red"
}


let btn3=document.getElementById("dblclickme")
btn3.onmouseleave=function (){
    btn3.style.backgroundColor="purple"
    btn3.style.fontSize="80px"
    btn3.style.color="pink"
    btn3.style.padding="30px"
    btn3.style.cursor="pointer"
}

let pTags=document.querySelectorAll("p")
console.log(pTags)
for(i=0;i<pTags.length;i++){
    pTags[i].style.backgroundColor="red"
}