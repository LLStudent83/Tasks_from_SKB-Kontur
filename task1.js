// Условие задачи:
// Функция должна принимать в качестве аргументов любое целое число и возвращать два массива чисел. 
// В первый массив должны попасть числа от 0 до заданного числа, которые делятся на 3, во второй -
// все числа от 0 до заданного числа, которые делятся на 5.

function getArrays(number) {
  const coef = number < 0 ? -1 : 1;
  let arr3 = [];
  let arr5 = [];
  for (let i = 3; i <= Math.abs(number); i += 1) {
    if (i % 3 === 0) {
       arr3.push(i * coef);
    }
    if (i % 5 === 0) {
      arr5.push(i * coef);
    }
  }
  console.log(arr3, arr5);
  return [arr3, arr5];
}

getArrays(100);
// каждое число делит 2 раза
