document.writeln("Hello From <b>Functions.js</b> File");
document.writeln("<br> creating sum function and perfoming adding of three numbers there... <br> <br>");


function sum(number1,  number2, number3){
    document.writeln("<br>In Sum Function<br>");
    document.writeln("The value of number1 is : " + number1+"<br>");
    document.writeln("The value of number2 is : " + number2+"<br>");
    document.writeln("The value of number3 is : " + number3+"<br>");
    let result = number1+number2+number3;
    document.writeln("<br>Returning from Sum function with value : " + result+"<br>");
    return result;
}
document.writeln ("<b>In Main Function/method</b><br>");
var result = sum(23,23,11);
document.writeln("The sum is : " + result);