function findBirdsIdMaxMin(arr) {
  let max = 0;
  let min = 100;
  let min_id = -1;
  let max_id = -1;
  let store = new Array(6).fill(0);

  for (const num of arr) {
    store[num]++;
    if (store[num] > max) {
      max = store[num];
      max_id = num;
    } else if (store[num] === max && num < max_id) {
      max_id = num;
    }
  }

  store = new Array(6).fill(0);
  for (const num of arr) {
    store[num]++;
    if (store[num] < min) {
      min = store[num];
      min_id = num;
    } else if (store[num] === min && num < min_id) {
      min_id = num;
    }
  }
  return `[${max_id},${min_id} ]`;
}

arr = [1, 2, 2, 4, 4, 4, 4, 5]; 
console.log(findBirdsIdMaxMin(arr));
