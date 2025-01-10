const url="https://fakestoreapi.com/products"
let all=document.getElementById("all")
let mens=document.getElementById("mens")
let women=document.getElementById("women")
let ele=document.getElementById("ele")
let jewlery=document.getElementById("jew")


async function getdata() {
    const data= await fetch(url)
    const res=await data.json()
    console.log(res);

}
getdata()