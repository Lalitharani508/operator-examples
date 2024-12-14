//maximum numbers
var userInput=prompt("enter digit here: ")
var max=userInput[0]
for(i=0;i<userInput.length;i++){
    if(max<userInput[i]){
        max=userInput[i]
    }
}
console.log(max,"highest number")

//minimum numbers
var a=prompt("enter a number: ")
min=a[0];
for(j=0;j>a.length;j++){
    if(min>a[j]){
        min=a[j]
    }
}
console.log(min,"lowest number")

//min&max,min+max
var a=prompt("enter number: ")
min=a[0];
max=a[0]
for(i=0;i<a.length;i++){
    if(min>a[i]){
        min=a[i]
    }else{
        max=a[i]
    }
}
console.log(min,"minimun value")
console.log(max,"maximum value")
console.log(Number(min)+Number(max))