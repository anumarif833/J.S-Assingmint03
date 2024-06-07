// // 01
// var studentNames = ``;

// // 02
// var objectNotation = {

// };

// // 03

// var stringArray = ['anumarif','student','sir','techer'];

// // 04

// var numberArray = [1,2,3,4,5];

// // 05

// var booleanArray = [true,false];

// // 06

// var mixedArray = [1,'one',2,'two,',3];


// // 07

// var qualifications =['<b>Qualifications :</b><br><br>'+'1) SSC <br>'+'2) HSC <br>'+'3) BCS <br>'+'4) BS <br>'+'5) BCOM <br>'+' 6) MS <br> '+' 7) M .PHIL <br>'+'8) PHD <br><br><br>'];
// document.write(qualifications);

// // 08

// var student = ['ANUM','ARIF','SANAULLHA'];
// var score = [250,400,480];
// var totalMarks = 500;
// document.write("Score of <b> ",student[0], '</b> is <b>',score[0], '</b> and percentage is <b>',(score[0]/totalMarks)*100, "% </br><br>" );
// document.write("Score of <b> ",student[1], '</b> is <b>',score[1], '</b> and percentage is <b>',(score[1]/totalMarks)*100, "% </br><br>" ); 
// document.write("Score of <b> ",student[2], '</b> is <b>',score[2], '</b> and percentage is <b>',(score[2]/totalMarks)*100, "% </br><br>" );


// // 09

// alert("Ther are total 5 colors:")
// var colors = [' blue ',' rad ',' pink ',' black ',' green ',' white '];
// document.write(colors+ "<br>");

// var beginning = prompt("enter any color you want to add to the beginning");
// colors.unshift("<b>"+beginning+"</b>");
// document.write(colors+ "<br>");

// var end = prompt("enter any color you want to add to the end");
// colors.push("<b>"+end+"</b>");
// document.write(colors+"<br>");

// var beginningAgain = prompt("enter any two color you want to thr beginning");
// var beginningAgain2 = package("enter second color");
// colors.unshift("<b>"+beginningAgainAgain+"</br>");
// colors.unshift("<b>"+beginningAgain2+"</b>");
// document.write(colors+ "<br>");

// colors.shift(0);
// document.write(colors+ "<br>");

// colors.pop();
// document.write(colors+ "<br>");

// var ColorIndex = +prompt("At which index you to add a color");
// var ColorName = +prompt("which color you want to add a color");
// colors.splice(ColorIndex,0, "<b>" +ColorName+"</b>");
// document.write(colors+ "<br><br><br>");

// var deleteIndex = +prompt("At whichindex you wants to delete a color");
// var deleteNumbr = +prompt("how many colors you want to delete");
// colors.splice(ColorIndex,0, "<b>"+ColorName+"</br>");

// var deleteIndex = +prompt("At which index you wants to delete a color");
// var deleteNumbr = +prompt("how many colors you want to delete");
// colors.splice(deleteIndex,deleteNumbr);
// document.write(colors+"<br><br>");


// 10

// var names = ['anum ',' arif ',' rubab ',' sunds',' usama'];
// document.write(names, "<br>");
// names.sort();
// document.write(names,"<br><br><br>"); 

// 11

// var cities = ['karachi','lahor','peshawer','quetta','kasghmir','islamabad'];
// document.write("Cities list  :<br>",cities,"<br><br><br>");

// var selectedCities = cities.slice(2,5);
// document.write("selected cities <br>",selectedCities,"<br><br><br>");

// 12

// var arr = ['this ','is','my','car'];
// document.write("Array : ",arr,"<br>");
// var d =arr. join(" ");
// document.write("string : ",d,"<br><br><br>");

// 13

// var fifo = ['keyboard','mouse','monitor','printer'];
// var returns = lifo.reverse()
// document.write("<b> Devices</b><br>",returns,"<br><br>");

// 15

var phoneManufacturers =['apple','Samsung','Motrola','Nokia','Haire','Sony'];
document.write("<lable>","phone phoneManufacturers","</label>"
,"<select>",
"<option>"+phoneManufacturers[0]+"</option>",
"<option>"+phoneManufacturers[1]+"</option>",
"<option>"+phoneManufacturers[2]+"</option>",
"<option>"+phoneManufacturers[3]+"</option>",
"<option>"+phoneManufacturers[4]+"</option>",
"<option>"+phoneManufacturers[5]+"</option>",
"</select>")
