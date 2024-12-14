let cardContainer=document.getElementById("card")
console.log(cardContainer)
cardContainer.style.border="2px solid black"
cardContainer.style.width="300px"
cardContainer.style.backgroundColor="lightpink"
cardContainer.innerHTML=`<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3JSDsOF6QS2a6akZGItxq6VNlSputUQL89w&s'> <h1>dog-1</h1>  <p>golden retriever</p> <div><p>price:10000</p><button>buynow</button> </div>
`
cardContainer.querySelector("img").style.width="100%"
cardContainer.querySelector("div").style.display="flex"
// cardContainer.querySelector("div").style.justifyContent="spacebetween"


let card1Container=document.getElementById("card1")
console.log(card1Container)
card1Container.style.border="2px solid black"
card1Container.style.width="300px"
card1Container.innerHTML=`<img src=https://m.media-amazon.com/images/I/71fUdONkgXL.jpg width=200> <h1>photoframe</h1> <p>photoframes are gifts</p> <p>price:1200</p> <button>buy now</button>`
card1Container.querySelector("img").style.width="100%"
card1Container.querySelector("p").style.backgroundColor="lightblue"


// let card2Container=document.getElementById("card2")
// console.log(card2Container)
// card2Container.style.border="2px solid black"
// card2Container.style.width="300px"
// card2Container.innerHTML=`[{},{},{}]`
