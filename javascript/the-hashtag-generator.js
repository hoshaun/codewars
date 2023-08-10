/*
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false
*/

function generateHashtag (str) {
  const trimmed = str.trim();
  
  if (trimmed.length <= 0) {
    return false;
  }
  
  const arr = trimmed.toLowerCase().split(' ');
  const filtered = arr.filter((str) => str.length > 0);
  const formatted = filtered.map((str) => str[0].toUpperCase() + str.slice(1));
  const hashtag = `${formatted.join('')}`;
  
  if (hashtag.length >= 140) {
    return false;
  }
  
  return `#${hashtag}`;
}
