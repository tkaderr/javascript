//basic
function invoked(){
  console.log("I am running!");
}
invoked();

//basic
function multiplyByTen (x) {
  return x * 10
}

console.log(multiplyByTen(5));

//medium
function caller(x) {
  if (typeof(x) == "function") {
    x();
  }
}
x = invoked();
console.log(caller(x));
