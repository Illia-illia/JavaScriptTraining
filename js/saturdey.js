// TASK 1==========================================================
// You need to calculate amount of tip to give in a restaurant/cafe.
//  Workflow:
// 1.   User inputs check sum. (Use “prompt” function).
// 2.   User inputs tip percentage. (Use “prompt” function) % чайових
// 3. For an empty string or cancelled input, show “Canceled.” повідомлення скасовано
// 4.   You need to validate the input data: both values should be numbers, check sum can’t be
// a negative number, percentage can’t be negative and bigger than 100.
// 5.   If input data isn’t valid, you should show message “Invalid input data”. (Use “alert” function).
// 6.   You need to calculate tip amount and total sum to pay.
// 7.   Show message: (example). Use ”alert” function
// Check sum: 200
// Tip: 15%
// Tip amount: 30
// Total sum to pay:  230

//  SOLUTION ==========================================================
// const checkSum = prompt("Веедіть суму чеку");
// const tip = prompt("Введіть відсоток чайових");
// if (checkSum === null || checkSum === "" || tip === null || tip === "") {
//   alert("cancel");
// } else {
//   const parstCheckSum = Number.parseFloat(checkSum);
//   const parstTip = Number.parseFloat(tip);
//   if (
//     Number.isNaN(parstCheckSum) ||
//     Number.isNaN(parstTip) ||
//     parstCheckSum < 0 ||
//     parstTip < 0 ||
//     parstTip > 100
//   ) {
//     alert("Invalid input data");
//   } else {
//     const totalTip = Number((parstCheckSum * (parstTip / 100)).toFixed(2));
//     const totalSum = Number((parstCheckSum + totalTip).toFixed(2));
//     alert(
//       `Check sum ${parstCheckSum},\n
// Tip ${parstTip}%,\n
// Tip amount ${totalTip},\n
// Total sum to pay ${totalSum}`
//     );
//   }
// }

// TASK 2 =====================================================================
// Find middle character of the word.
// User is going to input a word. Your task is to find the middle character of this word.
// If the word’s length is odd - return the middle character.If word’s length is even - return the middle 2 characters.
// You should validate for empty value and for value with spaces only, in that case show message: “Invalid value”.
// For user input use “prompt” function. For displaying result use “alert” function.

// Examples:
// 	For user input “test” should return “es”
// 	For user input “character” should return “a”
// 	For user input “B” should return “B”
// 	For user input “” should return “Invalid value”
// For user input “       “ should return “Invalid value”

// SOLUTION ====================================================================
// const userWord = prompt('Please enter any word');

// if (userWord === null || userWord.trim() === '') {
//   alert('Invalid value');
// } else {
//   const wordLength = userWord.length;
//   const startIndex = wordLength / 2 - 1;
//   const endIndex = startIndex + 2;
//   let result;
//   if (wordLength % 2 === 0) {
//     result = userWord.slice(startIndex, endIndex);
//   } else {
//     const startIndex = (wordLength - 1) / 2;
//     const endIndex = startIndex + 1;
//     result = userWord.slice(startIndex, endIndex);
//   }
//   alert(result);
// }

// TASK 3 ========================================================================
// Write the code which verify user rights.
// Step 1. Check login
// 	Ask user for a login // use prompt()
// 	If the input is an empty line or Esc – show “Canceled.” // for showing - use alert()
// 	If the input length less than 4 symbols - show “I don't know any users having name length less than 4 symbols”.
// 	If it’s another string – then show “I don’t know you”.
// 	If the visitor enters "User" or "Admin", then prompt for a password.
// Step 2. Check password:
// 	For an empty string or cancelled input, show “Canceled.”
// 	For login “User” correct password is “UserPass”, for “Admin” correct password is  “RootPass”.
// In other case, show “Wrong password”.
// Step 3. Greets the user appropriately:
// 	If the current time in hours is more then 5.00 and less then 20: // current hours – new Date().getHours()
// 	For “User” show “Good day, dear User!”
// 	For “Admin” show “Good day, dear Admin!”
// 	In other way:
// 	For “User” show “Good evening, dear User!”
// 	For “Admin” show “Good evening, dear Admin!
// const hours = new Date().getHours();
// console.log(hours);
// const login = prompt('Please write your login ');
// if (login === null || login.trim() === '') {
//   alert('Canceled.');
// } else if (login.length < 4) {
//   alert('I don`t know any users having names lengths less than 4 symbols');
// } else if (login === 'User' || login === 'Admin') {
//   const password = prompt('Please write your password');
//   if (password === null || password.trim() === '') {
//     alert('Canceled.');
//   } else if (login === 'User' && password === 'UserPass') {
//     if (hours > 5 && hours < 20) {
//       alert('Good day, dear User!');
//     } else {
//       alert('Good evening, dear User!');
//     }
//   } else if (login === 'Admin' && password === 'RootPass') {
//     if (hours > 5 && hours < 20) {
//       alert('Good day, dear Admin!');
//     } else {
//       alert('Good evening, dear Admin!');
//     }
//   } else {
//     alert('Wrong password');
//   }
// } else {
//   alert('I don`t know you');
// }

