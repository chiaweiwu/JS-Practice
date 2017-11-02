Array.prototype.uniq = function uniq(){
  let arr = [];
  this.forEach(function(el){
    if (!arr.includes(el)){
      arr.push(el);
    }
  });
  return arr;
};
