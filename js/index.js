// example 1

// var x = Number (window.prompt("pleas enter your number"))
// console.log(x);

// example 2

// var x=Number (window.prompt("pleas enter your number"))
// if (x %3 == 0 && x %4 == 0){
//     console.log("yes");
// }else{
//     console.log("no");
// }

// example 3

// var num1 = Number (window.prompt("pleas enter your first number"));
// var num2 = Number (window.prompt("pleas enter your second number"));
// if (num1 > num2) {
//     console.log(num1);
// }else if (num2 > num1) {
//     console.log(num2)
// }else
// console.log("number equal");



// // example 4

// var num = Number (window.prompt("pleas enter your number"))
// if (num > 0) {
//     console.log("negative number:" ,num );
// }else if (num < 0) {
//     console.log("positive number:" ,num );
// }else
//     console.log(" number 0");

// example 5

// var x = Number (window.prompt("pleas enter your number1"))
// var y = Number (window.prompt("pleas enter your number2"))
// var z = Number (window.prompt("pleas enter your number3"))
// if (x >= y && x >= z) {
//    console.log("max" ,  x);
// } else if (y >= x && y >= z) {
//   console.log("max" , y);
// } else {
//   console.log("max" , z);
// }
// if (x <= y && x <= z) {
//   console.log("min" ,x);
// } else if (y <= x && y <= z) {
//   console.log("min" ,y);
// } else {
//   console.log("min" ,z);
// }

// // example 6

// var num = +window.prompt ("please enter number")
// if (num %2 === 0) {
//     console.log("number even");
// }else{
//     console.log("number odd");
// }

// // example 8

// var text = +window.prompt("Enter a text");
// if (text === 'a' ||  text === 'e' || text === 'i' || text === 'o' || text === 'u' ||text === 'A' ||  text === 'E' || text === 'I' || text === 'O' || text === 'U') {
//   console.log( "is a vowel");
// } else {
//   console.log("is a consonant.");
// }


// example 9

// var num = +window.prompt("enter a number")
// for(var i=1;  i<=num; ++i){
//     console.log(i);
// }


// // example 10

// var num = +window.prompt("enter a number")
// for (var i=1; i <= 12; ++i){
// var multiplication = num * i;
// console.log(multiplication);
// }


// example 11

// var num=+window.prompt("enter a number")
// for(var i=1; i<=num; ++i ){
//   if( i %2==0)
//   console.log(i); 
// }

// example 12

// var num1 = +window.prompt ("enter a number");
// var num2 = +window.prompt ("enter a number");
// var power = 1;
// for (var i = 0; i < num2; ++i) {
//     power *= num1;
// }
// console.log(power);


// example 12
// var num1 = +window.prompt ("enter a number1");
// var num2 = +window.prompt ("enter a number2");
// var num3 = +window.prompt ("enter a number3");
// var num4 = +window.prompt ("enter a number4");
// var num5 = +window.prompt ("enter a number5");
// var total=num1 +num2 +num3 +num4 +num5;
// console.log(total);
// var average = total /5;
// console.log(average);
// var percentage= (total / 500) * 100;
// console.log(percentage);


// example 13

// var month = +window.prompt("Enter a month number");
// var  days;
// if ( month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
//     var days = 31;
//     console.log(month + "-" + days);
// }else if (month == 4 || month == 6 || month == 9 || month == 11) {
//     var days = 30;
//     console.log(month + "-" +days);
// }else{
//     console.log(month + "-" +28);
// }




// example 14

// var physics = +window.prompt("Enter your marks 1")
// var Chemistry = +window.prompt("Enter your marks 2")
// var Biology = +window.prompt("Enter your marks 3")
// var Mathematics = +window.prompt("Enter your marks 4")
// var Computer = +window.prompt("Enter your marks 5")
// var total=physics+Chemistry+Biology+Mathematics+Computer;
// var percentage = (total/500)*100;
// if (percentage >=90) {
//   console.log("A");
//   console.log(percentage + "%");
// }else if (percentage >=80) {
//   console.log("B");
//   console.log(percentage + "%");
// }else if (percentage >=70) {
//   console.log("c");
//   console.log(percentage + "%");
// }else if (percentage >=60) {
//   console.log("D");
//   console.log(percentage + "%");
// }else if (percentage >=40) {
//   console.log("E");
//   console.log(percentage + "%");
// }else if (percentage <40) {
//   console.log("F");
//   console.log(percentage + "%");
// } 

