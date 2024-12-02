const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, './day2.txt');

fs.readFile(filePath, 'utf8', (_, data) => {
    const levels = data.split('\n');
    const filteredUpDownLevels = levels.filter(level => {
        const numArr = level.split(' ').map(Number);

        return numArr.every((num, i) => i === 0 || num > numArr[i - 1]) || numArr.every((num, i) => i === 0 || num < numArr[i - 1])
    });

    const correctReports = filteredUpDownLevels.filter( level => {
        const intArr = level.split(' ').map(Number)
        return intArr.every((int, i) => i === 0 || Math.abs(intArr[i - 1] - int) < 3);
    })


    // console.log(filteredUpDownLevels)
    console.log(correctReports)
})