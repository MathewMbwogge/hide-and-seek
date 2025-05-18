console.log("Auto-graded Task 2");
console.log("");

// Define a function that takes a string as an argument, representing a hiding location.
function hide(location) {
    // Define a variable that stores the hiding location.
    const hideLocation = location;
    // Define a function that returns the hiding location.
    function seek() {
        return hideLocation;
    }
    // Return the seek function to access the hiding location.
    return seek;
}
// Call the hide function with the revealed hiding place and assigning the return to a variable startGame.
startGame = hide("Behind the tree");
const hiddenLocation = startGame();
console.log(hiddenLocation);
console.log("");

// To log the hideLocation from outside the hide and seek functions;
console.log(hidelocation);
/* When the hideLocation variable is accessed and logged out of the functions (hide & seek) it is declared, it throws an error and reads as undefined. This is because it has a function scope and cannot be accessed from outside the function*/
console.log("End of Code");
console.log();

/* References
1. HyperionDev (2024) Functions, Scope and Closures., GitHub. Available at: https://github.com/hyperiondev-bootcamps/MM24110016008/blob/main/T08 – Functions%2C Scope and Closures/11-037 Functions%2C Scope and Closures.pdf (Accessed: 5 January 2025).
2. MDN (no date a) Arrow function expressions - JavaScript., MDN. Available at: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions (Accessed: 5 January 2025).
3. MDN (no date b) Functions - JavaScript., MDN. Available at: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions (Accessed: 5 January 2025).*/