//1.Create a variable called carName, assign the value Volvo to it.
let carName = "Volvo";
console.log(carName)


//2
let firstName = "John",
    lastName = "Doe",
    age = 35;

console.log(firstName,lastName,age)


/* 3. Use the correct assignment operator that will 
result in x being 50 (same as x = x * y).  */
let x = 10;
let y = 5;
x *= y;

console.log(x);


// 4.Use comments to describe the correct data type of the following variables:
let length = 15 //number
let lastName1 = "Johnshon"; //String
const x1 = {
  firstName: "John",  
  lastName: "Doe"
};    // object 

console.log(typeof length);
console.log(typeof lastName1);
console.log(typeof x1);

//5. Execute the function named myFunction.
function myFunction() {
   alert("Hello World!");
}

myFunction()


/*6. Create an object called person with name = John, age = 50, Then,
   access the object to alert("John is 50"). */
const person = {
  name : "John",
  age : 50,
}

alert(`${person.name} is ${person.age}`)


//7. The <button> element should do something when someone clicks on it. Try to fix it!

//ans:  <button onclick="alert('hello hablu programmer')">Click me.</button> . I have done it in html. Please check it.


//8 i. Alert the number of items in an array, using the correct Array property: 
const cars = ["Volvo", "Jeep", "Mercedes"];
alert(`There are ${cars.length} item in this array`)

//ii. Change the first item of Brand to "Ford".
const Brand = ["Volvo", "Jeep", "Mercedes"]; 
Brand[0] = "Ford";
console.log(Brand)





