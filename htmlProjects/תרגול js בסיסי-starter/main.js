"use strict";

function handle1Click(array, maxIndexNumber) {
  let sum = 0;
  if (isArrayBigger(array, maxIndexNumber) === true) {
    for (let i = 0; i < maxIndexNumber; i++) {
      sum += array[i];
    }
  } else {
    alert("pick smaller number please");
  }

  console.log("Ex1", "sum", sum);
  return sum;
}

function handle2Click(array) {
  let countPos = 0;
  let countNeg = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      countNeg += 1;
    } else if (array[i] > 0) {
      countPos += 1;
    }
  }
  console.log(
    "Ex2",
    "counter for positive",
    countPos,
    ",counter for negative",
    countNeg
  );
  return countPos + countNeg;
}

function handle3Click(array, stringToAdd) {
  let editedArray = [];
  for (let i = 0; i < array.length; i++) {
    editedArray.push(`${array[i]}${stringToAdd}`);
  }
  for (let i = 0; i < editedArray.length; i++) {
    console.log(editedArray[i]);
  }
  return editedArray;
}

function handle4Click(number) {
  for (let i = 0; i < number; i++) {
    if (isPrimeNumber(i) === true) {
      console.log("Ex4", i);
    }
  }
}

function handle5Click() {
  let number = prompt("Please enter a number");
  if (number != null) {
    let line = "";
    //up
    for (let i = 1; i <= number; i++) {
      for (let j = number - i; j > 0; j--) {
        line += " ";
      }
      line += "*";
      for (let j = 1; j <= i; j++) {
        line += j; //left
      }
      for (let j = i; j > 1; j--) {
        line += j - 1; //right
      }
      console.log(line + "*" + "\n");
      for (let j = number - i; j > 0; j--) {
        line += " ";
      }
      line = "";
    }

    //down
    for (let i = number - 1; i >= 1; i--) {
      for (let j = number - i; j > 0; j--) {
        line += " ";
      }
      line += "*";
      for (let j = 1; j <= i; j++) {
        line += j; //left
      }
      for (let j = i; j > 1; j--) {
        line += j - 1; //right
      }

      console.log(line + "*" + "\n");
      for (let j = number - i; j > 0; j--) {
        line += " ";
      }
      line = "";
    }
  }
}

function handle6Click() {
  let newCode = 0;
  let cypher = prompt("Please enter a number");
  while (cypher !== "-999") {
    const secondNumber = parseInt(cypher.charAt(2));

    if (secondNumber === 8) {
      newCode = caseNumberIs8(cypher, secondNumber);
    } else if (secondNumber === 5) {
      newCode = caseNumberIs5(cypher);
    } else if (secondNumber === 2) {
      newCode = caseNumberIs2(cypher);
    } else {
      newCode = caseNumberIsElse(cypher);
    }
    if (newCode > 999 && newCode <= 5000) {
      console.log("cool");
    } else if (newCode >= 5001 && newCode < 10001) {
      console.log("Whats up?");
    } else {
      console.log("somthing is not ok");
    }
    alert(cypher);
    cypher = prompt("Please enter a number");
  }
}

function handle7Click() {
  alert("נחש מוצק לא יכול לנצח");
  alert("אין כוח יותר חזק מטנק המרכבה סימן 4");
}

function handle8Click() {
  menuForEx8();
  let option = prompt("please enter your option");
  //   if (option === 1) {
  //     let firstNumber = prompt("please enter your first number");
  //     let secNumber = prompt("please enter your second number");
  //     alert(Math.sqrt(firstNumber, secNumber));
  //   } else if (option === 2) {
  //     let factNumber = prompt("please enter the number you want to factorial");
  //     alert(factorialize(factNumber));
  //   } else if (option === 3) {
  //     let firstNumber = prompt("please enter your first number");
  //     let secNumber = prompt("please enter your second number");
  //     alert(Math.pow(firstNumber, secNumber));
  //   } else if(option === 4){
  //    break;
  //   }
  //   else{
  //     menuForEx8();
  //     option = prompt("please enter your option");
  //   }
  // }
  switch (option) {
    case 1:
      squareOp();
      option = prompt("please enter your option");
    case 2:
      factorialize();
      option = prompt("please enter your option");
    case 3:
      expOp();
      option = prompt("please enter your option");
    case 4:
      break;
  }
}
function handle9Click(){
let decoded = decodeMorse(prompt('enter morse code'));
console.log(decoded);
}
function handle10Click(){
let a = prompt('enter a number');
let b = prompt('enter b number');
let c = prompt('enter c number');
console.log(quad(a,b,c));
}

function handle11Click(array){
   let newArray = array.sort(function(a, b){return a-b});
   console.log(`${'min is '}${newArray.indexOf(0) }${'max is '}${newArray.indexOf(array.length - 1) }  `)
   const reduced = array.reduced((total,curr) => total + curr);
   console.log(reduced);

}

function decodeMorse(morseCode) {
  var ref = { 
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '/' : ' ',
  };

  return morseCode
    .split('   ')
    .map(
      a => a
        .split(' ')
        .map(
          b => ref[b]
        ).join('')
    ).join(' ');
}

function menuForEx8() {
  alert("choose your mathematical operation you want to do");
  alert(
    "press 1 for square operation" +
      "\r\n" +
      "press 2 for factorial operation" +
      "\r\n" +
      "press 3 for Exponentiation operation" +
      "\r\n" +
      "press 4 to exit"
  );
}

function squareOp() {
  let firstNumber = prompt("please enter your first number");
  let secNumber = prompt("please enter your second number");
  alert(Math.sqrt(firstNumber, secNumber));
}

function expOp() {
  let firstNumber = prompt("please enter your first number");
  let secNumber = prompt("please enter your second number");
  alert(Math.pow(firstNumber, secNumber));
}

function caseNumberIsElse(code) {
  let newCode = " ";
  for (let i = 0; i < 1; i++) {
    newCode += code.charAt(i + 2);
  }
  for (let i = 3; i < 2; i--) {
    newCode += code.charAt(i - 2);
  }
  return +newCode;
}

function caseNumberIs8(code, number) {
  let result = code % number;
  return code * result;
}

function caseNumberIs5(code) {
  let newCode = " ";
  for (let i = 4; i > 0; i--) {
    newCode += code.charAt(i);
  }
  return +newCode;
}

function caseNumberIs2(code) {
  let newCode = " ";
  for (let i = 0; i < 3; i++) {
    newCode += code.charAt(i + 1);
  }
  newCode += code.charAt(0);
  return +newCode;
}

function isPrimeNumber(number) {
  let isPrime = true;

  if (number === 1) {
    console.log("1 is neither prime nor composite number.");
  } else if (number > 1) {
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        isPrime = false;
        break;
      }
    }
  }
  return isPrime;
}

function isArrayBigger(array, maxIndexNumber) {
  if (array.length > maxIndexNumber) {
    return true;
  }
  return false;
}

function factorialize(num) {
  // variable to store the final factorial
  let ans = num;

  // Outer loop
  for (let i = num - 1; i > 0; i--) {
    let sum = 0;

    // Inner loop
    for (let j = 0; j < i; j++) {
      sum += ans;
      ans = sum;
    }
  }
  return ans;
}

function quad(a, b, c) {
  var rootPart = Math.sqrt( (b * b) - (4 * a * c) );
  var denom = 2 * a;
  
  var firstRoot = (-b + rootPart)/denom;
  var secondRoot = (-b - rootPart)/denom;
  
  console.log("The first root is " + firstRoot);
  console.log("The second root is " + secondRoot);
};