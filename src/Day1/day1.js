const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, './day1.txt');

fs.readFile(filePath, 'utf8', (_, data) => {

    const arr = data.split('\n');

    const leftSide = []
    const rightSide = []
    let diff=[]

    for (let i = 0; i < arr.length; i++) {
        leftSide.push(arr[i].split(/\s+/)[0]);
        rightSide.push(arr[i].split(/\s+/)[1]);
    }

    leftSide.sort((a, b) => a - b).reverse();
    rightSide.sort((a, b) => a - b).reverse();

    for (let j = 0; j < arr.length; j++) {
        diff.push(Math.abs(leftSide[j] - rightSide[j]));
    }

    const sum = diff.reduce((acc, curr) => acc + curr ,0)

    console.log('sum', sum)

})