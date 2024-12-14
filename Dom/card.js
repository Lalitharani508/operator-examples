
let data=[
    {
        id:1,
        name:'anupama',
        image:"https://assets.thehansindia.com/h-upload/2024/02/20/1424537-anupama-parameswaran-new-images-0213-compressed.jpg"
        
    },
    {
        id:2,
        name:'kajal',
        image:"https://rukminim2.flixcart.com/image/850/1000/xif0q/poster/y/e/t/small-spos14543-poster-magadheera-kajal-aggarwal-movie-sl-14556-original-imagkb9bpxqqsfcc.jpeg?q=20&crop=false"
        
    },
    {
        id:1,
        name:'anupama',
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP33dkMGYPtVemECXvVXXQMpaHYTBVx3pFhQ&s"
        
    }
]

let cardS=document.getElementById("card2")


for(i=0;i<data.length;i++){
    const colors=["red","blue","pink"]
    let card=document.createElement("div")
    card.innerHTML=`<img  src='${data[i].image} ' width="300" height="300"/>
    <p>${data[i].id}</p>
    <p id="p1">${data[i].name}</p>
    `
    // card.style.backgroundColor="pink"
    card.style.border="2px solid black"
    card.style.backgroundColor=colors[i]
    let a=card.querySelectorAll("p1")
    for(j=0;j<a.length;j++){
        a[j].style.fontweight="bold"

    }
    cardS.appendChild(card)

}
    
  
  
    