const readline = require('readline');

function isRepeatedPattern(s) {
    const length = s.length;
    for (let l = 1; l <= Math.floor(length / 2); l++) {
        if (length % l === 0) {
            const pattern = s.slice(0, l);
            if (pattern.repeat(length / l) === s) {
                return true;
            }
        }
    }
    return false;
}

function getInvalidIds(start, end) {
    const invalidIds = [];
    for (let i = start; i <= end; i++) {
        const strI = i.toString();
        if (strI.startsWith('0')) continue;
        if (isRepeatedPattern(strI)) {
            invalidIds.push(i);
        }
    }
    return invalidIds;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("ID ranges: ", (entries) => {
    const idsRanges = entries.replace(/\n/g, '').split(',');

    let res = 0;

    for (const idRange of idsRanges) {
        const [startStr, endStr] = idRange.split('-');
        const startId = parseInt(startStr, 10);
        const endId = parseInt(endStr, 10);
        const invalidIds = getInvalidIds(startId, endId);
        for (const invalidId of invalidIds) {
            res += invalidId;
        }
    }

    console.log("Result:", res);
    rl.close();
});
