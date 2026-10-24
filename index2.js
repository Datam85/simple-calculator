var num1 = Number(prompt("say the first number"));
var num2 = Number(prompt("say your secound number"));
var operator = prompt("write your operator sign");
function add(){
    alert(num1 + num2);
}
function minuse(){
    alert(num1 - num2);
}
function divide(){
    alert(num1 / num2);
}
function times(){
    alert(num1 * num2);
}
function calculator(){
    if(operator === "+" || operator === "add"){
        add(num1, num2);
    }
    else if(operator === "-" || operator === "minuse"){
        minuse(num1, num2);
    }
    else if(operator === "/" || operator === "divide"){
        divide(num1, num2);
    }
    else if(operator === "*" || operator === "times"){
        times(num1, num2);
    }
}
calculator();