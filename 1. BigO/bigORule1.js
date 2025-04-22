// Big O rules
// 1. O(1) + O(n) = O(n)
// 2. O(n) + O(n) = O(n)
// 3. O(n) + O(1) = O(n)
// 4. O(n^2) + O(n) = O(n^2)
// 5. O(n^2) + O(n^2) = O(n^2)
// 6. O(n^2) + O(1) = O(n^2)
// 7. O(n^2) + O(log n) = O(n^2)
// 8. O(n^2) + O(n log n) = O(n^2)
// 9. O(n log n) + O(log n) = O(n log n)
// 10. O(log n) + O(1) = O(log n)
// 11. O(log n) + O(n) = O(n)


// Rule 1 : Worst Case
// Rule 2: Remove Constants
// Rule 3: Different terms for input
// Rule 4: Drop Non Dominant Terms

const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'squirt', 'crush', 'nemo'];
const large = new Array(100000).fill('nemo');

const findNemo = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('Found Nemo!');
    }
  }
}

findNemo(nemo); // O(1)
findNemo(everyone); // O(n)