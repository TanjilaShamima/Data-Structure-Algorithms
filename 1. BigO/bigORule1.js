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

/*
    O(1) - Constant time
    O(n) - Linear time
    O(n^2) - Quadratic time
    O(log n) - Logarithmic time
    O(n log n) - Linearithmic time
    what is good code?
    1. Readable
    2. Scalable
    3. Maintainable
    4. Efficient
    5. Reusable
    6. Testable
    7. Extensible
    8. Modular
    9. Secure
    10. Robust
    11. Portable
    12. Flexible
    13. Simple
    14. Elegant
    15. DRY (Don't Repeat Yourself)
    16. KISS (Keep It Simple Stupid)
    17. YAGNI (You Aren't Gonna Need It)
    18. SOLID (Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion)
    19. GRASP (General Responsibility Assignment Software Patterns)
    20. TDD (Test Driven Development)
    21. BDD (Behavior Driven Development)
    22. FDD (Feature Driven Development)
    23. DDD (Domain Driven Development)
    24. MVC (Model View Controller)
    25. MVP (Model View Presenter)
    26. MVVM (Model View ViewModel)
    27. MVW (Model View Whatever)
    28. MVA (Model View Architecture)
    29. MVI (Model View Intent)
    30. MVR (Model View Router)
    31. MVS (Model View State)
*/

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