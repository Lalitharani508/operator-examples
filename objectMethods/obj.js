console.log("question-1");

var person=new Object();
person.firstname="Lalitha";
person.lastname="Doguparthi"
console.log(person.firstname);
person.city="New York";
console.log(person);

console.log("question-2");
var product=new Object();
product.name="Toothpaste";
product.price=40;
product.instock=true
console.log(product);
product.price=50;
console.log(product);
delete product.instock;
console.log(product);

console.log("question-3");
 var lib={
    comedy:["c1","c2"],
    mystry:["m1","m2"],
    horror:["h1","h2"]

 }
 console.log(lib);
 
 lib.scienceFiction=["sf","sf2"];
 console.log(lib);
 
 console.log(lib.mystry);
 delete lib.mystry;
 console.log(lib);
 
 
 

console.log("question-4");
var user=new Object()
user.username="lalitha_2001"
user.email="lalithad260@gmail.com";
var address=new Object();
address.city="ongole";
address.state="Andhra Pradesh";
address.zip=523001;
console.log(user);;
console.log(address);
Object.freeze(user);
user.email="lali@gmail.com";
console.log(user);
console.log(Object.isFrozen(user));
user.phone=456789456;
console.log(user);


console.log("question-5");
var car={
    make:"yes",
    model:"bmw",
    price:3000000

}
console.log(car);
Object.seal(car);

delete car.make;
car.model="50kmph"
console.log(car);
console.log(Object.isSealed());



















