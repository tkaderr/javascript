var x = [3,5,"Dojo","rocks","Michael","Sensei"]
for (index in x){
  console.log(index);
}

x.push(100);

var b = ["hello","world","javascript is fun"];
x.push(b);


var sum = 0;
for(var i = 1; i<=500; i++){
  sum += i;
}
console.log(sum);

sum = 0;
var arr1=[1,5,90,25,-3,0];
min = arr1[0];
for (index in arr1) {
  if (min > arr1[index]){
    min = arr1[index];
  }
  sum += arr1[index];
}
console.log(min);
console.log(sum/arr1.length);
