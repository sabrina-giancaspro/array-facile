let arrayNumbers = [1,3,5,2,10,6,4,9]
console.log(arrayNumbers)
function findEvenNumbers() {
    let evenNumbers = [];
    for (let i = 0; i < arrayNumbers.length; i++) {
        if (arrayNumbers[i] % 2 === 0) {
            evenNumbers.push(arrayNumbers[i]);
        }
    }
    return evenNumbers;
}

console.log(findEvenNumbers());