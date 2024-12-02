const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, './day1.txt');

fs.readFile(filePath, 'utf8', (_, data) => {

    const arr = data.split('\n');

    const leftSide = []
    const rightSide = []
    const similarityScore = []
    for (let i = 0; i < arr.length; i++) {
        leftSide.push(arr[i].split(/\s+/)[0]);
        rightSide.push(arr[i].split(/\s+/)[1]);
    }
    for (let j = 0; j < leftSide.length; j++) {
        for (let k = 0; k < rightSide.length; k++) {
            if(leftSide[j] === rightSide[k]) {
                similarityScore.push(leftSide[j])
            }
        }
    }

    const integerMap= {}

    similarityScore.forEach(int => {
        integerMap[int] = (integerMap[int] || 0) + 1;
    })

    const allScores = Object.entries(integerMap).map(([integer, count]) => {
        return parseInt(integer) * count;
    });

    const total = allScores.reduce((acc, curr) => acc + curr, 0)

    console.log(total)
})