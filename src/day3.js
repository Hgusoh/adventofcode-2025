const readline = require('readline');

function findMaximumJoltage(numberOfDigits, battery){
    let maximumJoltage = '';
    let indexMin = 0;
    let indexMax = battery.length - numberOfDigits + 1 

    while(maximumJoltage.length < numberOfDigits){
        let number = 0;
        for(i = indexMin; i < indexMax; i++){
            if(battery[i] > number){
                number = battery[i];
                indexMin = i + 1;
            }
        }
        maximumJoltage += number;
        indexMax += 1;
    }
    
    return maximumJoltage;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Batteries: (empty line to finish)");

const batteries = [];
let totalJoltage = 0;

rl.on('line', (input) => {
    if (input.trim() === '') {
        console.log(totalJoltage);
        rl.close();
        return;
    }

    batteries.push(input.trim());

    for (const battery of batteries) {
        let maximumJoltage = findMaximumJoltage(12, battery);
        totalJoltage += Number(maximumJoltage);
    }

    batteries.length = 0
});