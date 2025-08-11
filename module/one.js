let sincard=JSON.parse(localStorage.getItem("data"))
let pro=document.getElementById("product")
let card=document.createElement("div")
card.style.border="2px solid black"
card.style.margin = "10px";
card.style.padding = "20px";
card.style.width = "300px";
card.style.cursor="pointer"

let imgs=document.createElement("img")
// imgs.src=sincard.iamge;
imgs.style.width = "100%";
card.appendChild(imgs);


let tit = document.createElement("h4");
tit.innerText = sincard.title;
card.appendChild(tit);


let cat=document.createElement("p")
cat.innerHTML=sincard.category;
cat.style.color="green";
card.appendChild(cat);

pro.appendChild(card);