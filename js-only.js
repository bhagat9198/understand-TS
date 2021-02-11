// // 1.
// const button = document.querySelector("button");
// const input1 = document.getElementById("num1");
// const input2 = document.getElementById("num2");

// function add(num1, num2) {
//   if(typeof(num1) === 'number')
//   return num1 + num2;
// }

// button.addEventListener("click", function() {
//   console.log(add(input1.value, input2.value));
// });



// 2.
const button = document.querySelector("button");
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");

function add(num1, num2) {
  // 
  if(typeof(num1) === 'number' && typeof(num2) === 'number')
    return num1 + num2;
  else 
    // converting to number formate
    return +num1 + +num2;
}

button.addEventListener("click", function() {
  // we that values extracted from html form are always in string formate. thus we arre passing numbers as strings. and hence add functions concats the strings which gives wrong output.
  console.log(add(input1.value, input2.value));
});
// now, getting correct answer. thus, this is the limitiation of JS

// we want to make sure that we are only passing number to the 'add' function so that we dont do all that checking within the function


// implementing same functionaily with ts.creating new file "ts-script.ts"