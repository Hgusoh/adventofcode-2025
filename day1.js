const readline = require('readline');

function rotateAndCountZeroDuring(dial, direction, distance) {
    let countZero = 0;
    const steps = Math.abs(distance);
    const stepDirection = (direction === 'R') ? 1 : -1;

    for (let i = 0; i < steps; i++) {
        dial = (dial + stepDirection + 100) % 100;
        if (dial === 0) {
            countZero++;
        }
    }
    return { dial, countZero };
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let dial = 50;
let totalZeroDuringRotation = 0;

console.log("Rotations: (empty line to finish)");

const instructions = [];

rl.on('line', (input) => {
    if (input.trim() === '') {
        console.log(totalZeroDuringRotation);
        rl.close();
        return;
    }
    instructions.push(input.trim());

    for (const instruction of instructions) {
        const direction = instruction[0];
        const distance = parseInt(instruction.slice(1), 10);
        const result = rotateAndCountZeroDuring(dial, direction, distance);
        dial = result.dial;
        totalZeroDuringRotation += result.countZero;
    }
});
