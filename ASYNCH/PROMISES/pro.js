


// setTimeout(()=>{
//     alert("order placed!!!")
// },1000)

// setTimeout(()=>{
//     alert("order shipped !!!")
// },2000)

// setTimeout(()=>{
//     alert("order placed!!!")
// },3000)

// setTimeout(()=>{
//     alert("order reaced to nearest hub!!!")
// },4000)

// setTimeout(()=>{
//     alert("order pickup by delivery paerson!!!")
// },7000)
// setTimeout(()=>{
//     alert("order receieved!!")
// },10000)

// setTimeout(()=>{
//     alert("order placed!!!")
//     setTimeout(()=>{
//         alert("order shipped!!!")
//         setTimeout(()=>{
//             alert("order readched to nearest hub !!")
//             setTimeout(()=>{
//                 alert("order pickup by delivery person!!!")
                
//                     setTimeout(()=>{
//                         alert("order received!!!")
//                     },5000)
                    
//                 },4000)
                
//             },3000)
            
//         },2000)
        
    

// },10000)



// const hello=new Object
// Promise Syntax
// let myPromise = new Promise(function(myResolve, myReject) {
// // "Producing Code" (May take some time)

//   myResolve(); // when successful
//   myReject();  // when error
// });

// // "Consuming Code" (Must wait for a fulfilled Promise)
// myPromise.then(
//   function(value) { /* code if successful */ },
//   function(error) { /* code if some error */ }
// );

// const hello=new Promise((resolve,reject)=>{
//     if(1){
//         resolve("successfull")
//     }else{
//         reject("rejected or not executes")
//     }

// },2000)
// // hello()
// console.log(hello);


// const hello2=new Promise((resolve,reject)=>{
//     if(0){
//         resolve("successfull")
//     }else{
//         reject("rejected or not executes")
//     }

// },2000)
// // hello()
// console.log(hello2);

// const a=true;
// const b=10;
// let k=30
// let d=200
// const helo=new Promise((resolve,reject)=>{
//     if(1 && a && b && k && d && 0 ){
//         resolve("success!!!")
//     }
//     else{
//         reject("fail")

//     }

// })
// // helo.then(
// //     output=>console.log(output)
// // .catch(err=>console.log(err)
// // ));
// helo.then(
//     output=>console.log(output)
// ).catch(err=>console.log(err)
// )


// let a="hello"
// let b="kartheek"
// let c=0
// var f=false
// const j=new Promise((resolve,reject)=>{
//     if ( a && b && c&& f&& []){
//         setTimeout(() => {
//             resolve("succesfull")
            
//         }, 4000);
//     }else{
//         setTimeout(()=>{
//             reject("failed")
//         },2000)
//     }
// });
// j.then(
//     output=>console.log(output)
// ).catch(err=>console.log(err)
// )

// const step1=new Promise((resolve,reject)=>{
//     try{
//         if(1){
//             setTimeout(()=>{
//                 resolve("successfull!!!---1")
//             },3000)
//         }else{
//             setTimeout(()=>{
//                 reject("fail!!!---1")
//             },5000)
//         }
//     }
//     catch(err){
//         console.log(err);
        
//     }
// })

// step1.then(out=>{
//     console.log(out);
    
// }).catch(res=>{
//     console.log(res);
    
// })


// const step2=new Promise((resolve,reject)=>{
//     try{
//         if(0){
//             setTimeout(()=>{
//                 resolve("successfull!!---2")
//             },4000)
//         }else{
//             setTimeout(()=>{
//                 reject("failed!!!---2")

//             },2000)
//         }
//     }
//     catch(err){
//         crossOriginIsolated.log(err)
        
//     }
// })
// step2.then(res=>{
//     console.log(res);
    
// }).catch((err)=>{
//     console.log(err);
    

// })


const step3=new Promise((resolve,reject)=>{
    try{
        if(1){
            setTimeout(()=>{
                resolve("hii")
            },4000)
        }else{
            setTimeout(()=>{
                reject("hello")
            },2000)
        }
    }
    catch(err){
        reject(`errpr at step3 ${err.message}`)

    }
});


const step4=new Promise((resolve,reject)=>{
    try{
        if(1){
            setTimeout(()=>{
                resolve("hii---1")
            },4000)
        }else{
            setTimeout(()=>{
                reject("hello---1")
            },2000)
        }
    }
    catch(err){
        reject(`errpr at step4 ${err.message}`)

    }
});
step3.then(res=>{
    console.log(res)
    return step4;
    
})
// .then(res=>{
//     console.log(res);
//     return step4
    
// })
.catch(err=>{
    console.log(err);
    
})