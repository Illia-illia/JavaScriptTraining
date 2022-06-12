//=================MODULE 1=====================

// task 2
// let productName = 'Droid';
// let pricePerItem = 2000;
// console.log(pricePerItem);

// pricePerItem = pricePerItem + 1500;
// console.log('new:', pricePerItem);

// task 5
// const productName = 'Droid';
// const pricePerItem = 3500;

// // Change code below this line
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;
// console.log(message);

//task 8
// Change code below this line
// function add(a, b, c) {
//   console.log(`Addition result equals ${a + b + c}`);
//   // Change code above this line
// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

// task 9

// function add(a, b, c) {
//   // Change code below this line

//   return a + b + c;

//   // Change code above this line
// }

// add(2, 5, 8); // 15

// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

// task 10
// function makeMessage(name1, price) {
//   // Change code below this line
//   const message = `You picked ${name1}, price per item is ${price} credits`;
//   // Change code above this line
//   return message;
// }

// let result = makeMessage('Scanner', 3500);
// console.log(result);

// task 13
// function isAdult(age) {
//   // Change code below this line
//   const passed = age >= 18;

//   // Change code above this line
//   return passed;
// }
// let result = isAdult(21);
// console.log(result);

// task 14
// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';
//   // Change code below this line
//   const isMatch = password === SAVED_PASSWORD;

//   // Change code above this line
//   return isMatch;
// }

// let result = isValidPassword('jqueryismyjam');

// console.log(result);

// task 15
// function checkAge(age) {
//   let message;

//   if (age >= 18) {
//     // Change this line
//     message = 'You are an adult';
//   } else {
//     message = 'You are a minor';
//   }

//   return message;
// }

// let result = checkAge(18);
// console.log(result);

// task 16
// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//   if (available < ordered) {
//     message = 'Not enough goods in stock!';
//   } else {
//     message = 'Order is processed, our manager will contact you.';
//   }
//   // Change code above this line
//   return message;
// }
// let result = checkStorage(100, 99);
// console.log(result);

// task 18
// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Change code below this line
//   let totalPrice = pricePerDroid * orderedQuantity;
//   if (totalPrice > customerCredits) {
//     message = 'Insufficient funds!';
//   } else {
//     message = `You ordered ${orderedQuantity} droids, you have ${
//       customerCredits - totalPrice
//     } credits left`;
//   }
//   // Change code above this line
//   return message;
// }
// let result = makeTransaction(500, 10, 5000);
// console.log(result);

