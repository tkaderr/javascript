// var ninja = "Libby";
// setTimeout(function(){
//   console.log(ninja);
// }, 2000);
// console.log(ninja);


// console.log("NOW:");
// console.log("Declaring and assigning variable 'ninja'.");
// var ninja = "Libby";
// setTimout(function(){
//   console.log("LATER");
//   console.log(ninja, "LATER");
// }, 2000);
// console.log("Printing ninja value");
// console.log(ninja, "NOW");

// console.log("NOW: ");
// console.log("Declaring and assigning variable 'ninja'.");
// var ninja = 'Libby';
//
// setTimeout( function myCallbackFunction(){
//   console.log("LATER: ")
//   console.log(ninja, "LATER"); }, 2000
// );
//
// console.log("Printing ninja value.");
// console.log(ninja, "NOW");

// function doSomething(possibleCallback) {
//   if (typeof(possibleCallback) === 'function'){
//     console.log('possibleCallback is a callback!');
//     possibleCallback(); //we can invoke the callback!
//   }
//   else {
//     console.log('possibleCallback: ', possibleCallback, ' is not a callback function.');
//   }
// }
// doSomething(function myCallback(){ console.log('yes, I am a callback!') });
// doSomething('string');

// function makePasta(pasta, makeSauce) {
//   console.log("Boiling water");
//   console.log("Putting " + pasta + " pasta in the water");
//   // create a variable for sauce!
//   var sauce = makeSauce();          // invoke makeSauce, our callback
//   console.log("Mixing sauce");
//   console.log("Pasta is done!");
//   return pasta + " Pasta with " + sauce + " sauce! Voila!";
// }
// function makePesto() {
//   console.log("Making Pesto");
//   return "pesto";
// }
// function makeAlfredo() {
//   console.log("Making Alfredo");
//   return "alfredo";
// }
//
//
// // we pass the whole makePesto recipe to makePasta!
// console.log(makePasta("Penne", makePesto));
//
//
// function printResult(doSomething) {
//  var result = doSomething();         // store the return value of the callback parameter
//  console.log(result);                // print the result!
// }
// printResult(function returnFive(){ return 5 })

function getStuffFromDatabase(resolve,reject){
    var data = "whee"
    setTimeout(function(){
      // if (typeof(callback) == 'function'){
        data = [{name:'Todd'},{name:'Michael'},{name:'Portia'}];
        resolve(data);
      // }
    }, 1000);
    //reject(); comment this line in and out!
    // return data;
}
function requestDataFromDatabase(){
  console.log('running');
  //creates promise
  var data = new Promise(function(resolve,reject){
    getStuffFromDatabase(resolve,reject); // kind of like a shiny callback
  });
  // if promise is successful (keeps me from putting all the logic in the callback)
  data.then(function(data){
    console.log(data, "ASynchronous");
    for (var i = 0; i < data.length; i ++){
      console.log(data[i].name);
    }
  });
  data.catch(function(){
    console.log('failure');
  })
  console.log('end');
}
requestDataFromDatabase();
