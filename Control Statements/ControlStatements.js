document.writeln("<br> <h3>Statements that control the flow of program during execution based on certain conditions</h3> <br><p> <h4>There are Two Types of Control Statements </h4></p>");
document.writeln("1.  Conditional Statements> <br> Such as if-else, if-elseif-else , Switch<br>2.    Iterative Statements <br> Such as Loops (for, while, do while, for in)<br>");

document.writeln("<h2> Conditional Statements: </h2>");
document.write("<br> <b>If-Else</b> <br> <br>");

let x = 10;
document.write("Value of  x is: " + x);
if (x < 20) {
    document.write("<br>In if Block..  <br>");
    document.write("X is less than 20: " + x);
}
else {
    document.write("<br>In else block");
    document.write("X is greater or equal to 20 : " + x);
}

document.writeln("<br><br> <b>If-else if-else:</b>  <br>");
var day=5;

document.writeln("<br>Value of day is : "+ day);
if (day==1) {
    document.writeln("<br>It's Monday.");
} else if(day==2) {
    document.writeln("<br>It's Tuesday.");
} else if(day==3) {
    document.writeln("<br>It's Wednessday.");
} else if(day==4) {
    document.writeln("<br>It's Thursday.");
} else if(day==5) {
    document.writeln("<br>It's Friday.");
} else if(day==6) {
    document.writeln("<br>It's Saturday.");
} else if(day==7) {
    document.writeln("<br>It's Sunday.");
}

document.writeln("<br><br> <b>Switch:</b>  <br>");

var month = 12;
document.writeln("<br>Value of Month is : " + month +"<br><br>");
switch (month) {
    case 1:
        document.writeln("Month is: January.");
        break;
    case 2:
        document.writeln("Month is: Feburary.");
        break;
    case 3:
        document.writeln("Month is: March.");
        break;
    case 4:
        document.writeln("Month is: April.");
        break;
    case 5:
        document.writeln("Month is: May.");
        break;
    case 6:
        document.writeln("Month is: June.");
        break;
    case 7:
        document.writeln("Month is: July.");
        break;
    case 8:
        document.writeln("Month is: August.");
        break;
    case 7:
        document.writeln("Month is: September.");
        break;
    case 10:
        document.writeln("Month is: October.");
        break;
    case 11:
        document.writeln("Month is: November.");
        break;
    case 12:
        document.writeln("Month is: December.");
        break;
    default:
        document.writeln("Given number is Not a month.");
        break;
}

