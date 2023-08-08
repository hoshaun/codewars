/*
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
*/

function solution(str){
   if (str.length < 1) {
     return [];
   } else if (str.length === 1) {
     return [`${str}_`];
   } else {
     return [str.slice(0,2)].concat(solution(str.slice(2)));
   }
}
