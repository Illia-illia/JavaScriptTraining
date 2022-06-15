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
// Напиши скрипт который переведёт значение totalMinutes (количество минут) в строку в формате часов и минут HH:MM.
// 70 покажет 01:10
// 450 покажет 07:30
// 1441 покажет 24: 01
