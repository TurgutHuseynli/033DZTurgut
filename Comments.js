function setLike(elem){
    elem.style.color = 'red'
}
function handleClick(e){
    if(e.target.tagName == 'I'){
        setLike(e.target)
    }
}
const screen = document.querySelector('.screen')
screen.addEventListener('click', handleClick)
fetch('https://jsonplaceholder.typicode.com/comments?_limit=10')
    .then(response => response.json())
    .then(result => {
        for(let i of result){
            screen.innerHTML += `        <div class="cont">
            <div class="comment-info">
                <p class="mail">${i["email"]}</p>
                <p>${i["body"]}</p>
            </div>
            <i class="fa-solid fa-heart"></i>
        </div>`
        }
    })
//Тесты 1
// 1)
//выведите в консоли значение name через точку
let stra1 = '{name: "Alex", age: 24}';
console.log((JSON.parse(stra1)).name)

// 2)
//выведите в консоли значение name через квадратные скопки
let stra2 = '{name: "Alex", age: 24}';
console.log((JSON.parse(stra1))['name'])

// 3)
//как называется обьект находячщийся в JSON?
//Литерал объекта JSON
//Тесты 2
// 1)
//в чем + стрелочных функций?
//Можно сокращать количество кода.

// 2)
//превратите функцию ниже в стрелочную
function newUser(name, age) {
    if (age > 18) {
        console.log(`${name} ты стар`);
    } else {
        console.log(`${name} ты не дорос`);
    }
}
let insult = (name, age) => {
    if(age > 18){
        console.log(`${name} ты стар`)
    }else{
        console.log(`${name} ты не дорос`)
    }
}

// 3)
//сделай скрипт ниже короче
let call = (a, b) => {return a + b};
let callb3 = (a, b) => a+b
//Тесты 3
// 1)
//как называется функция 
function showMessage(параметры) {
    //код
}
//Обычная функция.

// 2)
//как называется функция 
let showMessage = function(параметры) {
    //код
}
//Функциональное выражение.

// 3)
//как называется функция 
let showMessage = (параметры) => {
    //код
}
//Стрелочная функция.

// 4)
//создайте функцию которая выводит в консоли текст 'Запуск' и вызовите функцию
function fc4(){
    console.log('Запуск')
}
fc4()

// 5)
//создайте функцию которая в качестве пареметров принимает 'a' и 'b' и возвращает сумму полученных параметров
function fc5(a, b){
    return a+b
}

// 6)
//конвертируйте функцию ниже в функциональное вырожение
function sum(text='text', age=24) {
    return `${text} ${age}`;
}
let fc6 = function(text='text', age=24){
    return `${text} ${age}`
}

// 7)
//создайте функцию с помощбю конструктора которая в качестве параметра принимает 'a', 'b' и возвращает сумму полученных параметров 
let fc7 = new Function('a', 'b', 'return a+b')

// 8)
//можно ли вызвать функцию до ее обьявления?
//Да.

// 9)
//создайте самовызывающуюся функцию которая выводит в консоли слово 'Запуск'
(function fc9(){
    console.log('Запуск')
})()

// 10)
//что такое arguments в функциях?
function sum(text, age) {
    console.log(arguments);
}

sum('text', 24);
//Все аргументы функции.

// 11)
//выведите в консоли обьект с параметрами из функции
function sum(text, age) {
    console.log(arguments)
}

sum('text', 24);
console.log({
    text: 'text',
    age: 24
})

// 12)
//задайте параметру text значение 'some text' по умолчанию
function sum(text='some text', age) {
    //код
}

sum('text', 24);

// 13)
//вызовите функцию ниже
function sum(text, age, job) {
    //код
}
console.log(sum('abc', 24, null))

// 14)
//вызовите и передайте параметры второго обьекта в функцию внутри первого обьекта с помощью call()
const personc14 = {
    firstFunc: function() {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

const person1c14 = {
    firstName: 'Samuil',
    lastName: 'Farzaliyev'
}
personc14.firstFunc.call(person1c14)

// 15)
//вызовите и передайте параметры второго обьекта в функцию внутри первого обьекта с помощью apply()
const personc15 = {
    firstFunc: function() {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

const person1c15 = {
    firstName: 'Samuil',
    lastName: 'Farzaliyev'
}
personc15.firstFunc.apply(person1c15)

// 16)
//какой из методов может принять массив параметров
// call()
// apply()
//          apply()

// 17)
//с помощью какого метода можно вывести максимально большое число из списка
//1, 2, 3
//Math.max(1, 2, 3)

// 18)
//с помощью какого метода можно вывести максимально большое число из массива
//[1, 2, 4]
//Math.max.apply(null, [1, 2, 4])

// 19)
//с помощью какого метода можно вывести самое маленькое число из списка
//1, 2, 3
//Math.min(1, 2, 3)

// 20)
//с помощью какого метода можно вывести маленькое число из массива
//[1, 2, 4]
//Math.min.apply(null, [1, 2, 4])