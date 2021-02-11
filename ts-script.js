// coping the exisiting code from js
// closing the "js" file else editor will show more errors.
// // 1. 
// // ts not sure if that element has value property as :-
//   //  not all elements will have "value" property.
//   // and that is true, that can happen if we provide wrong "id" name of html element(ie typo error) or so on.
// const button = document.querySelector("button");
// const input1 = document.getElementById("num1");
// function add(num1, num2) {
//   if(typeof(num1) === 'number')
//   return num1 + num2;
// }
// button.addEventListener("click", function() {
//   console.log(add(input1.value, input2.value));
// });
// 2.
var button = document.querySelector("button");
// const input2 = document.getElementById("num2");
// if we are sure that certain element will always gives some value. this we can tell TS by putting "!" mark at end
// const input2 = document.getElementById("num2")!;
// 2ndly, we know it will be always an input element. Thus, typecasting ie telling TS what kind of element it will be 
var input2 = document.getElementById("num2");
var input1 = document.getElementById("num1");
// (parameter) num1: any => means that num1 can be of any type. but we need only numbers to ve passed to function. thus defining types 
function add(num1, num2) {
    if (typeof (num1) === 'number')
        return num1 + num2;
}
button.addEventListener("click", function () {
    // as soon as we add the type to function. we get an error as TS knows that "input1.value" will be string type not number. thus converting string to number
    console.log(add(+input1.value, +input2.value));
});
// thus, helping us to double checking our code and most imp advantage is addation of types.
// compling ts to js file. and adding the refferce of JS file in  HTML file
