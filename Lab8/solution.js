// Task 1

// let countWords = (sentence) => {
//     return sentence.split(" ").length;
// };

// let count = countWords("Hello World Salam");
// console.log(count);

// Task 2

// function digitsOfNumber(num) {
//     let digitArray = [];
//     while (num > 0) {
//         let digit = num % 10;
//         num = parseInt(num / 10);
//         digitArray.unshift(digit);
//     }

//     return digitArray;
// }

// let result = digitsOfNumber(321);
// console.log(result);

// Task 3

// let correctEmail = "admin@gmail.com";
// let correctPassword = "admin";

// function auth(email, password) {
//     if (correctEmail === email && correctPassword === password) {
//         return "Welcome admin";
//     } else if (email.trim() === "" || password.trim() === "") {
//         return "Fields are required";
//     }
//     return "Check your email or password";
// }

// let admin = auth("admin@gmail.com", "admin");
// console.log(admin);

// Task 4

// const vowels = ["a", "i", "o", "u", "e"];

// function replaceVowels(sentence, checkVowel) {
//     for (let i = 0; i < sentence.length; i++) {
//         if (checkVowel(sentence[i]) === true) {
//             sentence = sentence.replace(sentence[i], "?");
//         }
//     }
//     return sentence;
// }

// function checkVowel(character) {
//     if (vowels.includes(character)) {
//         return true;
//     }
// }

// let result = replaceVowels("Hello World", checkVowel);
// console.log(result);

// Task 5

// function reverseString(myString, reverseWord) {
//     let wordsArray = myString.split(" ");
//     let reversedArray = [];
//     for (let str of wordsArray) {
//         reversedArray.push(reverseWord(str));
//     }
//     console.log(reversedArray.join(" "));
// }

// function reverseWord(str) {
//     let reversedStr = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversedStr += str[i];
//     }
//     return reversedStr;
// }

// reverseString("hello world", reverse);
