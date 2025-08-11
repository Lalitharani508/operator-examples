const url="https://fakestoreapi.com/products"
// let all=document.getElementById("all")
// let mens=document.getElementById("mens")
// let women=document.getElementById("women")
// let ele=document.getElementById("ele")
// let jewlery=document.getElementById("jew")


// async function getdata() {
//     const data= await fetch(url)
//     // console.log(data.json); //function
//     // console.log(data.json()); //pending

    
//     const res=await data.json()
//     console.log(res);
//     // console.log(data);
//     // console.log(typeof data);
//     res.forEach(x=>{
//         let card=document.createElement("div")
//         card.innerHTML=`<img src=${x.image} width="300"/>`
//         document.body.append(card)

//     })

// }
// getdata() 




//method-2

let all=document.getElementById("data")
let mens=document.getElementById("mens")
let women=document.getElementById("women")
let ele=document.getElementById("ele")
let jewlery=document.getElementById("jew")
// all.addEventListener("click",getdata)
mens.addEventListener("click",getdata)
women.addEventListener("click",getdata)
ele.addEventListener("click",getdata)
jewlery.addEventListener("click",getdata)





async function getdata() {
    const data= await fetch(url).then(res=>res.json()).then(res=>res).catch(err=>
        {console.log(err)})

    
//    const res=await data.json()
    console.log(data);
    data.forEach(x=>{
     if(x.category === "men's clothing"){
        let card=document.createElement("div")
        card.innerHTML=`<img src=${x.image} width="300"/>`
        // document.body.append(card)
        all.append(card)

     }else if(x.category === "women's clothing"){

        let card=document.createElement("div")
        card.innerHTML=`<img src=${x.image} width="300"/>`
       all.append(card)
    }else if(x.category==="electronics"){

        let card=document.createElement("div")
        card.innerHTML=`<img src=${x.image} width="300"/>`
        all.append(card)
    }else{

        let card=document.createElement("div")
        card.innerHTML=`<img src=${x.image} width="300"/>`
        all.append(card)
}
})

}
// getdata() 