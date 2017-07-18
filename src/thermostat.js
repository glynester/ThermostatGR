function Thermostat() {
}
Thermostat.prototype.turnOn = function() {
  this.temp = 20;
}

Thermostat.prototype.turnUp = function(){
  this.temp += 1;
}
