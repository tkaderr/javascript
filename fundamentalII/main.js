//part 1
var a;
var b;
var c;
a = function sumAll(x,y){
  var sum=0;
  for(var i = x; i <= y; i++){
    sum += i;
  }
  console.log(sum);
}

b = function findMin(x){
  var min = x[0];
  for (var i = 1; i < x.length; i++){
    if( min > x[i]){
      min = x[i];
    }
  }
  return min;
}

c = function findAvg(x){
  var sum = 0;
  for (var i = 0; i < x.length; i++){
    sum += x[i];
  }
  return sum/ x.length;
}

a(1,2);
console.log(b([1,2,3]));
console.log(c([1,2,3]));

//part 2
var cool = {
name: "Tahim",
x: function sumAll(x,y){
  var sum=0;
  for(var i = x; i <= y; i++){
    sum += i;
  }
  console.log(sum);
},

y: function findMin(x){
  var min = x[0];
  for (var i = 1; i < x.length; i++){
    if( min > x[i]){
      min = x[i];
    }
  }
  return min;
},

z: function findAvg(x){
  var sum = 0;
  for (var i = 0; i < x.length; i++){
    sum += x[i];
  }
  return sum/ x.length;
}
}

console.log(cool.x);
console.log(cool.y([1,2,3]));
console.log(cool.name);
