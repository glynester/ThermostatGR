function Thermostat() {
  var MINTEMP = 10;
}
Thermostat.prototype.turnOn = function() {
  this.temp = 20;
}

Thermostat.prototype.turnUp = function() {
  this.temp += 1;
}

Thermostat.prototype.turnDown = function() {
  if (this.temp>10){
    this.temp -= 1;
  }
}
