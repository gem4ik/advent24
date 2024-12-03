const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, './day3.txt');

fs.readFile(filePath, 'utf8', (_, data) => {
        const corruptedString = data.toString();
        const example = 'xmul(2,4)&mul[3,7]!^don\'t()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))'
        const regexToFindMul = /mul\((\d{1,3}),\s*(\d{1,3})\)/g
        // ------------------------task 1-------------------------------
        let total1 = 0
        let matchIter1
        while (matchIter1 = regexToFindMul.exec(corruptedString)) {
                total1 += matchIter1[1] * matchIter1[2]
        }
        // ------------------------task 2-------------------------------
        const fromDontToDo = /don't[\s\S]*?do\(\)/g
        const fromDontToEnd = /don't\(\)[\s\S]*$/
        let matchIter2
        let total2 = 0
        let stringToDo = corruptedString.replace(fromDontToDo, '')
        stringToDo = stringToDo.replace(fromDontToEnd, 'don\'t()');
        while (matchIter2 = regexToFindMul.exec(stringToDo)) {
                total2 += matchIter2[1] * matchIter2[2]
        }
        // console.log(total1)
        // console.log(total2)
    }
)