// example 14 (2)
// var physics = window.prompt("Enter your marks 1")
// var Chemistry = window.prompt("Enter your marks 2")
// var Biology = window.prompt("Enter your marks 3")
// var Mathematics = window.prompt("Enter your marks 4")
// var Computer = window.prompt("Enter your marks 5")
// if (physics >=90) {
//   console.log("A " + physics + "%");
// }else if (physics >=80) {
//   console.log("B " + physics + "%");
// }else if (physics >=70) {
//   console.log("C " + physics + "%");
// }else if (physics >=60) {
//   console.log("D " + physics + "%");
// }else if (physics >=40) {
//   console.log("E " + physics + "%");
// }else if (physics <40) {
//   console.log("F " + physics + "%");
// } 
// if (Chemistry >=90) {
//     console.log("A " + Chemistry + "%");
//   }else if (Chemistry >=80) {
//     console.log("B " + Chemistry + "%");
//   }else if (Chemistry >=70) {
//     console.log("C " + Chemistry + "%");
//   }else if (Chemistry >=60) {
//     console.log("D " + Chemistry + "%");
//   }else if (Chemistry >=40) {
//     console.log("E " + Chemistry + "%");
//   }else if (Chemistry <40) {
//     console.log("F " + Chemistry + "%");
//   } 

//   if (Biology >=90) {
//     console.log("A " + Biology + "%");
//   }else if (Biology >=80) {
//     console.log("B " + Biology + "%");
//   }else if (Biology >=70) {
//     console.log("C " + Biology + "%");
//   }else if (Biology >=60) {
//     console.log("D " + Biology + "%");
//   }else if (Biology >=40) {
//     console.log("E " + Biology + "%");
//   }else if (Biology <40) {
//     console.log("F " + Biology + "%");
//   } 

//   if (Mathematics >=90) {
//     console.log("A " + Mathematics + "%");
//   }else if (Mathematics >=80) {
//     console.log("B " + Mathematics + "%");
//   }else if (Mathematics >=70) {
//     console.log("C " + Mathematics + "%");
//   }else if (Mathematics >=60) {
//     console.log("D " + Mathematics + "%");
//   }else if (Mathematics >=40) {
//     console.log("E " + Mathematics + "%");
//   }else if (Mathematics <40) {
//     console.log("F " + Mathematics + "%");
//   } 
  
//   if (Computer >=90) {
//     console.log("A " + Computer + "%");
//   }else if (Computer >=80) {
//     console.log("B " + Computer + "%");
//   }else if (Computer >=70) {
//     console.log("C " + Computer + "%");
//   }else if (Computer >=60) {
//     console.log("D " + Computer + "%");
//   }else if (Computer >=40) {
//     console.log("E " + Computer + "%");
//   }else if (Computer <40) {
//     console.log("F " + Computer + "%");
//   } 
  
  
// switch case

// example (1)

// var month = +window.prompt("Enter a month number");
// var days;
// switch (month) {
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 8:
//   case 10:
//   case 12:
//     days = 31;
//     console.log(month + "-" + days);
//     break;
//   case 4:
//   case 6:
//   case 9:
//   case 11:
//     days = 30;
//     console.log(month + "-" + days);
//     break;
//     case 2:
//       days = 28;
//       console.log(month + "-" + days);
//       break
//   default:
//     console.log("not a number");
// }



// example (2)

// var text = window.prompt("Enter a text");
// switch (text){
//         case 'a':
//         case 'A':
//         console.log("is a vowel");
//         break;
//         case 'e':
//         case 'E':
//         console.log("is a vowel");
//         break;
//         case 'i':
//         case 'I':
//         console.log("is a vowel");
//         break;
//         case 'o':
//         case 'O':
//         console.log("is a vowel");
//         break;
//         case 'u':
//         case 'U':
//         console.log("is a vowel");
//         break;
//         default:
//             console.log("is a condonant")
// }


// example (3)

// var num1 = +window.prompt("Enter a text");
// var num2 = +window.prompt("Enter a text");
// switch (true) {
//   case num1>num2:
//     console.log(num1);
//     break;
//   case num2>num1:
//     console.log(num2);
//   default:
//     case num1=num2:
//       break;
//       console.log("not a maximum");
//   break;
// }


// example (4)

// var num1 = +window.prompt("Enter a number");
// switch (true) {
//     case num1 %2==0:
//         console.log("number even");
//         break;

//     default:
//         console.log("number odd");
//         break;
// }



// example (5)

// var number = +window.prompt("Enter a number");
// switch (number) {
//     case + number:
//         console.log(number + " is positive.");
//         break;
//     case - number:
//         console.log(number + " is negative.");
//         break;
//     case 0:
//         console.log("The number is zero.");
//         break;
//     default:
//         console.log("Invalid input");
//         break;
// }

// example (6)
// var number1 = Number(window.prompt("Enter a number"));
// var Calculator= window.prompt ("enter a sign")
// var number2 = Number(window.prompt("Enter a number"));

// switch (Calculator) {
//     case "+":
//         total=number1+number2
//         console.log(total);
//         break;
//     case "-":
//         total =number1-number2
//         console.log(total);
//         break
//     case "*":
//         total=number1*number2
//         console.log(total);   
//         break
//     case "/":
//         total=number1/number2
//         console.log(total);  
//         break  
// default:
//     console.log("Invalid inbout");
// }