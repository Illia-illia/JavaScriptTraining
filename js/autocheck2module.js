// task1
// function checkAge(age) {
//   if (age >= 18) {
//     // Change this line
//     return console.log('You are an adult');
//   }
//   return console.log('You are a minor');
// }
// checkAge(18);

// task2
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   // Change code below this line

//   if (password === ADMIN_PASSWORD) {
//     return console.log('Welcome!');
//   }
//   return console.log('Access denied, wrong password!');
//   // Change code above this line
// }
// checkPassword('jqueryismyjam');

// task3
// function checkStorage(available, ordered) {
//   // Change code below this line

//   if (ordered === 0) {
//     return 'Your order is empty!';
//   }
//   if (ordered > available) {
//     return 'Your order is too large, not enough goods in stock!';
//   }
//   return 'The order is accepted, our manager will contact you';

//   // Change code above this line
// }
// checkStorage(100, 50);

// task4
// const fruits = ['apple', 'plum', 'pear', 'orange'];
// console.table(fruits);

// task5
// Оголошена змінна firstElement
// Значення змінної firstElement - це рядок "apple"
// Оголошена змінна secondElement
// Значення змінної secondElement - це рядок "plum"
// Оголошена змінна lastElement
// Значення змінної lastElement - це рядок "orange"
// const fruits = ['apple', 'plum', 'pear', 'orange'];
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[fruits.length - 1];
// console.log(firstElement);
// console.log(secondElement);
// console.log(lastElement);

// task6
// const fruits = ['apple', 'plum', 'pear', 'orange'];
// // Виконай перевизначення значення елементів з індексами 1 і 3. Заміни "plum" на "peach", а "orange" на "banana".
// console.log(fruits);
// fruits.splice(1, 1, 'peach');
// fruits.splice(3, 1, 'banana');
// console.log(fruits);

// task7
// const fruits = ['apple', 'peach', 'pear', 'banana'];
// // Оголоси змінну fruitsArrayLength і присвой їй довжину масиву fruits, використовуючи властивість length.
// const fruitsArrayLength = fruits.length;
// console.log(fruitsArrayLength);

// task8
// const fruits = ['apple', 'peach', 'pear', 'banana'];
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];
// console.log(lastElementIndex);
// console.log(lastElement);

// task9
// function getExtremeElements(array) {
//   // Change code below this line
//   array.splice(1, array.length - 2);
//   // Change code above this line
//   return array;
// }
// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(['Earth', 'Mars', 'Venus']));
// console.log(getExtremeElements(['apple', 'peach', 'pear', 'banana']));

// task10
// function splitMessage(message, delimeter) {
//   let words;
//   // Change code below this line
//   words = message.split(delimeter);
//   // Change code above this line
//   return words;
// }
// console.log(splitMessage('Mango hurries to the train', ' '));
// console.log(splitMessage('Mango', ''));
// console.log(splitMessage('best_for_week', '_'));

// task11
// function calculateEngravingPrice(message, pricePerWord) {
//   // Change code below this line

//   return message.split(' ').length * pricePerWord;
//   // Change code above this line
// }
// console.log(calculateEngravingPrice('JavaScript is in my blood', 20));

// task12
// function makeStringFromArray(array, delimeter) {
//   let string;
//   // Change code below this line
//   string = array.join(delimeter);
//   // Change code above this line
//   return string;
// }

// console.log(
//   makeStringFromArray(['Mango', 'hurries', 'to', 'the', 'train'], ' ')
// );

// task13
// function slugify(title) {
//   // Change code below this line
//   return title.toLowerCase().split(' ').join('-');
//   // Change code above this line
// }

// console.log(slugify('Arrays for begginers'));

// task14
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];
// // Доповни код таким чином, щоб змінні містили часткові копії вихідного масиву fruits.

// // firstTwoEls - масив із перших двох елементів
// // nonExtremeEls - масив з усіх елементів, крім першого та останнього
// // lastThreeEls - масив із трьох останніх елементів
// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, fruits.length - 1);
// const lastThreeEls = fruits.slice(-3);
// console.log(fruits);
// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

// task15
// Доповни код таким чином, щоб у змінній allClients утворився масив усіх елементів масивів oldClients і newClients.

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients); // Change this line
// console.log(allClients);

// task16
// Напиши функцію makeArray(firstArray, secondArray, maxLength) для створення нового масиву з усіма елементами двох вихідних firstArray і secondArray.
//  Параметр maxLength містить максимально допустиму довжину нового масиву.
// Якщо кількість елементів нового масиву більша за maxLength, функція повинна повернути копію масиву довжиною maxLength елементів.
//  В іншому випадку функція повинна повернути новий масив повністю.
// function makeArray(firstArray, secondArray, maxLength) {
//   // Change code below this line
//   let allArray = firstArray.concat(secondArray).slice(0, maxLength);
//   return allArray;
//   // Change code above this line
// }
// console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3));
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2));
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4));
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0));

// task17
// const start = 3;
// const end = 7;

// for (let i = 3; i <= 7; i += 1) {
//   // Change this line
//   console.log(i);
// }

// task18
// let element = 0;
// function calculateTotal(number) {
//   // Change code below this line

//   for (let i = 0; i < number; i += 1) {
//     element += i + 1;
//   }
//   return element;
//   // Change code above this line
// }

// console.log(calculateTotal(24));
