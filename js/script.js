// типы данных

// 1 Number
// 2 String
// 3 Boolean
// 4 null
// 5 undefined
// 6 Symbol
// 7 BigInt
// 8 object

//  переменные

//  var
//  let
//  const

// тернарник

// когда больше ,чем одно условие

// 5 < 6 ? console.log(true) : 5 > 6 ? console.log(true) : console.log(false);

//  циклы

// let i = 0;
// do {
//     console.log(i);
// }while(i < 11)
//  запуск бесконечного определения 0


// let i = 0;
// do {
//     console.log(i);
//     i += 1;
// } while (i < 11);

// while (i > 11) {
//     i += 1;
//     console.log(i);
// }

// let total = 0;

// while (true) {
//     const num = promt('введите число');
//     total += Number(num);
//     if (num === null) {
//         console.log(total);
//         break;
//     }
// }

//  функции

// function fnDeclaration() {
//     return "function declaration";
// }

// const fnExpression = function () {
//     console.log("function exprassion");
// }
// const res = fnExpression();
// console.log(res);




// написать функцию, которая возвращает Х в п-ой степени (т.е умножает сама на себя)

// const pow = function (x, n) {
    
//     return Math.pow(x,n)
// }

// console.log(pow(2, 4));

//  написать функцию, которая суммирует соседние числа и пушит их в новый массив
// const someArr = [22, 11, 34, 5, 12, 13, 14, 15]

// const addNumbers = function (numbers) {
//     const newNumbers = [];
//     for (let i = 0; i < numbers.length; i += 2) {
    
//         newNumbers.push(numbers[i] + numbers[i + 1]);
//     }
//     return newNumbers;
// }
// console.log(addNumbers([22, 11, 34, 5, 12, 13, 14, 15]));


//  напишате функцию , которая вычисляет квадратные корни корней  для всех чисел ,
// у которых квадратный корень будет целым числом

// const arr = [4, 3, 5, 16, 16, 33, 4, 9];

// const addNewArr = function (array) {
//     const newArr = [];

//     for (let elem of array) {
//         if (elem % Math.sqrt(elem) === 0) {
//             newArr.push(Math.sqrt(elem));
//         }
//     }
//     return newArr;
// }
// console.log(addNewArr(arr));


// даны 2 массива const nums = [1, 'b', 3, 'd', 5];
// const strs = ['a', 2, 'c', 4, 'e'];
//  напишите функцию, которая будет принимать 2 массива в качестве аргументов
// и вернет новый массив ['1a', '2b', '3c', '4d', '5e']

// const nums = [1, 'b', 3, 'd', 5];
// const strs = ['a', 2, 'c', 4, 'e'];

// const array = (array1, array2) => {
//     const newArray = [];

//     for (let i = 0; i < array1.length; i += 1){
//         typeof array1[i] === "number"
//             ? newArray.push(array1[i] + array2[i])
//             : newArray.push(array2[i] + array1[i]);
//     }
//     return newArray
// }
// console.log(array(nums, strs));

// TASK какой-то
// привести массив к одному уровню

// const tryThis = [
//   [23, 11, ["hello", "world", "Vasya"]],
//   "some str",
//   [777, "word", ["Привет", ["как сюда добраться"]]],
// ];

// const newTryThis = tryThis.flat(Infinity);
// console.log(newTryThis);

// const tryThis = [
//   [23, 11, ["hello", "world", "Vasya"]],
//   "some str",
//   [777, "word", ["Привет", ["как сюда добраться"]]],
// ];

// function getFlat(arr) {
//     return arr.reduce(
//         (accum, el) =>
//         Array.isArray(el) ? accum.concat(getFlat(el)) : accum.concat(el),
//         []
//     );
        
//     function consoleElement(element) {
//         console.log(element);
//     }
// }
// console.log(getFlat(tryThis));
