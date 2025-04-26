const linearSearch = (array, length, number) => {
    for (let i = 0; i < length; i++) {
        if (array[i] === number) {
        return i;
        }
    }
    i = -1;
    return i;
}
const array = [1, 2, 3, 4, 5];
const length = array.length;
const number = 3;
const result = linearSearch(array, length, number);
console.log(`The number ${number} is found at index ${result}.`); // The number 3 is found at index 2.