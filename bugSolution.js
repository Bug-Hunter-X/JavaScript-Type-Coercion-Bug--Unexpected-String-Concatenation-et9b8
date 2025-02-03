function myFunction(a, b) {
  // Explicit type conversion to numbers
  a = Number(a);
  b = Number(b);

  // Check for NaN (Not a Number) values
  if (isNaN(a) || isNaN(b)) {
    return 0; // Or handle the error appropriately 
  }
  return a + b;
}

console.log(myFunction(5, '5')); // Output: 10
console.log(myFunction('hello', 5)); //Output: 0