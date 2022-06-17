// // Example 1 - Базовые математические операторы
// // Выведи на экран общее количество яблок и винограда. Разницу яблок и винограда.
// console.log('Example 1');
// const apples = 47;
// const grapes = 135;
// const total = apples + grapes;
// console.log('tatol fruit', total);
// const diff = grapes - apples;
// console.log('different fruit', diff);

// // Example 2 - Комбинированные операторы
// // Замени выражение переопределения комбинированным оператором +=.
// console.log('Example 2');
// let students = 100;
// students += 50;
// console.log('students', students);

// // Example 3 - Приоритет операторов
// // Разбери приоритет операторов в инструкции присвоения значения переменной result.
// console.log('Example 3');
// const result = 10 + 10 - 2 * 5;
// console.log('result', result);

// // Example 4 - Класс Math
// // Напиши скрипт, который выводит в консоль округленные вверх / вниз и т.д.значения переменной value.
// // Используй методы Math.floor(), Math.ceil() и Math.round().
// // Проверь что будет в консоли при значениях 27.3 и 27.9.
// console.log('Example 4');
// const value = 27.3;

// console.log('value-floor', Math.floor(value));
// console.log('value-ceil', Math.ceil(value));
// console.log('value-round', Math.round(value));

// // Example 5 - Шаблонные строки
// // Составь фразу с помощью шаблонных строк A has B bots in stock, где A, B - переменные вставленные в строку.
// console.log('Example 5');
// const companyName = 'Cyberdyne Systems';
// const repairBots = 150;
// const defenceBots = 50;
// const message = `${companyName} has ${repairBots + defenceBots} bots in stock`;
// console.log('messasge', message); // "Cyberdyne Systems has 200 bots in stock"

// // Example 6 - Методы строк и чейнинг
// // Напиши скрипт который рассчитывает индекс массы тела человека. Для этого необходимо разделить вес в киллограммах на квадрат высоты человека
// //  в метрах.
// // Вес и высота хранятся в переменных weight и height, но не как числа, а в виде строк (специально для задачи). Нецелые числа могут быть
// // заданы в виде 24.7 или 24, 7,
// // то есть в качестве разделителя дробной части может быть запятая.
// // Индекс массиы тела необходимо округлить до одной цифры после запятой;
// console.log('Example 6');
// let weight = '88,3';
// let height = '1,75';
// weight = weight.replace(',', '.');
// height = height.replace(',', '.');
// weight = Number.parseFloat(weight);
// height = Number.parseFloat(height);
// let bmi = Number((weight / Math.pow(height, 2)).toFixed(1));
// console.log(bmi); // 28.8

// Example 7 - Операторы сравнения и приведение типов
// Каким будет результат выражений?
// console.log('Example 7');
// console.log(5 > 4);

// console.log(10 >= '7');

// console.log('2' > '12');

// console.log('2' < '12');

// console.log('4' == 4);

// console.log('6' === 6);

// console.log('false' === false);

// console.log(1 == true);

// console.log(1 === true);

// console.log('0' == false);

// console.log('0' === false);

// console.log('Papaya' < 'papaya');

// console.log('Papaya' === 'papaya');

// console.log(undefined == null);

// console.log(undefined === null);

// Example 8 - Логические операторы
// Каким будет результат выражений?

// console.log(true && 3); //true

// console.log(false && 3); //false

// console.log(true && 4 && 'kiwi'); //'kiwi'

// console.log(true && 0 && 'kiwi'); //0

// console.log(true || 3);

// console.log(true || 3 || 4);

// console.log(true || false || 7);

// console.log(null || 2 || undefined);

// console.log((1 && null && 2) > 0);

// console.log(null || (2 && 3) || 4);

// Example 9 - Значение по умолчанию и оператор нулевого слияния
// Отрефактори код так, чтобы в переменную value присваивалось значение переменной incomingValue, если оно не равно undefined или null.
//  В противном случае должно присваиваться значение defaultValue.
//  Проверь работу скрипта для слепдующих значений переменной incomingValue: null, undefined, 0, false.
//  Используй оператор ?? (nullish coalescing operator).

// const incomingValue = 5;
// const defaultValue = 10;
// const value = incomingValue || defaultValue;
// const value1 = incomingValue ?? defaultValue;

// console.log(value);
// console.log(value1);

// Example 10 - Опертор % и методы строк
// Напиши скрипт который переведёт значение totalMinutes (количество минут)
//  в строку в формате часов и минут HH: MM.
// 70 покажет 01:10
// 450 покажет 07:30
// 1441 покажет 24: 01
// const totalMinutes = 450;
// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
// const doubleDigiHours = String(hours).padStart(2, 0);
// const doubleDigiminutes = String(minutes).padStart(2, 0);

// console.log(`${doubleDigiHours}:${doubleDigiminutes}`);

// lesson2

// Example 1 - Ввод пользователя и ветвления
// Используя конструкцию if..else и prompt, напиши код,
// который будет спрашивать: "Какое официальное название JavaScript?".
// Если пользователь вводит ECMAScript, то показывай alert со строкой "Верно!",
// в противном случае - "Не знаете? ECMAScript!"
// const ask = prompt('Какое официальное название JavaScript?');
// const answer = 'ECMAScript';
// if (ask === null || ask.trim() === '') {
//   alert('пользователь ничего не ввел');
// } else if (ask.toLowerCase() === answer.toLowerCase()) {
//   alert('Верно!');
// } else {
//   alert('Не знаете? ECMAScript!');
// }

