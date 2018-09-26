// Solution 1

// function fact(n) {
//   if (n < 0)
//         return -1;
//   else if (n === 0)
//       return 1;
//   else {
//       return (n * fact(n - 1));
//   }
// }
// console.log(fact(5));

// Solution 2
function fact(n) {
  if (n === 0 || n === 1)
    return 1;
  for (var i = n - 1; i >= 1; i--) {
   n=i*n;
  }
  return n;
}console.log(fact(5));
