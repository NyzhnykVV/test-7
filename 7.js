const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

function factorial(x) {
    if (x < 0) return;
    if (x === 0 || x === 1) return 1;
    return x * factorial(x - 1);
}

function fibonacci(y) {
    if (y < 0) return;
    if (y === 0) return 0;
    if (y === 1) return 1;
    return fibonacci(y - 1) + fibonacci(y - 2);
}

function calculate() {
    readline.question(`\x1b[32mВведіть число для вираховування факторіалу та числа Фібоначчі:\x1b[0m `, (input) => {
        const num = parseInt(input);

        if (isNaN(num) || num < 0) {
            console.log("Будь ласка, введіть дійсне не від'ємне число.");
        } else {
            const facResult = factorial(num);
            const fiboResult = fibonacci(num);

            console.log(`Факторіал ${num} = ${facResult}`);
            console.log(`Число Фібоначчі (${num}-те) = ${fiboResult}`);
        }

        readline.close();
    });
}

calculate();