// Example 2 - Отображение времени (if...else)
// Напиши скрипт для отображения часов и минут в
//  консоли браузера в виде строки формата "14 ч. 26 мин.".
//  Если значение переменной minutes равно 0, то выводи строку "14 ч.",
// без минут.
// const hours = 14;
// const minutes = 40;
// let timestring;
// if (minutes > 0) {
//   timestring = `${hours} ч. ${minutes} мин.`;
// } else {
//   timestring = `${hours} ч.`;
// }
// console.log(timestring);

// Example 3 - Ветвеления
// Напиши скрипт, который выводит в консоль строку "Это положительное число",
//     если в prompt пользователь ввел число больше нуля.Если был введен ноль,
//     выводи в консоль строку "Это ноль".Если передали отрицательное число,
//         в консоли должна быть строка "Это отрицательное число".

// const userInput = prompt('Введите число');

// if (userInput === null || userInput.trim() === '') {
//   console.log('No data');
// } else if (userInput > 0) {
//   console.log('Это положительное число');
// } else if (userInput < 0) {
//   console.log('Это отрицательное число');
// } else {
//   console.log('Это ноль');
// }

// Example 4 - Вложенные ветвления
// Напиши скрипт, который сравнивает числа в переменных a и b.
//  Если оба значения больше 100, то выведи в консоль максимальное из них.
//  В противном случае в консоли должна быть сумма значения b и числа 512.

// const a = 10;
// const b = 10;
// if (a > 100 && b > 100) {
//   const result = a > b ? a : b;
//   console.log(result);
// } else console.log(b + 512);

// Example 5 - Форматирование ссылки (endsWith)
// Напиши скрипт который проверяет заканчивается ли значение переменной link
// символом /.Если нет, добавь в конец значения link этот символ.
// Используй конструкцию if...else.

// let link = 'https://my-site.com/about';
// // Пиши код ниже этой строки
// if (link.endsWith('/') === false) {
//   link += '/';
// }
// // Пиши код выше этой строки
// console.log(link);

// Example 6 - Форматирование ссылки (includes и логическое «И»)
// Напиши скрипт который проверяет заканчивается ли значение переменной link
// символом /.
// Если нет, добавь в конец значения link этот символ, но только в том случае,
// если в link есть подстрока "my-site".Используй конструкцию if...else.

// let link = 'https://somesite.com/about';
// // Пиши код ниже этой строки
// if (link.includes('my-site') && !link.endsWith('/')) {
//   link += '/';
// }
// // Пиши код выше этой строки
// console.log(link);

// Example 7 - Форматирование ссылки (тернарный оператор)
// Выполни рефакторинг кода задачи номер 4 используя тернарный оператор.

// let link = 'https://somesite.com/about';

// link += link.includes('my-site') && !link.endsWith('/') ? '/' : '';
// console.log(link);

// Example 8 - if...else и логические операторы
// Напиши скрипт который будет выводить в консоль браузера строку в зависимости
//  от значения переменной hours.
// Если значение переменной hours:
// меньше 17, выводи строку "Pending"
// больше либо равно 17 и меньше либо равно 24, выводи строку "Expires"
// больше 24 , выводи строку "Overdue"
// const hours = 25;

// if (hours < 17) {
//   console.log('Pending');
// } else if (hours >= 17 && hours <= 24) {
//   console.log('Expires');
// } else {
//   console.log('Overdue');
// }

// Example 9 - Дедлайн сдачи проекта (if...else)
// Напиши скрипт для отображения времени дедлайна сдачи проекта.
//  Используй конструкцию if...else.

// Eсли до дедлайна 0 дней - выведи строку "Сегодня"
// Eсли до дедлайна 1 день - выведи строку "Завтра"
// Eсли до дедлайна 2 дня - выведи строку "Послезавтра"
// Eсли до дедлайна 3+ дней - выведи строку "Дата в будущем"
// const daysUntilDeadline = 4;
// // Пиши код ниже этой строки
// if (daysUntilDeadline === 0) {
//   console.log('Сегодня');
// } else if (daysUntilDeadline === 1) {
//   console.log('Завтра');
// } else if (daysUntilDeadline === 2) {
//   console.log('Послезавтра');
// } else {
//   console.log('Дата в будущем');
// }

// Example 10 - Дедлайн сдачи проекта (switch)
// Выполни рефакторинг кода задачи номер 5 используя switch.

// const daysUntilDeadline = 2;

// switch (daysUntilDeadline) {
//   case 0:
//     console.log('Сегодня');
//     break;
//   case 1:
//     console.log('Завтра');
//     break;
//   case 2:
//     console.log('Послезавтра');
//     break;
//   default:
//     console.log('Дата в будущем');
// }

// Example 11 - Цикл for
// Напиши цикл for который выводит в консоль браузера числа по возрастанию
// от min до max, но только если число кратное 5.

// const max = 100;
// const min = 20;

// for (let i = min; i <= max; i += 1) {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
// }

// Example 12 - Ввод пользователя и ветвления
// Напиши скрипт, который будет спрашивать логин с помощью
//  prompt и логировать результат в консоль браузера.

// Если посетитель вводит "Админ", то prompt запрашивает пароль
// Если ничего не введено или нажата клавиша Esc - вывести строку "Отменено"
// В противном случае вывести строку "Я вас не знаю"
// Пароль проверять так:

// Если введён пароль "Я админ", то вывести строку "Здравствуйте!"
// Иначе выводить строку "Неверный пароль"
// const login = prompt('Write your login');
// const adminLogin = 'Admin';
// const adminPassword = 'iAdmin';
// if (login === null || login.trim() === '') {
//   console.log('Отменено');
// } else if (login === adminLogin) {
//   let password = prompt('Write your password');
//   if (password === adminPassword) {
//     console.log('Здравствуйте!');
//   } else {
//     console.log('Неверный пароль');
//   }
// } else console.log('Я вас не знаю');
