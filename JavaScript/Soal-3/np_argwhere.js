function dim(arr) {
    if (arr instanceof Array) {
      return [arr.length].concat(dim(arr[0]));
    } else {
      return [];
    }
}
function npArgwhere(arr) {
    const output = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        for (let k = 0; k < arr[i][j].length; k++) {
          if (arr[i][j][k] !== 0) {
            output.push([i, j, k]);
          }
        }
      }
    }
    return output;
  }
  
  const input = [  
    [
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 0],
    ],
    [
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 0],
    ],
    [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ],
  ];
  
  console.log(npArgwhere(input));
  