function towerOfHanoi(height, src, des, temp) {
  if (height >= 1) {
    towerOfHanoi(height - 1, src, temp, des);
    console.log('Move disk from Tower ', src, ' to Tower ', des);
    towerOfHanoi(height - 1, temp, des, src);
  }
  return;
}
towerOfHanoi(3, "A", "C", "B");