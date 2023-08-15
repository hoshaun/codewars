/*
Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.
*/

function incrementString (strng) {
  if (isNaN(parseInt(strng.at(-1)))) {
    return `${strng}1`;
  }
  
  for (let i = strng.length - 1; i >= 0; i--) {
    if (isNaN(parseInt(strng[i]))) {
      const str = strng.slice(0, i + 1);
      const numLength = strng.slice(i + 1, strng.length).length;
      const num = parseInt(strng.slice(i + 1)) + 1;
      const padLength = numLength - `${num}`.length;
      const padding = padLength > 0 ? '0'.repeat(padLength) : '';
      return `${str}${padding}${num}`;
    } else if (i === 0 && !isNaN(parseInt(strng[i]))) {
      const num = parseInt(strng) + 1;
      const padLength = strng.length - `${num}`.length;
      const padding = padLength > 0 ? '0'.repeat(padLength) : '';
      return `${padding}${num}`;
    }
  }
}
