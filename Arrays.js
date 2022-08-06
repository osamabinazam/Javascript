document.writeln("Hello from \"Arrays.js\" <br>");
document.writeln("Arrays are nonpremitive data types which store elements in contiguous memory locations. <br> Store similar type of variables. <br> Have a dynamic Nature which make it different from other Arrays of programming <br> Can add an elemet using push method or can remove an element using pop method <br>");

document.writeln("<br>Storing String values in Array Car");
var cars = ["Civic", "Mitsobushi", "Grandi", "Nisan GTR"];
document.writeln(" <br>Printing values of array cars <br>");
document.writeln(cars);
document.writeln(" <br>Printing values of array cars using loop <br>");
for (var i = 0; i < cars.length; i++) {
    document.writeln("Car " + i + " is : " + cars[i] + "<br>");
}

document.writeln("Other Type of declaration and Assignment of an array <br>");
var fruits = new Array("Banana", "Apple", "Peach", "Mango");
for (i = 0; i < fruits.length; i++) {
    document.writeln("Fruit " + i + " is : " + fruits[i] + "<br>");
}

document.writeln("Pushing Grape Fruit  into Fruits Array<br>");
var fruits = new Array("Banana", "Apple", "Peach", "Mango");
fruits.push("Grapes");
for (i = 0; i < fruits.length; i++) {
    document.writeln("Fruit " + i + " is : " + fruits[i] + "<br>");
}
