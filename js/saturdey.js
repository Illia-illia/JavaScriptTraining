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
