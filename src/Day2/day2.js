const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, './day2.txt');

const Save = (data)=>{
    return (data.every((num, i) => i === 0 || num > data[i - 1]) ||
           data.every((num, i) => i === 0 || num < data[i - 1])) &&
           data.every((int, i) => i === 0 || Math.abs(data[i - 1] - int) <= 3)
}

fs.readFile(filePath, 'utf8', (_, data) => {
    const levels = data.split('\n');
    // const filteredUpDownLevels = levels.filter(level => {
    //     const numArr = level.split(' ').map(Number);
    //
    //     return numArr.every((num, i) => i === 0 || num > numArr[i - 1]) || numArr.every((num, i) => i === 0 || num < numArr[i - 1])
    // });
    //
    // const correctReports = filteredUpDownLevels.filter( level => {
    //     const intArr = level.split(' ').map(Number)
    //     return intArr.every((int, i) => i === 0 || Math.abs(intArr[i - 1] - int) <= 3);
    // })

    // ------------step 1------------
    const safeReports = levels.filter(level => {
        const numArr = level.split(' ').map(Number)
        return Save(numArr)
    })
    // console.log(safeReports.length)
    // ------------step 2------------
    const dempenedReports = []
    for (let i = 0; i < levels.length; i++) {

        const fullReport = levels[i].split(' ').map(Number)

        for (let j = 0; j < fullReport.length; j++) {

            const fixedReports = fullReport.filter((_, index) => index !== j)

            if (Save(fixedReports)) {
                dempenedReports.push(fullReport)
                break
            }

        }
    }
    // console.log(dempenedReports.length)

})