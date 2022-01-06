console.log('hello');
console.log('hello there');
//

//Variables
var b = 'smoothie';
console.log(b);


var age = prompt('What is your age?');

document.getElementById('someText').innerHTML = age;

//Numbers in Javascript
var num1 = 10;
num1 = num1 + 1;
console.log(num1);

//increment
var num2 = 15;
num2++;
console.log(num2);

//decrement
var num2 = 15;
num2--;
console.log(num2);

num2 /= 3;
console.log(num2);

//Functions
function fun() {
  alert('this is a function');
}

fun();

function greeting() {
  var name = prompt('What is your name?');
  var result = 'Hello ' + name;
  console.log(result);
}

greeting();



