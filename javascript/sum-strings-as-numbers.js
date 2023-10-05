/*
Given the string representations of two integers, return the string representation of the sum of those integers.

For example:

sumStrings('1','2') // => '3'
A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

I have removed the use of BigInteger and BigDecimal in java

Python: your solution need to work with huge numbers (about a milion digits), converting to int will not work.
*/

function sumStrings(a,b) { 
  const trimmedA = a.replace(/^0+/, '');
  const trimmedB = b.replace(/^0+/, '');
  let x = trimmedA.split("").reverse().join("");
  let y = trimmedB.split("").reverse().join("");
  x = x.length > 0 ? x : '0';
  y = y.length > 0 ? y : '0';
  
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
  
  if (trimmedA.length > sum.length) {
    sum = trimmedA.slice(0, trimmedA.length - sum.length + 1) + sum.slice(1);
  }
  
  
  if (trimmedB.length > sum.length) {
    sum = trimmedB.slice(0, trimmedB.length - sum.length + 1) + sum.slice(1);
  }
  
  return sum;
}
