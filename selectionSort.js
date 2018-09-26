function selectionSort(ip) {
  for (let i = 0; i < ip.length; i++) {
   let position = i;
    for (let j = i + 1; j < ip.length; j++) {
      if (ip[j] < ip[position]) {
        position = j
      }
    }
    if (position != i) {
     let temp = ip[position];
      ip[position] = ip[i];
      ip[i] = temp;
    }
  }
}
let myinput = [300,150,25,48,68,80,08,98,280];
console.log(selectionSort(myinput));
 
