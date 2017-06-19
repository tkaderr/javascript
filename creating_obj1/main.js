function VehicleConstructor(name, wheels, passengerNumber){
  var vehicle = {};

  vehicle.name = name;
  vehicle.wheels = wheels;
  vehicle.passengerNumber = passengerNumber;

  vehicle.makeNoise = function(noise){
    var noise = noise;
    console.log(noise)
  }

  return vehicle;
}


var bike = VehicleConstructor("bike", 2, 0);
bike.makeNoise = function(){
  console.log('ring, ring');
}

var sedan = VehicleConstructor("sedan", 4, 0);
sedan.makeNoise = function(){
  console.log('Honk Honk');
}

var bus = VehicleConstructor('bus',4, 0);
bus.pickPassengers = function(newPassengers){
  bus.passengerNumber += newPassengers;
}

console.log(bus.passengerNumber);
bus.pickPassengers(5);
console.log(bus.passengerNumber);
