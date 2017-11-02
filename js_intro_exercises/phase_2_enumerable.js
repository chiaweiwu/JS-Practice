Array.prototype.myEach = function myEach(callback){
  for (let i = 0; i < this.length; i++){

    callback(this[i]);
  }
};

Array.prototype.myMap = function myMap(callback){
  let newArr = [];
  this.myEach(el => newArr.push(callback(el)));
  return newArr;
};

Array.prototype.myReduce = function myReduce(callback,[initialValue]){
  let start = initialValue || this[0];


};
