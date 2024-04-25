// Task 1

// function findBigger(number1, number2) {
//   if (number1 > number2) {
//     return number1;
//   } else if (number1 < number2) {
//     return number2;
//   }
//   return "Equal";
// }

// let result = findBigger(4, 4);
// console.log("Result:", result);

// Task 2

// function sumOfArray(myArray) {
//   let sum = 0;
//   for (let i = 0; i < myArray.length; i++) {
//     sum += myArray[i];
//   }
//   return sum;
// }

// let result = sumOfArray([1, 2, 3, 5, 7]);
// console.log(result);

// Task3

// function findBiggest(array) {
//   let max = array[0];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > max) {
//       max = array[i];
//     }
//   }
//   return max;
// }
// let array = [3, 1, 2, 7, 4];
// let result = findBiggest(array);
// console.log(result);

// Task 4

// function isPrime(number) {
//   if (number <= 1) {
//     return false;
//   }

//   for (let i = 2; i < number; i++) {
//     if (number % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// let result = isPrime(11);
// console.log(result);

// Task 5

// let firstNumber = 0;
// let secondNumber = 1;
// let array = [firstNumber, secondNumber];

// function fibonacci(limit) {
//   for (let i = 2; i < limit; i++) {
//     let thirdNumber = firstNumber + secondNumber;
//     array.push(thirdNumber);
//     firstNumber = secondNumber;
//     secondNumber = thirdNumber;
//   }

//   return array;
// }

// console.log(`${fibonacci(20)}`);

// Task 6

// function sumInArray(array, number) {
//   let myArray = [];
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//       if (array[i] + array[j] === number) {
//         myArray.push([array[i], array[j]]);
//       }
//     }
//   }
//   return myArray;
// }
// console.log(sumInArray([1, 2, 3, 4], 5));

// Task 7

// let correctEmail = "admin@gmail.com";
// let correctPassword = "admin";

// function auth(email, password) {
//   if (correctEmail === email && correctPassword === password) {
//     return true;
//   }
//   return false;
// }

// let admin = auth("admin@gmail.com", "admin");
// console.log(admin);
