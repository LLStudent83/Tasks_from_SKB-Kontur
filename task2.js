// Условия задачи:
// допишите функцию шифрования методом подстановки encode(text, openAlph, secureAlph).

// Аргументы функции encode:
// text - текст, который нужно зашифровать
// openAlph - открытый алфавит
// secureAlph - шифрованный алфавит
// Возвращаемое значение — строка (зашифрованный текст).

// Для шифрования необходимо каждый символ открытого алфавита заменять соответствующим символом закрытого алфавита. Если в тексте встречаются небуквенные символы, то их нужно оставлять без изменения.

// Например:
// encode(
//  "message",
//  "abcdefghijklmnopqrstuvwxyz",
//  "rsyxuqldnmzvpofceiwktjgabh",
// ); // должен вернуть "puwwrlu"

function encode(text, openAlph, secureAlph) {
  let encryptedArr = text.split('');

  const decryptedArr = encryptedArr.map((i) => {
    const iLow = i.toLowerCase();
    let serialNumberInOpenAlph = openAlph.indexOf(iLow); // получаем порядковый номер символа открытого алфавита или -1
    if (serialNumberInOpenAlph === -1) {
      return iLow;
    }
    let characterInSecureAlph = secureAlph.charAt(serialNumberInOpenAlph); // получаем символ из закрытого алфавита для замены
    if (i.toLowerCase() !== i) {
      // проверяем регистр исходного символа декодируемой строки и при необходимости переводми симол шифра в верхний регистр
      characterInSecureAlph = characterInSecureAlph.toUpperCase();
    }
    return characterInSecureAlph;
  });

  const decryptedString = decryptedArr.join('');
  // return decryptedString;
  console.log(decryptedString);
}

encode('message', 'abcdefghijklmnopqrstuvwxyz', 'rsyxuqldnmzvpofceiwktjgabh');
// // должен вернуть "puwwrlu"
