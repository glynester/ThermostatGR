function Thermostat() {
  this.MINTEMP = 10;
  this.MAXTEMP_WITH_PSM = 25;
  this.psm = true;
  this.MAXTEMP_WITHOUT_PSM = 32;

}
Thermostat.prototype.turnOn = function() {
  this.temp = 20;
  this.psm = true;
}

Thermostat.prototype.turnUp = function() {
  console.log(this.MAXTEMP_WITH_PSM);
  if (this.psm && this.temp < this.MAXTEMP_WITH_PSM) {
  this.temp += 1;
} else if (!this.psm && this.temp < this.MAXTEMP_WITHOUT_PSM){
  this.temp += 1;
  }
}

Thermostat.prototype.turnDown = function() {
  if (this.temp>this.MINTEMP){
    this.temp -= 1;
  }
}
Thermostat.prototype.psmOn = function() {
  this.psm = true
}

Thermostat.prototype.psmOff = function() {
    this.psm = false
}
