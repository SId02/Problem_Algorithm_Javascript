//Solution 1
// function LongWord(str) {
//   let strSplit = str.split(' ');
//   let Word = '';
//   let longestWordLen = 0;
//   for(let i = 0; i < strSplit.length; i++){
//     if(strSplit[i].length > longestWordLen){
//       longestWordLen = strSplit[i].length;
// 	    Word = strSplit[i];
//     }
//   }
//   return Word;
// }
// console.log(LongWord("javascript is a scripting language"));

//Solution 2
function LongWord(str) {
  let Word = str.split(' ').sort(function(strone, strtwo) { return strtwo.length - strone.length; });
  return Word[0];
}console.log(LongWord("javascript is a scripting language"));
