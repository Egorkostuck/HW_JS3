//task 1
console.log('task 1');

let i = 1,
    b = 35;

while(i < 51){
    console.log(i);
    i++;
}
console.log ('--------------');
while(b >= 8){
    console.log(b);
    b--;
}

//task 2
document.write('task 2' + '<br/>');

let a = 89;
while (a >= 11){
    document.write(a + '<br/>');
    a--;
}

//task 3
console.log('task 3');


let q = 100;
let sum = 0;

for(let f = 1; f <= q; f++) {
    // console.log(f);
    sum += f;
}
console.log ('Сумма чисел от 0 до 100: ' + sum);

//task 4
console.log('task 4');

let t = 5;
let y = 0; //сумма 

for (let e = 1; e <= t; e++) {
    y = 0;
    for (let j = 1; j <= e; j++) {
        y += j;
    }
    console.log ('sum' + e + " = " + y);
}

//task 5
console.log('task 5');

console.log('Через for');
for (let p = 8; p <= 56; p++) {
    if (p % 2 !== 0) continue;
    console.log(p);
}

console.log('Через while');

let u = 8;
while (u <= 56) {
    if (u % 2 == 0) console.log(u);
    u++;
}

//task 6
document.write('task 6');

for (let l = 2; l <= 10; l++) {
    document.write('...' + '<br/>');
    for (let v = 0; v <= 10; v++) {
        document.write(l + '*' + v + '=' + l * v + '<br/>');
    }
}

//task 7
console.log('task 7');

for (let n = 1000, num = 0; n >= 50; n = n / 2, num++) {
    console.log(n, 'Колличество итераций (num)= ' + num);
}

//task 8
let k = +prompt('Задача 8' + '\n' + 'ЗВведите число (в случае ввода 0 и пустой строки ввода закончится):'),
    sum2 = 0,
    mid = 0;
if ( k == +k && k != 0) {
    sum2 = +k;
    if ( k == +k) {
        for (let h = 1; (k = +k || k != 0); h++) {
            k = +prompt('Введите число (в случае ввода 0 и пустой строки ввода закончится):');
            sum2 += k,
            mid = sum2/h;
        }
    }
    if ( k == 0) {
        alert('Задача_8' + '\n' + 'Общая сумма: ' + sum2 + '\n' + 'среднее арифметическое: ' + mid);
    }
} else {
alert("ошибка ввода");
}



//task 9
console.log('task 9');

let itemsMin=0;
let itemsMax=0;
itemsMin = Math.min(4,98,4,6,1,32,4,65,4,3,5,7,89,7,10,1,36,8,57);
itemsMax = Math.max(4,98,4,6,1,32,4,65,4,3,5,7,89,7,10,1,36,8,57);
console.log('минимальное значение' + itemsMin);
console.log('максимальное значение' + itemsMax);

//task 10
console.log('task 10');

let number = +prompt('Задача 10'+'\n'+'Ведите число: '),
    output = [],
    sNumber = number.toString(),
    sIter = 0;
for (var iter = 0, len = sNumber.length; iter < len; iter += 1) {
    output.push(+sNumber.charAt(iter));
}
console.log(output);
console.log('Колличетсво цифр в числе: ' + sNumber.length);
for (var iter = 0, summa = 0; iter < output.length; summa += output[iter++]);
console.log('Сумма чисел: ' + summa);

output.reverse();
console.log('Обратный порядок: ' + output);