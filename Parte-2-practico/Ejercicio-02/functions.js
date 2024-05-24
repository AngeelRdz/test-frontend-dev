function findNumber(numbers) {
    if (numbers.length === 0) {
        return null;
    }

    return numbers.sort((a, b) => b - a)[0];
}

const numbers = [1, 54, 24, 159, 430, 610, 30, 4, 56];
const result = findNumber(numbers);

console.log("El número más grande es:", result);
