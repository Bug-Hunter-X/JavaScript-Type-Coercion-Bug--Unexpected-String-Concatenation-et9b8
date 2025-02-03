# JavaScript Type Coercion Bug
This example demonstrates a common JavaScript bug caused by type coercion.  The function `myFunction` intends to add two numbers, but due to type coercion, it concatenates them as strings when one of the inputs is a string.

## How to Reproduce
Clone this repository and run `bug.js`. The output will be unexpected string concatenation.

## Solution
The `bugSolution.js` file provides a solution that explicitly converts the inputs to numbers before performing addition. This prevents type coercion and ensures accurate addition. 

## Learning Point
JavaScript's loose typing can lead to unexpected results if types aren't carefully managed.  Always be mindful of type coercion and use explicit type checking or conversions when necessary to avoid this type of bug.