$(document).ready(function(){
  thermostat = new Thermostat();
  thermostat.turnOn();
  $("#temperature").val(thermostat.temp);
  $("#increase_temp").click(function(){
    thermostat.turnUp();
    $("#temperature").val(thermostat.temp);
  })
  $("#decrease_temp").click(function(){
    thermostat.turnDown();
    $("#temperature").val(thermostat.temp);
  })




});
