Array.prototype.uniq = function uniq(){
  let arr = [];
  this.forEach(function(el){
    if (!arr.includes(el)){
      arr.push(el);
    }
  });
  return arr;
};

Array.prototype.twoSum = function twoSum(){
  let pairs = [];

  for(let i = 0; i < this.length; i++){
    let j = i + 1;

    while (j < this.length) {
      if (this[i] + this[j] === 0) {
        pairs.push([i, j]);
      }
      j++;
    }
  }

  return pairs;
};

Array.prototype.transpose = function transpose(){
  let grid = [];

  for(let i = 0; i < this.length; i++){
    let j = 0;

    let mini = [];
    while (j < this.length){
      mini.push(this[j][i]);
      j++;
    }
    grid.push(mini);


  }
  return grid;
};

// [[1,2,3],
//  [4,5,6],
//  [7,8,9]]
//
// WE WANT THIS:
//
// [[1,4,7],
//  [2,5,8],
//  [3,6,9]]
