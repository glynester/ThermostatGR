'use strict';

function Thermostat() {
  this.MINTEMP = 10;
  this.MAXTEMP_WITH_PSM = 25;
  this.psm = "";
  this.MAXTEMP_WITHOUT_PSM = 32;
  this.RESET_TEMP = 20;
  this.usage = "";
  this.MEDIUM_USAGE_LIMIT = 18;
  this.HIGH_USAGE_LIMIT = 25;
  this.maxTemp = "";
}
Thermostat.prototype.turnOn = function() {
  this.temp = this.RESET_TEMP;
  this.psmOn();
}

Thermostat.prototype.turnUp = function() {
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
  this.psm = true;
  this.maxTemp = this.MAXTEMP_WITH_PSM;
}

Thermostat.prototype.psmOff = function() {
  this.psm = false;
  this.maxTemp = this.MAXTEMP_WITHOUT_PSM;
}

Thermostat.prototype.reset = function(){
  this.temp = this.RESET_TEMP;
}

Thermostat.prototype.getUsage = function(){
  if (this.temp<  this.MEDIUM_USAGE_LIMIT){
    this.usage ="low";
    // return "low";
  } else if (this.temp< this.HIGH_USAGE_LIMIT){
    this.usage ="medium";
    // return "medium";
  } else {
    this.usage ="high";
    // return "high";
  }
}
