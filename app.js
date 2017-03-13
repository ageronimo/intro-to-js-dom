console.log("sanity check");

//Finding HTML Elements
// console.log(document.getElementById("use-id-method"));
var idElement = document.getElementById("use-id-method");
console.log(idElement);

console.log(document.getElementsByTagName("div"));
var tagElements = document.getElementsByTagName("div");
console.log(tagElements);

console.log(document.getElementsByClassName("use-class-method"));
var classElements = document.getElementsByClassName("use-class-method");

//Changing HTML Elements
console.log(idElement.innerHTML); 
idElement.innerHTML = "I have been changed";

//changing inner html of second instance of use-class-method
console.log(classElements[1]);
classElements[1].innerHTML = "I have been changed by className and array target";