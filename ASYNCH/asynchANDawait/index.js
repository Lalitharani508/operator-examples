// async function l(){
//     let a=await fetch("https://fakestoreapi.com/products")
//     let data=await a.json()
//     console.log(data);

//     let pro = document.getElementById("products");
//     data.forEach((item) => {
//     let card = document.createElement("div");
//     card.style.border = "2px solid black";
//     card.style.margin = "10px";
//     card.style.padding = "20px";
//     card.style.width = "300px";
//     card.style.cursor="pointer"
//     card.addEventListener("click", ()=>{
//         card.style.boxShadow="5px 5px 1px blue"
//     });


//     // / Create and append the image
//     let imgs = document.createElement("img");
//     imgs.src = item.image;
//     imgs.style.width = "80%";
//     imgs.style.height="45%"
//     card.appendChild(imgs);
    
//     // Create and append the title
//     let tit = document.createElement("h4");
//     tit.innerText = item.title;
//     card.appendChild(tit);
    
//     let pr=document.createElement("span")
//     pr.innerHTML=item.price;
//     pr.style.color="red";
//     card.appendChild(pr);


//     let cat=document.createElement("p")
//     cat.innerHTML=item.category;
//     cat.style.color="green";
//     card.appendChild(cat);
    
//     let rat1=document.createElement("p")
//     rat1.innerText=item.rating.rate
//     card.appendChild(rat1)
    
//     let rat2=document.createElement("p")
//     rat2.innerText=item.rating.count
//     card.appendChild(rat2)

//     // let btn=document.getElementById("buynow")
//     // card.appendChild(btn)
//     let add=document.createElement("button")

//     add.innerText="Add to Cart"
//     add.style.width="100px"
//     card.appendChild(add)
//     let buy=document.createElement("button")
//     buy.innerText="Buy Now"
//     buy.style.width="100px"
//     buy.style.margin="10px"
//     card.appendChild(buy)
    
//     pro.style.display="flex"
//     pro.style.marginLeft="30px"
//     pro.style.flexWrap="wrap"
//     pro.appendChild(card);
//     });
// }
// l()

    
// setTimeout(() => {
//     function a(){
//         console.log(200+500);
        
//     }
//     a()

    
// }, 3000);

// const a=new Promise(()=>{
//     if(!0){
//         function a(){
//             console.log(300+2000);
            
//         }
//         a()
//     }else{
//         alert("not invoked")
//     }

// })
// a.then(res=>console.log(res)
// ).catch(err=>console.log(err)
// )



// async:--it will make synchronous code to asynchronous code
// await:--this wait keyword is used inside an asynch function to pause the execution of the function until a promise is settled .


// async function name1() {
//     let ticketBook=new Promise((res,rej)=>{
//         if(1){
//             setTimeout(()=>{
//                 alert('ticket booked!!!')
//             },2000)
//         }
//     })
    
// }
// name1()
//set timeout::--time limit --2000(2seconds)
//await:--no time limit/ barrier
// async function a1() {
//     let ticket=new Promise((resolve,reject)=>{
//         if(1){
//             setTimeout(()=>{
//                 alert("booked!!!")
//             },2000)
//         }
//     })
    
// }
// a1()

async function l() {
    let ticket1=await fetch("https://fakestoreapi.com/products");
    // let ticket2=await fetch("https://fakestoreapi.com/products");
    console.log(ticket1);
    
    // let finalData=await ticket1
    // let final1=await ticket2.json()
    // console.log(finalData);
    // console.log(final1);
    console.log(10);
    
}
l()
l().then(res=>console.log(res)
).catch(error=>console.log(error)
)