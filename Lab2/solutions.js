//Task 1

// let numbers = [1, 2, 3, 4, 5, 6]; //1
// let sum = 0; //1
// for (let i = 0; i < numbers.length; i++) { //n+1
//     sum += numbers[i]; //n
// }
// console.log(sum); //1 O(n)

//Task 2

// let number = [1, 2, 3, 4, 5, 6]
// for (let i = 0; i < number.length; i++) {
//     if (i % 2 == 1) {
//         continue;
//     }
//     console.log(number[i] + number[i + 1])
// }

// let number = [1, 2, 3, 4, 5, 6]
// for (let i = 0; i < number.length; i++) {
//     console.log(number[i] + number[i + 1]);
// }

//Task 3
// let numbers = [1, 2, 3, 4, 5, 6]
// for (let i = 0; i < numbers.length; i += 2) {
//     console.log(numbers[i]);
// }

//Task 4
// let numbers = [2, 4, 1, 5, 7, 3];
// let minimum = numbers[0];
// let maximum = numbers[0];

// for (let i = 0; i < numbers.length; i++) {
//     if (minimum > numbers[i]) {
//         minimum = numbers[i];
//     }
//     if (maximum < numbers[i]) {
//         maximum = numbers[i];
//     }
// }

// console.log("Minimum", minimum, "Maximum", maximum);

//Task 5

// let array = [10, 20, 30, 40, 50]
// let number = 70;
// let count = false;
// for (let i = 0; i < array.length; i++) {
//     if (number == array[i]) {
//         console.log(i);
//         count = true;
//         break;
//     }
// }

// if (count == false) {
//     console.log("Eded movcud deyil");
// }

//Task 6

// let array = [2, 3, 4, 1, 5];

// for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//         if (i != j) {
//             console.log(array[i] + array[j])
//         }
//     }
// }
