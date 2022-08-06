
document.writeln("<h2>Arithemetic Operators: </h2>");

document.writeln("<br>Addition (+) : "+ (56+22) + " \n<br> ");
document.writeln("Subtraction (-) : " + (56-22)+"  <br>");
document.writeln("Multiplication (*) : " + (56*22)+" <br> ");
document.writeln("Division (/) : " + (56/8)+"<br>  ");
document.writeln("Exponential (x^y or **) : " + (2**3)+" <br> ");
document.writeln("Modulus (%) : " + (56%22)+" <br> ");
var inc =56;
document.writeln("Increment (++)) : " + (++inc) +" <br> ");
document.writeln("Decrement (--) : " + (--inc) +" <br> ");

document.writeln("<h2>Assignment Operators: </h2><br>");
var variable =10;
document.writeln("Value of variable is: " +variable +"<br> ");
document.writeln("+= " + (variable+=variable)+"<br>" );
document.writeln("-= " + (variable-=variable)+"<br>" );
variable=5;
document.writeln("*= " + (variable*=variable)+"<br>" );
// document.writeln("/= " + (vntariable/=variable)+"<br>" );
document.writeln("%= " + (variable%=variable)+"<br>" );
document.writeln("**= " + (variable**=variable)+"<br>" );
document.writeln("<h2>String Operators: </h2>");
var str1 ="Hello";
var str2 ="There";

document.writeln("Concating (+) str1 and str2 is: " + (str1+str2));
str1+=str1;
document.writeln("<br>Concating and Assigning str1 with str1 is :  "+ (str1));

document.writeln("<h2>Conditional Operators: </h2>");
document.writeln("<h4>Using Ternary Operator: I Practiced all connditional operators:</h4>");

var x = 10;
document.writeln("Value of x is: " + x +"<br>");

var valueofx = (x>=10)? "true":"false";
document.writeln("x>=20  :"+valueofx);
document.writeln("<br> x==10 :" + valueofx);
x=9;
document.writeln("<br>Now Value of x is: " + x +"<br>");
document.writeln("x<=10 : " + valueofx);
valueofx = (x==="9") ? "true" : "false";
document.writeln("<br> x==='9' :" + valueofx);

document.writeln("<h2>Logical Operators: </h2><br>");
document.writeln("AND (&&), OR (||), Not (!) <br>");


let x1=10 ;
let y=20;
document.writeln("Value of x1: " + x1 +"<br>Value of y is : "+ y);
if(x1 > 5&& y<=20)
    document.writeln("x1>5 && y<=20 : "+"True<br>");

document.writeln("<h2>Bitwise Operators: </h2><br>");
document.writeln("AND (&), OR (|), NOT (~), X-OR (^) <br>");

// document.writeln(<br> <h2>"Ternary Operator"</h2> </br>);
document.writeln("<br> <h2> Ternary Operator </h2> ");
document.writeln ("A ternary operator evaluates a condition and executes a block of code based on the condition. <br>Its syntax is: condition ? expression1 : expression2");

let value =20;
document.writeln("<br>THe Valus Which is Passed to Ternary Condtition is : " + value);
var result= (value>=10) ? "<br>Ternary Value True " : "<br>Ternary Value False"
document.writeln("<br>Result of Ternary Operator is :" +result +"<br>");
document.writeln("<br><br> Nested Ternary Operator: <br>  <br>")

let value1 = 30;
document.writeln("<br>Value1 is : " + value1);
var  result = (value1>=30) ? (value1==30) ? "Value is 30" : "Value is Greater Tha 30" : "Value is Less than 30"

document.writeln ("<br> Result is : " + result);
value1 =33;
document.writeln("<br>Value1 is : " + value1);
var  result = (value1>=30) ? (value1==30) ? "Value is 30" : "Value is Greater Tha 30" : "Value is Less than 30"

document.writeln ("<br> Result is : " + result);

value1 =20;
document.writeln("<br>Value1 is : " + value1);
var  result = (value1>=30) ? (value1==30) ? "Value is 30" : "Value is Greater Tha 30" : "Value is Less than 30"

document.writeln ("<br> Result is : " + result);








