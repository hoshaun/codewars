/*
Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
*/

const countBits = function(n) {
  const binary = convertBinary(n);
  return binary.split('0').join('').length;
};

const convertBinary = function(n) {
  let binary = '';
  
  while ((n / 2) >= 1) {
    binary = (n % 2) + binary;
    n = Math.floor(n / 2);
  }
  
  binary = (n % 2) + binary;
  
  return binary;
}
