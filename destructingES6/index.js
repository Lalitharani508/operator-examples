// destructing:--unpacking of elements in an array
// Destructuring is exactly the same. We may have an array or object that we are working with, but we only need some of the items contained in these.

// Destructuring makes it easy to extract only what is needed.
// const a=["sai","madhu","lakshmi","lalli","chaitanya"]
// const[x,y,z,p,q]=a
// console.log(x);
// console.log(p);


// console.log(p,q);
// const b={
//     name:"karthik",
//     age:23,
//     city:"hyderabad"

// }
// console.log(b);
// const {name,age}=b
// console.log(age);
// console.log(Object.keys(b));
// console.log(Object.values(b));

// //multiple objects
// const data=[
//     {
//         name:"karthik",
//         age:23,
//         city:"hyderabad"
    
//     },
//     {
//         name:"bharat",
//         age:28,
//         city:"chennai"
    
//     },
//     {
//         name:"sai",
//         age:25,
//         city:"banglore"
    
//     }
// ]

// console.log(data);
// const [p,q,r]=data
// console.log(q);
// console.log(r);

//spread rest operators:---
// The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.
 
//spreading the values in an array into another array or spreading the keys in object into other object
//syntax:-- ...f
// const k=[123667]
// const g=["rani"]
// console.log(k,g);


const k=[123667]
const g=[...k,"rani"]
// console.log(k,g);
console.log(g);


const sizes=["s","m","l","xl"]
console.log(sizes);
const a={
    id:1,
    title:"black bag",
    price:355,
    ...sizes
}
console.log(a);

//rest operator
function v(a,b,c){
    console.log(a,b,c);
    

}
v(1,23,4)//passing values to the function at the time of invoking time

// The JavaScript Rest parameter allows a function to accept an indefinite number of arguments as an array. It is represented by three dots (…) followed by the parameter name and must be the last parameter in the function, enabling flexible and dynamic argument handling.

function login(x,z,l,...v){
    console.log(x,z,l);
    console.log(v);
    
    
}
login("vish",20,12,3,4,35,46,6,35,121)

// Swal.fire("SweetAlert2 is working!");
// alert("added to cart")
// const h=confirm("are you sure to delete?")
// if(h){
//     alert("succesfuuly deleted")
// }else{
//     alert("item removing cancled")
// }

Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      });
    }
  });