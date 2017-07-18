function Thermostat() {
  var MINTEMP = 10;
  var MAXTEMP_WITH_PSM = 25;
  var psm = true;
  var MAXTEMP_WITHOUT_PSM = 32;

}
Thermostat.prototype.turnOn = function() {
  this.temp = 20;
  this.psm = true;
}

Thermostat.prototype.turnUp = function() {
  if (this.psm == true && this.temp < this.MAXTEMP_WITH_PSM) {
  this.temp += 1;
} else if (this.psm == false && this.temp < this.MAXTEMP_WITHOUT_PSM){
  this.temp += 1;
  }
}

Thermostat.prototype.turnDown = function() {
  if (this.temp>10){
    this.temp -= 1;
  }
}
Thermostat.prototype.psmOn = function() {
  this.psm = true
}

Thermostat.prototype.psmOff = function() {
    this.psm = false
}
