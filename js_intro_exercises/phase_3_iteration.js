Array.prototype.bubbleSort = function bubbleSort(){
  let sorted = false;

  while (!sorted){
    sorted = true;
    for (let left = 0; left < this.length; left++){
      if (this[left] > this[left + 1]){
        [this[left], this[left + 1]] = [this[left + 1], this[left]];
        sorted = false;
      }
    }
  }

  return this;
};

String.prototype.substrings = function substrings(){
  let subs = [];

  for (var i = 0; i < this.length; i++) {
    let j = i +1;
    this.substring(i, j); // <- this would give us 2 characters
    while (j < this.length) {
      subs.push(this.substring(i,j));
      j++;
    }

  }

  return subs;
};