// task 19
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   if (password === null) {
//     // Change this line
//     message = 'Canceled by user!';
//   } else if (password === ADMIN_PASSWORD) {
//     // Change this line
//     message = 'Welcome!';
//   } else {
//     message = 'Access denied, wrong password!';
//   }

//   return message;
// }

// let result = checkPassword('jqueryismyjam');
// console.log(result);

// task 20
// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//   if (ordered === 0) {
//     message = 'There are no products in the order!';
//   } else if (ordered > available) {
//     message = 'Your order is too large, there are not enough items in stock!';
//   } else {
//     message = 'The order is accepted, our manager will contact you';
//   }
//   // Change code above this line
//   return message;
// }
// let result = checkStorage(70, 0);
// console.log(result);

// task 21
// function isNumberInRange(start, end, number) {
//   const isInRange = number >= start && number <= end; // Change this line
//   return isInRange;
// }
// let result = isNumberInRange(10, 30, 5);
// console.log(result);

// task 22
// function checkIfCanAccessContent(subType) {
//   const canAccessContent = subType === 'pro' || subType === 'vip'; // Change this line

//   return canAccessContent;
// }

// let result = checkIfCanAccessContent('free');
// console.log(result);

// task 23
// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !isInRange; // Change this line

//   return isNotInRange;
// }

// let result = isNumberNotInRange(10, 30, 17);
// console.log(result);

// task 24
// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line
//   if (totalSpent >= 50000) {
//     discount = GOLD_DISCOUNT;
//   } else if (totalSpent >= 20000 && totalSpent < 50000) {
//     discount = SILVER_DISCOUNT;
//   } else if (totalSpent >= 5000 && totalSpent < 20000) {
//     discount = BRONZE_DISCOUNT;
//   } else {
//     discount = BASE_DISCOUNT;
//   }
//   // Change code above this line
//   return discount;
// }
// let result = getDiscount(0);
// console.log(result);

// task 25
// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line

//   message =
//     ordered > available
//       ? 'Not enough goods in stock!'
//       : 'The order is accepted, our manager will contact you';

//   // Change code above this line
//   return message;
// }
// let result = checkStorage(100, 130);
// console.log(result);

// task 26
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;
//   // Change code below this line
//   message =
//     password === ADMIN_PASSWORD
//       ? 'Access is allowed'
//       : 'Access denied, wrong password!';
//   // Change code above this line
//   return message;
// }
// let result = checkPassword('angul4r1sl1f3');
// console.log(result);

// task 27
// function getSubscriptionPrice(type) {
//   let price;
//   // Change code below this line

//   switch (
//     type // Change this line
//   ) {
//     case 'starter': // Change this line
//       price = 0; // Change this line
//       break;

//     case 'professional': // Change this line
//       price = 20; // Change this line
//       break;

//     case 'organization': // Change this line
//       price = 50; // Change this line
//       break;
//   }

//   // Change code above this line
//   return price;
// }
// let result = getSubscriptionPrice('organization');
// console.log(result);

// task 28
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;
//   // Change code below this line
//   switch (password) {
//     case null:
//       message = 'Canceled by user!';
//       break;
//     case ADMIN_PASSWORD:
//       message = 'Welcome!';
//       break;
//     default:
//       message = 'Access denied, wrong password!';
//   }
//   // Change code above this line
//   return message;
// }
// let result = checkPassword('jqueryismyjam');
// console.log(result);

// task 29
// function getShippingCost(country) {
//   let message;
//   // Change code below this line
//   switch (country) {
//     case 'China':
//       message = `Shipping to ${country} will cost 100 credits`;
//       break;
//     case 'Chile':
//       message = `Shipping to ${country} will cost 250 credits`;
//       break;
//     case 'Australia':
//       message = `Shipping to ${country} will cost 170 credits`;
//       break;
//     case 'Jamaica':
//       message = `Shipping to ${country} will cost 120 credits`;
//       break;
//     default:
//       message = 'Sorry, there is no delivery to your country';
//   }
//   // Change code above this line
//   return message;
// }
// let result = getShippingCost('Jamaica');
// console.log(result);

//task 30
// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`; // Change this line

//   return message;
// }
// let result = getNameLength('Billy');
// console.log(result);

// task 31
// const courseTopic = 'JavaScript essentials';
// // Change code below this line

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];

// console.log(courseTopic);
// console.log(courseTopicLength);
// console.log(firstElement);
// console.log(lastElement);

// task 32
// function getSubstring(string, length) {
//   const substring = string.slice(0, length); // Change this line

//   return substring;
// }

// let result = getSubstring('Hello world', 11);
// console.log(result);

// task 33
// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line
//   result =
//     message.length <= maxLength ? message : message.slice(0, maxLength) + '...';
//   /// Change code above this line
//   return result;
// }
// let result = formatMessage('Vestibulum facilisis purus nec', 20);
// console.log(result);

// task 34
// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase(); // Change this line

//   return normalizedInput;
// }
// let result = normalizeInput('Hello world');
// console.log(result);

// task 35
// function checkForName(fullName, name) {
//   const result = fullName.includes(name); // Change this line
//   return result;
// }
// let result = checkForName('Egor Kolbasov', 'egOr');
// console.log(result);

// task 36
function checkForSpam(message) {
  let result;
  // Change code below this line
  result = message.toLowerCase().includes('spam').includes('sale')
    ? true
    : false;

  // Change code above this line
  return result;
}
let result = checkForSpam('Latest technology news');
console.log(result);