// TASK 4 26-06-2022 ========================================================================
// const a = [1, 2, 3];
// const b = [5, [6, 7]];
// const c = 4;
// // const result = [...a, c, b[0], ...b[1]];
// const result = a.concat(c, b[0], b[1]);
// console.log(result);

// TASK 5 26-06-2022 ========================================================================
// const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// // a.splice(3, 3, 1, 2, 3);

// console.log(a.copyWithin(3, 0, 3));

// TASK 6 26-06-2022 ========================================================================
// const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// // // [1, 2, 3, 4, 5, 0, 0, 0, 9]
// // a.splice(5, 3, 0, 0, 0);
// const b = a.slice();
// b.fill(0, 5, 8);

// console.log(b);

// TASK 7 26-06-2022 ========================================================================
// const a = ['a', 'h', 'n', 'g', 'r', 'n', 'y', 'n', 'm'];
// let b = 0;
// for (let i = 0; i < a.length; i += 1) {
//   if (a[i] === 'n') {
//     b = i;
//   }
// }
// console.log(b);

// TASK 8 26-06-2022 ========================================================================
// const a = [1, [2, 3], [4, 5], 6, 7, 8, [9, 10]];
// const b = [];
// for (const item of a) {
//   if (Array.isArray(item)) {
//     b.push(...item);
//   } else {
//     b.push(item);
//   }
// }
// console.log(b);

// TASK 9 26-06-2022 ========================================================================
// 12345
// 54321
// -12345
// -54321

// function reversNumber(number) {
//   const array1 = String(number);
//   const b = [];

//   for (let i = array1.length - 1; i >= 0; i -= 1) {
//     b.push(array1[i]);
//   }
//   if (b[b.length - 1] === '-') {
//     b.unshift(b[b.length - 1]);
//     b.pop();
//   }

//   return Number(b.join(''));
// }
// console.log(reversNumber(12345));

// TASK 10 26-06-2022 ========================================================================
// function convert(...args) {
//   const newArray = [];
//   for (const item of args) {
//     typeof item === 'number'
//       ? newArray.push(item.toString())
//       : newArray.push(Number(item));
//   }

//   return newArray;
// }

// вхід [1, '2', '3', 4]
// вихід ['1', 2, 3, '4']

// TASK 11 26-06-2022 ========================================================================
// const users = [
//   {
//     id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     skills: ['ipsum', 'lorem'],
//     gender: 'male',
//     age: 37,
//   },
//   {
//     id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//     gender: 'female',
//     age: 34,
//   },
//   {
//     id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//     gender: 'male',
//     age: 24,
//   },
//   {
//     id: '249b6175-5c30-44c6-b154-f120923736f5',
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     skills: ['adipisicing', 'irure', 'velit'],
//     gender: 'female',
//     age: 21,
//   },
//   {
//     id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     skills: ['ex', 'culpa', 'nostrud'],
//     gender: 'male',
//     age: 27,
//   },
//   {
//     id: '150b00fb-dd82-427d-9faf-2879ea87c695',
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     skills: ['non', 'amet', 'ipsum'],
//     gender: 'male',
//     age: 38,
//   },
//   {
//     id: 'e1bf46ab-7168-491e-925e-f01e21394812',
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     skills: ['lorem', 'veniam', 'culpa'],
//     gender: 'female',
//     age: 39,
//   },
// ];

// function userUpdate(users) {
//   const newUsers = [];
//   for (const user of users) {
//     const { id, name, email, eyeColor: color, age } = user;
//     const newUser = { id, name, email, color, age };

//     newUsers.push(newUser);
//   }
//   return newUsers;
// }

// console.log(userUpdate(users));
