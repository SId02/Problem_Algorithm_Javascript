//Solution 1

function Integer(num) {
    let revInteger = num.toString().split('').reverse().join('');
    return parseInt(revInteger) * Math.sign(num);
}
console.log(Integer(81));
