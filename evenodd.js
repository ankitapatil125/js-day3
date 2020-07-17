//let a;
let a=Number(prompt("please enter a number"));
let b=EvenOdd(a);
console.log(`the number is ${a} and ${b}`);
function EvenOdd(num)
{
    if(num % 2==0)
    {
        return "number is even";
    }
    else{
        return "number is odd";
    }
} 