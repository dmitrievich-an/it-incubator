// Выполнение заданий №3-5, 10
var sendButton = document.getElementById('clickButton');
function pressButton() {
  var resultId = document.getElementById("search-result").value;
  if (resultId === "") {
    alert("Введите поисковый запрос!");
  } else if (resultId === "google" || resultId === "пщщпду" || resultId === "гугл") {
    alert("Yandex круче. Но это не точно");
  } else {
    alert(resultId + "\n\r" + "Выполнение задания №5:" + "\n" + taskFive);
  }
}
function pressTimeoutButton() {
  setTimeout(pressButton, 3000);
};
sendButton.addEventListener('click', pressTimeoutButton)

// Выполнение задания №5
console.log("Задание 5:");
var dinosaurs = [
  { name: "Тираннозавр рекс", age: "100 500 000 лет" },
  { name: "Стегозавр", age: "163 000 000 лет" },
  { name: "Платеозавр", age: "252 000 000 лет" }
];
var taskFive = dinosaurs[0].name
console.log(taskFive);
console.log("");

// Выполнение задания №6
console.log("Задание 6:");
console.log("Введите в консоль 'superSum(a, b)' (без кавычек), где a и b - числа, которые необходимо сложить. Например: superSum(51, 72)");

function superSum(num1, num2) {
  var result = num1 + num2;
  alert(result);
}
console.log("");

// Выполнение задания №7
console.log("Задание 7:");
var arrayOfNumbers = [-7, -124, 40, 489, 19, 0];

//    Поиск максимального числа
for (var i = 0; i < arrayOfNumbers.length; i++) {
  if (arrayOfNumbers[i] > arrayOfNumbers[0]) {
    arrayOfNumbers[0] = arrayOfNumbers[i];
  }
}
console.log("Максимальное число = " + arrayOfNumbers[0]);

//    Поиск минимального числа
for (var i = 0; i < arrayOfNumbers.length; i++) {
  if (arrayOfNumbers[i] < arrayOfNumbers[0]) {
    arrayOfNumbers[0] = arrayOfNumbers[i];
  }
}
console.log("Минимальное число = " + arrayOfNumbers[0]);
console.log("");


// Выполнение задания №8
console.log("Задание 8:");
let a = "Значение А";
let b = "Значение B";

[b, a] = [a, b];
console.log(a);
console.log(b);
console.log("");

// Выполнение задания №9
console.log("Задание 9:");
var numArray = [-67, -124, 1, 825, 19, 0]
function findMax() {
  return Math.max.apply(null, numArray);
}
console.log(findMax());
