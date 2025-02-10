var array = [11,12,13,14];
var [x,y] = [array];
console.log("x=",x);
console.log("y=",y);

var [a,b,c] = [array];
console.log("a=",a);
console.log("b=",b);
console.log("c=",c);


const person={
   name: "Van Hung",
   age: "20",
   city: "Ha Noi"
}
 
console.log(person.name);
console.log(person.age);

const { name, city }= person;
console.log(name);
console.log(age);
console.log(city);