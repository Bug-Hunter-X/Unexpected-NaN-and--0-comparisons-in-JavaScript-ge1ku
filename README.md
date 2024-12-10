# Unexpected NaN and -0 Comparisons in JavaScript

This repository demonstrates an uncommon bug in JavaScript related to the comparison of NaN (Not a Number) and -0 (negative zero) using both loose (==) and strict (===) equality operators.

## Bug Description

JavaScript's loose comparison (==) and strict comparison (===) have inconsistencies when dealing with NaN and -0. Specifically:

* `NaN` is never equal to itself (`NaN == NaN` and `NaN === NaN` both evaluate to `false`).
* `-0` and `0` are considered equal (`-0 == 0` and `-0 === 0` both evaluate to `true`).

This behavior can lead to unexpected results if not carefully considered when writing JavaScript code.

## Files

* `bug.js`: Demonstrates the bug with example code.
* `bugSolution.js`: Provides a solution and explanation on how to address the comparison issues.

## How to Run

1. Clone the repository.
2. Open `bug.js` and `bugSolution.js`.
3. Run the scripts using Node.js or a similar JavaScript environment (e.g., `node bug.js` and `node bugSolution.js`).
