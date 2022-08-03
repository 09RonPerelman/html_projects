function reverseStr() {
  let str = prompt("please enter str to reverse");
  let splitString = str.split("");
  let reverseArray = splitString.reverse();
  let joinArray = reverseArray.join("");
  alert(joinArray);
}

function outFromArray(object, condition) {
  let resolts = {};
  for (const key in object) {
    if (!condition(object[key])) {
      resolts[key] = object[key];
    }
  }
  console.log(resolts);
}

function third(obj1, obj2){
    console.log([...obj1,...obj2]);
}

function fourthExe(arr, number = 1) {
  let newArray = arr.sort((a, b) => (a > b ? 1 : -1));
  for (let i = 1; i < number + 1; i++) {
    console.log(newArray.slice(0, i));
  }
}

function fifth(array, condition){
    let i = array.sort(condition);
    console.log(i[0]);
}

function outFromArrayBool(object, condition) {
  let results = {};
  let bool = true;
  for (const key in object) {
    if (!condition(object[key])) {
      bool = false;
    }
  }
  console.log(results);
}

function getRandomArray(min, max, range) {
  let array = [];
  for (let i = 0; i < range; i++) {
    array.push(Math.random() * (max - min) + min);
  }
  console.log(array);
}

function addChar(str, lengthStr, charCond = " ") {
  if (str.length >= lengthStr) {
    console.log(str);
  } else {
    const chard = charCond.repeat((lengthStr - str.length + 1) / 2);
    console.log(`${chard}${str}${chard}`);
  }
}
