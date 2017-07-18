function Thermostat() {
}
Thermostat.prototype.turnOn = function() {
  this.temp = 20;
}

Thermostat.prototype.turnUp = function() {
  this.temp += 1;
}

Thermostat.protype.turnDown = function() {
  this.temp -= 1;
}
