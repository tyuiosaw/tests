//1

const concatenateStrings = (str1, str2) => {
  return (str1 + str2).replace(/\s+/g, '');
}

console.log(concatenateStrings('aa','bb'))

//2

const getStringLength = (str) => {
  return str.length;
}

console.log(getStringLength('Hello'))

//3

const getStringFromTemplate = (firstName, lastName) => {
  return `Hello, ${firstName} ${lastName}!`;
}

console.log(getStringFromTemplate('John', 'Doe'))


//4

const getChar = (str, index) => {
  return str[index - 1];
}

console.log(getChar('John Doe', 1))


//5

const removeFirstOccurrences = (str, substr) => {
  return str.replace(substr, '');
}

console.log(removeFirstOccurrences('ABABAB', 'BA'))


//6 

const getRectangleString = (width, height) => {
    if (width < 2 || height < 2) return '*'.repeat(width);
    const lineTop = '*'.repeat(width);
    const lineMiddle = '*' + ' '.repeat(width - 2) + '*';
    const lineBottom = '*'.repeat(width);
    let result = lineTop + '\n';
    for (let i = 0; i < height - 2; i++) {
        result += lineMiddle + '\n';
    }
    result += lineBottom;
    return result;
}

console.log(getRectangleString(6,4))
