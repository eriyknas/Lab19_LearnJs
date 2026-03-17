// for (let i = 0; i < 5; i++) {
//     console.log("i =", i);
// }


// console.log("Числа от 1 до 10:");
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }
// console.log("Чётные числа:");
// for (let i = 1; i <= 10; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }
// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//     sum += i;
// }
// console.log(sum);


// let count = 0;
// while (count < 3) {
//     console.log("Count:", count);
//     count++;
// }


// let number = 5;
// while (number >= 0) {
//     console.log(number);
//     number--;
// }


// let doValue = 0;
// do {
//     console.log("Value:", doValue);
//     doValue++;
// } while (doValue < 3);


// for (let i = 0; i < 10; i++) {
//     if (i === 5) {
//         break;
//     }
//     console.log(i);
// }


// for (let i = 1; i <= 10; i++) {
//     if (i === 5) continue;
//     if (i === 8) break;
//     console.log(i);
// }


// for (let i = 1; i <= 3; i++) {
//     for (let j = 1; j <= 3; j++) {
//         console.log(`i = ${i}, j = ${j}`);
//     }
// }


// for (let i = 1; i <= 4; i++) {
//     let stars = "";
//     if (i === 1 || i === 2) stars = "*";
//     else if (i === 3) stars = "***";
//     else if (i === 4) stars = "****";
//     console.log(stars);
// }


// function sum(a, b) {
//     return a + b;
// }
// console.log(sum(3, 5));


// function multiply(a, b) {
//     return a * b;
// }
// console.log("2 * 5 =", multiply(2, 5));


// function sayHello(name) {
//     console.log(`Hello, ${name}`);
// }
// sayHello("Тимофей");


// function printInfo(name, age) {
//     console.log(`Имя: ${name}, Возраст: ${age}`);
// }
// printInfo("Анастасия", 18);


// function greet(name = "Гость") {
//     console.log("Привет, " + name);
// }
// greet();
// greet("Анастасия");


// function calculateDiscount(price, discount = 10) {
//     return price - (price * discount / 100);
// }
// console.log("Цена со скидкой 20%:", calculateDiscount(1000, 20));
// console.log("Цена со скидкой:", calculateDiscount(1000));


// const add = function (a, b) {
//     return a + b;
// };
// console.log(add(2, 3));


// function makeCounter() {
//     let count = 0;
//     return function() {
//         count++;
//         return count;
//     };
// }
// const counter = makeCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());


// function add(a, b) { 
//     return a + b; 
// }
// const sumFunc2 = (a, b) => a + b;
// const double = x => x * 2;
// const sayGreeting = () => console.log("Hello");
// const square = x => x * x;
// const calculate = (a, b) => {
//     let result = a + b;
//     return result * 2;
// };


// let numbersArr = [1, 2, 3, 4, 5];
// console.log(numbersArr);
// console.log(numbersArr[0]);
// console.log(numbersArr[1]);


// let colors = ["красный", "зеленый", "синий"];
// console.log(colors[0]);
// console.log(colors[colors.length - 1]);
// colors[1] = "желтый";
// console.log(colors);


// console.log(numbersArr.length);
// numbersArr.push(10);
// console.log(numbersArr);
// numbersArr.pop();
// console.log(numbersArr);


// let students = ["Полина", "Никита", "Мария"];
// students.pop();
// console.log(students);


// let numbers2 = [10, 20, 30];
// for (let i = 0; i < numbers2.length; i++) {
//     console.log(numbers2[i]);
// }
// for (let value of numbers2) {
//     console.log(value);
// }


// let mixedArray = [1, "text", true, 3.14];
// console.log(mixedArray);
// console.log(numbersArr.includes(1));
// console.log(numbersArr.indexOf(2));
// console.log(fruits.includes("яблоко"));
// console.log(fruits.includes("манго"));


// let cities = ["Москва", "Санкт-Петербург", "Казань", "Новосибирск"];
// let searchCity = "Казань";
// let index = cities.indexOf(searchCity);
// if (index !== -1) {
//     console.log(`Город ${searchCity} на позиции ${index}`);
// } else {
//     console.log(`Город ${searchCity} не найден`);
// }


let user2 = {
    name: "Ivan",
    age: 20,
    isStudent: true,
    sayHello: function() {
        console.log(`Hello, my name is ${this.name}`);
    },
};
user2.sayHello();
console.log(user2);
console.log(user2.name);
console.log(user2.age);
console.log(user2["name"]);


let book = {
    title: "Война и мир",
    author: "Лев Толстой",
    year: 1869
};
console.log(book.title);
console.log(book.author);
console.log(book.year);
book.year = 2024;
console.log("Обновлённый год:", book.year);


user2.age = 30;
user2.name = "Кирилл";
delete user2.isStudent;
console.log(user2);


let car = {
    brand: "Toyota",
    year: 2020,
    getInfo: function() {
        console.log(`Автомобиль: ${this.brand}, год выпуска: ${this.year}`);
    }
};
car.getInfo();


for (let key in user2) {
    console.log(key + ": " + user2[key]);
}


let product = {
    name: "Ноутбук",
    price: 75000,
    inStock: true,
    category: "Электроника"
};
for (let prop in product) {
    console.log(prop + ": " + product[prop]);
}


let student = {
    name: "Григорий",
    skills: ["HTML", "CSS", "JS"],
    address: {
        city: "Волжский",
        street: "Пушкина",
    },
};
console.log(student.skills[0]);
console.log(student.address.city);