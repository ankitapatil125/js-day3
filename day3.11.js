let marks= prompt("Enter marks:");
if(marks>=70){
    console.log("Marks are "+marks+" and the grade is A");
}
else if((marks<70) && (marks>=50))
{
    console.log("Marks are "+marks+" and the grade is B ");
}
else if((marks<50) && (marks>=35)){
    console.log("Marks are "+marks+" and the grade is C");
}
else{
    console.log("Marks are "+marks+" and the grade is Fails/D");
}
/*
console.warn("Using Switch case");
switch(marks){
    case marks==100:
        console.log("Marks are "+marks+" and the grade is A");
        break;
    case marks==70:
        console.log("Marks are "+marks+" and the grade is B");
        break;
    case marks==50:
        console.log("Marks are "+marks+" and the grade is C");
        break;
    default:
        console.log("Marks are "+marks+" and the grade is Fail/D");   
        break;     
}
*/