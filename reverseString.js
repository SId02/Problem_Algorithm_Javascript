
// String Reverse Solution 1

// function reverseString(str) {
//   return str.split('').reverse().join('');
// }
// console.log(reverseString("hello"));

// String Reverse Solution 2

// function reverseString(str) {
//   let rString = '';
//   for(let i = str.length - 1; i >= 0; i--) {
//     rString = rString + str[i];
//   }
//   return rString;
//   }
//   console.log(reverseString("javascript"));

// String Reverse Solution 2
  function reverseString(str) {
    let rString = "";
    for(char of str) {
      rString = char + rString;
    }
    return rString;
  }
  console.log(reverseString("javascript"));
