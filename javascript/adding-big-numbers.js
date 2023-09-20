/*
We need to sum big numbers and we require your help.

Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

Example
add("123", "321"); -> "444"
add("11", "99");   -> "110"
Notes
The input numbers are big.
The input is a string of only digits
The numbers are positives
*/

function add(a, b) {
  let x = a.split("").reverse().join("");
  let y = b.split("").reverse().join("");
  let minLength = Math.min(x.length, y.length);
  let shortest = x.length > y.length ? y : x;
  let longest = x.length > y.length ? x : y;
  let sum = '';
  let overflow = 0;
  
  for (let i = 0; i < minLength; i++) {
    const bitSum = shortest[i] ? Number(shortest[i]) + Number(longest[i]) + overflow : Number(longest[i]) + overflow;
    const bit = bitSum ? bitSum.toString() : shortest[i];
    
    overflow = bitSum > 9 ? 1 : 0;
    
    if (i === minLength - 1 && bitSum > 9) {
      overflow = 0;
      shortest += '1';
      minLength++;
    }
    
    sum = bit[bit.length - 1] + sum;
    
    if (i === minLength - 1 && longest.length > shortest.length) {
      sum = longest[longest.length - 1] + sum;
    }
  }
  
  return sum;
}
