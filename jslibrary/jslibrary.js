var _ = {
   map: function(param, callback) {
     var mapped = [];
     if(param instanceof Array){
       for(var i = 0; i < param.length; i++){
         mapped.push(callback(param[i]));
       }
     }else if(param instanceof Object){
      for(var key in param){
        mapped.push(callback(param[key]));
      }
     }
     return mapped;
   },
   reduce: function(arr, callback) {
     var sum = 0;
     for(var i = 0; i < arr.length; i++){
       sum = callback(sum, arr[i]);
     }
     return sum;
   },
   find: function(arr, callback) {
     for(var i = 0; i < arr.length; i++){
       var isEven = callback(arr[i]);
       if(isEven){
         return arr[i];
       }
     }
     return false;
   },
   filter: function(arr, callback) {
     var evenArray = [];
     for(var i = 0; i < arr.length; i++){
       var isEven = callback(arr[i]);
       if(isEven){
         evenArray.push(arr[i]);
       }
     }
     return evenArray;
   },
   reject: function(arr, callback) {
     var evenArray = [];
     for(var i = 0; i < arr.length; i++){
       var isEven = callback(arr[i]);
       if(!isEven){
         evenArray.push(arr[i]);
       }
     }
     return evenArray;
   }
 };
 var mapped = _.map([1,2,3], function(num){return num * 3;});
 console.log(mapped);
 var keyMapped = _.map({one: 10, two: 20, three: 30}, function(key){return key*3;});
 console.log(keyMapped);
 var reduced = _.reduce([1,2,3], function(sum,num){return sum + num;});
 console.log(reduced);
 var findNum = _.find([1,5,7,2], function(num){return num % 2 === 0;});
 console.log(findNum);
 var evenArr = _.filter([1,5,7,2,20,200], function(num){return num % 2 === 0;});
 console.log(evenArr);
 var notEvenArr = _.reject([1,5,7,2,20,200], function(num){return num % 2 === 0;});
 console.log(notEvenArr);
