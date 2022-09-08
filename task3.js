// Условия задачи:
// допишите функцию проверки  анаграмм checkAnagram(anagramArray).

// Аргументом функции checkAnagram является массив строк, которые нужно проверить.

// Возвращаемое значение — true/false в зависимости от того можно ли все слова массива составить из одних и тех же букв.

function checkAnagram(anagramArray) {
  let anagramArrayIsAnagram = false;

  for (let i = 0; i <= anagramArray.length - 1; i += 1) {
    if (i === anagramArray.length - 1) { // отлавливаем исходный массив с одним элементом и последнюю итерацию во избежание ошибок
      console.log(String(anagramArrayIsAnagram));
      return anagramArrayIsAnagram;
    }

    let itemSort = anagramArray[i].split('').sort().join('');
    let itemNextSort = (anagramArray[i + 1] || '').split('').sort().join('');

    anagramArrayIsAnagram = itemSort === itemNextSort ? true : false;

    if (!anagramArrayIsAnagram) {
      console.log(String(anagramArrayIsAnagram));
      return anagramArrayIsAnagram;
    }
  }

  console.log(String(anagramArrayIsAnagram));
  return anagramArrayIsAnagram;
}

 checkAnagram(['кот', 'тОк', 'окт']);
//  checkAnagram(["олррор"]);
