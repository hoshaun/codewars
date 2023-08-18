/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/

function pigIt(str){
  const arr = str.split(' ');
  
  for (const i in arr) {
    const word = arr[i];
    arr[i] = isAlpha(word) ? word.slice(1) + word[0] + 'ay' : word;
  }
  
  return arr.join(' ');
}

function isAlpha(str) {
  return /^[a-zA-Z]+$/.test(str);
}
