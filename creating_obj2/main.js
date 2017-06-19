function VehicleConstructor(name, wheels, passengerNumber, speed){

  var self = this;
  var distance_travelled = 0;
  var updateDistanceTravelled = function(){
    distance_travelled = distance_travelled +  self.speed;
  }

  this.name = name;
  this.wheels = wheels;
  this.passengerNumber = passengerNumber;
  this.speed = speed;
  this.makeNoise = function(noise){
    var noise = noise;
    console.log(noise)
  }
  this.move = function() {
    updateDistanceTravelled();
    this.makeNoise();
  }
  this.checkMiles = function () {
    console.log(distance_travelled);
  }
}
var bike = new VehicleConstructor("bike", 2, 1, 3);
console.log(bike.name);
bike.move();
bike.checkMiles();
